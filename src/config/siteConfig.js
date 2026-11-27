export const siteConfig = {
  name: "Advocate K. Ravi Kiran",
  shortName: "K. Ravi Kiran",
  alternateName: "Ravi Kiran Kumar Kolusu",
  designation: "Advocate",
  qualification: "B.A., LL.B.",
  college: "Smt. V.D. Siddhardha Law College, Vijayawada",
  practiceSince: "2003",
  city: "Vijayawada",
  state: "Andhra Pradesh",
  country: "India",

  // Both contact numbers are used throughout the website.
  phoneDisplay: "+91 94910 34572",
  phone: "+919491034572",
  phoneDisplay2: "+91 93963 43345",
  phone2: "+919396343345",

  // WhatsApp enquiries are directed to the second number.
  whatsapp: "919396343345",

  facebook: "https://www.facebook.com/share/18pvpsp3mE/",
  profileImage: "/images/advocate-profile.png",
  siteUrl: "https://k-ravi-kiran-adv.vercel.app/",
  address: "Vijayawada, Andhra Pradesh, India",
  email: "",
  theme: {
    green: "#153D32",
    deepGreen: "#102B25",
    gold: "#C6A66B",
    ivory: "#F8F6F0",
    charcoal: "#292D32",
  },
  seo: {
    title: "Advocate K. Ravi Kiran | Lawyer in Vijayawada, Andhra Pradesh",
    description:
      "Advocate K. Ravi Kiran (Ravi Kiran Kumar Kolusu), B.A., LL.B., practising since 2003 in Vijayawada, Andhra Pradesh. Main practice at the High Court of Andhra Pradesh. Professional information about writ petitions, SAAP Standing Counsel responsibilities and mediation.",
  },
  gallery: Array.from({ length: 7 }, (_, index) => ({
    src: `/images/gallery/img${index + 1}.jpeg`,
    alt: `Professional gallery photograph ${index + 1} for Advocate K. Ravi Kiran`,
  })),
};

export const practiceAreas = [
  {
    title: "Civil Litigation",
    icon: "Scale",
    description:
      "Civil suits, disputes, appeals, property-related claims and applicable proceedings under the CPC.",
  },
  {
    title: "Criminal Litigation",
    icon: "Shield",
    description:
      "Criminal litigation, defence, appeals and proceedings under applicable criminal laws.",
  },
  {
    title: "Writ Petitions",
    icon: "Landmark",
    description:
      "Writ petitions and constitutional, administrative or statutory proceedings, including service-related matters.",
  },
  {
    title: "Bail Matters",
    icon: "FileCheck",
    description:
      "Regular bail, anticipatory bail applications and related criminal proceedings.",
  },
  {
    title: "Service Matters",
    icon: "BriefcaseBusiness",
    description:
      "Employment-related disputes, government service matters and related proceedings.",
  },
  {
    title: "Property & Land Matters",
    icon: "Building2",
    description:
      "Land, ownership, title and property-related civil disputes.",
  },
  {
    title: "Motor Vehicle Matters",
    icon: "Car",
    description:
      "Applicable matters and proceedings under the Motor Vehicles Act.",
  },
  {
    title: "NI Act Matters",
    icon: "ReceiptText",
    description:
      "Cheque dishonour and related proceedings under the Negotiable Instruments Act.",
  },
];

export const courtForums = [
  "High Court of Andhra Pradesh",
  "High Court of Telangana",
  "Additional District Court, Vijayawada",
  "Junior Civil Court, Vijayawada",
  "Other applicable district and appellate forums",
];

export const faqs = [
  [
    "What types of legal matters can I enquire about?",
    "You may enquire about civil, criminal, writ, bail, service, property, motor vehicle and Negotiable Instruments Act matters. Whether a matter can be accepted depends on its facts, jurisdiction and professional engagement.",
  ],
  [
    "Where is Advocate K. Ravi Kiran based?",
    "The supplied professional information identifies Vijayawada, Andhra Pradesh, India as the advocate's base.",
  ],
  [
    "Which High Court is his main practice forum?",
    "The supplied information identifies the High Court of Andhra Pradesh as his main practice forum. It also refers to professional practice involving the High Court of Telangana.",
  ],
  [
    "What professional highlights are listed?",
    "The supplied profile identifies Standing Counsel responsibilities for SAAP and the Unorganised Sector of Andhra Pradesh, expertise in all types of writ petition matters and training as a mediator.",
  ],
  [
    "How can I make an enquiry?",
    "Use either telephone number displayed on this website or the WhatsApp contact option. Avoid sending confidential documents or unnecessary sensitive information in an initial message.",
  ],
  [
    "Does submitting an enquiry create an advocate-client relationship?",
    "No. A website enquiry does not itself establish an advocate-client relationship. Any engagement is subject to appropriate confirmation and applicable professional requirements.",
  ],
];

export const seoPages = [
  {
    path: "/",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    heading: "Advocate K. Ravi Kiran – Vijayawada, Andhra Pradesh",
    intro:
      "Professional profile and legal practice information for Advocate K. Ravi Kiran, also known as Ravi Kiran Kumar Kolusu, based in Vijayawada, Andhra Pradesh.",
  },
  {
    path: "/advocate-k-ravi-kiran-vijayawada/",
    title: "Advocate K. Ravi Kiran in Vijayawada | Professional Profile",
    description:
      "Professional profile of Advocate K. Ravi Kiran, also known as Ravi Kiran Kumar Kolusu, B.A., LL.B., based in Vijayawada, Andhra Pradesh.",
    heading: "Advocate K. Ravi Kiran in Vijayawada",
    intro:
      "Advocate K. Ravi Kiran, also listed as Ravi Kiran Kumar Kolusu, holds a B.A., LL.B. degree from Smt. V.D. Siddhardha Law College, Vijayawada. The supplied profile states that his practice began in 2003 and that his main practice is at the High Court of Andhra Pradesh.",
  },
  {
    path: "/civil-lawyer-vijayawada/",
    title: "Civil Litigation | Advocate K. Ravi Kiran, Vijayawada",
    description:
      "Information about civil litigation, civil disputes, property-related claims and applicable CPC matters in Vijayawada.",
    heading: "Civil Litigation in Vijayawada",
    intro:
      "The practice information supplied for Advocate K. Ravi Kiran includes civil litigation, civil disputes, appeals and property-related matters, subject to the facts and jurisdiction of each case.",
  },
  {
    path: "/criminal-lawyer-vijayawada/",
    title: "Criminal Litigation | Advocate K. Ravi Kiran, Vijayawada",
    description:
      "Professional information about criminal litigation and defence matters handled by Advocate K. Ravi Kiran in Vijayawada.",
    heading: "Criminal Litigation in Vijayawada",
    intro:
      "Advocate K. Ravi Kiran's supplied practice profile includes criminal litigation, criminal defence and related proceedings under applicable laws.",
  },
  {
    path: "/bail-advocate-vijayawada/",
    title: "Bail Matters | Advocate K. Ravi Kiran, Vijayawada",
    description:
      "Information about regular bail, anticipatory bail and related criminal proceedings in Vijayawada.",
    heading: "Bail Matters in Vijayawada",
    intro:
      "The supplied practice information includes bail applications and related criminal proceedings. Advice and representation depend on the facts, applicable law and jurisdiction.",
  },
  {
    path: "/writ-petition-advocate/",
    title: "Writ Petitions | Advocate K. Ravi Kiran",
    description:
      "Information about writ petitions, constitutional remedies and related service matters.",
    heading: "Writ Petitions and Constitutional Matters",
    intro:
      "The supplied professional profile includes all types of writ petition matters, including service-related matters, before appropriate forums subject to jurisdiction and authorization.",
  },
  {
    path: "/service-matter-advocate/",
    title: "Service Matters | Advocate K. Ravi Kiran",
    description:
      "Information about service-related legal matters and proceedings handled by Advocate K. Ravi Kiran.",
    heading: "Service Matters",
    intro:
      "The supplied practice information includes service matters and related writ proceedings. The appropriate legal route depends on the specific facts and applicable rules.",
  },
  {
    path: "/property-dispute-lawyer-vijayawada/",
    title: "Property & Land Matters | Advocate K. Ravi Kiran",
    description:
      "Information about property, land, ownership and title-related civil disputes in Vijayawada.",
    heading: "Property and Land Matters in Vijayawada",
    intro:
      "The supplied practice profile includes property and land disputes, ownership issues and related civil proceedings.",
  },
];
