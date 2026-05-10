// School Information Data
export const schoolInfo = {
  name: "Arista International Senior Secondary School",
  tagline: "Excellence in Education",
  motto: "Innovation In Education",

  vision: "To create a nurturing learning environment where every child discovers their true potential. We aim to inspire curiosity, creativity, and confidence in young minds. Our vision is to develop responsible citizens equipped for the challenges of tomorrow.",

  mission: "To provide quality education that blends academic excellence with strong moral values. We focus on holistic development through dedicated teaching, discipline, and care. Our mission is to shape lifelong learners and compassionate leaders of society.",
  
  // Contact Information
  contact: {
    phone: {
      principal: "+91 735872 2667",
      assistantOfficer: "+91 93601 66844"
    },
    email: {
      school: "mrspublicschool456@gmail.com",
    },
    address: {
      street: "Transport Nagar",
      city: "Gobichettipalayam, Erode",
      state: "Tamil Nadu",
      pincode: "638 456",
      country: "India",
      full: "Transport Nagar, Kolappalur(Po)"
    }
  },

  // Leadership Team
  leadership: {
    principal: {
      name: "Dr.S.Pradeep",
      position: "Principal",
      experience: "10+ years in education",
      education: " M.Com,MBA,MSc-Psy,Yoga,MEd,MJMC,PhD.",
      description: "Passionate about creating inclusive learning environments that foster academic excellence and character development.",
      email: "mrspublicschool456@gmail.com",
      phone: "+91 73587 22667",
      photo: "/Principal.jpeg"
    },
    AssistantOfficer: {
      name: "Mrs. Vasanthi.G",
      position: "Assistant Officer",
      experience: "3+ years in administration", 
      education: "MCA, M.Phil, B.Ed.",
      description: "Dedicated to implementing innovative teaching methodologies and supporting faculty development.",
      email: "mrspublicschool456@gmail.com",
      phone: "+91 93601 66846"
    },
  },

  // Office Hours
  officeHours: {
    weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
    sunday: "Sunday: Closed",
    details: [
      { label: "Monday - Friday", value: "9:00 AM - 5:00 PM" },
      { label: "Sunday", value: "Closed" }
    ]
  },

  // School Statistics
  stats: {
    students: "200+",
    yearsOfExcellence: "8+", 
    awards: "150+",
    successRate: "98%",
    faculty: "30+",
    established: "2018"
  },

  // Social Media
  socialMedia: {
    youtube: "http://www.youtube.com/@AristaSecondarySchool-TN36",
    instagram: "https://www.instagram.com/arista_international_cbse?igsh=MTJ4dGFpZzJ4b3J0Yg==",
  },

  // Academic Programs
  academicPrograms: [
    "Pre-Primary (Nursery - UKG)",
    "Primary (Class I - V)", 
    "Middle School (Class VI - VIII)",
    "Secondary (Class IX - X)",
  ]
};

// Departments Data
export const departments = [
  {
    name: "Principal's Office",
    phone: "+91 73587 22667",
    description: "Academic policies, student discipline, general school matters",
    head : "Dr.S.Pradeep"
  },
  {
    name: "Administration",
    phone: "+91 93601 66846",
    description: "General administration, facilities, transportation", 
    head : "Mrs. Vasanthi.G"
  }
];

// Contact Information for different sections
export const contactInfo = [
  {
    title: "Phone Numbers",
    details: [
      { label: "Principal's Office", value: schoolInfo.contact.phone.principal },
      { label: "Assistant Officer", value: schoolInfo.contact.phone.assistantOfficer }
    ]
  },
  {
    title: "Email Addresses", 
    details: [
      { label: "School Email", value: schoolInfo.contact.email.school }
    ]
  },
  {
    title: "Address",
    details: [
      { label: "Street", value: schoolInfo.contact.address.street },
      { label: "Full Address", value: schoolInfo.contact.address.full },
      { label: "City & State", value: `${schoolInfo.contact.address.city}, ${schoolInfo.contact.address.state}` },
      { label: "Pincode", value: schoolInfo.contact.address.pincode },
      { label: "Country", value: schoolInfo.contact.address.country }
    ]
  },
  {
    title: "Office Hours",
    details: schoolInfo.officeHours.details
  }
];

