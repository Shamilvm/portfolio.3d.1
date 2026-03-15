export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 5,
    name: "Resume",
    href: "/resume",
  },
];

export const myProjects = [
  {
    title: "CMMA - Maintenance Management System",
    desc: "Software for managing the assets of college and offices. It includes managing the hardware and software resources within college or office, stock management, maintenance of college computer lab and others. Still Updations going on...",
    subdesc:
      "Built as a asset and maintenance management system with Laravel, PHP, and SASS.",
    href: "",
    texture: "/textures/project/cmma.png",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/icons/laravel.png",
      },
      {
        id: 2,
        name: "PHP",
        path: "assets/icons/php.svg",
      },
      {
        id: 3,
        name: "Sass",
        path: "/assets/icons/sass.png",
      },
    ],
  },
  {
    title: "Portfolio",
    desc: "A dynamic, interactive platform designed to showcase my journey, expertise, and creative problem-solving skills. With a clean, modern interface and cutting-edge web technologies, it highlights my proficiency in building scalable applications, intuitive UI/UX designs, and innovative solutions. More coming soon...",
    subdesc:
      "Built as a portfolio app with Three.js, React, Tailwind CSS and JavaScript.",
    href: "",
    texture: "/textures/project/sc4.png",
    logo: "/assets/logo/shamil_logo.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Three.js",
        path: "/assets/icons/three.png",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/icons/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "assets/icons/tailwindcss.png",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/icons/javascript.png",
      },
      {
        id: 5,
        name: "Vite",
        path: "/assets/icons/vite-js.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 1.1 : isMobile ? 1.7 : 2.1,
    deskPosition: isSmall
      ? [1.8, -5.1, -6.0]
      : isMobile
        ? [2, -4.4, -8.9]
        : [3.9, -6.1, -8.9],
    deskRotation: isSmall
      ? [-2.8, -1.6, 3.4]
      : isMobile
        ? [-2.8, -1.6, 3.1]
        : [-2.8, -1.6, 3.3],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const resumeData = {
  HEADER: {
    NAME: "Muhammed Shamil VM",
    AGE: "23",
    PRONOUN: "he/him",
    HEADLINE:
      "Passionate about building high-performance and scalable applications.",
    // RESUME: "",
    EMAIL: "mailto:shamilvilakkumadathil@gmail.com",
    GITHUB: "https://github.com/Shamilvm",
    LINKEDIN: "https://www.linkedin.com/in/shamilvm/",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a full-stack developer who loves building efficient, scalable, and intuitive applications. I thrive on solving complex problems, optimizing performance, and creating seamless user experiences.",
    EXPERTISE:
      "My expertise lies in React.js, Next.js, TypeScript, Node.js etc... , and I enjoy working across the stack to bring ideas to life.",
  },

  EDUCATION: [
    {
      COURSE: "BSc Computer Science",
      SCHOOL: "Amal College of Advanced Studies, Nilambur",
      YEAR: "2021 - 2024",
    },
    {
      COURSE: "Higher Secondary",
      SCHOOL: "Govt Boys Higher Secondary School, Manjeri",
      YEAR: "2019 - 2021",
      MARK: "96%",
    },
    {
      COURSE: "High School",
      SCHOOL: "M.M.E.T Higher Secondary School, Melmuri",
      YEAR: "2016 - 2019",
      MARK: "99%",
    },
  ],

  ACHIEVEMENTS: [
    {
      TITLE: "Certificate of 1 million prompters",
      DESCRIPTION:
        "One million prompters initiative launched by His Highness Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, Crown Prince of Dubai.",
      // CERTIFICATE: "",
      YEAR: "2025",
    },
    {
      TITLE: "AMALIT Conference Volunteer",
      DESCRIPTION:
        "International Conference on the New Normal Crisis Resilience and Re-invention at Amal College of Advanced Studies Nilambur.",
      // CERTIFICATE: "",
      YEAR: "2023",
    },
    {
      TITLE: "Cyber Secuirity & Cloud Computing",
      DESCRIPTION:
        "National Institution of Electronics and Information Technology (NEILIT), Calicut participation Certificate.",
      // CERTIFICATE: "",
      YEAR: "2022",
    },
    {
      TITLE: "Network Engineering - Beginners",
      DESCRIPTION: "Certificate of Merit by Leads Networking Academy.",
      // CERTIFICATE: "",
      YEAR: "2022",
    },
    {
      TITLE: "Introduction to Java Programming",
      DESCRIPTION:
        "Certificate of Course Completion by EduMetrix Learning Solutions, Bengaluru.",
      // CERTIFICATE: "",
      YEAR: "2022",
    },
    {
      TITLE: "Capture The Flag",
      DESCRIPTION:
        "Certificate for achieving the 2nd position in Capture The Flag Competition conducted by Redteam Hacker Academy, Kottakkal.",
      // CERTIFICATE: "",
      YEAR: "2022",
    },
    {
      TITLE: "National Service Scheme",
      DESCRIPTION:
        "Certificate of National Service Scheme. Completed 240 hours of National Service Scheme Regular Activities and attended Special Camp during the year 2021-23.",
      // CERTIFICATE: "",
      YEAR: "2021 - 2023",
    },
  ],

  EXPERIENCE: {
    "Smart Global Domestic Workers Service Center LLC": {
      WEBSITE: "https://www.smarttadbeer.ae/",
      POSITION: "Fullstack Developer",
      LOCATION: "On-site - Dubai, UAE",
      DURATION: "May, 2025 - Present",
      DESCRIPTION: [
        "Designed, developed, and maintained scalable internal systems for Tadbeer services, covering Operations, Accounts, HR, and CRM functionalities.",
        "Developed various internal applications to improve efficiency and productivity within the organization.",
        "Worked closely with cross-functional teams to design and implement scalable and reliable solutions.",
      ],
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "Material UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git & Github",
      ],
    },
    "Smart Global Domestic Workers Service Center LLC ": {
      WEBSITE: "https://www.smarttadbeer.ae/",
      POSITION: "Fullstack Developer",
      LOCATION: "Remote",
      DURATION: "Feb, 2024 - May, 2025",
      DESCRIPTION: [
        "Developed and maintained websites and full-stack applications to support Tadbeer service operations.",
        "Utilized modern frameworks and libraries to ensure responsive and dynamic user interfaces.",
      ],
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git & Github",
      ],
    },
    "mr Papaya": {
      POSITION: "Junior Software Developer",
      LOCATION: "Hybrid",
      DURATION: "May, 2023 - Feb, 2024",
      DESCRIPTION: [
        "Designed and developed responsive websites using modern web technologies, ensuring a user-friendly interface and optimal performance across devices.",
        "Assisted in building and maintaining e-commerce web application, implementing features such as product listings, shopping cart functionality, and basic backend integrations.",
      ],
      TECH_STACK: [
        "React.js",
        "PHP",
        "Laravel",
        "TypeScript",
        "Tailwind CSS",
        "SASS",
        "SQL",
        "Git & Github",
      ],
    },
  },

  PROJECTS: {
    "Inventory Maintenance Management System": {
      GITHUB: "https://github.com/Shamilvm/college-project",
      DESCRIPTION: [
        "Developed an Inventory Management System for colleges and laboratories to efficiently manage stock, assets, and equipment in a centralized platform.",
        "Implemented modules for stock management, asset tracking, maintenance scheduling, and complaint handling to streamline laboratory and institutional operations.",
      ],
      TECH_STACK: ["PHP", "Laravel", "SASS", "SQL"],
      IMAGE: "",
      HIDDEN: false,
    },
    "Personal Portfolio": {
      GITHUB: "https://github.com/Shamilvm/3d.portfolio",
      DESCRIPTION: [
        "Developed a personal portfolio website using React and Three.js, featuring interactive 3D elements and modern UI to showcase projects and skills.",
        "Implemented responsive design and smooth animations to create an engaging user experience while highlighting development work and technical expertise.",
      ],
      TECH_STACK: [
        "Three.js",
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Vite",
      ],
      IMAGE: "",
      HIDDEN: false,
    },
  },

  SKILLS: {
    Languages: ["JavaScript", "TypeScript", "PHP", "Dart", "HTML"],
    Frameworks: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "React Native",
      "Expo",
      "Flutter",
      "Laravel",
    ],
    Libraries: ["Redux", "Three.js", "Tailwind CSS", "Material UI"],
    Styling: ["CSS", "SASS", "Tailwind CSS", "Material UI"],
    Databases: ["MongoDB", "Redis"],
    Authentication: ["JWT"],
    "DevOps & Cloud": ["Vercel", "DigitalOcean", "Nginx"],
    "Tools & Platforms": ["Git", "GitHub", "Postman"],
  },
};
