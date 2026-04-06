export type NavItem = {
  href: string;
  label: string;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type FeatureCard = {
  eyebrow: string;
  title: string;
  description: string;
};

export type UseCase = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  outcomes: string[];
  technologies: string[];
  heroStat: string;
};

export type JobPosting = {
  title: string;
  location: string;
  type: string;
  summary: string;
};

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  externalUrl?: string;
};

export type LeadershipMember = {
  name: string;
  role: string;
  bio: string;
};

export type Partner = {
  name: string;
  category: "technology" | "sensor" | "certification" | "investor";
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type SensorPartner = {
  name: string;
  type: string;
  highlight: string;
};

export type CompanyStat = {
  value: string;
  label: string;
};

export const siteConfig = {
  name: "starcopter",
  productName: "HIGHDRA",
  url: "https://www.starcopter.com",
  description:
    "High-performance drone systems for surveying, inspection, transport, and advanced sensing operations.",
  contact: {
    phone: "+49 531 428 78 50",
    email: "info@starcopter.com",
    locations: ["Braunschweig"],
  },
};

export const navItems: NavItem[] = [
  { href: "/highdra", label: "HIGHDRA" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/business-model", label: "Business Model" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const heroMetrics: Metric[] = [
  {
    value: "35 min",
    label: "Flight Time",
    detail: "with 7.5 kg payload under real-world operating conditions",
  },
  {
    value: "10 kg",
    label: "Payload Capacity",
    detail: "up to 10 kg in the appropriate operating category",
  },
  {
    value: "2,000",
    label: "Battery Cycles",
    detail: "long-life power packs designed for operational uptime",
  },
  {
    value: "C3",
    label: "Certified",
    detail: "one of the early platforms engineered for compliant deployment",
  },
];

export const homepageHighlights: FeatureCard[] = [
  {
    eyebrow: "Engineered For Work",
    title: "A modular aircraft built for high-value field operations.",
    description:
      "HIGHDRA combines payload flexibility, robust transportability, and repeatable deployment speed so teams can run demanding missions without compromising on data quality or uptime.",
  },
  {
    eyebrow: "Software And Hardware Aligned",
    title: "Auterion-powered, service-backed, future-ready.",
    description:
      "From payload integration to operator support, the platform is designed as a system rather than a loose collection of parts.",
  },
  {
    eyebrow: "Commercially Smarter",
    title: "Pay-per-use access removes the ownership barrier.",
    description:
      "Access high-end drone capability without tying up capital in underutilized hardware, maintenance cycles, or replacement risk.",
  },
  {
    eyebrow: "Compliance Ready",
    title: "Built for serious programs and regulatory expectations.",
    description:
      "Documentation, traceability, and certification-minded design help teams deploy responsibly and scale operations with confidence.",
  },
];

export const capabilityCards: FeatureCard[] = [
  {
    eyebrow: "LiDAR",
    title: "Dense terrain and vegetation capture.",
    description:
      "Generate precise point clouds and terrain models with the stability and payload headroom required for production-grade scanning.",
  },
  {
    eyebrow: "RGB",
    title: "Inspection and mapping with sharp visual detail.",
    description:
      "High-resolution RGB workflows for orthomosaics, inspection records, progress tracking, and asset documentation.",
  },
  {
    eyebrow: "Infrarot",
    title: "Thermal insight for technical and night operations.",
    description:
      "Detect heat anomalies, energy leaks, and hard-to-see operational issues with stable thermal sensor support.",
  },
  {
    eyebrow: "Spectral",
    title: "Advanced environmental and agricultural sensing.",
    description:
      "Support multi- and hyperspectral workflows for vegetation analysis, environmental monitoring, and research-grade acquisition.",
  },
];

export const productFeatures: FeatureCard[] = [
  {
    eyebrow: "Modular Construction",
    title: "Fast setup, compact transport, quick field service.",
    description:
      "Tool-free assembly, modular arms, and compact packing reduce deployment friction and simplify maintenance in active operations.",
  },
  {
    eyebrow: "Open Integration",
    title: "Payloads, interfaces, and custom workflows stay flexible.",
    description:
      "The platform is designed to support standard and specialized payloads with a software architecture that can adapt to custom mission needs.",
  },
  {
    eyebrow: "Battery Platform",
    title: "Long life cycles with real operational value.",
    description:
      "Power packs developed in-house extend useful life and reduce replacement pressure compared to commodity battery systems.",
  },
  {
    eyebrow: "Service Layer",
    title: "Direct support from the people who built the platform.",
    description:
      "Operational support, fast response, and expertise on the exact system you deploy help reduce downtime and escalation loops.",
  },
];

export const businessModelCards: FeatureCard[] = [
  {
    eyebrow: "No Downtime",
    title: "You don't pay for idle time or storage.",
    description:
      "No warehouse costs, no depreciation ticking while the drone sits between projects. You only pay when the HIGHDRA is working for you.",
  },
  {
    eyebrow: "No Investment",
    title: "No upfront capital expenditure required.",
    description:
      "Rent the HIGHDRA whenever and wherever you need it. Starting at approximately \u20AC100 per flight hour, access high-end capability without a purchase decision.",
  },
  {
    eyebrow: "No Outdated Tech",
    title: "Always fly the latest platform revision.",
    description:
      "We optimize the HIGHDRA continuously. Every rental gives you the current generation of hardware, firmware, and sensor integration.",
  },
  {
    eyebrow: "No Hassle",
    title: "Our service team handles the technology.",
    description:
      "Maintenance, calibration, firmware updates, and readiness checks are our responsibility. You concentrate fully on your project delivery.",
  },
];

export const technologyPillars: FeatureCard[] = [
  {
    eyebrow: "Airframe",
    title: "Hexacopter built for heavy payloads and compact transport.",
    description:
      "Six redundant drive units on a carbon-reinforced frame with modular arms. Tool-free assembly, fits in a car trunk, and field-ready in under five minutes.",
  },
  {
    eyebrow: "Power",
    title: "Automotive-inspired 6-battery array with 1,000-cycle warranty.",
    description:
      "In-house battery technology with guaranteed 80% capacity at 1,000 charge cycles. The charging hub handles 36 packs simultaneously for continuous fleet operations.",
  },
  {
    eyebrow: "Avionics",
    title: "Auterion Skynode X as the central processing unit.",
    description:
      "Flight control, navigation, and mission software run on Auterion\u2019s open stack with Auterion Mission Control. Full EU regulatory compliance via standardized architecture.",
  },
  {
    eyebrow: "Software",
    title: "Edge-based autonomy with European data sovereignty.",
    description:
      "Remote operations and live mission updates via the Auterion Suite. Secure data handling through edge processing and an open software architecture built for custom integration.",
  },
];

export const useCases: UseCase[] = [
  {
    slug: "surveying-and-mapping",
    title: "Surveying And Mapping",
    kicker: "Capture high-quality spatial data with fewer compromises.",
    summary:
      "For geospatial teams that need stable performance, larger sensors, and efficient data capture over demanding terrain. PhaseOne 150 MP RGB for orthomosaics and CHCNAV LiDAR for production-grade point clouds.",
    outcomes: [
      "Survey-grade orthomosaics with PhaseOne 150 MP and RTK geotagging",
      "Dense point clouds via CHCNAV LiDAR for terrain and vegetation modeling",
      "35-minute mission windows with 7.5 kg payload for efficient site coverage",
      "Under 5-minute field setup with tool-free assembly from a compact case",
    ],
    technologies: ["CHCNAV LiDAR", "PhaseOne 150 MP", "RTK Geotagging", "C3 Certified"],
    heroStat: "150 MP survey-grade capture",
  },
  {
    slug: "inspection-and-infrastructure",
    title: "Inspection And Infrastructure",
    kicker: "Make complex assets easier to inspect safely and repeatedly.",
    summary:
      "Built for teams performing technical inspections across energy, utilities, and industrial infrastructure. Workswell radiometric thermal imaging and high-resolution RGB for repeatable, documented inspection workflows.",
    outcomes: [
      "Radiometric thermal detection of heat anomalies and energy leaks via Workswell sensors",
      "High-resolution RGB documentation for asset condition records and progress tracking",
      "Repeatable scheduled inspection workflows with service-backed fleet readiness",
      "Stable hexacopter platform for consistent data quality across inspection cycles",
    ],
    technologies: ["Workswell Thermal", "RGB Inspection", "Modular Payload", "Rapid Deployment"],
    heroStat: "Radiometric thermal workflows",
  },
  {
    slug: "environment-and-agriculture",
    title: "Environment And Agriculture",
    kicker: "Support research, monitoring, and crop intelligence at scale.",
    summary:
      "For teams combining environmental analysis with advanced sensing and repeatable aerial coverage. Multi- and hyperspectral sensors for NDVI, crop analysis, calibrated reflectance, and environmental monitoring.",
    outcomes: [
      "NDVI and vegetation index mapping with calibrated spectral sensors",
      "Multi- and hyperspectral compatibility for research-grade data acquisition",
      "Long-endurance flights for efficient coverage of large agricultural areas",
      "Pay-per-use access eliminates capital commitment for seasonal operations",
    ],
    technologies: ["Spectral Sensors", "CHCNAV LiDAR", "Calibrated Reflectance", "Long Endurance"],
    heroStat: "Calibrated spectral sensing",
  },
];

export const companyTimeline = [
  {
    year: "2017",
    title: "Founded in Germany",
    detail:
      "Henner Niebuhr and Lasse Fr\u00F6hner founded Starcopter with a clear goal: design and manufacture electric-driven unmanned aerial systems with world-leading performance in efficiency, safety, and functionality.",
  },
  {
    year: "2023",
    title: "Seed funding secured",
    detail:
      "BraWo Capital Group invested in the company\u2019s vision, enabling the team to accelerate HIGHDRA development and scale in-house manufacturing at Rebenring 31, Braunschweig.",
  },
  {
    year: "2024",
    title: "HIGHDRA unveiled at INTERGEO",
    detail:
      "The HIGHDRA was presented to the global geospatial and drone community at INTERGEO in Stuttgart, introducing the flight-hour pricing model and modular sensor ecosystem.",
  },
  {
    year: "2025",
    title: "C3 certified and market launch",
    detail:
      "HIGHDRA became Germany\u2019s first C3-certified multirotor under EU drone regulations (EASA PR-371). Official market launch followed on June 23, powered by Auterion Skynode X.",
  },
];

export const jobPostings: JobPosting[] = [
  {
    title: "Senior Flight Systems Engineer",
    location: "Braunschweig / Hybrid",
    type: "Full-time",
    summary:
      "Drive platform reliability, hardware validation, and system integration for commercial-grade drone operations.",
  },
  {
    title: "Embedded Software Engineer",
    location: "Braunschweig / Hybrid",
    type: "Full-time",
    summary:
      "Work across avionics, payload integration, and operational tooling for the next generation of the HIGHDRA platform.",
  },
  {
    title: "Business Development Manager",
    location: "Germany / Remote-friendly",
    type: "Full-time",
    summary:
      "Translate high-end drone capability into long-term customer relationships across surveying, infrastructure, and sensing markets.",
  },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "integration-is-our-dna",
    title: "Integration Is Our DNA",
    date: "March 2026",
    excerpt:
      "A drone shouldn\u2019t be another complex task on your list \u2014 it should be the smartest part of your existing workflow. We\u2019ve engineered our technology to integrate seamlessly where it matters most.",
    externalUrl:
      "https://www.linkedin.com/posts/starcopter_starcopter-dronetech-innovation-activity-7421863150502895616-8P1E",
  },
  {
    slug: "germany-first-c3-certified-multirotor",
    title: "Germany\u2019s First C3-Certified Multirotor",
    date: "June 2025",
    excerpt:
      "HIGHDRA is now officially C3-certified under EU drone regulations \u2014 making it the first multirotor made in Germany to earn that status. A milestone for safety, reliability, and regulatory readiness.",
    externalUrl:
      "https://auterion.com/starcopter-launches-one-of-europes-first-c3-certified-drones-powered-by-auterion",
  },
  {
    slug: "highdra-unveiled-at-intergeo",
    title: "HIGHDRA Unveiled At INTERGEO 2024",
    date: "October 2024",
    excerpt:
      "Starcopter introduced the HIGHDRA to the global geospatial community at INTERGEO in Stuttgart, showcasing the flight-hour pricing model and modular sensor ecosystem.",
    externalUrl:
      "https://dronelife.com/2024/10/10/starcopter-unveils-highdra-a-game-changing-commercial-drone-with-flight-hours-pricing-model/",
  },
];

export const faqs = [
  {
    question: "Are the published flight times based on real operating conditions?",
    answer:
      "Yes. The 35-minute specification is measured with a 7.5 kg payload under real-world operating conditions, not idealized lab benchmarks.",
  },
  {
    question: "Can the HIGHDRA support custom payload integrations?",
    answer:
      "Yes. HIGHDRA\u2019s external interfaces are well defined and open. If you need help with integration, our engineering team provides custom payload support. Current ecosystem partners include PhaseOne, CHCNAV, and Workswell.",
  },
  {
    question: "How does the pay-per-use model work?",
    answer:
      "Pricing starts at approximately \u20AC100 per flight hour. You need a registered company with a valid operator ID, liability insurance, and at least one pilot with a valid remote pilot certificate. Minimum rental is one month, with delivery typically within three days.",
  },
  {
    question: "Can I purchase or lease the HIGHDRA long-term?",
    answer:
      "Yes. For longer periods of use, we offer system sale or leasing contracts that include maintenance. Your HIGHDRA is always mission-ready \u2014 you focus on the project, we handle the technology.",
  },
  {
    question: "Can I get a live demo?",
    answer:
      "Absolutely. We offer demos at our Braunschweig facilities. On-site demos are also possible with advance planning. Contact us to schedule.",
  },
  {
    question: "What certifications does the HIGHDRA hold?",
    answer:
      "HIGHDRA is C3-certified under EU drone regulations (EASA designation PR-371) \u2014 the first multirotor made in Germany to earn this certification. It meets standards of safety, reliability, and regulatory readiness for commercial operations.",
  },
];

export const leadershipTeam: LeadershipMember[] = [
  {
    name: "Henner Niebuhr",
    role: "Co-Founder & CEO",
    bio: "Drives the company vision, commercial strategy, and industry partnerships. Led Starcopter from founding through C3 certification and market launch.",
  },
  {
    name: "Lasse Fr\u00F6hner",
    role: "Co-Founder & CTO",
    bio: "Leads platform engineering across airframe, PCB design, power distribution, and battery systems. Architect of the HIGHDRA\u2019s in-house technology stack.",
  },
  {
    name: "Khashayar Kazemi",
    role: "COO",
    bio: "Oversees operations, manufacturing, and strategic growth. Manages the scaling of production and service delivery from Braunschweig.",
  },
];

export const partnerLogos: Partner[] = [
  { name: "Auterion", category: "technology" },
  { name: "PhaseOne", category: "sensor" },
  { name: "CHCNAV", category: "sensor" },
  { name: "Workswell", category: "sensor" },
  { name: "EASA", category: "certification" },
  { name: "BraWo Capital", category: "investor" },
];

export const rentalProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Get In Touch",
    description:
      "Tell us about your project requirements, timeline, and the sensor capabilities you need.",
  },
  {
    step: 2,
    title: "Quick Onboarding",
    description:
      "We verify your operator credentials and insurance, then configure the HIGHDRA with the right payload for your mission.",
  },
  {
    step: 3,
    title: "Delivery In 3 Days",
    description:
      "The complete system arrives in a compact transport case \u2014 organized, accessible, and ready to fly.",
  },
  {
    step: 4,
    title: "Fly And Deliver",
    description:
      "Deploy in under five minutes with tool-free assembly. Capture your data, complete the project, return the system.",
  },
];

export const rentalRequirements = [
  "Registered company with a valid operator ID",
  "Liability insurance for drone operations",
  "At least one pilot with a valid remote pilot certificate",
  "Minimum rental period of one month",
];

export const sensorPartners: SensorPartner[] = [
  {
    name: "PhaseOne",
    type: "RGB",
    highlight: "150 MP with mechanical shutter and RTK geotagging for survey-grade orthomosaics",
  },
  {
    name: "CHCNAV",
    type: "LiDAR",
    highlight: "Dense point cloud capture for terrain modeling, vegetation analysis, and construction monitoring",
  },
  {
    name: "Workswell",
    type: "Thermal",
    highlight: "Radiometric infrared imaging for energy audits, infrastructure inspection, and anomaly detection",
  },
];

export const companyStats: CompanyStat[] = [
  { value: "2017", label: "Founded" },
  { value: "11+", label: "Engineers" },
  { value: "2", label: "Locations" },
  { value: "1st", label: "C3 Multirotor in Germany" },
];

export const technologyDetails = {
  airframe: {
    title: "In-House Airframe Engineering",
    points: [
      "Hexacopter with six redundant drive units for fail-safe operation",
      "Carbon-reinforced central frame with modular arms and legs",
      "In-house PCB design and power distribution architecture",
      "Tool-free assembly and disassembly in under five minutes",
      "Compact transport case fits in a small car trunk",
    ],
  },
  sensors: {
    title: "Sensor Ecosystem",
    points: [
      "PhaseOne 150 MP RGB with mechanical shutter",
      "CHCNAV LiDAR for production-grade point clouds",
      "Workswell radiometric thermal cameras",
      "Multi- and hyperspectral sensor compatibility",
      "Open payload interfaces for custom integrations",
    ],
  },
  certification: {
    title: "Certification And Compliance",
    points: [
      "EASA designation PR-371",
      "C3-certified under EU open category regulations",
      "Germany\u2019s first C3-certified multirotor unmanned aircraft",
      "Full compliance via Auterion\u2019s standardized open software stack",
      "Documentation and traceability for regulated operations",
    ],
  },
};

export const footerLinks = {
  company: navItems,
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/impressum", label: "Impressum" },
    { href: "/terms", label: "Terms" },
  ],
};
