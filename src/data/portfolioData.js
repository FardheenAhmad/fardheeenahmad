export const personal = {
  name: 'Fardheen Ahmad Sayyad',
  shortName: 'Fardheen',
  title: 'Full Stack Developer',
  subtitle: 'Building scalable web & mobile applications',
  avatar: '/fardheenprofile1.jpeg',
  phone: '+91 9701907258',
  email: 'fardheenahmadsayyad@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fardheenahmadsayyd/',
  location: 'India',
  summary:
    'Full Stack Developer with 2+ years of hands-on experience shipping production-grade web and mobile applications. Built Berymo — a real-time React Native ride-sharing app — and Keytels, a full-stack hotel & flight booking platform, end-to-end. Skilled in React.js, React Native, Spring Boot, WebSockets, and REST API design. Actively integrates Claude AI, GitHub Copilot, and OpenAI Codex into daily workflows to ship faster, write cleaner code, and solve complex problems more effectively.',
  stats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Shipped', value: '5+' },
    { label: 'Tech Stack', value: '15+' },
    { label: 'CGPA', value: '8.56' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    icon: 'zap',
    color: 'from-violet-500 to-purple-600',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'React Native', level: 86 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML5 / CSS3', level: 86 },
      { name: 'Redux Toolkit', level: 84 },
      { name: 'Framer Motion', level: 78 },
    ],
  },
  {
    category: 'Backend',
    icon: 'server',
    color: 'from-blue-500 to-cyan-600',
    items: [
      { name: 'Java', level: 74 },
      { name: 'Spring Boot', level: 74 },
      { name: 'REST API Design', level: 86 },
      { name: 'WebSockets', level: 78 },
      { name: 'Node.js / Express', level: 70 },
    ],
  },
  {
    category: 'Database',
    icon: 'database',
    color: 'from-emerald-500 to-teal-600',
    items: [
      { name: 'MySQL', level: 76 },
      { name: 'MongoDB', level: 72 },
      { name: 'Data Modeling', level: 78 },
      { name: 'Axios / Fetch', level: 88 },
    ],
  },
  {
    category: 'Tools & AI',
    icon: 'wrench',
    color: 'from-amber-500 to-orange-600',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 90 },
      { name: 'Claude AI', level: 95 },
      { name: 'GitHub Copilot', level: 90 },
      { name: 'Vite', level: 82 },
      { name: 'VS Code', level: 92 },
    ],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Golok Soft Global',
    duration: '2+ Years',
    period: '2024 – Present',
    type: 'Full-time',
    responsibilities: [
      'Shipped Berymo (React Native ride-sharing app) and Keytels (hotel & flight booking platform) from concept to production',
      'Engineered real-time ride tracking using WebSockets, delivering live GPS-based status updates across driver and passenger apps',
      'Built and consumed 30+ RESTful APIs with Spring Boot; validated end-to-end with Postman using structured JSON test suites',
      'Crafted responsive, component-driven UIs and analytics dashboards with React.js, Redux Toolkit, and Tailwind CSS',
      'Accelerated development velocity using Claude AI, GitHub Copilot, and OpenAI Codex for code generation, review, and debugging',
      'Managed full data flow across React Native / React.js frontend, Spring Boot backend, and MySQL / MongoDB databases',
    ],
  },
]

export const projects = [
  {
    id: 1,
    name: 'Berymo',
    tagline: 'Real-Time Ride-Sharing App',
    description:
      'A production-ready mobile ride-sharing application with real-time GPS tracking, driver-passenger matching, live status updates, and a full Spring Boot + MySQL backend — cross-platform on iOS & Android.',
    tech: ['React Native', 'Spring Boot', 'Java', 'WebSockets', 'MySQL', 'Redux', 'Postman'],
    highlights: [
      'Real-time ride tracking via WebSocket with live GPS-based driver location updates',
      'Driver-passenger matching system with instant status push notifications',
      'Full stack: React Native (frontend) ↔ Spring Boot + MySQL (backend)',
      '20+ APIs designed, integrated, and tested end-to-end with Postman',
    ],
    color: 'from-purple-600 to-blue-600',
    icon: 'car',
    category: 'Mobile App',
  },
  {
    id: 2,
    name: 'Keytels',
    tagline: 'Hotel & Flight Booking Platform',
    description:
      'A comprehensive full-stack travel booking platform with hotel and flight search, multi-step booking workflows, business analytics dashboards, and a Spring Boot REST API backend.',
    tech: ['React.js', 'Spring Boot', 'Java', 'REST APIs', 'MySQL', 'Redux Toolkit', 'Tailwind CSS'],
    highlights: [
      'Hotel & flight booking UI with live search and multi-step checkout flows',
      'Analytics dashboard with real-time business data and dynamic charts',
      'Redux Toolkit state management for complex multi-service booking state',
      '30+ REST APIs consumed from Spring Boot backend, fully tested with Postman',
    ],
    color: 'from-blue-600 to-cyan-600',
    icon: 'hotel',
    category: 'Web Platform',
  },
]

export const education = {
  degree: 'B.Tech in Computer Science',
  institute: 'Bharath Institute of Higher Education and Research',
  year: '2024',
  cgpa: '8.56',
}

export const certifications = ['Java Full Stack Development Certification']

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Telugu', level: 'Native' },
  { name: 'Urdu', level: 'Native' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Tamil', level: 'Basic' },
]
