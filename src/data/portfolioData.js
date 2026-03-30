// ============================================
//  PORTFOLIO DATA
// ============================================

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    id: 1,
    title: "School Safety Dashboard",
    tag: "Full Stack",
    description:
      "A comprehensive school safety monitoring system with real-time alerts, incident tracking, and admin dashboards for managing student safety data.",
    tech: ["React.js", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    links: {
      live: "https://analytics.smartdatadashboard.com/login",
      github: "#",
    },
  },
  {
    id: 2,
    title: "MyOps360 – Agility CRM",
    tag: "Full Stack",
    description:
      "Enterprise CRM platform for agile project management, integrating sprint planning, resource allocation, and client communication in one dashboard.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Redux", "REST API"],
    links: { live: "https://myops360.834labs.com/login", github: "#" },
  },
  {
    id: 3,
    title: "TODO App – MERN Stack",
    tag: "Full Stack",
    description:
      "Feature-rich task management application with user authentication, priority tagging, due dates, and collaborative workspace support.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    links: { live: "https://mern-todo-app-tan.vercel.app/", github: "#" },
  },
  {
    id: 4,
    title: "HelloFixy",
    tag: "Frontend",
    description:
      "Home services booking platform with a seamless UI for browsing, comparing, and scheduling local service providers with real-time availability.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Context API"],
    links: { live: "https://hellofixy.com", github: "#" },
  },
  {
    id: 5,
    title: "NonStop Traders",
    tag: "Frontend",
    description:
      "E-commerce frontend for a 24/7 trading platform with dynamic product listings, cart management, and an intuitive checkout flow.",
    tech: ["React.js", "Redux", "Bootstrap", "REST API"],
    links: { live: "https://nonstoptraders.com/", github: "#" },
  },
  {
    id: 6,
    title: "Kompres",
    tag: "Frontend",
    description:
      "An online file compression tool supporting images, PDFs, and documents. Backend processing with real-time compression stats and download.",
    tech: ["React.js", "FastAPI", "Python", "AWS S3", "Docker"],
    links: { live: "https://www.utvyakta.com/", github: "#" },
  },
  {
    id: 7,
    title: "BoostMyShop – Pricing Dashboard",
    tag: "Full Stack",
    description:
      "Dynamic repricing intelligence dashboard for e-commerce sellers, featuring competitor analysis, pricing rules, and automated price updates.",
    tech: ["Vue.js", "FastAPI", "PostgreSQL", "SQLAlchemy", "Swagger"],
    links: {
      live: "https://pricing.boostmyshop.com/en/dashboard",
      github: "#",
    },
  },
  {
    id: 8,
    title: "COVID-19 Plasma Donation Portal",
    tag: "Frontend",
    description:
      "A civic-tech platform connecting COVID-19 plasma donors with recipients, featuring location search, donor registration, and request tracking.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API", "Bootstrap"],
    links: { live: "#", github: "#" },
  },
];

export const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#ec4899',
    items: [
      'React.js', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript',
      'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Bootstrap', 'TanStack Table',
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#8b5cf6',
    items: [
      'FastAPI', 'Express.js', 'Node.js', 'RESTful APIs',
      'JWT', 'Swagger', 'SQLAlchemy',
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: '#06b6d4',
    items: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'Azure Synapse',
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: '#f97316',
    items: [
      'Docker', 'AWS', 'GitHub', 'GitLab',
      'JIRA', 'Figma', 'Postman', 'Azure', 'Replit', 'Copilot', 'Antigravity', 'Claude'
    ],
  },
];

export const experience = [
  {
    company: 'HMG Technology',
    role: 'Full Stack Developer',
    period: 'Oct 2022 – Present',
    type: 'Full-time',
    description:
      'Building scalable full-stack web applications using React.js and FastAPI. Leading frontend development for enterprise SaaS products, mentoring junior developers, and contributing to system architecture decisions.',
    tech: ['React.js', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
    current: true,
  },
  {
    company: 'BoostMyShop',
    role: 'Frontend Developer',
    period: 'Jul 2021 – Sep 2022',
    type: 'Full-time',
    description:
      'Developed and maintained the pricing intelligence dashboard using Vue.js. Collaborated closely with backend teams to integrate REST APIs and improve overall platform UX for e-commerce clients.',
    tech: ['Vue.js', 'JavaScript', 'REST API', 'JIRA', 'Figma'],
    current: false,
  },
  {
    company: 'Octavalley',
    role: 'Web Development Intern',
    period: 'Dec 2020 – Jan 2021',
    type: 'Internship',
    description:
      'Assisted in building responsive web pages and learned industry-standard practices for frontend development. Contributed to UI components and bug fixes in a collaborative team environment.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    current: false,
  },
];

export const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '15+', label: 'Technologies' },
  { value: 'React.js', label: 'Technical Trainer' },
];

export const contact = {
  email: 'induammu223@gmail.com',
  phone: '+91 9952356475',
  location: 'Coimbatore, India',
};
