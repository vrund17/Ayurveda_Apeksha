// ============================================================
// DR. APKESHA PATEL - AYURVEDIC HEALTHCARE PERSONAL BRAND ENGINE
// BAMS | 4–5 Years Professional Healthcare Experience
// Ex-AYUSH Medical Officer (Govt. Primary Health Centre, Gujarat)
// Practice: Online Consultations & Offline (Lunawada, Mahisagar, Gujarat 389230)
// Contact: +91 83476 75394 | Email: apexapatel316@gmail.com
// ============================================================

const DEFAULT_DOCTOR_DATA = {
  name: "Dr. Apkesha Patel",
  degree: "BAMS – Bachelor of Ayurvedic Medicine and Surgery",
  title: "Ayurvedic Physician | Ex-AYUSH Medical Officer (Govt. Primary Health Centre, Gujarat)",
  experience: "4–5 Years of Professional Healthcare Experience",
  background: "Previously served as an AYUSH Medical Officer at a Government Primary Health Centre (PHC) in Gujarat",
  regNo: "GAC Registered [Gujarat Ayurvedic Board Reg: Available on Request / GAC-XXXX]",
  clinicName: "Dr. Apkesha Patel Ayurvedic Consultation Clinic",
  address: "Lunawada, Mahisagar, Gujarat 389230",
  city: "Lunawada, Mahisagar, Gujarat - 389230",
  phone: "+91 83476 75394",
  whatsapp: "918347675394",
  email: "apexapatel316@gmail.com",
  inClinicFee: 500,
  onlineFee: 600,
  opdTimings: "Mon – Sat: 5:00 PM – 8:30 PM & Sun: 9:30 AM – 1:00 PM (By Prior Appointment)",
  teleTimings: "Daily: 2:00 PM – 4:30 PM & 8:30 PM – 9:30 PM (Pan-India & Worldwide Video Call)",
  aboutBio: "Dr. Apkesha Patel is an experienced Ayurvedic physician (BAMS) with 4–5 years of dedicated professional healthcare experience, including foundational clinical service as an AYUSH Medical Officer at a Government Primary Health Centre (PHC) in Gujarat. Her practice combines authentic classical Ayurvedic principles (Hetu Viparita Chikitsa, Prakriti evaluation, and Pathya-Apathya nutritional guidance) with modern clinical acumen to provide root-cause relief for chronic disorders. Fluent in Gujarati, Hindi, and English, she offers both convenient online consultations for patients worldwide and in-person consultations in Lunawada, Mahisagar, Gujarat."
};

// ============================================================
// MULTILINGUAL TRANSLATION DICTIONARY (EN, GU, HI)
// ============================================================
const I18N = {
  en: {
    langName: "English",
    topNotice: "Ex-AYUSH Medical Officer • Govt. Primary Health Centre (PHC), Gujarat • 4–5 Years Healthcare Experience",
    navAbout: "About Doctor",
    navServices: "Services",
    navOnline: "Online OPD",
    navOffline: "Clinic Visit",
    navFaq: "FAQ",
    navContact: "Contact",
    btnBookNow: "Book Consultation",
    btnWhatsApp: "WhatsApp",
    myBookingsLabel: "My Requests",
    navHome: "Home",
    navOnline: "Online Consultation",
    navOffline: "In-Person Clinic",
    navPrivacy: "Privacy Policy",
    navDisclaimer: "Medical Disclaimer",
    
    // Hero
    heroBadge: "4–5 Years of Professional Healthcare Experience",
    heroHeading: "Rediscover Holistic Well-being Through Ayurveda",
    heroDesc: "Personalised Ayurvedic healthcare guidance from an experienced Ayurvedic physician, combining traditional knowledge with a patient-focused approach.",
    heroGovtTag: "Previously served as an AYUSH Medical Officer at a Government Primary Health Centre in Gujarat.",
    heroBtnBook: "Book a Consultation",
    heroBtnMeet: "Meet Your Doctor",
    heroStat1Val: "4–5 Yrs",
    heroStat1Lbl: "Healthcare Experience",
    heroStat2Val: "Govt. PHC",
    heroStat2Lbl: "Ex-AYUSH Medical Officer",
    heroStat3Val: "BAMS",
    heroStat3Lbl: "Ayurvedic Medicine & Surgery",
    heroStat4Val: "Global & Local",
    heroStat4Lbl: "Online & Lunawada Clinic",

    // Doctor Intro
    introBadge: "Meet Your Doctor",
    introHeading: "Empathetic, Root-Cause Healthcare Grounded in Classical Ayurveda",
    introDegree: "BAMS – Bachelor of Ayurvedic Medicine and Surgery",
    introExp: "4–5 Years Professional Healthcare Experience",
    introGovt: "Former AYUSH Medical Officer, Government Primary Health Centre (PHC), Gujarat",
    introBio1: "Dr. Apkesha Patel is an experienced Ayurvedic physician dedicated to providing patient-centered, root-cause healing. Having served as an AYUSH Medical Officer at a Government Primary Health Centre in Gujarat, she brings hands-on clinical acumen from treating a wide demographic of patients with diverse acute and chronic ailments.",
    introBio2: "Her healthcare philosophy treats the patient, not just the symptom. She formulates individualised therapeutic strategies incorporating classical Shastriya formulations, daily routine realignment (Dinacharya), and personalised dietary modifications (Pathya-Apathya).",
    introBtnStory: "Read My Story",

    // Services
    servicesBadge: "Consultation Services",
    servicesHeading: "Personalised Ayurvedic Consultations",
    servicesSub: "Ethical, individualised healthcare guidance tailored to your unique Prakriti (constitution) and health history.",
    
    // Why Consult
    whyBadge: "Why Choose Dr. Apkesha",
    whyHeading: "Genuine Clinical Strengths You Can Rely On",
    whySub: "Our practice is built on transparency, rigorous medical ethics, and authentic Ayurvedic science.",
    why1Title: "4–5 Years Healthcare Experience",
    why1Desc: "Solid clinical tenure treating thousands of patients across primary and specialized healthcare setups.",
    why2Title: "Government PHC Background",
    why2Desc: "Grassroots public healthcare service as an AYUSH Medical Officer in Gujarat, providing deep diagnostic acumen.",
    why3Title: "Recognised BAMS Qualification",
    why3Desc: "Degree in Bachelor of Ayurvedic Medicine & Surgery with comprehensive training in classical herbal pharmacology.",
    why4Title: "Individualised Consultations",
    why4Desc: "No generic pre-packaged kits. Every patient receives a customised lifestyle, dietary, and herbal prescription.",
    why5Title: "Patient-Focused Approach",
    why5Desc: "Empathetic listening, clear explanations of root causes, and compassionate ongoing clinical guidance.",
    why6Title: "Trilingual Clear Communication",
    why6Desc: "Comfortably consult in Gujarati, Hindi, or English so you and your family feel completely understood.",

    // Modes
    modesBadge: "Consultation Modes",
    modesHeading: "Convenient Online & In-Person Consultations",
    modesSub: "Choose the consultation setting that best suits your lifestyle and location.",
    onlineTitle: "Online Consultation",
    onlineSub: "Convenient remote healthcare from anywhere in the world",
    onlineStep1: "Submit appointment request with your preferred time slot",
    onlineStep2: "Receive confirmation via WhatsApp or phone call",
    onlineStep3: "Join a high-definition 1-on-1 video or voice consultation",
    onlineStep4: "Receive digital prescription & dietary guidance via WhatsApp/Email",
    onlineBtn: "Request Online Consultation",
    offlineTitle: "In-Person Consultation",
    offlineSub: "Direct clinical pulse diagnosis in Lunawada, Gujarat",
    offlineLoc: "Lunawada, Mahisagar, Gujarat 389230",
    offlineTiming: "Evening Hours & Sundays (By Prior Appointment)",
    offlineNote: "Complete physical examination & personalized pulse examination (Nadi Pariksha)",
    offlineBtn: "Request In-Person Consultation",

    // How It Works
    howBadge: "Process",
    howHeading: "How Your Consultation Works",
    howSub: "A simple four-step pathway to authentic Ayurvedic guidance.",
    how1Title: "1. Choose Consultation Type",
    how1Desc: "Select Online Video Consultation or In-Person visit at Lunawada, Gujarat.",
    how2Title: "2. Request an Appointment",
    how2Desc: "Fill in your details, preferred date, time slot, and health concern in our booking form.",
    how3Title: "3. Appointment Confirmation",
    how3Desc: "Dr. Apkesha's desk reviews the schedule and confirms your exact slot via WhatsApp/call.",
    how4Title: "4. Attend Consultation",
    how4Desc: "Discuss your health in detail and receive an evidence-informed Ayurvedic protocol.",

    // Patient Feedback
    feedbackBadge: "Patient Care",
    feedbackHeading: "Patient Feedback & Experience",
    feedbackDesc: "We value honest patient relationships. Having treated thousands of patients during government PHC service and private practice, Dr. Apkesha is committed to ethical medical guidance without unverified miracle claims.",
    feedbackCard1: "“Compassionate listening and very practical dietary advice that actually fit into our family's daily cooking routine.”",
    feedbackCard1Author: "Patient feedback from Mahisagar district",
    feedbackCard2: "“Clear explanations of why my digestion was sluggish. The herbal formulations provided steady, side-effect-free relief.”",
    feedbackCard2Author: "Online consultation patient from Gujarat",
    feedbackCard3: "“Honest and transparent consultation. Dr. Apkesha takes time to understand the root cause rather than rushing.”",
    feedbackCard3Author: "In-person consultation patient",
    feedbackInvite: "Are you a patient of Dr. Apkesha Patel? We welcome your authentic feedback.",

    // FAQ
    faqBadge: "Frequently Asked Questions",
    faqHeading: "Clear Answers to Common Questions",
    faqSub: "Everything you need to know about booking, consultations, and our medical practice.",

    // Final CTA
    ctaHeading: "Take the First Step Towards Better Health",
    ctaSub: "Begin your journey to balanced vitality with experienced Ayurvedic healthcare guidance.",
    ctaBtnBook: "Book a Consultation",
    ctaBtnWhatsApp: "Contact on WhatsApp",

    // Booking Form
    formBadge: "Appointment Request System",
    formHeading: "Request a Consultation with Dr. Apkesha Patel",
    formSub: "Submit your details below. Note: This submits an appointment request; your slot will be personally confirmed by Dr. Apkesha via WhatsApp or phone call.",
    formModeTitle: "Step 1: Choose Consultation Type *",
    formModeOnline: "Online Video / Audio Consultation",
    formModeOnlineFee: "₹600 • Video/Audio Link Provided",
    formModeOffline: "In-Person Consultation (Lunawada)",
    formModeOfflineFee: "₹500 • Lunawada, Mahisagar Clinic",
    formStep2: "Step 2: Preferred Date *",
    formStep3: "Step 3: Primary Health Concern *",
    formStep4: "Step 4: Preferred Time Slot *",
    formStep5: "Step 5: Patient Information",
    lblName: "Patient Full Name *",
    lblPhone: "Mobile Number (WhatsApp Preferred) *",
    lblEmail: "Email Address (Optional)",
    lblLang: "Preferred Consultation Language *",
    lblReason: "Brief Reason for Consultation (Optional)",
    btnSubmitRequest: "Submit Appointment Request",
    formNotice: "Medical Privacy Notice: Information submitted here is strictly confidential and used exclusively for your consultation schedule.",

    // Confirmation Modal
    confirmBadge: "REQUEST SUBMITTED • PENDING DOCTOR CONFIRMATION",
    confirmTitle: "Appointment Request Received",
    confirmDesc: "Thank you for reaching out. Please note that this is an appointment request. Dr. Apkesha Patel will personally review her schedule and confirm your appointment via WhatsApp or phone call.",
    confirmSlotRef: "Request Reference:",
    confirmNextStep: "What happens next?",
    confirmStepText: "You will receive a confirmation message on WhatsApp with your exact consultation link or clinic arrival instructions.",
    confirmBtnWhatsApp: "Send Request Details on WhatsApp",
    confirmBtnClose: "Close",

    // Legal
    disclaimerTitle: "Medical Disclaimer & Compliance Notice",
    disclaimerClose: "Close Disclaimer",
    privacyTitle: "Patient Privacy & Confidentiality Policy",
    privacyClose: "Close Policy"
  },

  gu: {
    langName: "ગુજરાતી",
    topNotice: "પૂર્વ આયુષ મેડિકલ ઓફિસર • સરકારી પ્રાથમિક આરોગ્ય કેન્દ્ર (PHC), ગુજરાત • ૪–૫ વર્ષનો આરોગ્ય સેવા અનુભવ",
    navAbout: "પરિચય",
    navServices: "સેવાઓ",
    navOnline: "ઓનલાઇન OPD",
    navOffline: "રૂબરૂ ક્લિનિક",
    navFaq: "પ્રશ્નોત્તરી",
    navContact: "સંપર્ક",
    btnBookNow: "પરામર્શ બુક કરો",
    btnWhatsApp: "વોટ્સએપ",
    myBookingsLabel: "મારી વિનંતીઓ",
    navHome: "હોમ",
    navOnline: "ઓનલાઇન પરામર્શ",
    navOffline: "રૂબરૂ ક્લિનિક",
    navPrivacy: "પ્રાઇવસી પોલિસી",
    navDisclaimer: "તબીબી ડિસ્ક્લેમર",

    // Hero
    heroBadge: "૪–૫ વર્ષનો પ્રોફેશનલ આરોગ્ય સેવા અનુભવ",
    heroHeading: "આયુર્વેદ દ્વારા સર્વાંગી સ્વાસ્થ્યની પુનઃપ્રાપ્તિ",
    heroDesc: "અનુભવી આયુર્વેદિક ચિકિત્સક દ્વારા પરંપરાગત શાસ્ત્રીય જ્ઞાન અને દર્દી-કેન્દ્રિત અભિગમ સાથે વ્યક્તિગત આરોગ્ય માર્ગદર્શન.",
    heroGovtTag: "ગુજરાતના સરકારી પ્રાથમિક આરોગ્ય કેન્દ્ર (PHC) ખાતે પૂર્વ આયુષ મેડિકલ ઓફિસર તરીકે સેવા આપી ચૂક્યા છે.",
    heroBtnBook: "પરામર્શ બુક કરો",
    heroBtnMeet: "ડૉક્ટરને મળો",
    heroStat1Val: "૪–૫ વર્ષ",
    heroStat1Lbl: "આરોગ્ય સેવા અનુભવ",
    heroStat2Val: "સરકારી PHC",
    heroStat2Lbl: "પૂર્વ આયુષ મેડિકલ ઓફિસર",
    heroStat3Val: "BAMS",
    heroStat3Lbl: "આયુર્વેદિક મેડિસિન & સર્જરી",
    heroStat4Val: "ગુજરાત & વિશ્વભરમાં",
    heroStat4Lbl: "ઓનલાઇન અને લુણાવાડા ક્લિનિક",

    // Doctor Intro
    introBadge: "ડૉક્ટરનો પરિચય",
    introHeading: "શાસ્ત્રીય આયુર્વેદ પર આધારિત દર્દી-કેન્દ્રિત અને મૂળ-કારણ સારવાર",
    introDegree: "BAMS – બેચલર ઓફ આયુર્વેદિક મેડિસિન એન્ડ સર્જરી",
    introExp: "૪–૫ વર્ષનો પ્રોફેશનલ આરોગ્ય સેવા અનુભવ",
    introGovt: "પૂર્વ આયુષ મેડિકલ ઓફિસર, સરકારી પ્રાથમિક આરોગ્ય કેન્દ્ર (PHC), ગુજરાત",
    introBio1: "ડૉ. અપેક્ષા પટેલ એક સમર્પિત આયુર્વેદિક ચિકિત્સક છે, જે દર્દીના રોગના મૂળ કારણને શોધીને સચોટ સારવાર આપવા માટે પ્રતિબદ્ધ છે. ગુજરાતના સરકારી પ્રાથમિક આરોગ્ય કેન્દ્ર (PHC) ખાતે આયુષ મેડિકલ ઓફિસર તરીકે હજારો દર્દીઓને સફળતાપૂર્વક તપાસ્યા બાદ તેઓ ઊંડો ક્લિનિકલ અનુભવ ધરાવે છે.",
    introBio2: "તેમનો ચિકિત્સા સિદ્ધાંત માત્ર લક્ષણોને દબાવવાને બદલે દર્દીની પ્રકૃતિ, પાચનશક્તિ (અગ્નિ), દૈનિક દિનચર્યા અને પથ્ય-અપથ્ય (આહાર નિયમો) પર ધ્યાન કેન્દ્રિત કરીને કાયમી સ્વાસ્થ્ય પ્રદાન કરવાનો છે.",
    introBtnStory: "સંપૂર્ણ જીવનયાત્રા વાંચો",

    // Services
    servicesBadge: "પરામર્શ સેવાઓ",
    servicesHeading: "વ્યક્તિગત આયુર્વેદિક પરામર્શ સેવાઓ",
    servicesSub: "તમારી વિશિષ્ટ પ્રકૃતિ અને શારીરિક સ્થિતિ અનુસાર પ્રામાણિક અને શાસ્ત્રીય આરોગ્ય માર્ગદર્શન.",

    // Why Consult
    whyBadge: "શા માટે સંપર્ક કરવો",
    whyHeading: "વિશ્વાસપાત્ર ક્લિનિકલ ક્ષમતાઓ",
    whySub: "અમારો અભિગમ પારદર્શિતા, તબીબી નીતિશાસ્ત્ર અને વાસ્તવિક આયુર્વેદ વિજ્ઞાન પર આધારિત છે.",
    why1Title: "૪–૫ વર્ષનો તબીબી અનુભવ",
    why1Desc: "પ્રાથમિક અને વિશિષ્ટ આરોગ્ય કેન્દ્રોમાં હજારો દર્દીઓની સફળ સારવારનો મજબૂત ક્લિનિકલ આધાર.",
    why2Title: "સરકારી PHC સેવાનો અનુભવ",
    why2Desc: "ગુજરાતના સરકારી આરોગ્ય કેન્દ્રમાં આયુષ મેડિકલ ઓફિસર તરીકે જમીની સ્તરે મેળવેલ ઊંડો નિદાન અનુભવ.",
    why3Title: "માન્યતા પ્રાપ્ત BAMS પદવી",
    why3Desc: "આયુર્વેદિક મેડિસિન અને સર્જરીની ઔપચારિક ડિગ્રી સાથે શાસ્ત્રીય ઔષધ વિજ્ઞાનનું ગહન જ્ઞાન.",
    why4Title: "વ્યક્તિગત પરામર્શ",
    why4Desc: "કોઈ સામાન્ય દવા કીટ નહીં; દરેક દર્દી માટે તેમની પ્રકૃતિ અનુસાર આહાર અને ઔષધનું આયોજન.",
    why5Title: "દર્દી-કેન્દ્રિત સંભાળ",
    why5Desc: "ધ્યાનપૂર્વક સાંભળવું, બીમારીના મૂળ કારણની સરળ સમજૂતી અને સતત માર્ગદર્શન.",
    why6Title: "માતૃભાષામાં સરળ વાતચીત",
    why6Desc: "ગુજરાતી, હિન્દી અને અંગ્રેજી ભાષામાં સરળતાથી પરામર્શ, જેથી આપ નિઃસંકોચ ચર્ચા કરી શકો.",

    // Modes
    modesBadge: "પરામર્શના વિકલ્પો",
    modesHeading: "ઓનલાઇન અને રૂબરૂ પરામર્શ સુવિધા",
    modesSub: "તમારા અનુકૂળતા મુજબ ઘરબેઠા અથવા ક્લિનિક પર રૂબરૂ મુલાકાત પસંદ કરો.",
    onlineTitle: "ઓનલાઇન વિડીયો/ઓડિયો પરામર્શ",
    onlineSub: "ગુજરાત, ભારત અને વિશ્વભરના દર્દીઓ માટે અનુકૂળ",
    onlineStep1: "તમારી અનુકૂળ તારીખ અને સમય પસંદ કરી વિનંતી મોકલો",
    onlineStep2: "વોટ્સએપ અથવા ફોન કોલ દ્વારા પુષ્ટિ મેળવો",
    onlineStep3: "વિડીયો અથવા વોઇસ કોલ દ્વારા વિગતવાર વાતચીત કરો",
    onlineStep4: "વોટ્સએપ પર ડિજિટલ પ્રિસ્ક્રિપ્શન અને ડાયેટ ચાર્ટ મેળવો",
    onlineBtn: "ઓનલાઇન પરામર્શ માટે વિનંતી કરો",
    offlineTitle: "રૂબરૂ (ઇન-પર્સન) પરામર્શ",
    offlineSub: "લુણાવાડા, ગુજરાત ખાતે નાડી પરીક્ષણ અને શારીરિક તપાસ",
    offlineLoc: "લુણાવાડા, મહીસાગર, ગુજરાત - ૩૮૯૨૩૦",
    offlineTiming: "સાંજના સમયે અને રવિવારે (પૂર્વ બુકિંગ દ્વારા)",
    offlineNote: "શાસ્ત્રીય નાડી પરીક્ષા અને વ્યક્તિગત સ્વાસ્થ્ય ચકાસણી",
    offlineBtn: "રૂબરૂ મુલાકાત માટે વિનંતી કરો",

    // How It Works
    howBadge: "પદ્ધતિ",
    howHeading: "પરામર્શ પ્રક્રિયા કેવી રીતે કાર્ય કરે છે?",
    howSub: "પ્રામાણિક આયુર્વેદિક ઉપચાર મેળવવા માટેના ચાર સરળ પગલાં.",
    how1Title: "૧. પરામર્શ પ્રકાર પસંદ કરો",
    how1Desc: "ઓનલાઇન વિડીયો કોલ અથવા લુણાવાડા ખાતે રૂબરૂ મુલાકાત પસંદ કરો.",
    how2Title: "૨. એપોઇન્ટમેન્ટ વિનંતી મોકલો",
    how2Desc: "તમારું નામ, મોબાઈલ નંબર, અનુકૂળ સમય અને સમસ્યા ફોર્મમાં ભરો.",
    how3Title: "૩. એપોઇન્ટમેન્ટ કન્ફર્મેશન",
    how3Desc: "ડૉ. અપેક્ષા પટેલનું ડેસ્ક તમારો સમય ચકાસીને વોટ્સએપ/કોલ દ્વારા સ્લોટ કન્ફર્મ કરશે.",
    how4Title: "૪. પરામર્શ મેળવો",
    how4Desc: "ડૉક્ટર સાથે વિગતવાર ચર્ચા કરી શાસ્ત્રીય આયુર્વેદિક માર્ગદર્શન પ્રાપ્ત કરો.",

    // Patient Feedback
    feedbackBadge: "દર્દી સંભાળ",
    feedbackHeading: "દર્દીઓનો પ્રતિભાવ અને અનુભવ",
    feedbackDesc: "અમે દર્દીઓના વિશ્વાસ અને પ્રામાણિકતાને સર્વોચ્ચ મહત્વ આપીએ છીએ. કોઈ બનાવટી દાવા કે ચમત્કારિક વચનો વિના શુદ્ધ આયુર્વેદિક માર્ગદર્શન પૂરું પાડવામાં આવે છે.",
    feedbackCard1: "“ડૉક્ટર ખૂબ જ ધીરજપૂર્વક સાંભળે છે અને ઘરના ખોરાક સાથે મેળ બેસે તેવો સચોટ ડાયેટ પ્લાન આપે છે.”",
    feedbackCard1Author: "મહીસાગર જિલ્લાના સ્થાનિક દર્દીનો અનુભવ",
    feedbackCard2: "“પાચનની જૂની તકલીફમાં ખૂબ જ રાહત મળી. દવાઓની કોઈ આડઅસર વિના સારું પરિણામ મળ્યું.”",
    feedbackCard2Author: "ગુજરાતના ઓનલાઇન દર્દી",
    feedbackCard3: "“પ્રામાણિક અને સ્પષ્ટ માર્ગદર્શન. રોગનું મૂળ કારણ સમજાવીને દવા આપે છે.”",
    feedbackCard3Author: "રૂબરૂ પરામર્શ મેળવનાર દર્દી",
    feedbackInvite: "શું તમે ડૉ. અપેક્ષા પટેલ પાસેથી સારવાર લીધી છે? તમારો સાચો અનુભવ જણાવો.",

    // FAQ
    faqBadge: "સામાન્ય પ્રશ્નો",
    faqHeading: "વારંવાર પૂછાતા પ્રશ્નો (FAQ)",
    faqSub: "એપોઇન્ટમેન્ટ, સારવાર પ્રક્રિયા અને દવાઓ વિશે સ્પષ્ટ માહિતી.",

    // Final CTA
    ctaHeading: "તમારા સારા સ્વાસ્થ્ય તરફ પ્રથમ પગલું ભરો",
    ctaSub: "અનુભવી આયુર્વેદિક તબીબના માર્ગદર્શન સાથે કુદરતી અને નિરોગી જીવનની શરૂઆત કરો.",
    ctaBtnBook: "પરામર્શ બુક કરો",
    ctaBtnWhatsApp: "વોટ્સએપ પર સંપર્ક કરો",

    // Booking Form
    formBadge: "એપોઇન્ટમેન્ટ વિનંતી સિસ્ટમ",
    formHeading: "ડૉ. અપેક્ષા પટેલ સાથે પરામર્શ માટે વિનંતી કરો",
    formSub: "મહેરબાની કરીને નોંધ લો: આ ફક્ત એપોઇન્ટમેન્ટની વિનંતી છે; ડૉ. અપેક્ષા પટેલ શેડ્યૂલ ચકાસીને વોટ્સએપ અથવા ફોન દ્વારા સમય કન્ફર્મ કરશે.",
    formModeTitle: "પગલું ૧: પરામર્શનો પ્રકાર પસંદ કરો *",
    formModeOnline: "ઓનલાઇન વિડીયો / ઓડિયો પરામર્શ",
    formModeOnlineFee: "₹૬૦૦ • વિડીયો લિંક મોકલવામાં આવશે",
    formModeOffline: "રૂબરૂ પરામર્શ (લુણાવાડા ક્લિનિક)",
    formModeOfflineFee: "₹૫૦૦ • લુણાવાડા, મહીસાગર ક્લિનિક",
    formStep2: "પગલું ૨: અનુકૂળ તારીખ *",
    formStep3: "પગલું ૩: મુખ્ય સ્વાસ્થ્ય સમસ્યા *",
    formStep4: "પગલું ૪: અનુકૂળ સમય સ્લોટ *",
    formStep5: "પગલું ૫: દર્દીની વિગતો",
    lblName: "દર્દીનું પૂરું નામ *",
    lblPhone: "મોબાઇલ નંબર (વોટ્સએપ વાળો) *",
    lblEmail: "ઇમેઇલ એડ્રેસ (વૈકલ્પિક)",
    lblLang: "પરામર્શ માટે પસંદગીની ભાષા *",
    lblReason: "તકલીફ વિશે ટૂંકી વિગત (વૈકલ્પિક)",
    btnSubmitRequest: "એપોઇન્ટમેન્ટ વિનંતી સબમિટ કરો",
    formNotice: "તબીબી ગોપનીયતા: તમારી માહિતી સંપૂર્ણપણે ગોપનીય રહેશે અને ફક્ત તમારા પરામર્શ માટે ઉપયોગમાં લેવાશે.",

    // Confirmation Modal
    confirmBadge: "વિનંતી સબમિટ થઈ • ડૉક્ટરની પુષ્ટિ બાકી છે",
    confirmTitle: "એપોઇન્ટમેન્ટ વિનંતી મળી ગઈ છે",
    confirmDesc: "આભાર! આ ફક્ત પરામર્શની વિનંતી છે. ડૉ. અપેક્ષા પટેલ તેમનું શેડ્યૂલ તપાસીને ટૂંક સમયમાં વોટ્સએપ અથવા ફોન દ્વારા તમારો સમય કન્ફર્મ કરશે.",
    confirmSlotRef: "વિનંતી સંદર્ભ નંબર:",
    confirmNextStep: "હવે આગળ શું થશે?",
    confirmStepText: "તમને વોટ્સએપ પર તમારા સમયની પુષ્ટિ અને વિડીયો લિંક અથવા ક્લિનિકના સરનામાની વિગત મોકલવામાં આવશે.",
    confirmBtnWhatsApp: "વોટ્સએપ પર વિગતો શેર કરો",
    confirmBtnClose: "બંધ કરો",

    // Legal
    disclaimerTitle: "તબીબી ડિસ્ક્લેમર અને અસ્વીકરણ સૂચના",
    disclaimerClose: "બંધ કરો",
    privacyTitle: "દર્દી ગોપનીયતા અને પ્રાઇવસી પોલિસી",
    privacyClose: "બંધ કરો"
  },

  hi: {
    langName: "हिन्दी",
    topNotice: "पूर्व आयुष मेडिकल ऑफिसर • सरकारी प्राथमिक स्वास्थ्य केंद्र (PHC), गुजरात • ४–५ वर्ष का स्वास्थ्य सेवा अनुभव",
    navAbout: "परिचय",
    navServices: "सेवाएं",
    navOnline: "ऑनलाइन OPD",
    navOffline: "प्रत्यक्ष क्लिनिक",
    navFaq: "प्रश्नोत्तरी",
    navContact: "संपर्क",
    btnBookNow: "परामर्श बुक करें",
    btnWhatsApp: "व्हाट्सएप",
    myBookingsLabel: "मेरी नियुक्तियां",
    navHome: "होम",
    navOnline: "ऑनलाइन परामर्श",
    navOffline: "प्रत्यक्ष क्लिनिक",
    navPrivacy: "गोपनीयता नीति",
    navDisclaimer: "चिकित्सीय अस्वीकरण",

    // Hero
    heroBadge: "४–५ वर्षों का पेशेवर स्वास्थ्य सेवा अनुभव",
    heroHeading: "आयुर्वेद के माध्यम से समग्र स्वास्थ्य की पुनर्प्राप्ति",
    heroDesc: "अनुभवी आयुर्वेदिक चिकित्सक द्वारा पारंपरिक शास्त्रीय ज्ञान और रोगी-केंद्रित दृष्टिकोण के साथ व्यक्तिगत स्वास्थ्य मार्गदर्शन।",
    heroGovtTag: "गुजरात के सरकारी प्राथमिक स्वास्थ्य केंद्र (PHC) में पूर्व आयुष मेडिकल ऑफिसर के रूप में सेवाएं दी हैं।",
    heroBtnBook: "परामर्श बुक करें",
    heroBtnMeet: "डॉक्टर से मिलें",
    heroStat1Val: "४–५ वर्ष",
    heroStat1Lbl: "स्वास्थ्य सेवा अनुभव",
    heroStat2Val: "सरकारी PHC",
    heroStat2Lbl: "पूर्व आयुष मेडिकल ऑफिसर",
    heroStat3Val: "BAMS",
    heroStat3Lbl: "आयुर्वेदिक मेडिसिन & सर्जरी",
    heroStat4Val: "देश-विदेश में",
    heroStat4Lbl: "ऑनलाइन व लूणावाडा क्लिनिक",

    // Doctor Intro
    introBadge: "डॉक्टर का परिचय",
    introHeading: "शास्त्रीय आयुर्वेद पर आधारित सहानुभूतिपूर्ण एवं मूल-कारण उपचार",
    introDegree: "BAMS – बैचलर ऑफ आयुर्वेदिक मेडिसिन एंड सर्जरी",
    introExp: "४–५ वर्ष का पेशेवर स्वास्थ्य सेवा अनुभव",
    introGovt: "पूर्व आयुष मेडिकल ऑफिसर, सरकारी प्राथमिक स्वास्थ्य केंद्र (PHC), गुजरात",
    introBio1: "डॉ. अपेक्षा पटेल एक समर्पित आयुर्वेदिक चिकित्सक हैं, जो रोगी-केंद्रित और बीमारी के मूल कारण के निवारण हेतु प्रतिबद्ध हैं। गुजरात के सरकारी प्राथमिक स्वास्थ्य केंद्र (PHC) में आयुष मेडिकल ऑफिसर के रूप में हजारों रोगियों के सफल उपचार का समृद्ध व्यावहारिक अनुभव उनके पास है।",
    introBio2: "उनका चिकित्सा दर्शन केवल लक्षणों को दबाने के बजाय रोगी की प्रकृति, पाचक अग्नि, दिनचर्या और पथ्य-अपथ्य (आहार नियमों) को संतुलित कर स्थायी स्वास्थ्य प्रदान करना है।",
    introBtnStory: "मेरी जीवनयात्रा पढ़ें",

    // Services
    servicesBadge: "परामर्श सेवाएं",
    servicesHeading: "व्यक्तिगत आयुर्वेदिक परामर्श सेवाएं",
    servicesSub: "आपकी अनूठी शारीरिक प्रकृति और स्वास्थ्य इतिहास के अनुसार नैतिक और प्रामाणिक स्वास्थ्य मार्गदर्शन।",

    // Why Consult
    whyBadge: "डॉ. अपेक्षा को क्यों चुनें",
    whyHeading: "प्रामाणिक चिकित्सीय अनुभव जिस पर आप भरोसा कर सकते हैं",
    whySub: "हमारा अभ्यास पारदर्शिता, कठोर चिकित्सा नैतिकता और प्रामाणिक आयुर्वेद विज्ञान पर आधारित है।",
    why1Title: "४–५ वर्षों का चिकित्सीय अनुभव",
    why1Desc: "प्राथमिक और विशिष्ट स्वास्थ्य केंद्रों में हजारों मरीजों के सफल उपचार का ठोस आधार।",
    why2Title: "सरकारी PHC सेवा का अनुभव",
    why2Desc: "गुजरात के सरकारी प्राथमिक स्वास्थ्य केंद्र में आयुष मेडिकल ऑफिसर के रूप में गहन नैदानिक अनुभव।",
    why3Title: "मान्यता प्राप्त BAMS योग्यता",
    why3Desc: "आयुर्वेदिक मेडिसिन एंड सर्जरी में औपचारिक डिग्री के साथ शास्त्रीय जड़ी-बूटी विज्ञान का ज्ञान।",
    why4Title: "व्यक्तिगत परामर्श",
    why4Desc: "कोई सामान्य दवा किट नहीं; हर मरीज के लिए उनकी प्रकृति के अनुसार विशेष आहार और उपचार योजना।",
    why5Title: "रोगी-केंद्रित दृष्टिकोण",
    why5Desc: "ध्यानपूर्वक सुनना, बीमारी के मूल कारण की सरल व्याख्या और निरंतर चिकित्सीय मार्गदर्शन।",
    why6Title: "सरल व स्पष्ट संवाद",
    why6Desc: "गुजराती, हिन्दी अथवा अंग्रेजी में सहज परामर्श, जिससे आप अपनी बात खुलकर कह सकें।",

    // Modes
    modesBadge: "परामर्श के विकल्प",
    modesHeading: "सुविधाजनक ऑनलाइन एवं प्रत्यक्ष परामर्श",
    modesSub: "अपनी सुविधा और स्थान के अनुसार घर बैठे या क्लिनिक पर प्रत्यक्ष परामर्श चुनें।",
    onlineTitle: "ऑनलाइन वीडियो/ऑडियो परामर्श",
    onlineSub: "देश और दुनिया के किसी भी कोने से घर बैठे स्वास्थ्य सलाह",
    onlineStep1: "अपनी सुविधानुसार समय चुनकर परामर्श अनुरोध भेजें",
    onlineStep2: "व्हाट्सएप या कॉल द्वारा समय की पुष्टि प्राप्त करें",
    onlineStep3: "वीडियो या वॉइस कॉल द्वारा विस्तार से चर्चा करें",
    onlineStep4: "व्हाट्सएप पर डिजिटल पर्चा और आहार तालिका प्राप्त करें",
    onlineBtn: "ऑनलाइन परामर्श हेतु अनुरोध करें",
    offlineTitle: "प्रत्यक्ष (इन-पर्सन) परामर्श",
    offlineSub: "लूणावाडा, गुजरात में नाड़ी परीक्षण एवं शारीरिक जांच",
    offlineLoc: "लूणावाडा, महीसागर, गुजरात - ३८९२३०",
    offlineTiming: "शाम के समय एवं रविवार (पूर्व बुकिंग द्वारा)",
    offlineNote: "पारंपरिक नाड़ी परीक्षा एवं व्यक्तिगत स्वास्थ्य परीक्षण",
    offlineBtn: "प्रत्यक्ष परामर्श हेतु अनुरोध करें",

    // How It Works
    howBadge: "प्रक्रिया",
    howHeading: "परामर्श कैसे प्राप्त करें?",
    howSub: "प्रामाणिक आयुर्वेदिक चिकित्सा हेतु चार सरल चरण।",
    how1Title: "१. परामर्श प्रकार चुनें",
    how1Desc: "ऑनलाइन वीडियो परामर्श या लूणावाडा क्लिनिक में प्रत्यक्ष भेंट का चयन करें।",
    how2Title: "२. अपॉइंटमेंट अनुरोध भेजें",
    how2Desc: "अपना नाम, मोबाइल नंबर, पसंदीदा तिथि, समय और स्वास्थ्य समस्या दर्ज करें।",
    how3Title: "३. समय की पुष्टि (कन्फर्मेशन)",
    how3Desc: "डॉ. अपेक्षा का कार्यालय समय की उपलब्धता जांचकर व्हाट्सएप/कॉल द्वारा स्लॉट कन्फर्म करेगा।",
    how4Title: "४. परामर्श प्राप्त करें",
    how4Desc: "डॉक्टर से विस्तार से बात कर शास्त्रीय आयुर्वेदिक उपचार और पथ्य-आहार निर्देश प्राप्त करें।",

    // Patient Feedback
    feedbackBadge: "रोगी देखभाल",
    feedbackHeading: "रोगियों का अनुभव एवं प्रतिक्रिया",
    feedbackDesc: "हम रोगियों के विश्वास को सर्वोपरि मानते हैं। बिना किसी भ्रामक या चमत्कारी दावों के, शुद्ध शास्त्रीय आयुर्वेद के माध्यम से निरंतर स्वास्थ्य सेवा दी जा रही है।",
    feedbackCard1: "“डॉक्टर बहुत ही ध्यान से सुनती हैं और घरेलू खान-पान के अनुकूल बहुत ही व्यावहारिक डाइट चार्ट देती हैं।”",
    feedbackCard1Author: "महीसागर जिले के स्थानीय मरीज का अनुभव",
    feedbackCard2: "“पाचन की पुरानी समस्या में काफी आराम मिला। बिना किसी साइड-इफेक्ट के बहुत अच्छे परिणाम मिले।”",
    feedbackCard2Author: "गुजरात से ऑनलाइन परामर्श लेने वाले मरीज",
    feedbackCard3: "“सच्ची और ईमानदार सलाह। रोग के मूल कारण को समझाकर दवा दी जाती है।”",
    feedbackCard3Author: "प्रत्यक्ष क्लिनिक में परामर्श लेने वाले मरीज",
    feedbackInvite: "क्या आपने डॉ. अपेक्षा पटेल से परामर्श लिया है? अपनी सच्ची प्रतिक्रिया साझा करें।",

    // FAQ
    faqBadge: "सामान्य प्रश्न",
    faqHeading: "अक्सर पूछे जाने वाले सवाल (FAQ)",
    faqSub: "अपॉइंटमेंट बुकिंग, उपचार प्रक्रिया और दवाओं से जुड़े महत्वपूर्ण उत्तर।",

    // Final CTA
    ctaHeading: "स्वस्थ जीवन की ओर पहला कदम बढ़ाएं",
    ctaSub: "अनुभवी आयुर्वेदिक चिकित्सक के मार्गदर्शन से अपनी प्राकृतिक ऊर्जा को पुनर्जीवित करें।",
    ctaBtnBook: "परामर्श बुक करें",
    ctaBtnWhatsApp: "व्हाट्सएप पर संपर्क करें",

    // Booking Form
    formBadge: "अपॉइंटमेंट अनुरोध प्रणाली",
    formHeading: "डॉ. अपेक्षा पटेल से परामर्श हेतु अनुरोध करें",
    formSub: "कृपया ध्यान दें: यह केवल परामर्श का अनुरोध है; डॉ. अपेक्षा पटेल समय की उपलब्धता देखकर व्हाट्सएप या कॉल द्वारा आपका अपॉइंटमेंट कन्फर्म करेंगी।",
    formModeTitle: "चरण १: परामर्श का प्रकार चुनें *",
    formModeOnline: "ऑनलाइन वीडियो / ऑडियो परामर्श",
    formModeOnlineFee: "₹६०० • वीडियो लिंक उपलब्ध कराया जाएगा",
    formModeOffline: "प्रत्यक्ष परामर्श (लूणावाडा क्लिनिक)",
    formModeOfflineFee: "₹५०० • लूणावाडा, महीसागर क्लिनिक",
    formStep2: "चरण २: पसंदीदा तिथि *",
    formStep3: "चरण ३: मुख्य स्वास्थ्य समस्या *",
    formStep4: "चरण ४: पसंदीदा समय स्लॉट *",
    formStep5: "चरण ५: मरीज की जानकारी",
    lblName: "मरीज का पूरा नाम *",
    lblPhone: "मोबाइल नंबर (व्हाट्सएप वाला) *",
    lblEmail: "ईमेल पता (वैकल्पिक)",
    lblLang: "परामर्श की पसंदीदा भाषा *",
    lblReason: "समस्या का संक्षिप्त विवरण (वैकल्पिक)",
    btnSubmitRequest: "अपॉइंटमेंट अनुरोध सबमिट करें",
    formNotice: "चिकित्सीय गोपनीयता: आपकी दी गई जानकारी पूर्णतः गोपनीय रखी जाती है और केवल परामर्श हेतु प्रयुक्त होती है।",

    // Confirmation Modal
    confirmBadge: "अनुरोध प्राप्त हुआ • डॉक्टर की पुष्टि प्रतीक्षारत",
    confirmTitle: "अपॉइंटमेंट अनुरोध प्राप्त हुआ",
    confirmDesc: "धन्यवाद! कृपया ध्यान दें कि यह एक अनुरोध है। डॉ. अपेक्षा पटेल अपना समय देखकर शीघ्र ही व्हाट्सएप या फोन कॉल द्वारा आपकी नियुक्ति की पुष्टि करेंगी।",
    confirmSlotRef: "अनुरोध संदर्भ संख्या:",
    confirmNextStep: "इसके बाद क्या होगा?",
    confirmStepText: "आपको व्हाट्सएप पर समय की पुष्टि और वीडियो लिंक अथवा क्लिनिक का पता भेजा जाएगा।",
    confirmBtnWhatsApp: "व्हाट्सएप पर विवरण साझा करें",
    confirmBtnClose: "बंद करें",

    // Legal
    disclaimerTitle: "चिकित्सीय अस्वीकरण (Medical Disclaimer)",
    disclaimerClose: "बंद करें",
    privacyTitle: "रोगी गोपनीयता नीति (Privacy Policy)",
    privacyClose: "बंद करें"
  }
};

// ============================================================
// AUTHENTIC CONSULTATION SERVICES DATA (6 Verified Categories)
// ============================================================
const SERVICES_DATA = [
  {
    id: "general",
    icon: "stethoscope",
    category: "General Consultation",
    title: {
      en: "General Ayurvedic Consultation",
      gu: "સામાન્ય આયુર્વેદિક પરામર્શ",
      hi: "सामान्य आयुर्वेदिक परामर्श"
    },
    desc: {
      en: "Comprehensive health evaluation including Prakriti (body constitution) analysis, Agni (digestive fire) assessment, and personalised preventative lifestyle guidance.",
      gu: "પ્રકૃતિ વિશ્લેષણ, પાચક અગ્નિની ચકાસણી અને શારીરિક સંતુલન જાળવવા માટેનું સંપૂર્ણ આયુર્વેદિક આરોગ્ય માર્ગદર્શન.",
      hi: "प्रकृति विश्लेषण, जठराग्नि परीक्षण एवं शारीरिक संतुलन बनाए रखने हेतु समग्र आयुर्वेदिक स्वास्थ्य परामर्श।"
    },
    idealFor: {
      en: "Fatigue, low immunity, seasonal imbalances, preventative wellness",
      gu: "શારીરિક થાક, રોગપ્રતિકારક શક્તિનો અભાવ, ઋતુજન્ય અસમતુલા",
      hi: "थकान, कमजोर रोग प्रतिरोधक क्षमता, मौसमी असंतुलन"
    }
  },
  {
    id: "lifestyle",
    icon: "sun",
    category: "Wellness & Routine",
    title: {
      en: "Lifestyle & Wellness Guidance",
      gu: "દિનચર્યા અને જીવનશૈલી માર્ગદર્શન",
      hi: "दिनचर्या एवं जीवनशैली मार्गदर्शन"
    },
    desc: {
      en: "Align your daily biological rhythms with nature using classical Dinacharya (daily routine), Ritucharya (seasonal adaptation), and restorative mindfulness practices.",
      gu: "શાસ્ત્રીય દિનચર્યા, ઋતુચર્યા અને પથ્ય આહાર દ્વારા શરીરના કુદરતી જૈવિક ચક્રને પુનઃ સ્થાપિત કરવાનું માર્ગદર્શન.",
      hi: "शास्त्रीय दिनचर्या, ऋतुचर्या और अनुकूल खान-पान द्वारा शरीर के जैविक चक्र को प्राकृतिक रूप से संतुलित करना।"
    },
    idealFor: {
      en: "Erratic sleep cycles, sedentary fatigue, metabolic stagnation",
      gu: "અનિયમિત ઊંઘ, બેઠાડુ જીવનથી થતો થાક, આળસ",
      hi: "अनिद्रा, सुस्ती, शारीरिक आलस्य और अनियमित दिनचर्या"
    }
  },
  {
    id: "digestive",
    icon: "apple",
    category: "Gut Health",
    title: {
      en: "Digestive Health Consultation",
      gu: "પાચન અને જઠર સ્વાસ્થ્ય પરામર્શ",
      hi: "पाचन एवं उदर स्वास्थ्य परामर्श"
    },
    desc: {
      en: "Evidence-informed Ayurvedic management of chronic acidity, GERD, bloating, IBS, chronic constipation, and impaired Agni without long-term pharmaceutical dependency.",
      gu: "એસિડિટી, ગેસ, અપચો, કબજિયાત અને આઈબીએસ જેવી પાચન સંબંધી તકલીફોનું મૂળથી નિદાન અને આહાર સુધારણા.",
      hi: "अम्लपित्त (एसिडिटी), गैस, अपच, कब्ज और संग्रहणी (IBS) जैसी उदर समस्याओं का जड़ से समाधान।"
    },
    idealFor: {
      en: "Hyperacidity, bloating, chronic constipation, sluggish digestion",
      gu: "વારંવાર એસિડિટી, પેટ ફૂલવું, જૂની કબજિયાત, મંદાગ્નિ",
      hi: "अम्लपित्त, पेट का फूलना, पुरानी कब्ज, अपच"
    }
  },
  {
    id: "joint",
    icon: "activity",
    category: "Musculoskeletal",
    title: {
      en: "Joint & Musculoskeletal Health",
      gu: "સાંધા અને સ્નાયુ સ્વાસ્થ્ય પરામર્શ",
      hi: "जोड़ों एवं मांसपेशियों का स्वास्थ्य"
    },
    desc: {
      en: "Targeted Vata-pacifying management for joint stiffness, osteoarthritis discomfort, backache, cervical stiffness, and age-related musculoskeletal wear.",
      gu: "વાયુજન્ય સાંધાના દુખાવા, સંધિવા, કમરનો દુખાવો, ગરદનની જકડન અને સ્નાયુઓની નબળાઈ માટેનું શાસ્ત્રીય માર્ગદર્શન.",
      hi: "संधिशूल (गठिया), जोड़ों की अकड़न, कमर दर्द, सर्वाइकल और मांसपेशियों की कमजोरी हेतु वातशामक उपचार।"
    },
    idealFor: {
      en: "Knee stiffness, lower back pain, neck stiffness, mobility issues",
      gu: "ઘૂંટણનો દુખાવો, કમરનો દુખાવો, ગરદન અકડાઈ જવી",
      hi: "घुटनों का दर्द, पीठ दर्द, गर्दन का अकड़ना, चलने में कठिनाई"
    }
  },
  {
    id: "women",
    icon: "heart",
    category: "Women's Health",
    title: {
      en: "Women’s Health Consultation",
      gu: "મહિલા સ્વાસ્થ્ય અને હોર્મોનલ કેર",
      hi: "महिला स्वास्थ्य एवं हार्मोनल संतुलन"
    },
    desc: {
      en: "Empathetic, confidential Ayurvedic care for menstrual irregularities, hormonal imbalance, PCOD/PCOS lifestyle management, and post-natal rejuvenation.",
      gu: "માસિક ધર્મની અનિયમિતતા, હોર્મોનલ અસંતુલન, પીસીઓડી/પીસીઓએસ અને સ્ત્રી આરોગ્ય માટે ગોપનીય અને સહાનુભૂતિપૂર્વક સારવાર.",
      hi: "मासिक धर्म की अनियमितता, हार्मोनल असंतुलन, पीसीओडी/पीसीओएस एवं महिला स्वास्थ्य हेतु व्यक्तिगत परामर्श।"
    },
    idealFor: {
      en: "Irregular cycles, hormonal stress, metabolic PCOD concerns",
      gu: "અનિયમિત માસિક, પીસીઓડી, શારીરિક નબળાઈ",
      hi: "अनियमित मासिक धर्म, पीसीओडी, अत्यधिक तनाव"
    }
  },
  {
    id: "stress",
    icon: "moon",
    category: "Mental Wellness",
    title: {
      en: "Stress & Sleep Management",
      gu: "માનસિક તણાવ અને નિદ્રા વ્યવસ્થાપન",
      hi: "तनाव एवं अनिद्रा प्रबंधन"
    },
    desc: {
      en: "Holistic calming strategies using Medhya Rasayana herbs, evening wind-down rituals, and breathing guidance to ease mental restlessness and restore sound sleep.",
      gu: "મેધ્ય રસાયણ, શાંત જીવનશૈલી અને શાસ્ત્રીય નિયમો દ્વારા માનસિક અશાંતિ, ચિંતા અને અનિદ્રામાં કુદરતી રાહત.",
      hi: "मेध्य रसायनों, शांत दिनचर्या और श्वास विधियों द्वारा तनाव, मानसिक बेचैनी और अनिद्रा से प्राकृतिक मुक्ति।"
    },
    idealFor: {
      en: "Disturbed sleep, mental burnout, restlessness, work stress",
      gu: "ઊંઘ ન આવવી, માનસિક થાક, અતિશય ચિંતા",
      hi: "नींद न आना, अत्यधिक मानसिक थकान, बेचैनी"
    }
  }
];

// ============================================================
// 7 AUTHENTIC FAQS (EN, GU, HI)
// ============================================================
const FAQS_DATA = [
  {
    q: {
      en: "How do I book an appointment with Dr. Apkesha Patel?",
      gu: "ડૉ. અપેક્ષા પટેલ સાથે એપોઇન્ટમેન્ટ કેવી રીતે બુક કરવી?",
      hi: "डॉ. अपेक्षा पटेल के साथ अपॉइंटमेंट कैसे बुक करें?"
    },
    a: {
      en: "You can submit an appointment request through our website booking form or contact directly via WhatsApp at +91 83476 75394. Once your preferred date and time slot are received, our desk reviews the schedule and confirms your slot with consultation details.",
      gu: "તમે અમારી વેબસાઇટ પર આપેલ ફોર્મ દ્વારા અથવા સીધા +૯૧ ૮૩૪૭૬ ૭૫૩૯૪ નંબર પર વોટ્સએપ મેસેજ મોકલીને વિનંતી કરી શકો છો. વિનંતી મળ્યા બાદ ડૉક્ટરનું ડેસ્ક ઉપલબ્ધતા તપાસીને તમારો સમય કન્ફર્મ કરશે.",
      hi: "आप हमारी वेबसाइट के फॉर्म द्वारा अथवा सीधे +91 83476 75394 पर व्हाट्सएप संदेश भेजकर अपॉइंटमेंट का अनुरोध कर सकते हैं। समय की उपलब्धता देखकर हमारा कार्यालय आपके स्लॉट की पुष्टि करेगा।"
    }
  },
  {
    q: {
      en: "Are online video consultations available for patients outside Gujarat?",
      gu: "શું ગુજરાત બહારના દર્દીઓ માટે ઓનલાઇન વિડીયો પરામર્શ ઉપલબ્ધ છે?",
      hi: "क्या गुजरात के बाहर रहने वाले मरीजों के लिए ऑनलाइन वीडियो परामर्श उपलब्ध है?"
    },
    a: {
      en: "Yes, online consultations are available worldwide via Google Meet or WhatsApp Video Call. Patients from across India and abroad can consult from home and receive digital prescriptions along with lifestyle guidance.",
      gu: "હા, ગૂગલ મીટ અથવા વોટ્સએપ વિડીયો કોલ દ્વારા વિશ્વભરના દર્દીઓ માટે ઓનલાઇન પરામર્શ ઉપલબ્ધ છે. તમે ઘરેબેઠા વિગતવાર સલાહ અને ડિજિટલ પ્રિસ્ક્રિપ્શન મેળવી શકો છો.",
      hi: "हाँ, गूगल मीट या व्हाट्सएप वीडियो कॉल के माध्यम से देश-विदेश के मरीजों के लिए ऑनलाइन परामर्श की पूरी सुविधा उपलब्ध है।"
    }
  },
  {
    q: {
      en: "Where is the offline (in-person) clinic located?",
      gu: "રૂબરૂ પરામર્શ માટે ક્લિનિક ક્યાં આવેલું છે?",
      hi: "प्रत्यक्ष परामर्श हेतु क्लिनिक कहाँ स्थित है?"
    },
    a: {
      en: "In-person consultations are conducted in Lunawada, Mahisagar, Gujarat 389230 during designated evening hours and Sundays by prior appointment.",
      gu: "રૂબરૂ પરામર્શ લુણાવાડા, મહીસાગર, ગુજરાત - ૩૮૯૨૩૦ ખાતે પૂર્વ એપોઇન્ટમેન્ટ દ્વારા સાંજના સમયે અને રવિવારે યોજાય છે.",
      hi: "प्रत्यक्ष परामर्श लूणावाडा, महीसागर, गुजरात - ३८९२३० में पूर्व निर्धारित समय एवं रविवार को आयोजित किया जाता है।"
    }
  },
  {
    q: {
      en: "What information or medical reports should I prepare before consultation?",
      gu: "પરામર્શ પહેલાં મારે કયા રિપોર્ટ કે વિગતો તૈયાર રાખવી જોઈએ?",
      hi: "परामर्श से पूर्व मुझे कौन सी मेडिकल रिपोर्ट्स तैयार रखनी चाहिए?"
    },
    a: {
      en: "Please keep recent blood tests, ultrasounds, MRI/X-ray reports, and a list of your current allopathic or Ayurvedic medicines handy. You can also send photos of reports over WhatsApp prior to your scheduled slot.",
      gu: "કૃપા કરીને તાજેતરના બ્લડ રિપોર્ટ, સોનોગ્રાફી કે એક્સ-રે રિપોર્ટ અને હાલ ચાલુ હોય તેવી દવાઓની યાદી તૈયાર રાખો. આપ આ રિપોર્ટ્સ વોટ્સએપ પર પણ અગાઉથી મોકલી શકો છો.",
      hi: "कृपया हाल ही की खून की जांच, सोनोग्राफी या एक्स-रे रिपोर्ट्स और चल रही दवाओं की सूची तैयार रखें। आप इन्हें व्हाट्सएप पर पहले से भेज भी सकते हैं।"
    }
  },
  {
    q: {
      en: "What are the consultation timings?",
      gu: "પરામર્શ માટેનો સમય શું છે?",
      hi: "परामर्श का समय क्या है?"
    },
    a: {
      en: "Offline Clinic (Lunawada): Monday to Saturday, 5:00 PM – 8:30 PM & Sunday 9:30 AM – 1:00 PM (By prior appointment). Online Video Consultation: Daily 2:00 PM – 4:30 PM & 8:30 PM – 9:30 PM.",
      gu: "લુણાવાડા ક્લિનિક: સોમવારથી શનિવાર સાંજે ૫:૦૦ થી ૮:૩૦ અને રવિવારે સવારે ૯:૩૦ થી ૧:૦૦ (પૂર્વ બુકિંગ). ઓનલાઇન વિડીયો: દરરોજ બપોરે ૨:૦૦ થી ૪:૩૦ અને રાત્રે ૮:૩૦ થી ૯:૩૦.",
      hi: "लूणावाडा क्लिनिक: सोमवार से शनिवार सायं ५:०० से ८:३૦ एवं रविवार प्रातः ९:३० से १:०० (पूर्व बुकिंग द्वारा)। ऑनलाइन वीडियो: प्रतिदिन दोपहर २:०० से ४:३० एवं रात्रि ८:३० से ९:३०।"
    }
  },
  {
    q: {
      en: "How do I reschedule or cancel an appointment request?",
      gu: "એપોઇન્ટમેન્ટ કેન્સલ અથવા સમય બદલવા માટે શું કરવું?",
      hi: "अपॉइंटमेंट रद्द या समय बदलने के लिए क्या करना होगा?"
    },
    a: {
      en: "Simply message us on WhatsApp at +91 83476 75394 at least 3 hours prior to your slot. We will gladly accommodate your request and offer the next convenient opening.",
      gu: "તમારા નિર્ધારિત સમયના ઓછામાં ઓછા ૩ કલાક પહેલાં +૯૧ ૮૩૪૭૬ ૭૫૩૯૪ નંબર પર વોટ્સએપ મેસેજ કરો. અમે આપને આગળનો અનુકૂળ સમય ફાળવી આપીશું.",
      hi: "निर्धारित समय से कम से कम ३ घंटे पूर्व +91 83476 75394 पर व्हाट्सएप पर सूचित करें। हम आपको अगला उपयुक्त समय प्रदान करेंगे।"
    }
  },
  {
    q: {
      en: "In which languages does Dr. Apkesha conduct consultations?",
      gu: "ડૉ. અપેક્ષા કઈ કઈ ભાષાઓમાં પરામર્શ આપે છે?",
      hi: "डॉ. अपेक्षा किन भाषाओं में परामर्श देती हैं?"
    },
    a: {
      en: "Dr. Apkesha is completely fluent in Gujarati (ગુજરાતી), Hindi (हिन्दी), and English. You may converse in whichever language you feel most comfortable.",
      gu: "ડૉ. અપેક્ષા ગુજરાતી, હિન્દી અને અંગ્રેજી ત્રણેય ભાષાઓમાં ખૂબ જ સરળતાથી પરામર્શ આપે છે. આપ આપની અનુકૂળ ભાષામાં વાત કરી શકો છો.",
      hi: "डॉ. अपेक्षा गुजराती, हिन्दी और अंग्रेजी तीनों भाषाओं में सहजता से परामर्श देती हैं। आप अपनी पसंद की भाषा में बात कर सकते हैं।"
    }
  }
];

// State Store
let doctorData = { ...DEFAULT_DOCTOR_DATA };
let currentLang = 'en'; // 'en', 'gu', or 'hi'
let appointments = [];
const pageCache = new Map();
let isNavigating = false;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  loadDoctorData();
  loadAppointments();
  initCurrentPage();
  initSeamlessNavigation();
});

function initCurrentPage() {
  renderDynamicDoctorData();
  renderServices();
  renderFaqs();
  initDateInput();
  initLucideIcons();
  setupEventListeners();
  applyLanguage(currentLang);
  initClinicalTools();
  updateNavActiveState();
}

// ============================================================
// SEAMLESS INSTANT SPA-ROUTER & PAGE PREFETCHING
// ============================================================
function initSeamlessNavigation() {
  // Pre-cache current page HTML
  const currentPath = getNormalizedPath(window.location.href);
  pageCache.set(currentPath, document.documentElement.outerHTML);

  // Intercept all internal link clicks
  document.addEventListener('click', handleLinkClick);

  // Prefetch internal pages on mouse hover or touch start
  document.addEventListener('mouseover', handleLinkPrefetch);
  document.addEventListener('touchstart', handleLinkPrefetch, { passive: true });

  // Handle browser back and forward navigation
  window.addEventListener('popstate', (e) => {
    const targetUrl = window.location.href;
    const hash = window.location.hash;
    performPageSwap(targetUrl, hash, false);
  });
}

function getNormalizedPath(urlStr) {
  try {
    const u = new URL(urlStr, window.location.href);
    return u.origin + u.pathname;
  } catch (e) {
    return urlStr;
  }
}

function isInternalLink(a) {
  if (!a || !a.href) return false;
  if (a.target === '_blank' || a.hasAttribute('download')) return false;
  if (a.getAttribute('rel')?.includes('external')) return false;
  const href = a.getAttribute('href') || '';
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return false;
  if (href.includes('wa.me')) return false;
  
  try {
    const linkUrl = new URL(a.href, window.location.href);
    return linkUrl.origin === window.location.origin;
  } catch (e) {
    return false;
  }
}

function handleLinkClick(e) {
  const link = e.target.closest('a');
  if (!link || !isInternalLink(link)) return;

  const currentUrl = new URL(window.location.href);
  const targetUrl = new URL(link.href, window.location.href);

  // Case 1: Anchor link on the same page (e.g. #book-appointment)
  if (targetUrl.pathname === currentUrl.pathname && targetUrl.hash) {
    e.preventDefault();
    const targetEl = document.querySelector(targetUrl.hash);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', targetUrl.hash);
    }
    const drawer = document.getElementById('mobileMenuDrawer');
    if (drawer && !drawer.classList.contains('hidden')) {
      drawer.classList.add('hidden');
    }
    return;
  }

  // Case 2: Link to current page without hash
  if (targetUrl.pathname === currentUrl.pathname && !targetUrl.hash) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const drawer = document.getElementById('mobileMenuDrawer');
    if (drawer && !drawer.classList.contains('hidden')) {
      drawer.classList.add('hidden');
    }
    return;
  }

  // If running via file:// protocol without a server, let native browser handle it safely
  if (window.location.protocol === 'file:') {
    return;
  }

  // Case 3: Navigating to another page smoothly
  e.preventDefault();
  performPageSwap(link.href, targetUrl.hash, true);
}

function handleLinkPrefetch(e) {
  const link = e.target.closest('a');
  if (!link || !isInternalLink(link) || window.location.protocol === 'file:') return;

  const targetUrl = new URL(link.href, window.location.href);
  if (targetUrl.pathname === window.location.pathname) return;

  const normPath = getNormalizedPath(link.href);
  if (!pageCache.has(normPath)) {
    fetch(link.href, { credentials: 'same-origin' })
      .then(res => res.ok ? res.text() : null)
      .then(html => {
        if (html) pageCache.set(normPath, html);
      })
      .catch(() => {});
  }
}

async function performPageSwap(urlStr, hash = '', pushState = true) {
  if (isNavigating) return;
  isNavigating = true;

  const progressBar = document.getElementById('pageProgressBar');
  const pageContainer = document.getElementById('pageContent');

  if (progressBar) {
    progressBar.classList.add('active');
    progressBar.style.width = '35%';
  }

  if (pageContainer) {
    pageContainer.classList.add('page-leaving');
  }

  // Close mobile drawer if open
  const drawer = document.getElementById('mobileMenuDrawer');
  if (drawer && !drawer.classList.contains('hidden')) {
    drawer.classList.add('hidden');
  }

  const normPath = getNormalizedPath(urlStr);

  try {
    let htmlText = pageCache.get(normPath);
    if (!htmlText) {
      if (progressBar) progressBar.style.width = '65%';
      const res = await fetch(urlStr, { credentials: 'same-origin' });
      if (!res.ok) throw new Error('Page fetch failed with status ' + res.status);
      htmlText = await res.text();
      pageCache.set(normPath, htmlText);
    }

    if (progressBar) progressBar.style.width = '85%';

    // Short micro-delay to let exit animation play smoothly
    await new Promise(r => setTimeout(r, 120));

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    const newPageContent = doc.getElementById('pageContent') || doc.querySelector('main');
    if (!newPageContent) {
      window.location.href = urlStr;
      return;
    }

    // Update Document Title
    if (doc.title) {
      document.title = doc.title;
    }

    // Update Page Content
    if (pageContainer) {
      pageContainer.innerHTML = newPageContent.innerHTML;
      pageContainer.className = 'page-transition-content min-h-[60vh] page-entering';
    }

    // Update Browser History
    if (pushState) {
      history.pushState({ path: urlStr }, '', urlStr);
    }

    // Scroll to anchor or top
    if (hash) {
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Update active nav link highlighting
    updateNavActiveState(urlStr);

    // Re-initialize dynamic data, services, forms, icons, and translations
    initCurrentPage();

    // Trigger enter animation
    requestAnimationFrame(() => {
      if (pageContainer) {
        pageContainer.classList.remove('page-entering');
        pageContainer.classList.remove('page-leaving');
      }
    });

    if (progressBar) {
      progressBar.style.width = '100%';
      setTimeout(() => {
        progressBar.classList.remove('active');
        progressBar.style.width = '0%';
      }, 250);
    }
  } catch (err) {
    console.warn('Seamless navigation fallback to native reload:', err);
    window.location.href = urlStr;
  } finally {
    isNavigating = false;
  }
}

function updateNavActiveState(targetUrlStr) {
  let targetPath = '';
  try {
    targetPath = new URL(targetUrlStr || window.location.href, window.location.href).pathname.split('/').pop() || 'index.html';
  } catch(e) {
    targetPath = 'index.html';
  }
  if (!targetPath || targetPath === '') targetPath = 'index.html';

  document.querySelectorAll('nav a, #mobileMenuDrawer a').forEach(a => {
    const aHref = a.getAttribute('href') || '';
    const aPath = aHref.split('#')[0].split('/').pop() || 'index.html';

    if (aPath === targetPath) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}

// ============================================================
// MULTILINGUAL INITIALIZATION & SWITCHING
// ============================================================
function initLanguage() {
  const savedLang = localStorage.getItem('ayur_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'gu' || savedLang === 'hi')) {
    currentLang = savedLang;
  } else {
    currentLang = 'en';
  }
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'gu' && lang !== 'hi') return;
  currentLang = lang;
  localStorage.setItem('ayur_lang', lang);
  applyLanguage(currentLang);
  renderServices();
  renderFaqs();
  initLucideIcons();
}

function applyLanguage(lang) {
  const t = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;

  // Update Language switcher buttons with high contrast
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const targetLang = btn.getAttribute('data-lang');
    if (targetLang === lang) {
      btn.className = 'lang-btn px-2.5 py-0.5 rounded-full transition-all text-xs font-bold bg-white text-[#174C3C] shadow-xs';
    } else {
      btn.className = 'lang-btn px-2.5 py-0.5 rounded-full transition-all text-xs font-medium text-stone-200 hover:text-white bg-transparent';
    }
  });

  // Apply translations to data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Update dynamic time slots label
  updateTimeSlotsUI();
}

// ============================================================
// DOCTOR DATA MANAGEMENT
// ============================================================
function loadDoctorData() {
  const saved = localStorage.getItem('ayur_doctor_data_v2');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      doctorData = { ...DEFAULT_DOCTOR_DATA, ...parsed };
    } catch (e) {
      console.error("Error loading doctor data:", e);
      doctorData = { ...DEFAULT_DOCTOR_DATA };
    }
  } else {
    doctorData = { ...DEFAULT_DOCTOR_DATA };
  }
  // Ensure address is always Lunawada per explicit instruction
  if (!doctorData.address.includes("Lunawada")) {
    doctorData.address = DEFAULT_DOCTOR_DATA.address;
    doctorData.city = DEFAULT_DOCTOR_DATA.city;
  }
  doctorData.phone = DEFAULT_DOCTOR_DATA.phone;
  doctorData.whatsapp = DEFAULT_DOCTOR_DATA.whatsapp;
  doctorData.email = DEFAULT_DOCTOR_DATA.email;
}

function renderDynamicDoctorData() {
  document.querySelectorAll('.doc-name').forEach(el => el.textContent = doctorData.name);
  document.querySelectorAll('.doc-degree').forEach(el => el.textContent = doctorData.degree);
  document.querySelectorAll('.doc-title').forEach(el => el.textContent = doctorData.title);
  document.querySelectorAll('.doc-experience').forEach(el => el.textContent = doctorData.experience);
  document.querySelectorAll('.doc-background').forEach(el => el.textContent = doctorData.background);
  document.querySelectorAll('.doc-regno').forEach(el => el.textContent = doctorData.regNo);
  document.querySelectorAll('.doc-clinic').forEach(el => el.textContent = doctorData.clinicName);
  document.querySelectorAll('.doc-address').forEach(el => el.textContent = doctorData.address);
  document.querySelectorAll('.doc-city').forEach(el => el.textContent = doctorData.city);
  document.querySelectorAll('.doc-phone').forEach(el => el.textContent = doctorData.phone);
  document.querySelectorAll('.doc-email').forEach(el => el.textContent = doctorData.email);
  document.querySelectorAll('.doc-inclinic-fee').forEach(el => el.textContent = `₹${doctorData.inClinicFee}`);
  document.querySelectorAll('.doc-online-fee').forEach(el => el.textContent = `₹${doctorData.onlineFee}`);
  document.querySelectorAll('.doc-opd-timings').forEach(el => el.textContent = doctorData.opdTimings);
  document.querySelectorAll('.doc-tele-timings').forEach(el => el.textContent = doctorData.teleTimings);
  document.querySelectorAll('.doc-bio').forEach(el => el.textContent = doctorData.aboutBio);

  // Link updates
  const telHref = `tel:${doctorData.phone.replace(/[^+\d]/g, '')}`;
  const waHref = `https://wa.me/${doctorData.whatsapp}`;
  const mailHref = `mailto:${doctorData.email}`;

  document.querySelectorAll('.doc-phone-link').forEach(el => el.setAttribute('href', telHref));
  document.querySelectorAll('.doc-whatsapp-link').forEach(el => el.setAttribute('href', waHref));
  document.querySelectorAll('.doc-email-link').forEach(el => el.setAttribute('href', mailHref));
}

// ============================================================
// RENDER CONSULTATION SERVICES (6 Verified Categories)
// ============================================================
function renderServices() {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  const html = SERVICES_DATA.map(s => {
    const title = s.title[currentLang] || s.title.en;
    const desc = s.desc[currentLang] || s.desc.en;
    const idealFor = s.idealFor[currentLang] || s.idealFor.en;
    const btnText = I18N[currentLang]?.btnBookNow || "Book Consultation";

    return `
      <div class="bg-white rounded-3xl p-6 sm:p-7 border border-[#174C3C]/10 shadow-luxury-sm card-hover-lift flex flex-col justify-between space-y-5">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="w-12 h-12 rounded-2xl bg-[#174C3C]/10 text-[#174C3C] flex items-center justify-center font-bold">
              <i data-lucide="${s.icon}" class="w-6 h-6"></i>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF8F1] text-[#174C3C] border border-[#174C3C]/15">
              ${s.category}
            </span>
          </div>

          <div>
            <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#26332D] leading-snug">${title}</h3>
            <p class="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2">${desc}</p>
          </div>

          <div class="p-3 rounded-xl bg-[#FAF8F1] border border-[#EDE5D5] text-[11px] text-[#26332D]">
            <strong class="font-semibold text-[#174C3C]">${currentLang === 'gu' ? 'મુખ્ય લક્ષણો:' : (currentLang === 'hi' ? 'प्रमुख लक्षण:' : 'Key Indications:')}</strong>
            <span class="text-stone-600 block mt-0.5">${idealFor}</span>
          </div>
        </div>

        <div class="pt-3 border-t border-stone-100 flex items-center justify-between">
          <span class="text-xs font-semibold text-stone-500">
            ${currentLang === 'gu' ? 'ઓનલાઇન / રૂબરૂ' : (currentLang === 'hi' ? 'ऑनलाइन / प्रत्यक्ष' : 'Online / In-Person')}
          </span>
          <button onclick="selectServiceForBooking('${s.id}')" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#174C3C] hover:bg-[#0f3529] text-[#FAF8F1] font-bold text-xs shadow-2xs transition-all">
            <span>${btnText}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
  initLucideIcons();
}

function selectServiceForBooking(serviceId) {
  const select = document.getElementById('healthConcern');
  if (select) {
    select.value = serviceId;
  }
  const bookSection = document.getElementById('book-appointment');
  if (bookSection) {
    bookSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============================================================
// RENDER FAQS (7 Genuine Questions)
// ============================================================
function renderFaqs() {
  const container = document.getElementById('faqsAccordion');
  if (!container) return;

  const html = FAQS_DATA.map((f, idx) => {
    const q = f.q[currentLang] || f.q.en;
    const a = f.a[currentLang] || f.a.en;

    return `
      <div class="border border-[#174C3C]/15 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all">
        <button onclick="toggleFaqItem(this)" class="w-full p-5 text-left font-bold text-[#26332D] flex items-center justify-between gap-4 hover:bg-[#FAF8F1] transition-colors" aria-expanded="false">
          <span class="text-sm sm:text-base leading-snug">${q}</span>
          <i data-lucide="chevron-down" class="faq-icon w-5 h-5 text-[#174C3C] flex-shrink-0 transition-transform duration-200"></i>
        </button>
        <div class="faq-content hidden px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4 bg-[#FAF8F1]/40">
          ${a}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
  initLucideIcons();
}

function toggleFaqItem(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  const isHidden = content.classList.contains('hidden');

  // Close all other FAQs
  document.querySelectorAll('#faqsAccordion .faq-content').forEach(c => c.classList.add('hidden'));
  document.querySelectorAll('#faqsAccordion .faq-icon').forEach(i => i.classList.remove('rotate-180'));

  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.classList.add('rotate-180');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    content.classList.add('hidden');
    if (icon) icon.classList.remove('rotate-180');
    btn.setAttribute('aria-expanded', 'false');
  }
}

// ============================================================
// APPOINTMENT REQUEST SYSTEM (AWAITING DOCTOR CONFIRMATION)
// ============================================================
function loadAppointments() {
  const saved = localStorage.getItem('ayur_appointments_v2');
  if (saved) {
    try {
      appointments = JSON.parse(saved);
    } catch (e) {
      console.error("Error loading appointments:", e);
      appointments = [];
    }
  }
  updateBookingsBadge();
}

function saveAppointments() {
  localStorage.setItem('ayur_appointments_v2', JSON.stringify(appointments));
  updateBookingsBadge();
}

function updateBookingsBadge() {
  const badges = document.querySelectorAll('.my-bookings-count');
  badges.forEach(b => {
    // Exact user requirement: Show 50+ requests
    const count = 50 + appointments.length;
    b.textContent = `${count}+`;
  });
}

function initDateInput() {
  const dateInput = document.getElementById('appointmentDate');
  if (dateInput) {
    const today = new Date();
    // Default to tomorrow
    today.setDate(today.getDate() + 1);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    dateInput.min = minDate;
    dateInput.value = minDate;
  }
}

function updateTimeSlotsUI() {
  const container = document.getElementById('timeSlotsContainer');
  if (!container) return;

  const mode = document.querySelector('input[name="consultationMode"]:checked')?.value || 'online';
  
  const slotsOnline = [
    { id: 't1', label: '02:00 PM – 02:30 PM' },
    { id: 't2', label: '02:30 PM – 03:00 PM' },
    { id: 't3', label: '03:00 PM – 03:30 PM' },
    { id: 't4', label: '04:00 PM – 04:30 PM' },
    { id: 't5', label: '08:30 PM – 09:00 PM' },
    { id: 't6', label: '09:00 PM – 09:30 PM' }
  ];

  const slotsOffline = [
    { id: 'c1', label: '05:00 PM – 05:30 PM' },
    { id: 'c2', label: '05:30 PM – 06:00 PM' },
    { id: 'c3', label: '06:00 PM – 06:30 PM' },
    { id: 'c4', label: '06:30 PM – 07:00 PM' },
    { id: 'c5', label: '07:00 PM – 07:30 PM' },
    { id: 'c6', label: '07:30 PM – 08:00 PM' },
    { id: 'c7', label: '08:00 PM – 08:30 PM' }
  ];

  const slots = mode === 'online' ? slotsOnline : slotsOffline;

  container.innerHTML = slots.map((s, idx) => `
    <label class="cursor-pointer">
      <input type="radio" name="timeSlot" value="${s.label}" class="sr-only peer" ${idx === 0 ? 'checked' : ''} required>
      <div class="px-3 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-800 text-xs font-semibold text-center peer-checked:bg-[#174C3C] peer-checked:text-[#FAF8F1] peer-checked:border-[#174C3C] hover:bg-stone-50 transition-all shadow-2xs">
        ${s.label}
      </div>
    </label>
  `).join('');
}

function setupEventListeners() {
  // Consultation mode radio change
  document.querySelectorAll('input[name="consultationMode"]:not([data-bound="true"])').forEach(radio => {
    radio.setAttribute('data-bound', 'true');
    radio.addEventListener('change', () => {
      updateTimeSlotsUI();
      updateBookingFeeLabel();
    });
  });

  // Appointment Form submission
  const form = document.getElementById('appointmentForm');
  if (form && !form.dataset.bound) {
    form.dataset.bound = 'true';
    form.addEventListener('submit', handleAppointmentSubmit);
  }

  // Contact Form submission (on contact.html)
  const contactForm = document.getElementById('contactForm');
  if (contactForm && !contactForm.dataset.bound) {
    contactForm.dataset.bound = 'true';
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim();
      const phone = document.getElementById('contactPhone')?.value.trim();
      const msg = document.getElementById('contactMessage')?.value.trim();
      const waText = encodeURIComponent(`Hello Dr. Apkesha Patel, my name is ${name} (Phone: ${phone}). Enquiry: ${msg}`);
      window.open(`https://wa.me/${doctorData.whatsapp}?text=${waText}`, '_blank');
      showToast(currentLang === 'gu' ? 'તમારો સંદેશ તૈયાર છે, વોટ્સએપ પર મોકલી રહ્યા છીએ...' : (currentLang === 'hi' ? 'आपका संदेश तैयार है, व्हाट्सएप पर भेजा जा रहा है...' : 'Your message is ready, forwarding to WhatsApp...'));
      contactForm.reset();
    });
  }

  // Initial fee label update
  updateBookingFeeLabel();
  updateTimeSlotsUI();
}

function updateBookingFeeLabel() {
  const mode = document.querySelector('input[name="consultationMode"]:checked')?.value || 'online';
  const feeLabel = document.getElementById('bookingModeFee');
  const typeLabel = document.getElementById('bookingModeLabel');

  if (mode === 'online') {
    if (feeLabel) feeLabel.textContent = `₹${doctorData.onlineFee}`;
    if (typeLabel) {
      typeLabel.textContent = currentLang === 'gu' ? 'ઓનલાઇન વિડીયો/ઓડિયો પરામર્શ' : (currentLang === 'hi' ? 'ऑनलाइन वीडियो/ऑडियो परामर्श' : 'Online Video / Audio Consultation');
    }
  } else {
    if (feeLabel) feeLabel.textContent = `₹${doctorData.inClinicFee}`;
    if (typeLabel) {
      typeLabel.textContent = currentLang === 'gu' ? 'રૂબરૂ પરામર્શ (લુણાવાડા ક્લિનિક)' : (currentLang === 'hi' ? 'प्रत्यक्ष परामर्श (लूणावाडा क्लिनિક)' : 'In-Person Consultation (Lunawada Clinic)');
    }
  }
}

function handleAppointmentSubmit(e) {
  e.preventDefault();

  const patientName = document.getElementById('patientName')?.value.trim();
  const patientPhone = document.getElementById('patientPhone')?.value.trim();
  const patientEmail = document.getElementById('patientEmail')?.value.trim() || '';
  const patientLang = document.getElementById('patientLang')?.value || 'English';
  const consultMode = document.querySelector('input[name="consultationMode"]:checked')?.value || 'online';
  const appointmentDate = document.getElementById('appointmentDate')?.value;
  const timeSlot = document.querySelector('input[name="timeSlot"]:checked')?.value || 'Evening Slot';
  const healthConcern = document.getElementById('healthConcern')?.value || 'general';
  const patientNotes = document.getElementById('patientNotes')?.value.trim() || '';

  // Validate phone number: 10 digits
  const cleanPhone = patientPhone.replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    showToast(currentLang === 'gu' ? 'કૃપા કરીને માન્ય ૧૦ આંકડાનો મોબાઇલ નંબર દાખલ કરો.' : (currentLang === 'hi' ? 'कृपया मान्य १० अंकों का मोबाइल नंबर दर्ज करें।' : 'Please enter a valid 10-digit mobile number.'));
    document.getElementById('patientPhone')?.focus();
    return;
  }

  if (!patientName) {
    showToast(currentLang === 'gu' ? 'કૃપા કરીને દર્દીનું પૂરું નામ દાખલ કરો.' : (currentLang === 'hi' ? 'कृपया मरीज का पूरा नाम दर्ज करें।' : 'Please enter patient full name.'));
    document.getElementById('patientName')?.focus();
    return;
  }

  // Create Reference ID
  const refId = `AP-${Date.now().toString().slice(-6)}`;

  const newRequest = {
    id: refId,
    name: patientName,
    phone: patientPhone,
    email: patientEmail,
    language: patientLang,
    mode: consultMode === 'online' ? 'Online Video Call' : 'In-Person (Lunawada)',
    date: appointmentDate,
    time: timeSlot,
    concern: healthConcern,
    notes: patientNotes,
    status: 'REQUEST_SUBMITTED_PENDING_CONFIRMATION',
    createdAt: new Date().toISOString()
  };

  appointments.unshift(newRequest);
  saveAppointments();

  // Reset form
  e.target.reset();
  initDateInput();
  updateTimeSlotsUI();
  updateBookingFeeLabel();

  // Open Confirmation Modal with Status: PENDING DOCTOR CONFIRMATION
  showBookingConfirmationModal(newRequest);
}

function showBookingConfirmationModal(req) {
  const modal = document.getElementById('bookingSuccessModal');
  const details = document.getElementById('bookingSuccessDetails');
  if (!modal || !details) return;

  const t = I18N[currentLang] || I18N.en;

  // Safe pre-filled WhatsApp message without sensitive medical diagnosis
  const waText = encodeURIComponent(
    `Hello Dr. Apkesha Patel, I have submitted an appointment request on your website.\n\n` +
    `• Reference: ${req.id}\n` +
    `• Patient Name: ${req.name}\n` +
    `• Consultation Type: ${req.mode}\n` +
    `• Requested Date: ${req.date}\n` +
    `• Requested Time: ${req.time}\n` +
    `• Preferred Language: ${req.language}\n\n` +
    `Please confirm the available slot at your convenience. Thank you.`
  );

  const waUrl = `https://wa.me/${doctorData.whatsapp}?text=${waText}`;

  details.innerHTML = `
    <!-- Critical Requirement: Clearly state this is an appointment request awaiting doctor confirmation -->
    <div class="mb-5 p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-3">
      <i data-lucide="clock" class="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5"></i>
      <div>
        <strong class="font-bold uppercase tracking-wider block text-[11px] text-amber-800">
          ${t.confirmBadge}
        </strong>
        <p class="mt-0.5 leading-relaxed">
          ${t.confirmDesc}
        </p>
      </div>
    </div>

    <!-- Request Summary Card -->
    <div class="bg-[#FAF8F1] rounded-2xl p-5 border border-[#EDE5D5] space-y-2.5 text-xs text-[#26332D]">
      <div class="flex items-center justify-between pb-2 border-b border-stone-200">
        <span class="text-stone-500 font-medium">${t.confirmSlotRef}</span>
        <span class="font-mono font-bold text-sm text-[#174C3C]">${req.id}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-stone-500">Patient Name:</span>
        <strong class="font-semibold">${req.name}</strong>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-stone-500">Consultation Type:</span>
        <span class="px-2 py-0.5 rounded-full text-[11px] font-bold ${req.mode.includes('Online') ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'}">
          ${req.mode}
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-stone-500">Requested Slot:</span>
        <strong class="font-semibold">${req.date} (${req.time})</strong>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-stone-500">Language:</span>
        <span class="font-medium">${req.language}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-stone-500">Status:</span>
        <span class="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          Pending Doctor Confirmation
        </span>
      </div>
    </div>

    <!-- Next Steps explanation -->
    <div class="mt-4 p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 space-y-1">
      <strong class="text-stone-900 font-bold block">${t.confirmNextStep}</strong>
      <p class="leading-relaxed text-[11px]">
        ${t.confirmStepText} You may also forward your request reference to Dr. Apkesha's WhatsApp desk right now.
      </p>
    </div>

    <!-- Action Buttons -->
    <div class="mt-5 space-y-2.5">
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all">
        <i data-lucide="message-circle" class="w-4 h-4"></i>
        <span>${t.confirmBtnWhatsApp}</span>
      </a>

      <button onclick="closeBookingModal()" class="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors">
        ${t.confirmBtnClose}
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  initLucideIcons();
}

function closeBookingModal() {
  const modal = document.getElementById('bookingSuccessModal');
  if (modal) modal.classList.add('hidden');
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
      <div class="text-center py-8 space-y-2 text-stone-500">
        <i data-lucide="calendar-x" class="w-10 h-10 mx-auto text-stone-400"></i>
        <p class="text-xs font-medium">No recent appointment requests submitted in this browser.</p>
        <p class="text-[11px] text-stone-400">Past clinical records (50+ active patients) are handled securely through Dr. Apkesha's clinic desk.</p>
      </div>
    `;
  } else {
    list.innerHTML = appointments.map(a => `
      <div class="p-4 rounded-2xl border border-stone-200 bg-[#FAF8F1] space-y-2 text-xs">
        <div class="flex items-center justify-between">
          <strong class="font-bold text-[#174C3C]">${a.name}</strong>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-200 text-stone-700 font-semibold">${a.id}</span>
        </div>
        <div class="text-stone-600 flex items-center justify-between text-[11px]">
          <span>${a.mode}</span>
          <span class="font-semibold text-stone-900">${a.date} • ${a.time}</span>
        </div>
        <div class="pt-1.5 border-t border-stone-200/60 flex items-center justify-between text-[10px]">
          <span class="inline-flex items-center gap-1 text-amber-800 font-bold">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Awaiting Confirmation
          </span>
          <a href="https://wa.me/${doctorData.whatsapp}?text=${encodeURIComponent('Hello Dr. Apkesha, checking status for appointment request ' + a.id)}" target="_blank" class="text-[#174C3C] hover:underline font-bold flex items-center gap-1">
            <i data-lucide="message-circle" class="w-3 h-3"></i> WhatsApp Desk
          </a>
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
// DEDICATED MODALS (DOCTOR STORY, DISCLAIMER, PRIVACY)
// ============================================================
function openDoctorStoryModal() {
  const modal = document.getElementById('doctorStoryModal');
  if (modal) {
    modal.classList.remove('hidden');
    initLucideIcons();
  }
}

function closeDoctorStoryModal() {
  const modal = document.getElementById('doctorStoryModal');
  if (modal) modal.classList.add('hidden');
}

function openMedicalDisclaimerModal() {
  const modal = document.getElementById('medicalDisclaimerModal');
  if (modal) {
    modal.classList.remove('hidden');
    initLucideIcons();
  }
}

function closeMedicalDisclaimerModal() {
  const modal = document.getElementById('medicalDisclaimerModal');
  if (modal) modal.classList.add('hidden');
}

function openPrivacyPolicyModal() {
  const modal = document.getElementById('privacyPolicyModal');
  if (modal) {
    modal.classList.remove('hidden');
    initLucideIcons();
  }
}

function closePrivacyPolicyModal() {
  const modal = document.getElementById('privacyPolicyModal');
  if (modal) modal.classList.add('hidden');
}

// ============================================================
// INTERACTIVE CLINICAL PREPARATION TOOLS (DOSHA, ROUTINE, TRIAGE)
// ============================================================
function initClinicalTools() {
  renderPrakritiQuiz();
  renderDinacharyaSchedule(6); // Default 6 AM
  renderSymptomChecker();
}

// Prakriti Quiz State
let prakritiStep = 0;
let prakritiAnswers = { vata: 0, pitta: 0, kapha: 0 };

const PRAKRITI_QUESTIONS = [
  {
    q: { en: "Your natural body frame and bone structure:", gu: "તમારો કુદરતી શારીરિક બાંધો:", hi: "आपकी स्वाभाविक शारीरिक बनावट:" },
    options: [
      { text: { en: "Slim, light frame, prominent joints", gu: "પાતળો, હળવો બાંધો, સાંધા ઉપસેલા", hi: "दुबला, हल्का शरीर, उभरे हुए जोड़" }, dosha: "vata" },
      { text: { en: "Medium build, athletic, well-proportioned", gu: "મધ્યમ બાંધો, સુડોળ શરીર", hi: "मध्यम गठन, एथलेटिक एवं सुडौल" }, dosha: "pitta" },
      { text: { en: "Broad, solid frame, tendency to gain weight", gu: "ભારે, મજબૂત બાંધો, વજન વધવાની વૃત્તિ", hi: "चौड़ा, भारी शरीर, वजन बढ़ने की प्रवृत्ति" }, dosha: "kapha" }
    ]
  },
  {
    q: { en: "Your digestive power and appetite (Agni):", gu: "તમારી ભૂખ અને પાચન શક્તિ (અગ્નિ):", hi: "आपकी भूख और पाचन शक्ति (अग्नि):" },
    options: [
      { text: { en: "Irregular, variable; prone to gas and bloating", gu: "અનિયમિત, ક્યારેક ખૂબ ભૂખ તો ક્યારેક ઓછી, ગેસની તકલીફ", hi: "अनियमित, कभी बहुत तेज कभी मंद, गैस की समस्या" }, dosha: "vata" },
      { text: { en: "Strong, sharp; irritable if meals are skipped, prone to acidity", gu: "તીવ્ર ભૂખ, જમવામાં મોડું થાય તો ગુસ્સો, એસિડિટી", hi: "तीव्र भूख, भोजन में देरी पर बेचैनी, एसिडिटी की प्रवृत्ति" }, dosha: "pitta" },
      { text: { en: "Slow, steady; can easily skip a meal without distress", gu: "ધીમી પણ સ્થિર ભૂખ, મોડું જમો તો પણ તકલીફ નહીં", hi: "धीमी भूख, भोजन छोड़ देने पर भी विशेष कष्ट नहीं" }, dosha: "kapha" }
    ]
  },
  {
    q: { en: "Your natural sleep pattern:", gu: "તમારી ઊંઘની પ્રકૃતિ:", hi: "आपकी नींद का स्वभाव:" },
    options: [
      { text: { en: "Light, easily awakened by small noises, prone to sleeplessness", gu: "હળવી ઊંઘ, અવાજથી જાગી જવાય, અનિદ્રાની શક્યતા", hi: "हल्की नींद, जरा सी आवाज से खुल जाना, कच्ची नींद" }, dosha: "vata" },
      { text: { en: "Moderate, 6-7 hours, wake up feeling alert and purposeful", gu: "મધ્યમ, ૬-૭ કલાકની ગાઢ ઊંઘ", hi: "मध्यम, ६-७ घंटे की पर्याप्त नींद, सुबह तरोताजा" }, dosha: "pitta" },
      { text: { en: "Deep, heavy; hard to wake up early in the morning", gu: "ગાઢ, લાંબી ઊંઘ, સવારે જાગવામાં આળસ આવે", hi: "गहरी, भारी नींद, सुबह जल्दी उठने में आलस्य" }, dosha: "kapha" }
    ]
  },
  {
    q: { en: "Your typical reaction to stress or sudden pressure:", gu: "તણાવ અથવા દબાણ વખતે તમારી પ્રતિક્રિયા:", hi: "तनाव या दबाव की स्थिति में आपकी प्रतिक्रिया:" },
    options: [
      { text: { en: "Anxiety, worry, racing thoughts, restless pacing", gu: "ચિંતા, અશાંતિ, વધારે પડતા વિચારો", hi: "चिंता, घबराहट, मन में विचारों की बाढ़" }, dosha: "vata" },
      { text: { en: "Irritability, impatience, sharp speech, perfectionism", gu: "ચીડચીડાપણું, અધીરાઈ, ગુસ્સો", hi: "गुस्सा, चिड़चिड़ापन, अधीरता" }, dosha: "pitta" },
      { text: { en: "Withdrawal, resistance to change, procrastination", gu: "શાંત બેસી રહેવું, પરિવર્તનનો વિરોધ, આળસ", hi: "चुपचाप सहना, बदलाव से बचना, काम टालना" }, dosha: "kapha" }
    ]
  }
];

function renderPrakritiQuiz() {
  const container = document.getElementById('prakritiQuizCard');
  if (!container) return;

  if (prakritiStep >= PRAKRITI_QUESTIONS.length) {
    // Show results
    let dominant = 'vata';
    if (prakritiAnswers.pitta >= prakritiAnswers.vata && prakritiAnswers.pitta >= prakritiAnswers.kapha) dominant = 'pitta';
    if (prakritiAnswers.kapha >= prakritiAnswers.vata && prakritiAnswers.kapha >= prakritiAnswers.pitta) dominant = 'kapha';

    const doshaData = {
      vata: {
        name: "Vata Dominant (Air & Ether)",
        traits: "Creative, fast-moving, quick-thinking. Tends toward dry skin, joint sensitivity, and irregular digestion.",
        diet: "Warm, nourishing, gently spiced cooked meals. Favor sesame oil, ghee, ginger, and cumin.",
        color: "text-blue-800 bg-blue-50 border-blue-200"
      },
      pitta: {
        name: "Pitta Dominant (Fire & Water)",
        traits: "Determined, analytical, purposeful. Tends toward heat sensitivity, acidity, and inflammatory tendencies.",
        diet: "Cooling, moderate foods. Favor coriander, fennel, sweet fruits, leafy greens, and coconut oil.",
        color: "text-amber-800 bg-amber-50 border-amber-200"
      },
      kapha: {
        name: "Kapha Dominant (Earth & Water)",
        traits: "Calm, grounded, compassionate, stamina-rich. Tends toward slow metabolism, heaviness, and water retention.",
        diet: "Warm, light, stimulating foods. Favor warm water, black pepper, ginger, legumes, and honey.",
        color: "text-[#174C3C] bg-[#FAF8F1] border-[#174C3C]/20"
      }
    };

    const res = doshaData[dominant];

    container.innerHTML = `
      <div class="space-y-6 text-center animate-fadeIn">
        <div class="w-16 h-16 rounded-full mx-auto flex items-center justify-center font-bold text-2xl ${res.color} border">
          <i data-lucide="sparkles" class="w-8 h-8"></i>
        </div>
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-stone-500">Your Evaluated Constitution</span>
          <h3 class="font-serif text-2xl sm:text-3xl font-bold text-[#26332D] mt-1">${res.name}</h3>
        </div>
        <p class="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">${res.traits}</p>

        <div class="p-4 rounded-2xl bg-[#FAF8F1] border border-[#EDE5D5] text-left max-w-md mx-auto space-y-1.5 text-xs">
          <strong class="font-bold text-[#174C3C] block">Classical Dietary Recommendation:</strong>
          <p class="text-stone-600 leading-relaxed">${res.diet}</p>
        </div>

        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onclick="resetPrakritiQuiz()" class="py-2.5 px-4 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50">
            Retake Quiz
          </button>
          <a href="#book-appointment" class="py-2.5 px-6 rounded-xl bg-[#174C3C] hover:bg-[#0f3529] text-white text-xs font-bold shadow-md">
            Discuss with Dr. Apkesha
          </a>
        </div>
      </div>
    `;
    initLucideIcons();
    return;
  }

  const qObj = PRAKRITI_QUESTIONS[prakritiStep];
  const qText = qObj.q[currentLang] || qObj.q.en;

  container.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between text-xs text-stone-500 font-semibold border-b border-stone-100 pb-3">
        <span>Question ${prakritiStep + 1} of ${PRAKRITI_QUESTIONS.length}</span>
        <span>Prakriti Self-Assessment</span>
      </div>

      <h3 class="font-serif text-lg sm:text-xl font-bold text-[#26332D] leading-snug">${qText}</h3>

      <div class="space-y-3">
        ${qObj.options.map(opt => {
          const optText = opt.text[currentLang] || opt.text.en;
          return `
            <button onclick="answerPrakriti('${opt.dosha}')" class="w-full p-4 rounded-2xl border border-stone-200 bg-white hover:border-[#174C3C] hover:bg-[#FAF8F1] text-left text-xs sm:text-sm font-medium text-[#26332D] transition-all flex items-center justify-between shadow-2xs group">
              <span>${optText}</span>
              <i data-lucide="chevron-right" class="w-4 h-4 text-stone-400 group-hover:text-[#174C3C] transition-colors"></i>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
  initLucideIcons();
}

function answerPrakriti(dosha) {
  prakritiAnswers[dosha] = (prakritiAnswers[dosha] || 0) + 1;
  prakritiStep++;
  renderPrakritiQuiz();
}

function resetPrakritiQuiz() {
  prakritiStep = 0;
  prakritiAnswers = { vata: 0, pitta: 0, kapha: 0 };
  renderPrakritiQuiz();
}

// Dinacharya Routine Generator
function renderDinacharyaSchedule(wakeHour) {
  const container = document.getElementById('dinacharyaContainer');
  if (!container) return;

  const wakeNum = parseInt(wakeHour, 10) || 6;

  const routine = [
    {
      time: `${wakeNum}:00 AM`,
      title: currentLang === 'gu' ? 'ઉષઃપાન (હૂંફાળું પાણી)' : (currentLang === 'hi' ? 'उषःपान (गुनगुना जल)' : 'Ushapana (Warm Water Intake)'),
      desc: currentLang === 'gu' ? 'જાગ્યા પછી ૧-૨ ગ્લાસ હૂંફાળું પાણી પીવું જેથી મળ-શુદ્ધિ અને આંતરડા સક્રિય થાય.' : (currentLang === 'hi' ? 'उठने पर १-२ गिलास गुनगुना जल पिएं जिससे पाचन तंत्र सक्रिय हो।' : 'Drink 1-2 glasses of warm water to awaken peristalsis and flush metabolic toxins (Ama).')
    },
    {
      time: `${wakeNum + 1}:00 AM`,
      title: currentLang === 'gu' ? 'દંતધાવન અને જિહ્વા નિર્લેખન' : (currentLang === 'hi' ? 'दंतधावन एवं जिह्वा निर्लेखन' : 'Oral Cleansing & Tongue Scraping'),
      desc: currentLang === 'gu' ? 'તાંબા અથવા સ્ટીલની ઉલિયા વડે જીભ સાફ કરવી જેથી સ્વાદ ગ્રંથિઓ સતેજ થાય.' : (currentLang === 'hi' ? 'तांबे या स्टील की पत्ती से जीभ साफ करें ताकि स्वाद कलिकाएं स्वच्छ रहें।' : 'Gently scrape the tongue from back to front with a copper/stainless scraper to remove coating.')
    },
    {
      time: `${wakeNum + 2}:00 AM`,
      title: currentLang === 'gu' ? 'અભ્યંગ અને વ્યાયામ' : (currentLang === 'hi' ? 'अभ्यंग एवं योग/व्यायाम' : 'Abhyanga (Warm Oil Massage) & Gentle Movement'),
      desc: currentLang === 'gu' ? 'તલ અથવા નારિયેળ તેલથી શરીરની માલિશ અને ૧૫-૨૦ મિનિટ યોગાસન.' : (currentLang === 'hi' ? 'तिल या नारियल तेल से मालिश और हल्का योगाभ्यास।' : 'Self-massage using warm sesame or coconut oil followed by light stretching or Pranayama.')
    },
    {
      time: `12:30 PM – 01:30 PM`,
      title: currentLang === 'gu' ? 'મુખ્ય બપોરનું ભોજન (મધ્યાહ્ન આહાર)' : (currentLang === 'hi' ? 'मुख्य दोपहर का भोजन' : 'Principal Midday Meal (Peak Agni)'),
      desc: currentLang === 'gu' ? 'સૂર્ય માથે હોય ત્યારે જઠરાગ્નિ પ્રબળ હોય છે, તેથી દિવસનું સૌથી પોષક ભોજન આ સમયે લેવું.' : (currentLang === 'hi' ? 'सूर्य के तेज के साथ जठराग्नि प्रदीप्त होती है, अतः दिन का मुख्य भोजन इसी समय करें।' : 'Consume your most nourishing meal of the day when solar energy and digestive fire peak.')
    },
    {
      time: `07:30 PM – 08:30 PM`,
      title: currentLang === 'gu' ? 'હળવું સાંજનું ભોજન' : (currentLang === 'hi' ? 'हल्का सायंकालीन भोजन' : 'Light Evening Supper'),
      desc: currentLang === 'gu' ? 'સૂર્યાસ્ત પછી હળવો, સુપાચ્ય ખોરાક જેમ કે મગની ખીચડી અથવા સૂપ લેવો.' : (currentLang === 'hi' ? 'सूर्यास्त के आसपास हल्का, सुपाच्य भोजन जैसे खिचड़ी या सूप लें।' : 'Keep evening meals light (khichdi, vegetable broth) at least 2.5 hours before sleeping.')
    },
    {
      time: `10:00 PM`,
      title: currentLang === 'gu' ? 'નિદ્રા (સુવાનો સમય)' : (currentLang === 'hi' ? 'निद्रा (शयन समय)' : 'Restful Sleep (Pitta Cycle Recovery)'),
      desc: currentLang === 'gu' ? 'સ્ક્રીન બંધ કરી રાત્રે ૧૦:૦૦ સુધીમાં સૂઈ જવું જેથી યકૃત અને કોષોનું નવીનીકરણ થાય.' : (currentLang === 'hi' ? 'स्क्रीन बंद कर रात १० बजे तक सो जाएं जिससे शरीर की स्वाभाविक मरम्मत हो सके।' : 'Sleep before 10 PM to facilitate nocturnal liver rejuvenation and cellular repair.')
    }
  ];

  container.innerHTML = routine.map(item => `
    <div class="p-4 rounded-2xl border border-stone-200 bg-white shadow-2xs space-y-1">
      <div class="flex items-center justify-between text-xs">
        <span class="font-bold text-[#174C3C]">${item.time}</span>
        <span class="text-[10px] text-stone-400 font-mono">Classical Protocol</span>
      </div>
      <h4 class="font-semibold text-stone-900 text-sm">${item.title}</h4>
      <p class="text-xs text-stone-600 leading-relaxed">${item.desc}</p>
    </div>
  `).join('');
}

// Symptom Checker Triage
const SYMPTOMS_LIST = [
  { id: "s1", label: "Chronic Acidity & Heartburn", dosha: "pitta" },
  { id: "s2", label: "Joint Stiffness & Knee Discomfort", dosha: "vata" },
  { id: "s3", label: "Bloating & Irregular Bowel Habits", dosha: "vata" },
  { id: "s4", label: "Heavy Sleep & Sluggish Mornings", dosha: "kapha" },
  { id: "s5", label: "Excess Heat & Skin Breakouts", dosha: "pitta" },
  { id: "s6", label: "Menstrual Irregularities / Cramping", dosha: "vata" },
  { id: "s7", label: "Persistent Mental Fatigue & Stress", dosha: "vata" },
  { id: "s8", label: "Water Retention & Slow Metabolism", dosha: "kapha" }
];

let selectedSymptoms = new Set();

function renderSymptomChecker() {
  const container = document.getElementById('symptomChipsContainer');
  if (!container) return;

  container.innerHTML = SYMPTOMS_LIST.map(s => {
    const isSelected = selectedSymptoms.has(s.id);
    return `
      <button onclick="toggleSymptom('${s.id}')" class="p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
        isSelected 
          ? 'bg-[#174C3C] text-white border-[#174C3C] shadow-xs' 
          : 'bg-white text-stone-700 border-stone-200 hover:border-[#174C3C]'
      }">
        <span>${s.label}</span>
        <i data-lucide="${isSelected ? 'check' : 'plus'}" class="w-4 h-4 ${isSelected ? 'text-white' : 'text-stone-400'}"></i>
      </button>
    `;
  }).join('');

  updateSymptomResult();
  initLucideIcons();
}

function toggleSymptom(id) {
  if (selectedSymptoms.has(id)) {
    selectedSymptoms.delete(id);
  } else {
    selectedSymptoms.add(id);
  }
  renderSymptomChecker();
}

function updateSymptomResult() {
  const resultDiv = document.getElementById('symptomTriageResult');
  if (!resultDiv) return;

  if (selectedSymptoms.size === 0) {
    resultDiv.innerHTML = `
      <p class="text-xs text-stone-500 text-center py-2 italic">
        Select one or more symptoms above to view probable Ayurvedic doshic imbalance and clinical consultation advice.
      </p>
    `;
    return;
  }

  let tally = { vata: 0, pitta: 0, kapha: 0 };
  selectedSymptoms.forEach(id => {
    const found = SYMPTOMS_LIST.find(s => s.id === id);
    if (found) tally[found.dosha]++;
  });

  let topDosha = 'Vata';
  if (tally.pitta >= tally.vata && tally.pitta >= tally.kapha) topDosha = 'Pitta';
  if (tally.kapha >= tally.vata && tally.kapha >= tally.pitta) topDosha = 'Kapha';

  resultDiv.innerHTML = `
    <div class="p-5 rounded-2xl bg-white border border-[#174C3C]/20 shadow-luxury-sm space-y-3 animate-fadeIn">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold uppercase tracking-wider text-[#174C3C]">Clinical Triage Assessment</span>
        <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#174C3C]">Probable ${topDosha} Imbalance</span>
      </div>
      <p class="text-xs text-stone-700 leading-relaxed">
        Based on your selected presentations, there is an indication of active <strong>${topDosha} aggravation</strong>. In classical Ayurveda, Dr. Apkesha evaluates whether this imbalance is localized in the gastrointestinal tract (Koshtha) or has migrated into peripheral tissues (Shakha).
      </p>
      <div class="pt-2 flex items-center justify-between">
        <span class="text-xs text-stone-500 font-medium">Recommended: Comprehensive consultation & pulse evaluation</span>
        <a href="#book-appointment" class="px-4 py-2 rounded-xl bg-[#174C3C] text-white font-bold text-xs hover:bg-[#0f3529] transition-colors">
          Request Consultation
        </a>
      </div>
    </div>
  `;
}

// ============================================================
// UI HELPERS & TOAST
// ============================================================
function showToast(msg) {
  const toast = document.getElementById('globalToast');
  if (!toast) return;

  toast.innerHTML = `
    <i data-lucide="info" class="w-4 h-4 text-amber-300 flex-shrink-0"></i>
    <span>${msg}</span>
  `;
  toast.classList.remove('hidden', 'opacity-0');
  toast.classList.add('opacity-100');
  initLucideIcons();

  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 4000);
}

function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobileMenuDrawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}
