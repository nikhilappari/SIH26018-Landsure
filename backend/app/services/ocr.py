import os
import pytesseract
from PIL import Image
import logging
import requests

logger = logging.getLogger(__name__)

# Dynamic OCR Mapping - populated when custom sample records are registered
DEMO_OCR_MAPPING = {}

def run_online_ocr(file_path: str, language: str = "English") -> str:
    """
    Sends the image to the free OCR.space API using OCREngine 2 (supporting Indic scripts and auto-detection).
    Returns the parsed text or None if the request fails.
    """
    url = "https://api.ocr.space/parse/image"
    
    try:
        logger.info(f"Uploading {file_path} to OCR.space online API with OCREngine 2 (multilingual)...")
        with open(file_path, 'rb') as f:
            response = requests.post(
                url,
                files={'file': f},
                data={
                    'apikey': 'helloworld',
                    'language': 'auto',
                    'OCREngine': '2',
                    'isOverlayRequired': False
                },
                timeout=25
            )
        result = response.json()
        if result.get("OCRExitCode") == 1:
            parsed_results = result.get("ParsedResults", [])
            if parsed_results:
                text = parsed_results[0].get("ParsedText", "").strip()
                logger.info("Online OCR Space API successfully extracted text.")
                return text
        logger.warning(f"OCR.space API returned error: {result.get('ErrorMessage')}")
    except Exception as e:
        logger.warning(f"Failed to connect to OCR.space API: {str(e)}")
    return None

def run_ocr(file_path: str, language: str = "English") -> dict:
    """
    Runs Tesseract OCR on the image. Falls back to:
    1. Pre-defined mock texts for known demo files.
    2. OCR.space online API if Tesseract is not installed locally.
    3. Simulated mock land record text if both offline and local Tesseract is missing.
    """
    filename = os.path.basename(file_path)
    
    # Real Local OCR Flow
    try:
        lang_codes = {
            "English": "eng",
            "Telugu": "tel+eng",
            "Hindi": "hin+eng",
            "Tamil": "tam+eng",
            "Kannada": "kan+eng",
            "Bengali": "ben+eng",
            "Gujarati": "guj+eng"
        }
        lang_code = lang_codes.get(language, "eng")
            
        img = Image.open(file_path)
        ocr_text = pytesseract.image_to_string(img, lang=lang_code)
        
        try:
            data = pytesseract.image_to_data(img, lang=lang_code, output_type=pytesseract.Output.DICT)
            confidences = [int(c) for c in data['conf'] if int(c) != -1]
            avg_conf = sum(confidences) / len(confidences) if confidences else 85.0
        except Exception:
            avg_conf = 85.0

        return {
            "text": ocr_text.strip(),
            "confidence": round(avg_conf, 1),
            "engine": f"Tesseract-OCR ({lang_code})"
        }
        
    except Exception as e:
        logger.warning(f"Local Tesseract OCR failed: {str(e)}. Trying free online OCR API fallback...")
        
        # 1st Fallback: Free Online OCR Space API
        online_text = run_online_ocr(file_path, language)
        if online_text:
            return {
                "text": online_text,
                "confidence": 88.0,
                "engine": "OCR.space Online API"
            }
            
        # 2nd Fallback: Empty text indicating failure
        logger.warning("Online OCR fallback failed or offline. Returning empty text for human review.")
        return {
            "text": "",
            "confidence": 0.0,
            "engine": "Failed"
        }
