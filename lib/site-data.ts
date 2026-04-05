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
};

export const siteConfig = {
  name: "starcopter",
  productName: "HIGHDRA",
  url: "https://www.starcopter.com",
  description:
    "Premium B2B drone platform for surveying, inspection, transport, and advanced sensing operations.",
  contact: {
    phone: "+49 531 428 78 50",
    email: "info@starcopter.com",
    locations: ["Braunschweig", "Kassel"],
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
      "Customers can access premium drone capability without tying up capital in underutilized hardware, maintenance cycles, or replacement risk.",
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
    eyebrow: "No Idle Capital",
    title: "Access capability when the project requires it.",
    description:
      "The commercial model avoids locking budget into a platform that may sit unused between specialized missions.",
  },
  {
    eyebrow: "Always Current",
    title: "Stay on current technology without replacement cycles.",
    description:
      "Customers benefit from ongoing platform evolution without taking on the operational burden of hardware ownership.",
  },
  {
    eyebrow: "Operational Simplicity",
    title: "Service, support, and readiness are built into the relationship.",
    description:
      "The model is designed to reduce downtime, procurement friction, and technical dead ends during project delivery.",
  },
];

export const technologyPillars: FeatureCard[] = [
  {
    eyebrow: "Airframe",
    title: "Compact transportability with high-load structure.",
    description:
      "A reinforced modular body designed for portability, reliability, and repeatable setup quality in the field.",
  },
  {
    eyebrow: "Power",
    title: "Battery technology engineered for practical endurance.",
    description:
      "Longer cycle life and strong real-world performance shift the economics of sustained commercial use.",
  },
  {
    eyebrow: "Avionics",
    title: "Auterion-based control and payload connectivity.",
    description:
      "Open, modern avionics support flexibility for operators and custom integration scenarios.",
  },
  {
    eyebrow: "Software",
    title: "A platform that evolves with new workflows.",
    description:
      "The system is designed so payload integration, mission requirements, and operational tooling can keep moving forward.",
  },
];

export const useCases: UseCase[] = [
  {
    slug: "surveying-and-mapping",
    title: "Surveying And Mapping",
    kicker: "Capture high-quality spatial data with fewer compromises.",
    summary:
      "For geospatial teams that need stable performance, larger sensors, and efficient data capture over demanding terrain.",
    outcomes: [
      "Reliable LiDAR and RGB payload support",
      "Field-ready deployment in compact transport packaging",
      "Long mission windows for efficient acquisition",
    ],
    technologies: ["LiDAR", "RGB", "C3-ready operations", "Long-life batteries"],
    heroStat: "Production-ready point cloud capture",
  },
  {
    slug: "inspection-and-infrastructure",
    title: "Inspection And Infrastructure",
    kicker: "Make complex assets easier to inspect safely and repeatedly.",
    summary:
      "Built for teams performing technical inspections across energy, utilities, and industrial infrastructure where consistency and sensor flexibility matter.",
    outcomes: [
      "Thermal and RGB payload adaptability",
      "Stable platform for repeatable inspection workflows",
      "Service-backed readiness for scheduled operations",
    ],
    technologies: ["RGB", "Infrarot", "Modular payload integration", "Rapid deployment"],
    heroStat: "High-confidence thermal and visual workflows",
  },
  {
    slug: "environment-and-agriculture",
    title: "Environment And Agriculture",
    kicker: "Support research, monitoring, and crop intelligence at scale.",
    summary:
      "For teams combining environmental analysis with advanced sensing and repeatable aerial coverage over changing conditions.",
    outcomes: [
      "Multi- and hyperspectral compatibility",
      "Payload flexibility for specialized data collection",
      "Operational efficiency for recurring survey programs",
    ],
    technologies: ["Spectral sensors", "LiDAR", "Flexible software interfaces", "Long endurance"],
    heroStat: "Advanced sensing without a custom aircraft program",
  },
];

export const companyTimeline = [
  {
    year: "Now",
    title: "Premium field-ready drone platform",
    detail:
      "Starcopter focuses on a durable, modular aircraft and a commercial model that makes high-end operations more accessible.",
  },
  {
    year: "Platform",
    title: "System thinking over isolated hardware",
    detail:
      "Hardware, power systems, software, and support are treated as one operating system for demanding drone programs.",
  },
  {
    year: "Future",
    title: "Built to expand with new payload and workflow needs",
    detail:
      "The product strategy is designed around adaptability, certifications, and long-term commercial relevance.",
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
    location: "Kassel / Hybrid",
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
    slug: "introducing-the-premium-platform-vision",
    title: "Building A More Operational Drone Platform",
    date: "April 2026",
    excerpt:
      "Why commercial users need more than headline specs and how Starcopter is designing around uptime, adaptability, and service.",
  },
  {
    slug: "sensor-flexibility-without-platform-friction",
    title: "Sensor Flexibility Without Platform Friction",
    date: "March 2026",
    excerpt:
      "A closer look at modular payload thinking for teams running LiDAR, RGB, thermal, and advanced sensing missions.",
  },
  {
    slug: "rethinking-commercial-drone-procurement",
    title: "Rethinking Commercial Drone Procurement",
    date: "February 2026",
    excerpt:
      "How a pay-per-use approach changes the economics of high-performance aerial capability.",
  },
];

export const faqs = [
  {
    question: "Are the published flight times based on real operating conditions?",
    answer:
      "Yes. The site story is grounded in real-world operating conditions rather than idealized lab-only claims, which is a key differentiator in the product positioning.",
  },
  {
    question: "Can the HIGHDRA support custom payload integrations?",
    answer:
      "Yes. The platform story emphasizes open interfaces, modularity, and software flexibility so specialized payloads and workflows can be supported.",
  },
  {
    question: "Why lead with pay-per-use instead of a traditional purchase path?",
    answer:
      "Because the commercial model is part of the product value. It lowers upfront commitment, keeps technology current, and reduces ownership-related downtime and replacement pressure.",
  },
  {
    question: "How should the 3D experience behave on lower-powered devices?",
    answer:
      "The website is built with progressive enhancement so users still get premium visuals and clear CTAs even if the interactive scene falls back to a lighter render or poster.",
  },
];

export const footerLinks = {
  company: navItems,
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/impressum", label: "Impressum" },
    { href: "/terms", label: "Terms" },
  ],
};
