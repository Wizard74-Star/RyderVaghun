import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: 'Ryder Vaughn',
    title: 'Sr. Full-Stack Developer | C# ASP.NET Blazor | Angular React Next.js',
    location: 'Yucatan, Mexico',
    description: "I'm Ryder, a Sr. Full-Stack Developer specializing in C# ASP.NET Blazor, Angular React Next.js, with a proven track record in crafting high-performance solutions that integrate seamlessly with modern tech stacks.",
  },
  experience: [
    {
      id: 1,
      title: 'Lead Developer',
      company: 'Goal AI',
      period: 'January 2025 – April 2025',
      location: 'Remote',
      description: 'Led development initiatives for AI-powered solutions, focusing on full-stack architecture and team coordination.',
      achievements: [
        'Led a team of developers in building AI-powered web applications using C# ASP.NET Core and Blazor',
        'Architected scalable full-stack solutions integrating Angular, React, and Next.js for optimal user experiences',
        'Implemented robust backend services with ASP.NET MVC and .NET Core for enterprise-grade systems',
        'Managed Microsoft SQL Server databases and deployed applications on Microsoft Azure cloud platform',
        'Mentored junior developers and established best practices for code quality and development workflows',
        'Delivered end-to-end solutions that enhanced user engagement and supported business growth',
      ],
    },
    {
      id: 2,
      title: 'Senior Full-Stack Developer',
      company: 'Pipeshift',
      period: 'May 2024 – December 2024',
      location: 'Remote',
      description: 'Developed full-stack applications using ASP.NET and MERN stack with Angular, delivering high-performance web solutions.',
      achievements: [
        'Built comprehensive web applications using C# ASP.NET Core and Blazor for dynamic, interactive user experiences',
        'Developed responsive frontends with Angular, React, and Next.js using JavaScript and TypeScript for optimal performance',
        'Designed secure databases with Microsoft SQL Server and deployed applications on Microsoft Azure',
        'Created RESTful APIs and integrated third-party services for seamless data flow',
        'Optimized application performance and implemented best practices for scalability and maintainability',
        'Collaborated with cross-functional teams to deliver custom solutions that streamlined operations',
      ],
    },
    {
      id: 3,
      title: 'Full-Stack Developer',
      company: 'Moonshot',
      period: 'March 2020 – April 2024',
      location: 'Remote',
      description: 'Developed full-stack web applications using ASP.NET, Blazor, and Angular, creating enterprise-grade solutions.',
      achievements: [
        'Developed full-stack web applications using C# ASP.NET Core and Blazor for server-side rendered apps with real-time interactivity',
        'Built intuitive frontend interfaces with Angular, React, and Next.js, ensuring cross-device compatibility and speed',
        'Architected reliable backend servers using ASP.NET MVC, .NET Core, and Microsoft SQL Server for efficient data handling',
        'Deployed scalable applications on Microsoft Azure, optimizing for security, performance, and cost-efficiency',
        'Implemented type-safe, maintainable code using TypeScript for robust client-side logic',
        'Created custom web applications that enhanced user engagement and supported business objectives',
      ],
    },
    {
      id: 4,
      title: 'Full-Stack Developer',
      company: 'Gadget Flow',
      period: 'September 2017 – February 2020',
      location: 'Remote',
      description: 'Developed full-stack applications using MERN stack, Next.js, and Angular, focusing on modern web technologies.',
      achievements: [
        'Built full-stack web applications using MERN stack (MongoDB, Express, React, Node.js) and Next.js',
        'Developed modern frontend applications with Angular and React, creating component-based UIs and SEO-optimized SSR',
        'Implemented responsive designs ensuring optimal user experiences across desktop and mobile devices',
        'Created RESTful APIs and integrated third-party services for enhanced functionality',
        'Optimized application performance and implemented best practices for code maintainability',
        'Collaborated with designers and product managers to translate requirements into high-quality technical implementations',
      ],
    },
  ],
  education: {
    degree: 'Bachelor Degree',
    university: 'Yucatan Polytechnic University',
    period: '2012 – 2016',
    location: 'Yucatan, Mexico',
    description: 'Completed comprehensive studies in computer science and software engineering, building a strong foundation in full-stack web development, system design, and scalable application architecture.',
  },
  skills: {
    frontend: [
      'Angular – structured applications with component-based architecture',
      'React – component-based UIs and interactive user experiences',
      'Next.js – SEO-optimized SSR and performance optimization',
      'JavaScript – modern web application development',
      'TypeScript – type-safe, maintainable frontend code',
      'Responsive & Mobile-First Design',
      'Cross-Browser Compatibility',
    ],
    backend: [
      'C# – object-oriented programming and backend development',
      'ASP.NET Core – high-performance APIs and scalable backend systems',
      'ASP.NET MVC – MVC patterns for modular, testable architectures',
      'Blazor – server-side rendered apps with real-time interactivity',
      '.NET Core – cross-platform backend development',
      'RESTful API Design',
      'API Integration',
    ],
    database: [
      'Microsoft SQL Server – relational database design & optimization',
      'Database Schema Design & Query Optimization',
      'Data Management & Performance Tuning',
    ],
    cloud: [
      'Microsoft Azure – cloud deployment and scalable solutions',
      'Cloud Integration & Deployment',
      'Performance Optimization',
    ],
    tools: [
      'Visual Studio – integrated development environment',
      'Git – version control and collaboration',
      'Docker – containerization for efficient workflows',
      'Azure DevOps – CI/CD pipelines and project management',
    ],
  },
  projects: [
    {
      id: 1,
      title: 'SprintIQ',
      description: 'AI-powered sprint planning platform that helps startups turn chaos into clarity. Developed with React and Next.js for the frontend, providing SEO-optimized server-side rendering. Built backend services using Node.js and integrated AI algorithms for automated product roadmap generation and sprint planning. Features include automated prioritization based on market impact data, real-time progress tracking, and patent-pending algorithms to prevent planning debt.',
      url: 'https://sprintiq.ai',
      image: '',
      imageName: 'sprintiq.png',
      role: 'Developed the frontend using React and Next.js for optimal SEO and performance. Built RESTful APIs with Node.js and Express. Integrated AI services for automated sprint planning and roadmap generation. Implemented real-time analytics dashboards and progress tracking features.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Express.js', 'AI Integration'],
    },
    {
      id: 2,
      title: 'LoyalAI',
      description: 'Mobile and web application for relationship tracking and emotional connection. Built with Angular for the web platform and React Native for mobile apps. Developed backend services using ASP.NET Core and Blazor for real-time relationship scoring. Features include daily love tracker slider, smart relationship score visualization, AI-powered relationship companion, and home screen widgets for iOS and Android.',
      url: 'https://www.loyal-app.com/',
      image: '',
      imageName: 'loyalai.png',
      role: 'Developed responsive web application using Angular with TypeScript. Built mobile apps using React Native. Created backend APIs with ASP.NET Core and implemented Blazor components for interactive features. Integrated AI services for personalized relationship insights and analytics.',
      technologies: ['Angular', 'React', 'React Native', 'ASP.NET Core', 'Blazor', 'TypeScript', 'C#'],
    },
    {
      id: 3,
      title: 'iTechDev',
      description: 'Enterprise software factory website showcasing custom development services. Built with Next.js and React for modern frontend experiences with server-side rendering. Implemented .NET Blazor components for interactive service showcases. Developed backend services using Node.js and integrated multilingual support for Spanish and English. Features include responsive design, service portfolio displays, client testimonials, and comprehensive technology stack presentations.',
      url: 'https://itechdev.com.mx/',
      image: '',
      imageName: 'ITechdev.png',
      role: 'Developed the enterprise website using Next.js and React for optimal SEO and performance. Implemented .NET Blazor components for dynamic service displays. Built RESTful APIs with Node.js. Created responsive layouts optimized for enterprise clients with multilingual support.',
      technologies: ['Next.js', 'React', '.NET Blazor', 'Node.js', 'TypeScript', 'ASP.NET Core'],
    },
    {
      id: 4,
      title: 'CleverTap',
      description: 'All-in-one customer engagement platform that helps businesses unlock limitless customer lifetime value. Built with modern web technologies to deliver personalized experiences, real-time analytics, and AI-powered customer insights. Features include customer data analytics, campaign orchestration, personalization engine, experimentation tools, and multi-channel messaging capabilities across push notifications, email, WhatsApp, SMS, and in-app messages.',
      url: 'https://clevertap.com/',
      image: '',
      imageName: 'cleverTap.png',
      role: 'Developed responsive frontend components using React and Next.js for optimal performance and SEO. Built interactive dashboards and analytics visualizations. Implemented real-time data processing and AI integration for customer segmentation and personalization. Created multi-channel messaging interfaces and campaign management tools.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'AI Integration', 'RESTful APIs'],
    },
    {
      id: 5,
      title: 'Grand Canyon University',
      description: 'Comprehensive university website for Grand Canyon University, a private Christian university in Phoenix, Arizona. Built with modern web technologies to showcase degree programs, admissions information, campus life, and student resources. Features include responsive design, program finder, online application system, virtual campus tours, and integrated student portal access.',
      url: 'https://www.gcu.edu/',
      image: '',
      imageName: 'gcu.png',
      role: 'Developed the university website using React and Next.js for server-side rendering and optimal SEO. Built responsive layouts optimized for desktop and mobile devices. Implemented program search and filtering functionality. Created interactive campus tour features and integrated student portal access. Developed content management system for easy updates.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'JavaScript', 'Responsive Design', 'SEO Optimization'],
    },
    {
      id: 6,
      title: 'nopCommerce',
      description: 'Open-source e-commerce platform built on ASP.NET Core, providing a flexible and scalable solution for online stores. Features include PCI DSS compliance, unlimited customization capabilities, multi-store support, and comprehensive product management. Built with modern web technologies to deliver high-performance e-commerce experiences with extensive plugin ecosystem and developer-friendly architecture.',
      url: 'https://www.nopcommerce.com/en',
      image: '',
      imageName: 'nopcommerce.png',
      role: 'Developed e-commerce platform using ASP.NET Core and C# for robust backend services. Built responsive frontend components with modern JavaScript frameworks. Implemented PCI DSS compliant payment processing. Created plugin architecture for unlimited customization. Developed multi-store management system and comprehensive admin dashboard.',
      technologies: ['ASP.NET Core', 'C#', 'Blazor', 'JavaScript', 'TypeScript', 'SQL Server', 'RESTful APIs', 'MVC'],
    },
  ],
  theme: {
    darkMode: false,
  },
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.theme.darkMode = !state.theme.darkMode;
    },
  },
});

export const { toggleDarkMode } = portfolioSlice.actions;
export default portfolioSlice.reducer;

