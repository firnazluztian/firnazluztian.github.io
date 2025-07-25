import { calculateYearsOfExperience } from "../utils";

export const resume = {
  downloadLink:
    "https://docs.google.com/document/d/1TqtCslIiSuBjtmp9slNIkWSJ-nji97vdDGQkpw6JFn8/export?format=pdf",
  aboutMe: {
    title: "About Me",
    description:
      `Software Engineer with ${calculateYearsOfExperience(2020)} years of experience in building high-performance, scalable web applications across both enterprise environments and agile startups. Expertise in React, Next.js, TypeScript, and Tailwind CSS, with a strong track record of optimizing UX, performance, and maintainability. Experienced in remote and on-site work, adapting to global teams and time zones.`,
    competencies: [
      "Problem Solving",
      "Logical Reasoning",
      "Result Oriented",
      "Communication Skills",
      "Agile",
      "Team Player",
    ],
    skills: [
      "skill-icons:javascript",
      "skill-icons:typescript",
      "skill-icons:python-dark",
      "skill-icons:react-dark",
      "skill-icons:nextjs-dark",
      "skill-icons:tailwindcss-dark",
      "skill-icons:mongodb",
      "skill-icons:git",
      "skill-icons:github-dark",
      "skill-icons:gitlab-dark",
      "skill-icons:aiscript-dark",
    ],
  },
  projects: {
    qualifications: [
      {
        title: "Bachelor of Science",
        subtitle: "Concentration in Software Engineering",
      },
      {
        title: "Master of Information Technology",
        subtitle: "Concentration in Computing and Networking",
      },
    ],
    experiences: [
      {
        company: "Tixia OTA",
        location: "Jakarta, Indonesia",
        position: "Software Engineer (React)",
        companyIcon: "/img/tixia.png",
        descriptions: [
          "Managed the development and maintenance of Tixia's high-traffic hotel and flight booking applications, including backoffice systems, ensuring seamless operation.",
          "Led the creation and implementation of a comprehensive React-based design system, improving development efficiency by 25% and ensuring brand consistency.",
          "Oversaw codebase management, repository organization, and conducted thorough code reviews for both front-end and back-end services.",
          "Optimized application performance and responsiveness for high-traffic OTA systems, reducing load times by 15%.",
          "Actively engaged with users to gather feedback, translate requirements, and enhance the overall functionality of the OTA system in an Agile environment.",
        ],
      },
      {
        company: "Telkom Indonesia",
        location: "Jakarta, Indonesia",
        position: "Software Engineer (React)",
        companyIcon: "/img/telkom.png",
        descriptions: [
          "Managed cross-functional teams to deliver features for Telkom's MyTEnS super app, serving millions, and contributed to a high-traffic dashboard improving load time by 40%.",
          "Contributed significantly to the development of design systems, dynamic forms, and atomic architecture, reducing new feature development time by 30%.",
          "Implemented CI/CD pipelines using Jenkins, which reduced deployment time and minimized human error in releases.",
          "Conducted code reviews and mentored junior developers, leading to a 15% improvement in overall code quality.",
          "Integrated performance monitoring tools (Google Analytics 4) to identify and implement optimizations, boosting page speed and user satisfaction.",
        ],
      },
      {
        company: "Oromico Singapore",
        location: "Singapore",
        position: "Software Engineer (React)",
        companyIcon: "/img/oro.png",
        descriptions: [
          "Operated in an agile fintech startup, developing secure and high-performance financial applications.",
          "Engineered a robust CRUD Chart of Accounts UI using React, Redux, and TypeScript, enhancing data management efficiency.",
          "Drove front-end performance optimizations, reducing page load times by 20%, and mitigated complex security challenges.",
          "Developed and maintained RESTful APIs with Python Flask, integrating with MongoDB for data persistence.",
          "Collaborated cross-functionally with product and design teams, translating requirements into intuitive interfaces and ensuring system reliability through API testing.",
        ],
      },
      {
        company: "Addon Tech",
        location: "TX, USA",
        position: "Software Engineer (Android)",
        companyIcon: "/img/addon.jpeg",
        descriptions: [
          "Developed a critical Android mobile application for a health insurance project, enhancing user experience and maintainability.",
          "Crafted highly responsive and visually appealing user interfaces using native Android SDK, Java, and Material Design, increasing user engagement by 15%.",
          "Implemented robust data persistence solutions with SQLite for offline capabilities and optimized app performance for efficient data retrieval.",
          "Collaborated with cross-functional teams throughout the software development lifecycle, delivering high-quality features on schedule.",
          "Ensured code quality and maintainability through regular code reviews and adherence to Android development best practices.",
        ],
      },
    ],
    certifications: [
      {
        title: "Google Project Management Professional Certificate",
        icon: "logos:google-icon",
      },
      {
        title: "Google Data Analytics Professional Certificate",
        icon: "logos:google-icon",
      },
      {
        title: "Ekipa Scrum Master Agile SDLC",
        icon: "logos:google-icon",
      },
      {
        title: "Clean JavaScript",
        icon: "logos:udemy-icon",
      },
      {
        title: "React Testing: Jest & Enzyme",
        icon: "logos:udemy-icon",
      },
      {
        title: "Modern React Redux",
        icon: "logos:udemy-icon",
      },
      {
        title: "React: Design Patterns",
        icon: "logos:linkedin-icon",
      },
      {
        title: "React: Software Architecture",
        icon: "logos:linkedin-icon",
      },
      {
        title: "Javascript: patterns",
        icon: "logos:linkedin-icon",
      },
    ],
    sideProjects: [
      {
        title: "ChainVault",
        description:
          "ChainVault is a blockchain-powered storage system built on the Internet Computer — offering secure, decentralized file storage. ChainVault provides a trustless, on-chain file storage system. Built on the Internet Computer, it delivers high-speed decentralized storage while offering intelligent content understanding.",
        demo: "https://zmumb-qqaaa-aaaaj-a2bkq-cai.icp0.io/",
        link: "https://github.com/firnazluztian/ChainVault",
        imgs: [
          '/img/web/cv-bg1.png',
          '/img/web/cv-bg2.png',
          '/img/web/cv-bg3.png',
          '/img/web/cv1.jpg',
          '/img/web/cv2.jpg',
        ],
      },
      {
        title: "Hotel Booking Platform",
        description:
          "A NextJS-based hotel booking platform that allows users to search, filter, and book hotel rooms using SSR fetching and server actions.",
        demo: "https://tixia.vercel.app",
        imgs: [
          '/img/web/hotel1.png',
          '/img/web/hotel2.png',
          // '/img/web/hotel3.png',
          // '/img/web/hotel4.png',
        ],
      },
      {
        title: "Student E-Notes",
        description:
          "Student E-Notes is a small scale fullstack web application developed with HTML, CSS, JS for the front side and Node, Express, MongoDB for the back end. The idea of Student E-Notes is to be able to provide students with the ability to write notes, create todolist, and share their notes online and from any devices with its responsiveness.",
        imgs: ["/img/web/3.png", "/img/web/3a.png"],
      },
      {
        title: "Stormy Android and Web",
        description:
          "Stormy Mobile is the most accurate source of hyperlocal weather information in android. With down-to-the-minute forecasts, you'll know exactly when the rain will start or stop, right where you're standing. It's almost like magic. Powered by the most used weather service API, Dark Sky is the best source of accurate weather forecasts to help you plan your life.",
        imgs: [
          "/img/android/p1.JPG",
          "/img/android/p2.JPG",
          "/img/android/p3.JPG",
          "/img/android/p4.JPG",
          "/img/web/1.png",
        ],
      },
      {
        title: "InDarkness: Unity Game development",
        description:
          "In Darkness is a 3D survival horror game for PC, developed for Dr. Roberto Dillon at Adsumsoft using Scrum methodology. The game takes place in a haunted mansion, where the player must escape without dying. To stop the exorcism, they need to blow out all the candles using a microphone, adding an immersive gameplay element. However, a ghost roams the mansion, actively trying to prevent progress. If the player encounters the ghost, they die instantly, creating a tense and strategic challenge. The game requires players to stay alert, carefully avoiding the ghost while focusing on their primary objective. Designed for Windows PC users aged 18-40, In Darkness delivers a thrilling and immersive horror experience. 👻🔥",
        imgs: [
          "/img/game/1.png",
          "/img/game/2.png",
          "/img/game/3.png",
          "/img/game/4.png",

          "/img/game/beta.png",
          "/img/game/final.png",
        ],
      },
      {
        title: "E-Commerce Dashboard (React & Redux)",
        description:
          "Integrated Redux Toolkit for efficient global state management, improving page responsiveness. Implemented data visualization using Chart.js to provide business insights",
        imgs: [],
      },
      {
        title: "Job Finder App (React & TypeScript)",
        description:
          "Built a dynamic job listing system with API integration, improving search performance. Used TypeScript to enforce strict typing, reducing runtime errors by 50%",
        imgs: [],
      },
      {
        title: "DevConnect Social Media App (React & Firebase)",
        description:
          "Implemented Firebase authentication with role-based access control for enhanced security, Developed a real-time chat feature using Firebase Firestore and WebSockets, improving user engagement",
        imgs: [],
      },
    ],
  },
  activities: [
    {
      title: "Hackaton IoT James Cook Univeristy",
      img: ["/img/activity/hack1.jpg", "/img/activity/hack2.jpg"],
    },
    {
      title: "Unity student volunteer",
      img: ["/img/activity/unite1.jpg", "/img/activity/unite2.jpg"],
    },
  ],
  socialMedia: [
    {
      title: "LinkedIn",
      icon: "lucide:linkedin",
      url: "https://www.linkedin.com/in/firnaz-luztian-adiansyah-6526b8194/",
    },
    {
      title: "Github",
      icon: "lucide:github",
      url: "https://github.com/firnazluztian",
    },
    {
      title: "Gitlab",
      icon: "lucide:gitlab",
      url: "https://gitlab.playcourt.id/telkomdev-firnazluztian",
    },
  ],
};
