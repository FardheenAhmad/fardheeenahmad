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
    'Full Stack Developer with 2+ years of hands-on experience in building scalable web and mobile applications. Skilled in developing user-friendly interfaces, creating backend APIs, and integrating real-time solutions using WebSockets. Experienced in dashboard development, business platforms, and real-time application workflows using React.js and React Native. Actively up-to-date with modern development trends and AI-assisted tools, leveraging them to accelerate development, improve code quality, and optimize workflows.',
  stats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Shipped', value: '5+' },
    { label: 'Tech Stack', value: '12+' },
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
      { name: 'React Native', level: 85 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML5 / CSS3', level: 87 },
      { name: 'Redux Toolkit', level: 82 },
      { name: 'Redux Thunk', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: 'server',
    color: 'from-blue-500 to-cyan-600',
    items: [
      { name: 'Java', level: 72 },
      { name: 'Spring Boot', level: 72 },
      { name: 'REST API Design', level: 85 },
      { name: 'WebSockets', level: 75 },
      { name: 'Node.js / Express', level: 68 },
    ],
  },
  {
    category: 'Database',
    icon: 'database',
    color: 'from-emerald-500 to-teal-600',
    items: [
      { name: 'MySQL', level: 74 },
      { name: 'MongoDB', level: 70 },
      { name: 'CRUD Operations', level: 82 },
      { name: 'JSON / REST Data', level: 85 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: 'wrench',
    color: 'from-amber-500 to-orange-600',
    items: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Postman', level: 90 },
      { name: 'AI Dev Tools', level: 92 },
      { name: 'Axios / Fetch', level: 88 },
      { name: 'MVC Architecture', level: 78 },
    ],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Golok Soft Global (Golok Global)',
    duration: '2+ Years',
    period: '2024 – Present',
    type: 'Full-time',
    responsibilities: [
      'Developed dynamic and responsive user interfaces for web applications',
      'Designed and implemented RESTful APIs using backend technologies',
      'Integrated frontend with backend services for seamless data flow',
      'Implemented real-time features using WebSockets for live data updates',
      'Built dashboards and business websites with real-time data handling',
      'Designed and tested APIs using Postman with structured JSON bodies',
      'Utilized AI tools (OpenAI Codex, Claude, GitHub Copilot) to accelerate development',
    ],
  },
]

export const projects = [
  {
    id: 1,
    name: 'Berymo',
    tagline: 'Ride-Sharing Mobile Application',
    description:
      'A feature-rich ride-sharing mobile application with real-time ride tracking, status updates, and seamless user experience.',
    tech: ['React Native', 'Java', 'Spring Boot', 'WebSockets', 'Postman'],
    highlights: [
      'Implemented real-time ride tracking using WebSockets',
      'Built frontend UI and backend API integration',
      'Designed & tested APIs with structured JSON bodies',
      'Ensured smooth UX and real-time data synchronization',
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
      'A comprehensive booking platform with business analytics dashboards, hotel and flight booking workflows, and API-driven data management.',
    tech: ['React.js', 'Java', 'Spring Boot', 'REST APIs', 'JSON'],
    highlights: [
      'Built booking platform interfaces for hotels and flights',
      'Developed dashboards for business analytics',
      'Designed and consumed REST APIs for booking workflows',
      'Performed API testing and validation using Postman',
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
