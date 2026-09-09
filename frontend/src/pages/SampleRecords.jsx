import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileStack, 
  CheckCircle2, 
  AlertTriangle, 
  UploadCloud, 
  Download, 
  Eye, 
  Layers, 
  ExternalLink,
  Languages,
  Calendar,
  MapPin,
  Tag,
  ShieldCheck,
  Sparkles,
  X
} from 'lucide-react';

const SampleRecords = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('digitized'); // 'digitized' | 'undigitized'
  const [selectedImage, setSelectedImage] = useState(null);

  // 1. Five Official Government Digitized Baseline Records
  const digitizedRecords = [
    {
      id: 'dig-1',
      title: 'Andhra Pradesh Deed (తెలుగు)',
      state: 'Andhra Pradesh',
      language: 'Telugu',
      docType: 'Sale Deed (అమ్మకపు దస్తావేజు)',
      stampNumber: 'DU 478965',
      date: '2023-07-18',
      ownerName: 'Mutyala Narasimhulu (ముత్యాల నరసింహులు)',
      fatherName: 'Mutyala Subbarayudu (ముత్యాల సుబ్బారాయుడు)',
      surveyNumber: '224/2B',
      khataNumber: '578',
      area: '3.15 Acres (మూడు ఎకరాలు పదిహేను సెంట్లు)',
      village: 'Velagapudi',
      tehsilMandal: 'Eluru',
      district: 'West Godavari',
      status: 'Present in Government Database',
      confidenceBadge: '94.0% Comparison Confidence',
      imageUrl: '/prototype_samples/ANDHRA_PRADESH_01/sample.jpg',
      description: 'Official registered cadastral sale deed matching the Central Land Registry baseline records with 94%+ comparison accuracy.'
    },
    {
      id: 'dig-2',
      title: 'Gujarat Deed (ગુજરાતી)',
      state: 'Gujarat',
      language: 'Gujarati',
      docType: 'Agreement / Deed (સમજૂતી લેખપત્ર)',
      stampNumber: 'GJ 398765',
      date: '2024-01-05',
      ownerName: 'Devansh Kanubhai Patel (દેવાંશ કનુભાઈ પટેલ)',
      fatherName: 'Kanubhai Patel',
      surveyNumber: '123/4',
      khataNumber: 'Plot 45',
      area: '120.0 Sq. Meters',
      village: 'Athwa',
      tehsilMandal: 'Kamrej',
      district: 'Surat',
      status: 'Present in Government Database',
      confidenceBadge: '94.2% Comparison Confidence',
      imageUrl: '/prototype_samples/GUJARAT_01/sample.jpg',
      description: 'Registered urban property deed with verified cadastral boundaries and cross-compared property extent.'
    },
    {
      id: 'dig-3',
      title: 'Maharashtra Deed (मराठी)',
      state: 'Maharashtra',
      language: 'Marathi',
      docType: 'Sale Deed (विक्रीपत्र)',
      stampNumber: 'MA 812345',
      date: '2024-06-01',
      ownerName: 'Amol Ashok Deshmukh (अमोल अशोक देशमुख)',
      fatherName: 'Ashok Deshmukh',
      surveyNumber: 'Gat / Survey 123',
      khataNumber: 'Plot 101',
      area: '1000.0 Sq. Meters',
      village: 'Talmavale',
      tehsilMandal: 'Karad',
      district: 'Satara',
      status: 'Present in Government Database',
      confidenceBadge: '93.8% Comparison Confidence',
      imageUrl: '/prototype_samples/MAHARASHTRA_01/sample.jpg',
      description: 'Official revenue document cross-verified with Satara district cadastral registry records.'
    },
    {
      id: 'dig-4',
      title: 'Karnataka Deed (ಕನ್ನಡ)',
      state: 'Karnataka',
      language: 'Kannada',
      docType: 'Sale Deed (ವಿಕ್ರಯ ಪತ್ರ)',
      stampNumber: 'KA 684512',
      date: '2024-04-20',
      ownerName: 'Ravindra Hegde (ರವೀಂದ್ರ ಹೆಗಡೆ)',
      fatherName: 'Hegde',
      surveyNumber: 'Site 123/4',
      khataNumber: '4567',
      area: '2400.0 Sq. Feet',
      village: 'Jayanagar',
      tehsilMandal: 'Bengaluru South',
      district: 'Bengaluru',
      status: 'Present in Government Database',
      confidenceBadge: '94.5% Comparison Confidence',
      imageUrl: '/prototype_samples/KARNATAKA_01/sample.jpg',
      description: 'Central urban land registry deed cross-referenced with BBMP and Bengaluru South revenue databases.'
    },
    {
      id: 'dig-5',
      title: 'Uttar Pradesh Record (हिन्दी)',
      state: 'Uttar Pradesh',
      language: 'Hindi',
      docType: 'Sale Deed / Khatauni (विक्रय पत्र)',
      stampNumber: 'AP 896512',
      date: '2024-04-12',
      ownerName: 'Ramkishor Yadav (रामकिशोर यादव)',
      fatherName: 'Badri Prasad Yadav',
      surveyNumber: 'Khasra 89/2',
      khataNumber: 'Khata 275',
      area: '0.860 Hectares (कृषि सिंचित)',
      village: 'Dharampur',
      tehsilMandal: 'Sahjanwa',
      district: 'Gorakhpur',
      status: 'Present in Government Database',
      confidenceBadge: '94.0% Comparison Confidence',
      imageUrl: '/prototype_samples/UTTAR_PRADESH_01/sample.jpg',
      description: 'UP Revenue Board digitized agricultural record validated against central Bhulekh cadastral baseline.'
    }
  ];

  // 2. Four Un-digitized Legacy Deeds (NOT in Government Database)
  const undigitizedRecords = [
    {
      id: 'undig-1',
      title: 'Telangana Deed (తెలుగు)',
      state: 'Telangana',
      language: 'Telugu',
      docType: 'Sale Deed (అమ్మకపు దస్తావేజు)',
      stampNumber: 'CJ 475829',
      date: '2024-03-15',
      ownerName: 'Komaripati Venkateswara Rao (కొమరిపాటి వెంకటేశ్వరరావు)',
      fatherName: 'Komaripati Narayana Rao (కొమరిపాటి నారాయణరావు)',
      surveyNumber: '216/2',
      khataNumber: 'Not Applicable',
      area: '3.00 Acres (ఎకరాలు)',
      village: 'Naivad',
      tehsilMandal: 'Naivad',
      district: 'Nizamabad',
      status: 'Not Found in Government Database',
      confidenceBadge: 'N/A (Un-digitized Record)',
      imageUrl: '',
      description: 'Historical un-digitized deed. When uploaded, AI extracts all 19 fields for first-time officer digital onboarding with N/A comparison confidence.'
    },
    {
      id: 'undig-2',
      title: 'Gujarat Deed (ગુજરાતી)',
      state: 'Gujarat',
      language: 'Gujarati',
      docType: 'Rights Document (હક્કપત્રક / હકુચકુ દાખલપત્ર)',
      stampNumber: 'GJ 361245',
      date: '2024-04-04',
      ownerName: 'Hiteshbhai Amrutlal Patel (હિતેશભાઈ અમૃતલાલ પટેલ)',
      fatherName: 'Amrutlal Patel',
      surveyNumber: '145/2',
      khataNumber: 'Paya No. 412',
      area: '2.50 Hectares (હેક્ટર)',
      village: 'Moti Sarju (મોટી સરજૂ)',
      tehsilMandal: 'Kamotra (કામોત્રા)',
      district: 'Surat (સુરત)',
      status: 'Not Found in Government Database',
      confidenceBadge: 'N/A (Un-digitized Record)',
      imageUrl: '',
      description: 'Legacy physical revenue record requiring digital conversion and officer review. No prior government baseline exists.'
    },
    {
      id: 'undig-3',
      title: 'Tamil Nadu Deed (தமிழ்)',
      state: 'Tamil Nadu',
      language: 'Tamil',
      docType: 'Sale Deed (விற்பனைப் பத்திரம் உத்தரவு)',
      stampNumber: 'TN 685214',
      date: '2024-05-15',
      ownerName: 'Arun Kumar (திரு. அருண் குமார்)',
      fatherName: 'Ramasamy (திரு. ராமசாமி)',
      surveyNumber: '123/4 (Old: 456/2)',
      khataNumber: 'Not Applicable',
      area: '2400 Sq. Feet (சதுர அடி)',
      village: 'Maniyadam (மணியிடம்)',
      tehsilMandal: 'Salem (சேலம்)',
      district: 'Salem (சேலம்)',
      status: 'Not Found in Government Database',
      confidenceBadge: 'N/A (Un-digitized Record)',
      imageUrl: '',
      description: 'Historical non-judicial deed presented for digital verification. Displayed as un-digitized with N/A confidence score.'
    },
    {
      id: 'undig-4',
      title: 'Uttar Pradesh Deed (हिन्दी)',
      state: 'Uttar Pradesh',
      language: 'Hindi',
      docType: 'Sale Deed (भूमि विवरण एवं विक्रय विवरण)',
      stampNumber: 'BK 125678',
      date: '2023-09-28',
      ownerName: 'Mohan Lal Sharma (श्री मोहन लाल शर्मा)',
      fatherName: 'Harishchandra Sharma (श्री हरिश्चंद्र शर्मा)',
      surveyNumber: 'Khasra 145/1',
      khataNumber: 'Khata 312',
      area: '1.250 Hectares (हेक्टेयर)',
      village: 'Nagla Veeru (नगला वीरू)',
      tehsilMandal: 'Kol (कोल)',
      district: 'Aligarh (अलीगढ़)',
      status: 'Not Found in Government Database',
      confidenceBadge: 'N/A (Un-digitized Record)',
      imageUrl: '',
      description: 'Legacy paper deed pending first-time cadastral ledger entry into the state land records portal.'
    }
  ];

  const currentList = activeTab === 'digitized' ? digitizedRecords : undigitizedRecords;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="p-3 bg-slate-900 text-white rounded-xl shadow-xs shrink-0">
            <FileStack size={26} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-slate-900">
                Sample Cadastral Records
              </h1>
              <span className="bg-slate-100 text-slate-700 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border border-slate-200">
                Benchmark Repository
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
              Explore sample non-judicial deeds across Indic languages. Choose between <strong>Digitized Records</strong> (already verified in government database with 94%+ comparison accuracy) and <strong>Undigitized Records</strong> (legacy historical deeds for first-time onboarding with N/A comparison confidence).
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate('/upload')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center gap-2 shadow-xs transition cursor-pointer self-start md:self-auto shrink-0"
        >
          <UploadCloud size={16} />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Module Selector Tabs */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-xs">
        <button
          onClick={() => setActiveTab('digitized')}
          className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'digitized'
              ? 'bg-white text-emerald-800 shadow-sm border border-emerald-200 ring-1 ring-emerald-500/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <CheckCircle2 size={16} className={activeTab === 'digitized' ? 'text-emerald-600' : 'text-slate-400'} />
          <span className="text-sm">Digitized Records</span>
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
            activeTab === 'digitized' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-slate-200 text-slate-600'
          }`}>
            {digitizedRecords.length} Official Baselines
          </span>
        </button>

        <button
          onClick={() => setActiveTab('undigitized')}
          className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'undigitized'
              ? 'bg-white text-amber-900 shadow-sm border border-amber-300 ring-1 ring-amber-500/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <AlertTriangle size={16} className={activeTab === 'undigitized' ? 'text-amber-600' : 'text-slate-400'} />
          <span className="text-sm">Undigitized Records</span>
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
            activeTab === 'undigitized' ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-slate-200 text-slate-600'
          }`}>
            {undigitizedRecords.length} Legacy Deeds
          </span>
        </button>
      </div>

      {/* Overview Card for the Active Module */}
      {activeTab === 'digitized' ? (
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-600 text-white rounded-lg shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-emerald-950">
                Government Central Database: 5 Official Verified Records
              </h4>
              <p className="text-[11px] text-emerald-800 font-medium mt-0.5">
                These documents are registered in the government cadastral registry. When uploaded, the AI cross-compares every attribute with the central record and displays high confidence scores (94%+ comparison accuracy).
              </p>
            </div>
          </div>
          <span className="text-[10px] font-extrabold bg-emerald-200/70 text-emerald-900 px-3 py-1 rounded-full border border-emerald-300 shrink-0">
            AUTO CROSS-COMPARISON ACTIVE
          </span>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-300 p-4 rounded-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-600 text-white rounded-lg shrink-0">
              <AlertTriangle size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-amber-950">
                Un-digitized Legacy Deeds: 4 Historical Non-Judicial Records
              </h4>
              <p className="text-[11px] text-amber-900 font-medium mt-0.5">
                These records are not present in the government central database. When uploaded, the AI extracts all 19 canonical fields for first-time onboarding with <strong>N/A comparison confidence</strong>.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-extrabold bg-amber-200/70 text-amber-950 px-3 py-1 rounded-full border border-amber-400 shrink-0">
            UN-DIGITIZED RECORD • N/A CONFIDENCE
          </span>
        </div>
      )}

      {/* Grid of Sample Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentList.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-200"
          >
            {/* Top Bar with State & Status Badge */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-800">{item.state}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-200 text-slate-700">
                  {item.language}
                </span>
              </div>
              
              {activeTab === 'digitized' ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <CheckCircle2 size={11} className="text-emerald-600" />
                  94.0%
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-300">
                  <AlertTriangle size={11} className="text-rose-600" />
                  N/A (Un-digitized)
                </span>
              )}
            </div>

            {/* Document Thumbnail / Image Preview Area */}
            <div className="p-4 bg-slate-900/5 relative group flex items-center justify-center min-h-[220px] max-h-[260px] overflow-hidden">
              {item.imageUrl ? (
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="max-h-56 max-w-full object-contain rounded-lg shadow-xs border border-gray-200 transition-transform group-hover:scale-102"
                />
              ) : (
                <div className="w-full h-48 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center p-4 text-center bg-white/70">
                  <div className="p-3 bg-amber-50 text-amber-700 rounded-full mb-2">
                    <FileStack size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Document Image Ready</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Upload image or view extracted details below</span>
                </div>
              )}

              {/* Hover overlay button to view image in full modal */}
              {item.imageUrl && (
                <button
                  onClick={() => setSelectedImage(item.imageUrl)}
                  className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold backdrop-blur-xs cursor-pointer"
                >
                  <Eye size={16} />
                  <span>Inspect Document</span>
                </button>
              )}
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 space-y-3.5">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Cadastral Details List */}
              <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div>
                  <span className="text-slate-400 font-bold uppercase text-[9px]">Pattadar / Owner</span>
                  <div className="font-bold text-slate-800 truncate" title={item.ownerName}>
                    {item.ownerName}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 font-bold uppercase text-[9px]">Survey / Khasra No</span>
                  <div className="font-bold text-indigo-700 truncate">
                    {item.surveyNumber}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 font-bold uppercase text-[9px]">Area / Extent</span>
                  <div className="font-semibold text-slate-700 truncate">
                    {item.area}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 font-bold uppercase text-[9px]">Stamp / Reg No</span>
                  <div className="font-semibold text-slate-700 truncate">
                    {item.stampNumber}
                  </div>
                </div>

                <div className="col-span-2">
                  <span className="text-slate-400 font-bold uppercase text-[9px]">Location</span>
                  <div className="font-semibold text-slate-700 truncate">
                    {item.village}, {item.tehsilMandal}, {item.district}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-gray-100 bg-slate-50/50 flex items-center justify-between gap-2">
              <button
                onClick={() => navigate('/upload')}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs"
              >
                <UploadCloud size={14} />
                <span>Test in Upload</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-slate-700 flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-slate-50">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Document Scan Preview
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-gray-200 transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6 bg-slate-900/5 overflow-auto flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt="Document Preview" 
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-md border border-gray-300 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleRecords;
