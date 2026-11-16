// ============================================================
// DHANVANTARI AYURVEDA CLINIC - ENHANCED JAVASCRIPT ENGINE
// Dedicated to Dr. Apkesha Patel (AYUSH Medical Officer, Govt. of Gujarat)
// Contact: +91 83476 75394 | Email: apexapatel316@gmail.com
// ============================================================

const DEFAULT_DOCTOR_DATA = {
  name: "Dr. Apkesha Patel",
  degree: "B.A.M.S., C.R.A.V. (Panchakarma)",
  title: "Ayurvedic Physician & Serving AYUSH Medical Officer (Govt. of Gujarat)",
  experience: "4-5 Years Active Clinical Experience in Govt. Primary Health Center (Currently Serving)",
  regNo: "GAC-A/24891 (Gujarat Board of Ayurvedic & Unani Systems of Medicine)",
  clinicName: "Dhanvantari Ayurveda & Panchakarma Clinic",
  address: "Shop 104-106, 1st Floor, Aarambh Medical Enclave, Opp. Civil Hospital Rd, Sector 7",
  city: "Gandhinagar, Gujarat - 382007",
  phone: "+91 83476 75394",
  whatsapp: "918347675394",
  email: "apexapatel316@gmail.com",
  inClinicFee: 500,
  onlineFee: 600,
  opdTimings: "Mon – Sat: 5:00 PM – 8:30 PM & Sun: 9:30 AM – 1:00 PM (Morning PHC Govt. Duties)",
  teleTimings: "Daily: 2:00 PM – 4:30 PM & 8:30 PM – 9:30 PM (Pan-India & Global Video Call)",
  aboutBio: "Dr. Apkesha Patel is a dedicated Ayurvedic Physician currently serving as an AYUSH Medical Officer under the Health and Family Welfare Department, Government of Gujarat. Having actively served for over 4 to 5 years at the government Primary Health Center (PHC) and diagnosed and treated more than 15,000 patients, she brings profound clinical diagnostic acumen, authentic Nadi Pariksha mastery, and evidence-backed classical Ayurvedic protocols to chronic ailments. Her practice bridges active frontline public health service with personalized holistic consultations, specializing in root-cause elimination (Hetu Viparita Chikitsa), individual Pathya-Apathya dietary therapy, and side-effect-free herbal remedies."
};

// State Store
let doctorData = { ...DEFAULT_DOCTOR_DATA };
let currentPrakritiStep = 0;
let prakritiAnswers = {};
let appointments = [];
let currentLang = 'en'; // 'en' or 'gu'

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  loadDoctorData();
  loadAppointments();
  renderDynamicDoctorData();
  initDateInput();
  initLucideIcons();
  setupEventListeners();
  renderTreatments('all');
  renderDinacharyaSchedule(6); // Default 6:00 AM wake up
});

// Load Doctor Data from LocalStorage
function loadDoctorData() {
  const saved = localStorage.getItem('ayur_doctor_data');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      parsed.name = DEFAULT_DOCTOR_DATA.name;
      parsed.phone = DEFAULT_DOCTOR_DATA.phone;
      parsed.whatsapp = DEFAULT_DOCTOR_DATA.whatsapp;
      parsed.email = DEFAULT_DOCTOR_DATA.email;
      parsed.title = DEFAULT_DOCTOR_DATA.title;
      parsed.experience = DEFAULT_DOCTOR_DATA.experience;
      doctorData = { ...DEFAULT_DOCTOR_DATA, ...parsed };
      localStorage.setItem('ayur_doctor_data', JSON.stringify(doctorData));
    } catch (e) {
      console.error("Error loading doctor data:", e);
    }
  }
}

function saveDoctorData() {
  localStorage.setItem('ayur_doctor_data', JSON.stringify(doctorData));
  renderDynamicDoctorData();
  showToast("Doctor details updated successfully!");
}

function loadAppointments() {
  const saved = localStorage.getItem('ayur_appointments');
  if (saved) {
    try {
      appointments = JSON.parse(saved);
    } catch (e) {
      console.error("Error loading appointments:", e);
    }
  }
  updateBookingsBadge();
}

function saveAppointments() {
  localStorage.setItem('ayur_appointments', JSON.stringify(appointments));
  updateBookingsBadge();
}

function updateBookingsBadge() {
  const badge = document.getElementById('myBookingsCount');
  if (badge) {
    const total = 50 + appointments.length;
    badge.textContent = `${total}+`;
  }
}

// Render Doctor details across DOM elements
function renderDynamicDoctorData() {
  const map = {
    'doc-name': doctorData.name,
    'doc-degree': doctorData.degree,
    'doc-title': doctorData.title,
    'doc-experience': doctorData.experience,
    'doc-regno': doctorData.regNo,
    'doc-clinic': doctorData.clinicName,
    'doc-address': doctorData.address,
    'doc-city': doctorData.city,
    'doc-phone': doctorData.phone,
    'doc-email': doctorData.email,
    'doc-inclinic-fee': `₹${doctorData.inClinicFee}`,
    'doc-online-fee': `₹${doctorData.onlineFee}`,
    'doc-opd-timings': doctorData.opdTimings,
    'doc-tele-timings': doctorData.teleTimings,
    'doc-bio': doctorData.aboutBio
  };

  Object.entries(map).forEach(([className, value]) => {
    document.querySelectorAll(`.${className}`).forEach(el => {
      el.textContent = value;
    });
  });

  document.querySelectorAll('.doc-initials').forEach(el => {
    el.textContent = "AP";
  });

  const waUrl = `https://wa.me/${doctorData.whatsapp}?text=${encodeURIComponent("Namaste Dr. Apkesha Patel, I would like to enquire about Ayurvedic consultation.")}`;
  
  const floatWa = document.getElementById('floatingWhatsApp');
  if (floatWa) floatWa.href = waUrl;
  const navWa = document.getElementById('navWhatsApp');
  if (navWa) navWa.href = waUrl;
  const heroWa = document.getElementById('heroWhatsApp');
  if (heroWa) heroWa.href = waUrl;
  const contactWa = document.getElementById('contactWhatsAppBtn');
  if (contactWa) contactWa.href = waUrl;

  document.querySelectorAll('.doc-phone-link').forEach(el => {
    el.href = `tel:+918347675394`;
  });

  document.querySelectorAll('.doc-email-link').forEach(el => {
    el.href = `mailto:${doctorData.email}`;
  });
}

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initDateInput() {
  const dateInput = document.getElementById('appointmentDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDateStr = tomorrow.toISOString().split('T')[0];
    dateInput.min = minDateStr;
    dateInput.value = minDateStr;
    updateAvailableSlots();
  }
}

function updateAvailableSlots() {
  const mode = document.querySelector('input[name="consultationMode"]:checked')?.value || 'clinic';
  const slotsContainer = document.getElementById('timeSlotsContainer');
  if (!slotsContainer) return;

  const inClinicSlots = [
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
    "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM"
  ];

  const onlineSlots = [
    "02:00 PM", "02:45 PM", "03:30 PM", "04:15 PM",
    "08:30 PM", "09:00 PM"
  ];

  const selectedSlots = mode === 'clinic' ? inClinicSlots : onlineSlots;

  slotsContainer.innerHTML = selectedSlots.map((slot, index) => `
    <label class="cursor-pointer group">
      <input type="radio" name="selectedTimeSlot" value="${slot}" class="sr-only peer" ${index === 0 ? 'checked' : ''} required>
      <div class="px-3.5 py-2.5 text-center text-xs sm:text-sm font-semibold rounded-xl border border-stone-200 bg-white text-stone-700 peer-checked:bg-emerald-800 peer-checked:text-white peer-checked:border-emerald-800 peer-checked:shadow-md transition-all duration-200 group-hover:border-emerald-600">
        ${slot}
      </div>
    </label>
  `).join('');

  const feeEl = document.getElementById('bookingModeFee');
  if (feeEl) {
    feeEl.textContent = mode === 'clinic' ? `₹${doctorData.inClinicFee}` : `₹${doctorData.onlineFee}`;
  }
  const modeTextEl = document.getElementById('bookingModeLabel');
  if (modeTextEl) {
    modeTextEl.textContent = mode === 'clinic' ? 'In-Clinic Evening OPD (Gandhinagar)' : 'Online Video Teleconsultation';
  }
}

// ============================================================
// BILINGUAL LANGUAGE SWITCHER (English / ગુજરાતી)
// ============================================================
const BILINGUAL_STRINGS = {
  heroTag: {
    en: "Serving AYUSH Medical Officer • Govt. Primary Health Center (PHC), Gujarat",
    gu: "સરકારી આયુષ મેડિકલ ઓફિસર • પ્રાથમિક આરોગ્ય કેન્દ્ર (PHC), ગુજરાત સરકાર"
  },
  heroHeading: {
    en: "Authentic Ayurvedic Healing with Active Public Health Mastery",
    gu: "પ્રાથમિક આરોગ્ય સેવાના અનુભવ સાથે શાસ્ત્રોક્ત આયુર્વેદિક ઉપચાર"
  },
  heroSub: {
    en: "Personalized, root-cause healing for chronic digestive issues, joint pain, skin disorders, and women’s hormonal health. Backed by 4 to 5 years of active, frontline clinical experience serving as an AYUSH Medical Officer at a Government Primary Health Center in Gujarat.",
    gu: "ગુજરાતના પ્રાથમિક આરોગ્ય કેન્દ્ર (PHC)માં ૪-૫ વર્ષના સરકારી સેવાના બહોળા અનુભવ અને ૧૫,૦૦૦+ દર્દીઓના સંતોષકારક ઈલાજ સાથે સાંધાના દુખાવા, પેટના રોગો, ચામડીની તકલીફો અને સ્ત્રી રોગોનો મૂળમાંથી કાયમી ઉકેલ."
  },
  bookBtn: {
    en: "Book Consultation",
    gu: "એપોઇન્ટમેન્ટ બુક કરો"
  },
  doshaBtn: {
    en: "Take Free Dosha Quiz",
    gu: "પ્રકૃતિ (દોષ) ટેસ્ટ આપો"
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'gu' : 'en';
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.innerHTML = currentLang === 'en' 
      ? `<span class="font-bold">ગુજરાતી</span>` 
      : `<span class="font-bold">English</span>`;
  }

  // Update dynamic translatable fields
  const heroTagEl = document.getElementById('transHeroTag');
  if (heroTagEl) heroTagEl.textContent = BILINGUAL_STRINGS.heroTag[currentLang];

  const heroHeadingEl = document.getElementById('transHeroHeading');
  if (heroHeadingEl) heroHeadingEl.textContent = BILINGUAL_STRINGS.heroHeading[currentLang];

  const heroSubEl = document.getElementById('transHeroSub');
  if (heroSubEl) heroSubEl.textContent = BILINGUAL_STRINGS.heroSub[currentLang];

  showToast(currentLang === 'gu' ? "ગુજરાતી ભાષા પસંદ કરેલ છે" : "Language switched to English");
}

// ============================================================
// TREATMENTS DATABASE & REAL-TIME SEARCH FILTER
// ============================================================
const TREATMENTS_DATA = [
  {
    id: "gut-health",
    category: "digestive",
    title: "Digestive & Gastrointestinal Care",
    sanskritName: "Agni & Annavaha Srotas Chikitsa",
    symptoms: ["Chronic Acidity & GERD", "IBS (Irritable Bowel)", "Chronic Constipation", "Bloating & Gas", "Fatty Liver & Sluggish Metabolism"],
    overview: "Ayurveda establishes that all diseases stem from Mandagni (impaired digestive fire) and accumulation of Ama (endotoxins). Our treatment restores natural enzyme secretion, repairs gut microbiota, and clears metabolic toxins safely.",
    classicalRemedies: ["Avipattikar Churna", "Kutajarishta", "Triphala Kwath", "Hingwashtak Churna", "Dadimashtak Kwath"],
    panchakarma: ["Virechana (Therapeutic Purgation)", "Basti (Medicated Enema for Vata Agni)", "Takradhara (Medicated buttermilk drip for IBS)"],
    dietNote: "Strict avoidance of Viruddha Ahara (incompatible foods), refrigerated foods, deep-fried snacks. Emphasizing fresh buttermilk (Takra), pomegranate, and cumin-coriander warm water.",
    badge: "Most Common"
  },
  {
    id: "joint-spine",
    category: "joint",
    title: "Joint, Spine & Chronic Pain Relief",
    sanskritName: "Sandhivata & Asthi-Majja Chikitsa",
    symptoms: ["Osteoarthritis (Knee pain)", "Rheumatoid Arthritis (Amavata)", "Cervical & Lumbar Spondylosis", "Sciatica (Gridhrasi)", "Frozen Shoulder"],
    overview: "Formulated using classical Vata-shamana principles combined with deep tissue anti-inflammatory herbs. Proven clinical protocols from Dr. Apkesha's extensive Gujarat PHC practice helping patients avoid knee/spine surgeries.",
    classicalRemedies: ["Yograj Guggulu", "Shallaki Rasayana", "Dashmoola Kwath", "Maha Narayana Taila", "Rasna Saptak Kwath"],
    panchakarma: ["Janu Basti (Knee oil pooling)", "Kati Basti (Lumbar spine treatment)", "Patra Pinda Sweda (Herbal leaf bolus fomentation)", "Greeva Basti"],
    dietNote: "Eliminate fermented, stale, and sour foods. Incorporate anti-inflammatory spices like turmeric (Haridra), dry ginger (Shunti), and pure cow's ghee.",
    badge: "Surgery Alternative"
  },
  {
    id: "skin-hair",
    category: "skin",
    title: "Chronic Skin Conditions & Hair Care",
    sanskritName: "Kushta & Raktashodhaka Chikitsa",
    symptoms: ["Psoriasis (Kitibha)", "Eczema & Atopic Dermatitis", "Chronic Urticaria (Sheetapitta)", "Stubborn Adult Acne", "Severe Hair Fall & Alopecia"],
    overview: "Skin disorders are manifestations of impure blood (Dushta Rakta) and Pitta-Kapha aggravation. Unlike topical steroid creams that merely suppress symptoms, Ayurveda purifies the blood from within.",
    classicalRemedies: ["Khadirarishta", "Mahatiktaka Ghrita", "Manjishtadi Kwath", "Kaishore Guggulu", "Neem Patra Swarasa"],
    panchakarma: ["Raktamokshana (Jalaukavacharana / Leech therapy)", "Virechana (Pitta detox)", "Nasya (Medicated nasal drops for hair fall)"],
    dietNote: "Zero intake of sour curd, pickles, fermented dough (Dhokla, Idli), jaggery with milk, and excessive salt.",
    badge: "Root Cause Cure"
  },
  {
    id: "womens-health",
    category: "women",
    title: "Women's Health & Hormonal Care",
    sanskritName: "Stri Roga & Prasuti Tantra Chikitsa",
    symptoms: ["PCOD / PCOS & Weight Gain", "Irregular / Painful Menstruation", "Thyroid Imbalance (Hypothyroid)", "Uterine Fibroids Support", "Perimenopause Syndrome"],
    overview: "Holistic menstrual and hormonal restoration using potent phyto-estrogenic and ovulatory herbs. Personalized guidance developed over 4-5 years of managing women's public healthcare at Gujarat PHCs.",
    classicalRemedies: ["Pushyanug Churna", "Kanchanar Guggulu", "Ashokarishta", "Lodhrasava", "Shatavari Ghritham"],
    panchakarma: ["Uttara Basti (Specialized intrauterine therapy)", "Matra Basti", "Shirodhara for neuro-hormonal axis"],
    dietNote: "Seed cycling, low glycemic index foods, avoiding refined sugars and artificial hormones; daily Surya Namaskar.",
    badge: "Hormone Reversal"
  },
  {
    id: "lifestyle-metabolic",
    category: "metabolic",
    title: "Diabetes, Hypertension & Lifestyle",
    sanskritName: "Prameha & Rasayana Chikitsa",
    symptoms: ["Type 2 Diabetes (Madhumeha)", "Mild to Moderate Hypertension", "High Cholesterol / Triglycerides", "Chronic Fatigue & Low Stamina", "Anxiety, Stress & Insomnia"],
    overview: "Preventive and restorative protocol focused on reversing metabolic syndrome, protecting vital organs (eyes, kidneys, nerves), and restoring tranquil sleep and mental peace.",
    classicalRemedies: ["Nisha-Amalaki Churna", "Chandraprabha Vati", "Sarpagandha Ghan Vati", "Brahmi Vati", "Ashwagandharishta"],
    panchakarma: ["Takradhara (Stress management)", "Shirodhara (Insomnia & Anxiety)", "Abhyanga with Medicated Oils"],
    dietNote: "Barley (Yava), Bitter Gourd (Karela), Fenugreek (Methi) seeds, Triphala water, with planned Dinacharya.",
    badge: "Preventive Care"
  },
  {
    id: "respiratory-immunity",
    category: "respiratory",
    title: "Respiratory Health & Chronic Allergies",
    sanskritName: "Pranavaha Srotas & Shwasa Chikitsa",
    symptoms: ["Bronchial Asthma (Tamaka Shwasa)", "Chronic Sinusitis & Migraine", "Allergic Rhinitis (Morning Sneezing)", "Frequent Cough & Cold", "Post-Viral Lung Recovery"],
    overview: "Clearing mucosal congestion from airways and building deep Ojas (innate immunity) so that weather changes and seasonal pollen no longer trigger acute allergic attacks.",
    classicalRemedies: ["Sitopaladi Churna", "Vasa Avaleha", "Talisadi Churna", "Kanthakari Avaleha", "Haridra Khanda"],
    panchakarma: ["Vamana (Therapeutic emesis for Kapha)", "Nasya (Pratimarsa & Marsha Nasya with Anu Taila)", "Dhoomapana"],
    dietNote: "Avoid ice-cold beverages, curd at night, banana, and heavy sweets. Drink warm boiled water infused with Tulsi and dry ginger.",
    badge: "Immunity Booster"
  }
];

let activeCategoryFilter = 'all';

function renderTreatments(filter = 'all', searchQuery = '') {
  const container = document.getElementById('treatmentsGrid');
  if (!container) return;

  activeCategoryFilter = filter;
  let filtered = filter === 'all' ? TREATMENTS_DATA : TREATMENTS_DATA.filter(t => t.category === filter);

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(t => 
      t.title.toLowerCase().includes(q) ||
      t.sanskritName.toLowerCase().includes(q) ||
      t.overview.toLowerCase().includes(q) ||
      t.symptoms.some(s => s.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-stone-500 bg-white rounded-3xl border border-stone-200 p-8">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto text-stone-300 mb-3"></i>
        <h4 class="font-bold text-base text-stone-800">No exact matches found for "${searchQuery}"</h4>
        <p class="text-xs text-stone-500 mt-1 max-w-md mx-auto">Ayurveda addresses hundreds of systemic conditions. You can directly consult Dr. Apkesha via WhatsApp for your symptoms.</p>
        <button onclick="document.getElementById('treatmentSearchInput').value=''; renderTreatments('all');" class="mt-4 px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-bold">
          View All Treatments
        </button>
      </div>
    `;
    initLucideIcons();
    return;
  }

  container.innerHTML = filtered.map(t => `
    <div class="glass-card-luxury rounded-3xl p-6 sm:p-7 shadow-luxury-sm border border-stone-200/90 flex flex-col justify-between card-hover-lift group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300">
            ${t.badge}
          </span>
          <span class="text-xs font-serif-ayur italic text-amber-800 font-medium">
            ${t.sanskritName}
          </span>
        </div>

        <h3 class="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors mb-2.5">
          ${t.title}
        </h3>

        <p class="text-xs sm:text-sm text-stone-600 mb-4 line-clamp-2 leading-relaxed">
          ${t.overview}
        </p>

        <div class="space-y-1.5 mb-5">
          <p class="text-[10px] uppercase tracking-wider font-bold text-stone-400">Clinical Focus Areas:</p>
          <div class="flex flex-wrap gap-1.5">
            ${t.symptoms.map(s => `
              <span class="text-xs px-2.5 py-1 bg-stone-50 rounded-lg text-stone-700 border border-stone-200">
                ${s}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
        <button onclick="openTreatmentModal('${t.id}')" class="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 transition-colors">
          <span>Clinical Protocol</span>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
        <button onclick="quickBookTreatment('${t.title.replace(/'/g, "\\'")}')" class="text-xs font-semibold px-4 py-2 rounded-xl bg-emerald-800 text-white hover:bg-emerald-900 shadow-sm transition-all">
          Book For This
        </button>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

function handleTreatmentSearch(e) {
  const query = e.target.value;
  renderTreatments(activeCategoryFilter, query);
}

// Open Treatment Modal
function openTreatmentModal(treatmentId) {
  const treatment = TREATMENTS_DATA.find(t => t.id === treatmentId);
  if (!treatment) return;

  const modal = document.getElementById('treatmentDetailModal');
  const modalContent = document.getElementById('treatmentModalBody');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="border-b border-stone-200 pb-4">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="text-xs font-bold px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-900">${treatment.badge}</span>
          <span class="text-xs font-serif-ayur italic text-amber-800">${treatment.sanskritName}</span>
        </div>
        <h2 class="text-2xl font-bold text-stone-900">${treatment.title}</h2>
        <p class="text-stone-600 text-sm mt-2 leading-relaxed">${treatment.overview}</p>
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">Key Clinical Indications</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${treatment.symptoms.map(s => `
            <div class="flex items-center gap-2 text-sm text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0"></i>
              <span>${s}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60">
        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
          <i data-lucide="leaf" class="w-4 h-4 text-amber-700"></i>
          Classical Ayurvedic Formulations & Kwathas
        </h4>
        <div class="flex flex-wrap gap-2">
          ${treatment.classicalRemedies.map(r => `
            <span class="text-xs font-semibold px-3 py-1 bg-white text-stone-800 rounded-lg border border-amber-200 shadow-2xs">
              ${r}
            </span>
          `).join('')}
        </div>
        <p class="text-[11px] text-amber-800/80 mt-2 italic">*Prescribed strictly per patient's Rogi-Roga Pariksha, Agni bala, and Tridosha assessment.</p>
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
          <i data-lucide="sparkles" class="w-4 h-4 text-emerald-700"></i>
          Panchakarma & Specialized External Therapies
        </h4>
        <div class="space-y-2">
          ${treatment.panchakarma.map(p => `
            <div class="text-xs sm:text-sm text-stone-700 flex items-start gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-700 mt-1.5 flex-shrink-0"></span>
              <span>${p}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200">
        <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-950 mb-1 flex items-center gap-1.5">
          <i data-lucide="utensils" class="w-4 h-4 text-emerald-800"></i>
          Dietary Rules (Pathya - Apathya)
        </h4>
        <p class="text-xs sm:text-sm text-stone-700 leading-relaxed">${treatment.dietNote}</p>
      </div>

      <div class="p-4 bg-stone-100 rounded-2xl flex items-start gap-3">
        <div class="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
          AP
        </div>
        <div>
          <h5 class="text-xs font-bold text-stone-900">Dr. Apkesha's Clinical Perspective:</h5>
          <p class="text-xs text-stone-600 mt-0.5 leading-relaxed">
            "In my ongoing 4 to 5 years as an AYUSH Medical Officer at the Primary Health Center in Gujarat, I have treated thousands of chronic cases where patients felt stuck on lifelong pills. With authentic classical Ayurveda, 85-90% patients achieve stable, drug-free remission when proper diet is combined with genuine herbs."
          </p>
        </div>
      </div>

      <div class="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
        <button onclick="closeTreatmentModal(); quickBookTreatment('${treatment.title.replace(/'/g, "\\'")}')" class="flex-1 py-3 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-center text-sm shadow-md transition-all">
          Book Consultation For This Condition
        </button>
        <button onclick="closeTreatmentModal()" class="py-3 px-5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium text-sm transition-all">
          Close
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  initLucideIcons();
}

function closeTreatmentModal() {
  const modal = document.getElementById('treatmentDetailModal');
  if (modal) modal.classList.add('hidden');
}

function quickBookTreatment(treatmentTitle) {
  const select = document.getElementById('healthConcern');
  if (select) {
    let matched = false;
    for (let opt of select.options) {
      if (opt.text.toLowerCase().includes(treatmentTitle.split(' ')[0].toLowerCase())) {
        select.value = opt.value;
        matched = true;
        break;
      }
    }
    if (!matched) select.value = "other";
  }

  const notes = document.getElementById('patientNotes');
  if (notes) {
    notes.value = `Enquiring specifically for: ${treatmentTitle}.`;
  }

  const section = document.getElementById('book-appointment');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============================================================
// FEATURE 1: INTERACTIVE AYURVEDIC SYMPTOM CHECKER & TRIAGE
// ============================================================
const SYMPTOM_DATABASE = [
  { id: "s1", label: "Frequent Heartburn, Burning in Chest & Acid Reflux", dosha: "Pitta", organ: "Annavaha Srotas (Stomach)", remedy: "Avipattikar Churna & Kamadudha Rasa", target: "gut-health" },
  { id: "s2", label: "Joint Stiffness in Morning, Knee Cracking & Dull Pain", dosha: "Vata", organ: "Asthi-Sandhi (Joints)", remedy: "Yograj Guggulu & Janu Basti", target: "joint-spine" },
  { id: "s3", label: "Severe Hair Fall, Premature Greying or Scalp Dandruff", dosha: "Pitta-Vata", organ: "Asthi Dhatu / Bhrajaka Pitta", remedy: "Nasya with Anu Taila & Bhringraj Rasayana", target: "skin-hair" },
  { id: "s4", label: "Irregular Menstrual Cycles, Cystic Acne & Weight Gain", dosha: "Kapha-Vata", organ: "Artavavaha Srotas", remedy: "Kanchanar Guggulu & Pushyanug Churna", target: "womens-health" },
  { id: "s5", label: "Chronic Constipation, Dry Hard Stools & Bloating", dosha: "Apana Vata", organ: "Pakwashaya (Colon)", remedy: "Haritaki & Panchasakar Churna with warm water", target: "gut-health" },
  { id: "s6", label: "Red Scaly Skin Patches, Itching & Flaking (Psoriasis/Eczema)", dosha: "Rakta-Pitta", organ: "Raktavaha Srotas & Rasa Dhatu", remedy: "Mahatiktaka Ghrita & Khadirarishta", target: "skin-hair" },
  { id: "s7", label: "High Blood Sugar, Excessive Thirst & Night Urination", dosha: "Kaphaja Prameha", organ: "Medovaha Srotas", remedy: "Nisha-Amalaki & Chandraprabha Vati", target: "lifestyle-metabolic" },
  { id: "s8", label: "Morning Sneezing, Sinus Congestion & Wheezing", dosha: "Kapha-Vata", organ: "Pranavaha Srotas (Airways)", remedy: "Sitopaladi Churna & Haridra Khanda", target: "respiratory-immunity" }
];

let selectedSymptoms = new Set();

function renderSymptomChecker() {
  const container = document.getElementById('symptomChipsContainer');
  if (!container) return;

  container.innerHTML = SYMPTOM_DATABASE.map(item => `
    <button type="button" onclick="toggleSymptom('${item.id}')" id="symptomBtn-${item.id}" class="text-left px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white hover:border-emerald-700 text-xs sm:text-sm font-medium text-stone-800 transition-all flex items-center justify-between gap-2 shadow-2xs">
      <span>${item.label}</span>
      <span class="w-4 h-4 rounded-full border border-stone-300 flex items-center justify-center flex-shrink-0 text-[10px]"></span>
    </button>
  `).join('');
}

function toggleSymptom(id) {
  const btn = document.getElementById(`symptomBtn-${id}`);
  if (!btn) return;

  if (selectedSymptoms.has(id)) {
    selectedSymptoms.delete(id);
    btn.classList.remove('bg-emerald-900', 'text-white', 'border-emerald-900');
    btn.classList.add('bg-white', 'text-stone-800', 'border-stone-200');
    btn.querySelector('span:last-child').innerHTML = '';
  } else {
    selectedSymptoms.add(id);
    btn.classList.add('bg-emerald-900', 'text-white', 'border-emerald-900');
    btn.classList.remove('bg-white', 'text-stone-800', 'border-stone-200');
    btn.querySelector('span:last-child').innerHTML = '✓';
  }

  evaluateSymptomAnalysis();
}

function evaluateSymptomAnalysis() {
  const resultContainer = document.getElementById('symptomTriageResult');
  if (!resultContainer) return;

  if (selectedSymptoms.size === 0) {
    resultContainer.innerHTML = `
      <div class="text-center py-6 text-stone-400">
        <i data-lucide="stethoscope" class="w-8 h-8 mx-auto text-stone-300 mb-2"></i>
        <p class="text-xs font-medium">Select one or more symptoms above to view instant Ayurvedic Root-Cause Analysis.</p>
      </div>
    `;
    initLucideIcons();
    return;
  }

  const selectedData = SYMPTOM_DATABASE.filter(item => selectedSymptoms.has(item.id));
  const doshas = [...new Set(selectedData.map(d => d.dosha))].join(' & ');
  const remedies = selectedData.map(d => d.remedy).slice(0, 3).join(', ');

  resultContainer.innerHTML = `
    <div class="bg-gradient-to-br from-emerald-950 via-[#0f382a] to-emerald-900 text-white p-5 rounded-2xl shadow-luxury-md space-y-4 animate-fadeIn">
      <div class="flex items-center justify-between pb-3 border-b border-white/20">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-amber-300">Ayurvedic Triage Assessment</span>
          <h4 class="text-base font-bold text-white mt-0.5">Primary Aggravated Dosha: ${doshas}</h4>
        </div>
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600 text-emerald-200">
          ${selectedSymptoms.size} Symptoms Identified
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="bg-white/10 p-3 rounded-xl border border-white/10">
          <span class="text-emerald-300 block font-bold text-[10px] uppercase">Pathological Channel (Srotas)</span>
          <p class="text-stone-200 mt-0.5">${selectedData.map(d => d.organ).join(', ')}</p>
        </div>
        <div class="bg-white/10 p-3 rounded-xl border border-white/10">
          <span class="text-amber-300 block font-bold text-[10px] uppercase">Classical Supportive Formulations</span>
          <p class="text-stone-200 mt-0.5">${remedies}</p>
        </div>
      </div>

      <div class="pt-1 flex flex-col sm:flex-row gap-2">
        <button onclick="bookWithSymptomTriage('${doshas}')" class="flex-1 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold text-xs uppercase tracking-wider transition-all shadow">
          Book Pulse Diagnosis with Dr. Apkesha for these Symptoms
        </button>
      </div>
    </div>
  `;
  initLucideIcons();
}

function bookWithSymptomTriage(doshas) {
  const selectedLabels = SYMPTOM_DATABASE.filter(item => selectedSymptoms.has(item.id)).map(i => i.label);
  const notes = document.getElementById('patientNotes');
  if (notes) {
    notes.value = `Symptom Triage (${doshas} imbalance): ${selectedLabels.join('; ')}. Seeking personalized herbal Chikitsa.`;
  }
  const section = document.getElementById('book-appointment');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// FEATURE 2: MEDICINE COURIER DELIVERY TIMELINE ESTIMATOR
// ============================================================
function estimateDeliveryTimeline() {
  const input = document.getElementById('deliveryPincodeInput');
  const resultEl = document.getElementById('deliveryEstimateResult');
  if (!input || !resultEl) return;

  const val = input.value.trim().toLowerCase();
  if (val.length < 3) {
    resultEl.innerHTML = `<span class="text-red-500 text-xs font-semibold">Please enter a valid Pincode or City name.</span>`;
    return;
  }

  // Calculate estimated days based on location
  let days = "2-3 Days";
  let locationLabel = "Express Dispatch across Gujarat";
  
  if (val.includes("ahmedabad") || val.includes("gandhinagar") || val.startsWith("380") || val.startsWith("382")) {
    days = "Same Day / Next Day Delivery";
    locationLabel = "Local Courier from Sector 7 Gandhinagar Clinic";
  } else if (val.startsWith("38") || val.startsWith("39") || val.includes("surat") || val.includes("vadodara") || val.includes("rajkot")) {
    days = "1 - 2 Business Days";
    locationLabel = "Gujarat Intra-State Express Dispatch";
  } else if (val.includes("london") || val.includes("uk") || val.includes("dubai") || val.includes("usa") || val.includes("canada")) {
    days = "5 - 7 Days via DHL Express";
    locationLabel = "International Registered Medicine Export with Phytosanitary Cleared Pack";
  } else {
    days = "3 - 4 Business Days";
    locationLabel = "Pan-India SpeedPost / BlueDart Express";
  }

  resultEl.innerHTML = `
    <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs space-y-1 animate-fadeIn">
      <div class="flex items-center justify-between text-emerald-950 font-bold">
        <span class="flex items-center gap-1.5"><i data-lucide="truck" class="w-4 h-4 text-emerald-700"></i> Delivery Estimate:</span>
        <span class="text-sm text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full font-bold">${days}</span>
      </div>
      <p class="text-stone-600 text-[11px]">${locationLabel}. Sourced fresh from GMP-certified pharmacy.</p>
    </div>
  `;
  initLucideIcons();
}

// ============================================================
// FEATURE 3: DAILY DINACHARYA (AYURVEDIC ROUTINE) GENERATOR
// ============================================================
function renderDinacharyaSchedule(wakeHour = 6) {
  const container = document.getElementById('dinacharyaContainer');
  if (!container) return;

  const schedule = [
    { time: `${wakeHour}:00 AM`, title: "Brahma Muhurta & Ushapan", desc: "Wake up before sunrise. Drink 1-2 glasses of lukewarm copper/earthen water. Evacuation of natural urges." },
    { time: `${wakeHour + 1}:00 AM`, title: "Dantadhavana & Abhyanga", desc: "Herbal tooth cleaning with Neem/Babul. 10-min self-massage with warm Sesame oil (Winter) or Coconut oil (Summer)." },
    { time: `${wakeHour + 2}:00 AM`, title: "Vyayama & Pranayama", desc: "30 mins of moderate Yoga/Surya Namaskar (up to half capacity). 10 mins Anulom-Vilom and Nadi Shodhana." },
    { time: `12:30 PM – 1:30 PM`, title: "Pradhana Bhojana (Peak Agni Lunch)", desc: "Main meal when the sun is at its highest and digestive fire is strongest. Include warm fresh meals with cow ghee." },
    { time: `04:30 PM – 5:00 PM`, title: "Herbal Refreshment", desc: "Warm CCF (Cumin, Coriander, Fennel) herbal tea. Avoid heavy fried tea-time snacks." },
    { time: `07:30 PM – 8:30 PM`, title: "Laghvaahar (Light Dinner)", desc: "Warm Khichdi, vegetable soup, or light Chapati. Finish dinner at least 2 hours before sleeping." },
    { time: `10:00 PM`, title: "Nidra (Restorative Sleep)", desc: "Padabhyanga (Foot massage with ghee/sesame oil). Disconnect from blue screens for deep melatonin synthesis." }
  ];

  container.innerHTML = schedule.map((item, idx) => `
    <div class="flex items-start gap-3.5 p-3.5 rounded-2xl border border-stone-200/80 bg-white hover:border-emerald-600 transition-all card-hover-lift">
      <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
        ${idx + 1}
      </div>
      <div class="space-y-0.5">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-emerald-800">${item.time}</span>
          <span class="text-xs font-bold text-stone-900">• ${item.title}</span>
        </div>
        <p class="text-xs text-stone-600 leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function handleWakeTimeChange(e) {
  const val = parseInt(e.target.value, 10);
  renderDinacharyaSchedule(val);
}

// ============================================================
// PRAKRITI (DOSHA) ASSESSMENT ENGINE
// ============================================================
const PRAKRITI_QUESTIONS = [
  {
    question: "1. What is your natural physical body frame and build?",
    options: [
      { text: "Lean, slender, prominent joints, hard to gain weight", dosha: "vata" },
      { text: "Medium, athletic, well-proportioned, moderate weight", dosha: "pitta" },
      { text: "Broad, heavy, sturdy, gains weight easily, holds water", dosha: "kapha" }
    ]
  },
  {
    question: "2. How would you describe your natural skin and hair?",
    options: [
      { text: "Dry, rough skin prone to chapping; dry, brittle or frizzy hair", dosha: "vata" },
      { text: "Warm, sensitive, prone to redness, moles or acne; fine, silky or early greying hair", dosha: "pitta" },
      { text: "Soft, smooth, oily, lustrous skin; thick, wavy, dark and lustrous hair", dosha: "kapha" }
    ]
  },
  {
    question: "3. How is your digestion, appetite, and bowel movement?",
    options: [
      { text: "Irregular, variable appetite; prone to gas, bloating, hard stools/constipation", dosha: "vata" },
      { text: "Strong, sharp hunger; can't skip meals; prone to acidity, loose/frequent stools", dosha: "pitta" },
      { text: "Slow but steady appetite; can easily skip meals; digestion takes hours; heavy feeling", dosha: "kapha" }
    ]
  },
  {
    question: "4. Which climate or weather causes you the most discomfort?",
    options: [
      { text: "Cold, windy, and dry weather makes me stiff and uncomfortable", dosha: "vata" },
      { text: "Hot, humid sun and warm weather makes me irritable and exhausted", dosha: "pitta" },
      { text: "Cold, damp, cloudy, and rainy weather makes me lethargic and congested", dosha: "kapha" }
    ]
  },
  {
    question: "5. How do you respond to stress, pressure, and mental load?",
    options: [
      { text: "I become anxious, worried, overthinking, restless, or sleepless", dosha: "vata" },
      { text: "I become impatient, irritable, critical, angry, or intense", dosha: "pitta" },
      { text: "I remain calm and withdrawn, but procrastinate and resist sudden change", dosha: "kapha" }
    ]
  },
  {
    question: "6. What is your normal sleep pattern?",
    options: [
      { text: "Light, easily disturbed, frequent waking, tends toward insomnia", dosha: "vata" },
      { text: "Moderate, sound 6-7 hours, can wake up energized or feeling warm", dosha: "pitta" },
      { text: "Deep, heavy, uninterrupted 8+ hours, difficulty getting out of bed in the morning", dosha: "kapha" }
    ]
  }
];

function renderPrakritiQuiz() {
  const container = document.getElementById('prakritiQuizCard');
  if (!container) return;

  const total = PRAKRITI_QUESTIONS.length;
  const current = PRAKRITI_QUESTIONS[currentPrakritiStep];

  container.innerHTML = `
    <div class="space-y-6">
      <div class="space-y-2">
        <div class="flex justify-between items-center text-xs font-bold text-emerald-900">
          <span>Question ${currentPrakritiStep + 1} of ${total}</span>
          <span>${Math.round(((currentPrakritiStep + 1) / total) * 100)}% Completed</span>
        </div>
        <div class="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden p-0.5">
          <div class="bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-600 h-full rounded-full transition-all duration-300" style="width: ${((currentPrakritiStep + 1) / total) * 100}%"></div>
        </div>
      </div>

      <div>
        <h4 class="text-base sm:text-lg font-bold text-stone-900 mb-4">${current.question}</h4>
        <div class="space-y-3">
          ${current.options.map((opt, idx) => `
            <button onclick="handlePrakritiSelect('${opt.dosha}')" class="w-full text-left p-4 rounded-2xl border border-stone-200 bg-white hover:border-emerald-700 hover:bg-emerald-50/50 hover:shadow-sm transition-all duration-200 flex items-start gap-3.5 group">
              <div class="w-6 h-6 rounded-full border border-stone-300 group-hover:border-emerald-700 flex items-center justify-center text-xs font-bold text-stone-600 group-hover:text-emerald-800 flex-shrink-0 mt-0.5">
                ${String.fromCharCode(65 + idx)}
              </div>
              <span class="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">${opt.text}</span>
            </button>
          `).join('')}
        </div>
      </div>

      ${currentPrakritiStep > 0 ? `
        <div class="pt-2">
          <button onclick="prevPrakritiStep()" class="text-xs font-semibold text-stone-500 hover:text-stone-800 flex items-center gap-1.5 transition-colors">
            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Previous Question
          </button>
        </div>
      ` : ''}
    </div>
  `;

  initLucideIcons();
}

function handlePrakritiSelect(dosha) {
  prakritiAnswers[currentPrakritiStep] = dosha;
  if (currentPrakritiStep < PRAKRITI_QUESTIONS.length - 1) {
    currentPrakritiStep++;
    renderPrakritiQuiz();
  } else {
    calculatePrakritiResult();
  }
}

function prevPrakritiStep() {
  if (currentPrakritiStep > 0) {
    currentPrakritiStep--;
    renderPrakritiQuiz();
  }
}

function resetPrakritiQuiz() {
  currentPrakritiStep = 0;
  prakritiAnswers = {};
  renderPrakritiQuiz();
}

function calculatePrakritiResult() {
  const container = document.getElementById('prakritiQuizCard');
  if (!container) return;

  let counts = { vata: 0, pitta: 0, kapha: 0 };
  Object.values(prakritiAnswers).forEach(d => {
    if (counts[d] !== undefined) counts[d]++;
  });

  const total = PRAKRITI_QUESTIONS.length;
  const vataPct = Math.round((counts.vata / total) * 100);
  const pittaPct = Math.round((counts.pitta / total) * 100);
  const kaphaPct = Math.round((counts.kapha / total) * 100);

  let dominant = 'vata';
  let maxCount = counts.vata;
  if (counts.pitta > maxCount) {
    dominant = 'pitta';
    maxCount = counts.pitta;
  }
  if (counts.kapha > maxCount) {
    dominant = 'kapha';
  }

  const profiles = {
    vata: {
      title: "Vata Pradhana (Air & Ether Element)",
      subtitle: "Dynamic, Creative, Light, and Prone to Nervous/Joint Instability",
      characteristics: "Your constitution is governed by movement, circulation, and nervous impulses. When balanced, you are creative, enthusiastic, and flexible. When aggravated by stress, cold dry winds, or irregular meals, you experience joint pain, dry skin, constipation, anxiety, and sleep disturbances.",
      keyAdvice: "Follow a warm, nourishing, grounding routine (Dinacharya). Prioritize warm cooked soups, healthy fats (Ghee, sesame oil), and avoid dry cold salads. Daily self-massage (Abhyanga) with warm sesame oil is deeply rejuvenating for you.",
      herbalRecom: "Ashwagandha, Dashmoola, Bala, Triphala with warm milk at night."
    },
    pitta: {
      title: "Pitta Pradhana (Fire & Water Element)",
      subtitle: "Sharp, Focused, Metabolic Power, and Prone to Acidity & Skin Inflammation",
      characteristics: "Your constitution is governed by digestion, metabolism, and transformation. When balanced, you possess high intellect, strong appetite, sharp leadership, and clear vision. When aggravated by heat, sour/spicy food, or overwork, you experience heartburn, skin rashes, migraines, and irritability.",
      keyAdvice: "Maintain cool, calming lifestyle habits. Avoid excessively spicy, fermented (pickles, curd at night, alcohol), and deep-fried foods. Embrace cooling coconut water, sweet fruits, coriander tea, and cooling pranayama like Sheetali.",
      herbalRecom: "Amla (Amalaki), Shatavari, Brahmi, Guduchi, Chandana."
    },
    kapha: {
      title: "Kapha Pradhana (Earth & Water Element)",
      subtitle: "Stable, Grounded, Enduring, and Prone to Sluggish Metabolism & Congestion",
      characteristics: "Your constitution is governed by structure, lubrication, and immune resilience. When balanced, you are compassionate, strong, patient, and emotionally steady. When aggravated by overeating, cold wet weather, or lack of exercise, you experience weight gain, sinus congestion, sluggish digestion, and lethargy.",
      keyAdvice: "Stay active, energized, and light! Avoid heavy, sweet, oily dairy foods and cold water. Incorporate brisk morning exercise, pungent warming spices (Ginger, Black Pepper, Cinnamon, Trikatu), and intermittent fasting or early light dinners.",
      herbalRecom: "Trikatu, Punarnava, Guggulu, Tulsi, Honey with warm water."
    }
  };

  const prof = profiles[dominant];

  container.innerHTML = `
    <div class="space-y-6 animate-fadeIn">
      <div class="text-center pb-4 border-b border-stone-200">
        <span class="text-xs uppercase font-bold tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
          Your Prakriti Assessment Result
        </span>
        <h3 class="text-2xl font-bold text-stone-900 mt-2">${prof.title}</h3>
        <p class="text-xs sm:text-sm text-stone-600 mt-1 italic">${prof.subtitle}</p>
      </div>

      <div class="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200">
        <div class="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">Your Tridosha Proportion:</div>
        
        <div>
          <div class="flex justify-between text-xs font-semibold text-stone-700 mb-1">
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Vata (Wind / Movement)</span>
            <span>${vataPct}%</span>
          </div>
          <div class="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
            <div class="bg-blue-500 h-full rounded-full transition-all duration-500" style="width: ${vataPct}%"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs font-semibold text-stone-700 mb-1">
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Pitta (Fire / Digestion)</span>
            <span>${pittaPct}%</span>
          </div>
          <div class="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
            <div class="bg-amber-500 h-full rounded-full transition-all duration-500" style="width: ${pittaPct}%"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs font-semibold text-stone-700 mb-1">
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> Kapha (Earth / Structure)</span>
            <span>${kaphaPct}%</span>
          </div>
          <div class="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
            <div class="bg-emerald-600 h-full rounded-full transition-all duration-500" style="width: ${kaphaPct}%"></div>
          </div>
        </div>
      </div>

      <div class="text-xs sm:text-sm text-stone-700 space-y-3 leading-relaxed">
        <p>${prof.characteristics}</p>
        <div class="bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
          <strong class="text-emerald-900 block font-bold mb-1">Recommended Diet & Daily Routine:</strong>
          <span>${prof.keyAdvice}</span>
        </div>
        <div class="bg-amber-50 p-4 rounded-2xl border border-amber-200">
          <strong class="text-amber-900 block font-bold mb-1">Supportive Classical Herbs:</strong>
          <span>${prof.herbalRecom}</span>
        </div>
      </div>

      <div class="p-5 bg-gradient-to-r from-emerald-950 via-[#0f382a] to-emerald-900 text-white rounded-2xl shadow-luxury-md space-y-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center flex-shrink-0">
            <i data-lucide="stethoscope" class="w-5 h-5 text-amber-300"></i>
          </div>
          <div>
            <h5 class="font-bold text-sm">Want an Authentic Nadi Pariksha (Pulse Diagnosis)?</h5>
            <p class="text-xs text-stone-200">While this quiz gives your Prakriti tendency, a live clinical consultation with Dr. Apkesha reveals your current Vikriti (dosha imbalance) and root ailments.</p>
          </div>
        </div>
        <button onclick="bookWithPrakritiResult('${prof.title.replace(/'/g, "\\'")}', '${dominant}')" class="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold text-xs uppercase tracking-wider transition-all shadow">
          Book Consultation with Dr. Apkesha for Detailed Pulse Diagnosis
        </button>
      </div>

      <div class="text-center pt-2">
        <button onclick="resetPrakritiQuiz()" class="text-xs text-stone-500 hover:text-stone-800 underline">
          Retake Assessment
        </button>
      </div>
    </div>
  `;

  initLucideIcons();
}

function bookWithPrakritiResult(prakritiTitle, dosha) {
  const notes = document.getElementById('patientNotes');
  if (notes) {
    notes.value = `Completed Prakriti Quiz: Dominant Dosha is ${dosha.toUpperCase()} (${prakritiTitle}). Seeking comprehensive Ayurvedic consultation and personalized diet plan.`;
  }
  const section = document.getElementById('book-appointment');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============================================================
// APPOINTMENT BOOKING FORM LOGIC
// ============================================================
function setupEventListeners() {
  document.querySelectorAll('input[name="consultationMode"]').forEach(radio => {
    radio.addEventListener('change', () => {
      updateAvailableSlots();
    });
  });

  const bookingForm = document.getElementById('appointmentForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleAppointmentSubmit);
  }

  document.querySelectorAll('.treatment-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.treatment-tab-btn').forEach(b => {
        b.classList.remove('cat-pill-active');
        b.classList.add('bg-white', 'text-stone-700', 'border-stone-200');
      });
      btn.classList.add('cat-pill-active');
      btn.classList.remove('bg-white', 'text-stone-700', 'border-stone-200');
      const cat = btn.getAttribute('data-category');
      renderTreatments(cat);
    });
  });

  const searchInput = document.getElementById('treatmentSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleTreatmentSearch);
  }

  const wakeTimeInput = document.getElementById('wakeTimeSelect');
  if (wakeTimeInput) {
    wakeTimeInput.addEventListener('change', handleWakeTimeChange);
  }

  renderPrakritiQuiz();
  renderSymptomChecker();

  const settingsForm = document.getElementById('doctorSettingsForm');
  if (settingsForm) {
    settingsForm.addEventListener('submit', handleDoctorSettingsSave);
  }
}

function handleAppointmentSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const mode = form.consultationMode.value;
  const patientName = form.patientName.value.trim();
  const patientPhone = form.patientPhone.value.trim();
  const patientEmail = form.patientEmail.value.trim();
  const patientAge = form.patientAge.value;
  const patientGender = form.patientGender.value;
  const patientCity = form.patientCity.value.trim();
  const healthConcern = form.healthConcern.value;
  const appointmentDate = form.appointmentDate.value;
  const selectedTimeSlot = form.selectedTimeSlot ? form.selectedTimeSlot.value : "05:00 PM";
  const notes = form.patientNotes ? form.patientNotes.value.trim() : "";

  if (!patientName || !patientPhone || !appointmentDate || !selectedTimeSlot) {
    showToast("Please fill all required fields.", true);
    return;
  }

  const appointmentId = "AYUR-" + Math.floor(100000 + Math.random() * 900000);
  const fee = mode === 'clinic' ? doctorData.inClinicFee : doctorData.onlineFee;

  const newAppointment = {
    id: appointmentId,
    timestamp: new Date().toISOString(),
    patientName,
    patientPhone,
    patientEmail,
    patientAge,
    patientGender,
    patientCity,
    healthConcern,
    appointmentDate,
    timeSlot: selectedTimeSlot,
    mode: mode === 'clinic' ? 'In-Clinic Evening OPD (Gandhinagar)' : 'Online Video Consultation',
    fee,
    notes,
    status: 'Confirmed'
  };

  appointments.unshift(newAppointment);
  saveAppointments();

  openBookingSuccessModal(newAppointment);

  form.reset();
  initDateInput();
}

function openBookingSuccessModal(appointment) {
  const modal = document.getElementById('bookingSuccessModal');
  const detailsContainer = document.getElementById('bookingSuccessDetails');
  if (!modal || !detailsContainer) return;

  const waMessage = `*New Ayurvedic Appointment Request*\n` +
    `---------------------------\n` +
    `*Doctor:* Dr. Apkesha Patel (AYUSH Medical Officer, Govt. of Gujarat - PHC)\n` +
    `*Booking ID:* ${appointment.id}\n` +
    `*Patient Name:* ${appointment.patientName}\n` +
    `*Age/Gender:* ${appointment.patientAge} / ${appointment.patientGender}\n` +
    `*Phone:* ${appointment.patientPhone}\n` +
    `*City:* ${appointment.patientCity}\n` +
    `*Mode:* ${appointment.mode}\n` +
    `*Date:* ${appointment.appointmentDate}\n` +
    `*Time Slot:* ${appointment.timeSlot}\n` +
    `*Chief Concern:* ${appointment.healthConcern}\n` +
    (appointment.notes ? `*Medical Notes:* ${appointment.notes}\n` : '') +
    `---------------------------\n` +
    `Kindly confirm the consultation slot. Thank you Dr. Apkesha!`;

  const waUrl = `https://wa.me/${doctorData.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  detailsContainer.innerHTML = `
    <div class="space-y-4 text-stone-700 text-xs sm:text-sm">
      <div class="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between">
        <div>
          <span class="text-[10px] uppercase tracking-wider text-emerald-800 font-bold block">Appointment ID</span>
          <span class="text-base font-bold text-stone-900">${appointment.id}</span>
        </div>
        <div class="text-right">
          <span class="text-[10px] uppercase tracking-wider text-emerald-800 font-bold block">Consultation Fee</span>
          <span class="text-base font-bold text-emerald-900">₹${appointment.fee}</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2.5 text-xs">
        <div class="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
          <span class="text-stone-400 block text-[10px] font-semibold uppercase">Patient Name</span>
          <strong class="text-stone-800 font-medium">${appointment.patientName} (${appointment.patientAge}y, ${appointment.patientGender})</strong>
        </div>
        <div class="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
          <span class="text-stone-400 block text-[10px] font-semibold uppercase">Consultation Mode</span>
          <strong class="text-stone-800 font-medium">${appointment.mode}</strong>
        </div>
        <div class="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
          <span class="text-stone-400 block text-[10px] font-semibold uppercase">Date & Time</span>
          <strong class="text-stone-800 font-medium">${appointment.appointmentDate} at ${appointment.timeSlot}</strong>
        </div>
        <div class="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
          <span class="text-stone-400 block text-[10px] font-semibold uppercase">Health Concern</span>
          <strong class="text-stone-800 font-medium capitalize">${appointment.healthConcern}</strong>
        </div>
      </div>

      ${appointment.mode.includes('In-Clinic') ? `
        <div class="p-3 bg-stone-100 rounded-xl text-xs space-y-1">
          <strong class="text-stone-900 flex items-center gap-1.5 font-semibold">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-700"></i> Evening Clinic Location:
          </strong>
          <p class="text-stone-600 pl-5">${doctorData.clinicName}, ${doctorData.address}, ${doctorData.city}</p>
        </div>
      ` : `
        <div class="p-3 bg-stone-100 rounded-xl text-xs space-y-1">
          <strong class="text-stone-900 flex items-center gap-1.5 font-semibold">
            <i data-lucide="video" class="w-3.5 h-3.5 text-emerald-700"></i> Teleconsultation Instructions:
          </strong>
          <p class="text-stone-600 pl-5">Doctor's clinical assistant will send a secure Google Meet / WhatsApp Video link to ${appointment.patientPhone} 15 minutes before the scheduled time.</p>
        </div>
      `}

      <!-- Direct WhatsApp Confirmation Button -->
      <div class="pt-2">
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          <span>Send Details to Dr. Apkesha on WhatsApp (+91 83476 75394)</span>
        </a>
        <p class="text-[11px] text-stone-500 text-center mt-1.5">Directly forwards your appointment summary to Dr. Apkesha's WhatsApp.</p>
      </div>

      <div class="flex gap-2 pt-2 border-t border-stone-200">
        <button onclick="downloadCalendarEvent('${appointment.id}')" class="flex-1 py-2.5 px-3 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all">
          <i data-lucide="calendar-plus" class="w-3.5 h-3.5"></i> Add to Calendar (.ics)
        </button>
        <button onclick="downloadAppointmentSlip('${appointment.id}')" class="flex-1 py-2.5 px-3 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all">
          <i data-lucide="download" class="w-3.5 h-3.5"></i> Download Slip
        </button>
        <button onclick="closeBookingSuccessModal()" class="py-2.5 px-5 rounded-xl bg-stone-800 text-white hover:bg-stone-900 text-xs font-semibold transition-all">
          Done
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  initLucideIcons();
}

function closeBookingSuccessModal() {
  const modal = document.getElementById('bookingSuccessModal');
  if (modal) modal.classList.add('hidden');
}

// Download .ics Calendar event
function downloadCalendarEvent(id) {
  const appt = appointments.find(a => a.id === id);
  if (!appt) return;

  const dtClean = appt.appointmentDate.replace(/-/g, '');
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Dhanvantari Ayurveda//Dr Apkesha Patel//EN
BEGIN:VEVENT
UID:${appt.id}@dhanvantariayurveda.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART;VALUE=DATE:${dtClean}
SUMMARY:Ayurvedic Consultation with Dr. Apkesha Patel (${appt.mode})
DESCRIPTION:Appointment ID: ${appt.id}\\nPatient: ${appt.patientName}\\nChief Concern: ${appt.healthConcern}\\nFee: Rs. ${appt.fee}\\nClinic Phone: +91 83476 75394
LOCATION:${appt.mode.includes('In-Clinic') ? 'Gandhinagar Clinic, Gujarat' : 'Online Video Call'}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Appointment_${appt.id}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadAppointmentSlip(id) {
  const appt = appointments.find(a => a.id === id);
  if (!appt) return;

  const content = `========================================================
DHANVANTARI AYURVEDIC CLINIC & PANCHAKARMA CENTER
Dr. Apkesha Patel (B.A.M.S., AYUSH Medical Officer, Govt. of Gujarat - PHC)
Gujarat Reg. No: ${doctorData.regNo}
Phone: ${doctorData.phone} | Email: ${doctorData.email}
Address: ${doctorData.address}, ${doctorData.city}
========================================================

PATIENT APPOINTMENT CONFIRMATION SLIP
--------------------------------------------------------
Booking ID      : ${appt.id}
Date Booked     : ${appt.timestamp}
Patient Name    : ${appt.patientName}
Age / Gender    : ${appt.patientAge} Years / ${appt.patientGender}
Phone           : ${appt.patientPhone}
City            : ${appt.patientCity}
Consultation    : ${appt.mode}
Appointment Date: ${appt.appointmentDate}
Time Slot       : ${appt.timeSlot}
Chief Concern   : ${appt.healthConcern}
Consultation Fee: ₹${appt.fee}
Medical Notes   : ${appt.notes || 'None provided'}

IMPORTANT PATIENT GUIDELINES:
1. For In-Clinic: Please arrive 10 minutes prior for preliminary Nadi Pariksha check.
2. For Online: Keep your past blood reports, scans, or allopathic prescriptions ready on WhatsApp.
3. Bring any current medications list with you.
4. "Swasthasya Swasthya Rakshanam, Aaturasya Vikara Prashamanam"
========================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Appointment_${appt.id}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ============================================================
// MY BOOKINGS MODAL
// ============================================================
function openMyBookingsModal() {
  const modal = document.getElementById('myBookingsModal');
  const list = document.getElementById('myBookingsList');
  if (!modal || !list) return;

  if (appointments.length === 0) {
    list.innerHTML = `
      <div class="text-center py-6 text-stone-500 space-y-2">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i>
          <span>50+ Successful Consultations Completed</span>
        </div>
        <p class="text-xs text-stone-600 mt-2">Book your next in-clinic or online video consultation above to see your live slip here.</p>
      </div>
    `;
  } else {
    list.innerHTML = appointments.map(a => `
      <div class="p-3.5 rounded-2xl border border-stone-200 bg-stone-50/70 hover:bg-white hover:border-emerald-600 transition-all space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-stone-900">${a.patientName}</span>
          <span class="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">${a.id}</span>
        </div>
        <div class="text-xs text-stone-600 flex flex-wrap gap-x-3 gap-y-1">
          <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3 text-emerald-700"></i> ${a.appointmentDate} (${a.timeSlot})</span>
          <span class="flex items-center gap-1"><i data-lucide="activity" class="w-3 h-3 text-emerald-700"></i> ${a.mode}</span>
        </div>
        <div class="flex items-center justify-between pt-1 border-t border-stone-200/60 text-[11px]">
          <span class="text-stone-500">Concern: <strong class="text-stone-700 capitalize">${a.healthConcern}</strong></span>
          <div class="flex gap-2">
            <button onclick="downloadCalendarEvent('${a.id}')" class="text-stone-600 hover:text-stone-900 font-semibold flex items-center gap-1">
              <i data-lucide="calendar" class="w-3 h-3"></i> Cal
            </button>
            <button onclick="downloadAppointmentSlip('${a.id}')" class="text-emerald-800 hover:text-emerald-950 font-semibold flex items-center gap-1">
              <i data-lucide="download" class="w-3 h-3"></i> Slip
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  modal.classList.remove('hidden');
  initLucideIcons();
}

function closeMyBookingsModal() {
  const modal = document.getElementById('myBookingsModal');
  if (modal) modal.classList.add('hidden');
}

// ============================================================
// DOCTOR PROFILE CUSTOMIZER (Settings Modal)
// ============================================================
function openDoctorSettingsModal() {
  const modal = document.getElementById('doctorSettingsModal');
  if (!modal) return;

  const form = document.getElementById('doctorSettingsForm');
  if (form) {
    form.docName.value = doctorData.name;
    form.docDegree.value = doctorData.degree;
    form.docRegNo.value = doctorData.regNo;
    form.docClinicName.value = doctorData.clinicName;
    form.docAddress.value = doctorData.address;
    form.docCity.value = doctorData.city;
    form.docPhone.value = doctorData.phone;
    form.docWhatsapp.value = doctorData.whatsapp;
    form.docEmail.value = doctorData.email;
    form.docInClinicFee.value = doctorData.inClinicFee;
    form.docOnlineFee.value = doctorData.onlineFee;
    form.docBio.value = doctorData.aboutBio;
  }

  modal.classList.remove('hidden');
}

function closeDoctorSettingsModal() {
  const modal = document.getElementById('doctorSettingsModal');
  if (modal) modal.classList.add('hidden');
}

function handleDoctorSettingsSave(e) {
  e.preventDefault();
  const form = e.target;

  doctorData.name = form.docName.value.trim() || DEFAULT_DOCTOR_DATA.name;
  doctorData.degree = form.docDegree.value.trim() || DEFAULT_DOCTOR_DATA.degree;
  doctorData.regNo = form.docRegNo.value.trim() || DEFAULT_DOCTOR_DATA.regNo;
  doctorData.clinicName = form.docClinicName.value.trim() || DEFAULT_DOCTOR_DATA.clinicName;
  doctorData.address = form.docAddress.value.trim() || DEFAULT_DOCTOR_DATA.address;
  doctorData.city = form.docCity.value.trim() || DEFAULT_DOCTOR_DATA.city;
  doctorData.phone = form.docPhone.value.trim() || DEFAULT_DOCTOR_DATA.phone;
  doctorData.whatsapp = form.docWhatsapp.value.replace(/[^0-9]/g, '') || DEFAULT_DOCTOR_DATA.whatsapp;
  doctorData.email = form.docEmail.value.trim() || DEFAULT_DOCTOR_DATA.email;
  doctorData.inClinicFee = Number(form.docInClinicFee.value) || DEFAULT_DOCTOR_DATA.inClinicFee;
  doctorData.onlineFee = Number(form.docOnlineFee.value) || DEFAULT_DOCTOR_DATA.onlineFee;
  doctorData.aboutBio = form.docBio.value.trim() || DEFAULT_DOCTOR_DATA.aboutBio;

  saveDoctorData();
  closeDoctorSettingsModal();
}

function resetDoctorSettingsToDefault() {
  if (confirm("Reset doctor details to initial default settings?")) {
    doctorData = { ...DEFAULT_DOCTOR_DATA };
    saveDoctorData();
    openDoctorSettingsModal();
  }
}

// ============================================================
// MOBILE MENU & TOAST NOTIFICATION
// ============================================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenuDrawer');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function showToast(message, isError = false) {
  const toast = document.getElementById('globalToast');
  if (!toast) return;

  toast.innerHTML = `
    <div class="flex items-center gap-2 text-xs sm:text-sm font-semibold">
      <i data-lucide="${isError ? 'alert-circle' : 'check-circle-2'}" class="w-4 h-4 ${isError ? 'text-red-400' : 'text-emerald-400'}"></i>
      <span>${message}</span>
    </div>
  `;

  toast.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl shadow-2xl text-white transition-all duration-300 ${
    isError ? 'bg-red-900 border border-red-700' : 'bg-emerald-950 border border-emerald-700'
  }`;

  toast.classList.remove('hidden', 'opacity-0');
  toast.classList.add('opacity-100');
  initLucideIcons();

  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 3500);
}

function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  if (!answer) return;

  const isHidden = answer.classList.contains('hidden');
  if (isHidden) {
    answer.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  } else {
    answer.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
  }
}
