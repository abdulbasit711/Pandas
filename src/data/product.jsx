import { 
  FaIndustry, 
  FaHospital, 
  FaGraduationCap, 
  FaShoppingCart,
  FaUniversity,
  FaPlane,
  FaCar,
  FaCloud,
  FaRobot,
  FaMobileAlt,
  FaDatabase
} from "react-icons/fa";

export const products = [
  {
    id: "pandas-enterprise",
    name: "PANDAS ERP",
    tagline: "AI-Powered Business Operating System",
    icon: <FaIndustry />,
    featured: true,
    enterprise: true,
    description: "A comprehensive AI-driven ERP platform that unifies all business operations with predictive analytics and automation.",
    features: ["AI Forecasting", "Real-time Analytics", "Supply Chain AI", "Automated Workflows", "Multi-currency", "Compliance Suite"],
    plans: [
      {
        name: "ESSENTIAL",
        price: "$99",
        features: [
          "Up to 5 Users",
          "Sales Management",
          "Purchase Management",
          "Stock Management",
          "Accounts Management",
          "User Management",
          "Professional Dashboard",
        ],
        recommend: false
      },
      {
        name: "PROFESSIONAL",
        price: "$149",
        features: [
          "Up to 10 Users",
          "Sales Management",
          "Purchase Management",
          "Stock Management",
          "Accounts Management",
          "User Management",
          "AI Analytics Dashboard",
          "Priority Support 24/7",
          "AI Chatbot",
          "Automated WhatsApp Business Reports (Receive a concise daily summary directly on the owner's phone)",
        ],
        recommend: true
      },
      {
        name: "ENTERPRISE",
        price: "Custom",
        features: [
          "Unlimited Users",
          "Full AI Suite",
          "All Core Modules",
          "AI Chatbot",
          "Automated WhatsApp Business Reports (Receive a concise daily summary directly on the owner's phone)",
          "Whatsapp Notifications to Customer and Supplier",
          "Cloud Backup (For offline systems)",
          "No logo Watermark",
          "UI Customization",
        ],
        recommend: false
      }
    ]
  },
  {
    id: "pandas-med-tech-pro",
    name: "PANDAS MED-TECH PRO",
    tagline: "Next-Gen Healthcare Platform",
    icon: <FaHospital />,
    featured: true,
    description: "Revolutionary hospital management system with IoT integration, telemedicine, and patient lifecycle management.",
    features: ["Telemedicine", "IoT Device Integration", "AI Diagnosis", "Patient Portal", "Pharmacy Management", "Lab Automation"],
    plans: [
      {
        name: "CLINIC",
        price: "$199",
        features: ["Up to 10 Doctors", "Patient Records", "Basic Scheduling", "Email Support"],
        recommend: false
      },
      {
        name: "HOSPITAL",
        price: "$499",
        features: ["Unlimited Doctors", "Advanced Analytics", "24/7 Support", "Custom Modules", "API Access"],
        recommend: true
      },
      {
        name: "NETWORK",
        price: "Custom",
        features: ["Multi-branch", "AI Predictive Care", "Dedicated Server", "Custom Development"],
        recommend: false
      }
    ]
  },
  {
    id: "pandas-crm",
    name: "PANDAS CRM",
    tagline: "Intelligent Customer Platform",
    icon: <FaRobot />,
    description: "AI-powered CRM with predictive lead scoring, automated marketing, and 360-degree customer insights.",
    features: ["AI Lead Scoring", "Marketing Automation", "Sales Forecasting", "Customer Analytics"],
    plans: [
      {
        name: "STARTER",
        price: "$99",
        features: ["Up to 10 Users", "Basic CRM", "Email Support"],
        recommend: false
      },
      {
        name: "GROWTH",
        price: "$149",
        features: ["Up to 100 Users", "AI Features", "Phone Support"],
        recommend: true
      },
      {
        name: "SCALE",
        price: "Custom",
        features: ["Unlimited Users", "Full AI Suite", "Dedicated Support"],
        recommend: false
      }
    ]
  },
  {
    id: "cloud-matrix",
    name: "CLOUD MATRIX",
    tagline: "Enterprise Cloud Infrastructure",
    icon: <FaCloud />,
    enterprise: true,
    description: "Scalable cloud platform with container orchestration, serverless computing, and enterprise-grade security.",
    features: ["Kubernetes Native", "Serverless Functions", "Global CDN", "Zero Trust Security"],
    plans: [
      {
        name: "DEVELOPER",
        price: "$99",
        features: ["50GB Storage", "100GB Bandwidth", "Community Support"],
        recommend: false
      },
      {
        name: "BUSINESS",
        price: "$499",
        features: ["1TB Storage", "Unlimited Bandwidth", "24/7 Support", "SLA 99.9%"],
        recommend: true
      },
      {
        name: "ENTERPRISE",
        price: "Custom",
        features: ["Custom Infrastructure", "Dedicated Engineers", "SLA 99.99%", "Compliance"],
        recommend: false
      }
    ]
  },
  {
    id: "mobile-first",
    name: "MOBILE FIRST",
    tagline: "Cross-Platform Mobile Suite",
    icon: <FaMobileAlt />,
    description: "Enterprise mobile applications with offline capabilities, biometric security, and real-time sync.",
    features: ["Offline First", "Biometric Auth", "Real-time Sync", "Push Notifications"],
    plans: [
      {
        name: "STARTUP",
        price: "$299",
        features: ["1 App", "Basic Features", "Email Support"],
        recommend: false
      },
      {
        name: "SCALE",
        price: "$799",
        features: ["Up to 5 Apps", "Advanced Features", "Priority Support"],
        recommend: true
      },
      {
        name: "ENTERPRISE",
        price: "Custom",
        features: ["Unlimited Apps", "Custom Features", "Dedicated Team"],
        recommend: false
      }
    ]
  },
  {
    id: "data-fusion",
    name: "DATA FUSION",
    tagline: "Big Data Analytics Platform",
    icon: <FaDatabase />,
    enterprise: true,
    description: "Real-time data processing and analytics platform with machine learning and predictive modeling.",
    features: ["Real-time Processing", "ML Algorithms", "Data Visualization", "Predictive Analytics"],
    plans: [
      {
        name: "ANALYST",
        price: "$399",
        features: ["1M Events/Month", "Basic Analytics", "Community Support"],
        recommend: false
      },
      {
        name: "TEAM",
        price: "$999",
        features: ["10M Events/Month", "Advanced Analytics", "Team Collaboration"],
        recommend: true
      },
      {
        name: "ENTERPRISE",
        price: "Custom",
        features: ["Unlimited Events", "Custom ML Models", "Dedicated Support"],
        recommend: false
      }
    ]
  }
];