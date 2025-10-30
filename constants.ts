
import { Project, Testimonial, GalleryItem } from './types';

export const TEXT_CONTENT = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navProjects: "Our Work",
    navGallery: "Gallery",
    navContact: "Contact Us",
    donateNow: "Donate Now",
    mainTitle: "Shri Baba Tileshwar Ram Samaj Seva Trust",
    tagline: "Serving Humanity with Compassion and Faith.",
    subheading: "Together, we bring hope to those in need.",
    learnMore: "Learn More",
    missionStatement: "We aim to bring light to lives through service, love, and social upliftment.",
    donationMessage: "Even a small contribution can change someone’s life. Support our cause today.",
    thankYouPageText: "Thank you! Your contribution will make a real difference. Please download your receipt below.",
    ourMission: "Our Mission",
    ourVision: "Our Vision",
    ourPurpose: "Our Purpose",
    founders: "Our Founders",
    manager: "Manager",
    assistantManager: "Assistant Manager",
    address: "Address",
    getInTouch: "Get in Touch",
    contactFormTitle: "Send us a Message",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    message: "Message",
    sendMessage: "Send Message",
    quickMessage: "Quick Message on WhatsApp",
    ourProjects: "Our Projects",
    donateForCause: "Donate for this cause",
    makeDonation: "Make a Donation",
    oneTime: "One-time",
    recurring: "Recurring",
    chooseAmount: "Choose an amount (₹)",
    customAmount: "Custom Amount",
    donateAnonymously: "Donate Anonymously",
    personalInfo: "Personal Information",
    yourMessage: "Your Message (Optional)",
    donationSuccess: "Donation Successful!",
    donationSuccessMsg: "Thank you for your generous contribution. Your support helps us continue our mission. A receipt has been sent to your email.",
    downloadReceipt: "Download Receipt (PDF)",
    backToHome: "Back to Home",
    testimonials: "Testimonials",
    galleryTitle: "Moments of Hope",
  },
  hi: {
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navProjects: "हमारे कार्य",
    navGallery: "गैलरी",
    navContact: "संपर्क करें",
    donateNow: "अब दान करें",
    mainTitle: "श्री बाबा तिलेश्वर राम समाज सेवा ट्रस्ट",
    tagline: "करुणा और विश्वास के साथ मानवता की सेवा।",
    subheading: "हम सब मिलकर जरूरतमंदों के लिए आशा लाते हैं।",
    learnMore: "और जानें",
    missionStatement: "हमारा उद्देश्य सेवा, प्रेम और सामाजिक उत्थान के माध्यम से जीवन में प्रकाश लाना है।",
    donationMessage: "एक छोटा सा योगदान भी किसी का जीवन बदल सकता है। आज ही हमारे उद्देश्य का समर्थन करें।",
    thankYouPageText: "धन्यवाद! आपका योगदान एक वास्तविक अंतर लाएगा। कृपया नीचे अपनी रसीद डाउनलोड करें।",
    ourMission: "हमारा मिशन",
    ourVision: "हमारी दृष्टि",
    ourPurpose: "हमारा उद्देश्य",
    founders: "हमारे संस्थापक",
    manager: "प्रबंधक",
    assistantManager: "सहायक प्रबंधक",
    address: "पता",
    getInTouch: "संपर्क में रहें",
    contactFormTitle: "हमें एक संदेश भेजें",
    fullName: "पूरा नाम",
    email: "ईमेल पता",
    phone: "फ़ोन नंबर",
    message: "संदेश",
    sendMessage: "संदेश भेजें",
    quickMessage: "व्हाट्सएप पर त्वरित संदेश",
    ourProjects: "हमारी परियोजनाएं",
    donateForCause: "इस कार्य के लिए दान करें",
    makeDonation: "दान करें",
    oneTime: "एक बार",
    recurring: "आवर्ती",
    chooseAmount: "राशि चुनें (₹)",
    customAmount: "अन्य राशि",
    donateAnonymously: "गुमनाम रूप से दान करें",
    personalInfo: "व्यक्तिगत जानकारी",
    yourMessage: "आपका संदेश (वैकल्पिक)",
    donationSuccess: "दान सफल!",
    donationSuccessMsg: "आपके उदार योगदान के लिए धन्यवाद। आपका समर्थन हमें हमारे मिशन को जारी रखने में मदद करता है। एक रसीद आपके ईमेल पर भेज दी गई है।",
    downloadReceipt: "रसीद डाउनलोड करें (पीडीएफ)",
    backToHome: "होम पर वापस जाएं",
    testimonials: "प्रशंसापत्र",
    galleryTitle: "आशा के क्षण",
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    category: { en: 'Education', hi: 'शिक्षा' },
    title: { en: 'Children\'s Education Initiative', hi: 'बच्चों की शिक्षा पहल' },
    description: { en: 'Providing free education and learning materials to underprivileged children in rural areas.', hi: 'ग्रामीण क्षेत्रों में वंचित बच्चों को मुफ्त शिक्षा और शिक्षण सामग्री प्रदान करना।' },
    imageUrl: 'https://picsum.photos/seed/education/600/400'
  },
  {
    id: 2,
    category: { en: 'Medical Aid', hi: 'चिकित्सा सहायता' },
    title: { en: 'Community Health Camps', hi: 'सामुदायिक स्वास्थ्य शिविर' },
    description: { en: 'Organizing free health check-up camps and distributing essential medicines in remote villages.', hi: 'दूरदराज के गांवों में मुफ्त स्वास्थ्य जांच शिविरों का आयोजन और आवश्यक दवाओं का वितरण।' },
    imageUrl: 'https://picsum.photos/seed/medical/600/400'
  },
  {
    id: 3,
    category: { en: 'Food Distribution', hi: 'भोजन वितरण' },
    title: { en: 'Daily Meal Program', hi: 'दैनिक भोजन कार्यक्रम' },
    description: { en: 'Serving nutritious meals to the homeless and daily wage earners who struggle for food.', hi: 'बेघर और दिहाड़ी मजदूरों को पौष्टिक भोजन परोसना जो भोजन के लिए संघर्ष करते हैं।' },
    imageUrl: 'https://picsum.photos/seed/food/600/400'
  },
  {
    id: 4,
    category: { en: 'Women Empowerment', hi: 'महिला सशक्तिकरण' },
    title: { en: 'Skill Development Workshops', hi: 'कौशल विकास कार्यशालाएं' },
    description: { en: 'Empowering women by providing vocational training and helping them start small businesses.', hi: 'महिलाओं को व्यावसायिक प्रशिक्षण प्रदान करके और उन्हें छोटे व्यवसाय शुरू करने में मदद करके सशक्त बनाना।' },
    imageUrl: 'https://picsum.photos/seed/women/600/400'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    quote: {
      en: "This trust gave my daughter a chance to go to school. I am forever grateful for their support.",
      hi: "इस ट्रस्ट ने मेरी बेटी को स्कूल जाने का मौका दिया। मैं उनके समर्थन के लिए हमेशा आभारी रहूंगा।"
    },
    name: { en: "Sunita Devi", hi: "सुनीता देवी" },
    role: { en: "Parent of a student", hi: "एक छात्रा की माता-पिता" },
    imageUrl: "https://picsum.photos/seed/person1/100/100"
  },
  {
    id: 2,
    quote: {
      en: "The medical camp in our village was a blessing. Many of us received treatment we couldn't afford.",
      hi: "हमारे गाँव में चिकित्सा शिविर एक आशीर्वाद था। हममें से कई लोगों को वह इलाज मिला जो हम नहीं करा सकते थे।"
    },
    name: { en: "Ramesh Kumar", hi: "रमेश कुमार" },
    role: { en: "Village Resident", hi: "ग्राम निवासी" },
    imageUrl: "https://picsum.photos/seed/person2/100/100"
  },
  {
    id: 3,
    quote: {
      en: "Because of the skill workshop, I can now support my family. It has changed my life.",
      hi: "कौशल कार्यशाला के कारण, अब मैं अपने परिवार का समर्थन कर सकती हूँ। इसने मेरा जीवन बदल दिया है।"
    },
    name: { en: "Priya Singh", hi: "प्रिया सिंह" },
    role: { en: "Workshop Beneficiary", hi: "कार्यशाला लाभार्थी" },
    imageUrl: "https://picsum.photos/seed/person3/100/100"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/gallery1/600/400', caption: { en: 'Distributing books to children', hi: 'बच्चों को किताबें बांटते हुए' } },
  { id: 2, imageUrl: 'https://picsum.photos/seed/gallery2/600/400', caption: { en: 'A doctor checking a patient at our health camp', hi: 'हमारे स्वास्थ्य शिविर में एक डॉक्टर मरीज की जांच कर रहा है' } },
  { id: 3, imageUrl: 'https://picsum.photos/seed/gallery3/600/400', caption: { en: 'Serving warm meals to the needy', hi: 'जरूरतमंदों को गर्म भोजन परोसते हुए' } },
  { id: 4, imageUrl: 'https://picsum.photos/seed/gallery4/600/400', caption: { en: 'Women learning new skills at our workshop', hi: 'हमारी कार्यशाला में महिलाएं नए कौशल सीख रही हैं' } },
  { id: 5, imageUrl: 'https://picsum.photos/seed/gallery5/600/400', caption: { en: 'Community gathering for a local event', hi: 'एक स्थानीय कार्यक्रम के लिए सामुदायिक सभा' } },
  { id: 6, imageUrl: 'https://picsum.photos/seed/gallery6/600/400', caption: { en: 'Volunteers working together for a cause', hi: 'स्वयंसेवक एक उद्देश्य के लिए मिलकर काम कर रहे हैं' } },
];
