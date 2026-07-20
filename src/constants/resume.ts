import { calculateYearsOfExperience } from "../utils";

export type ProjectOrigin =
  | "self-initiated"
  | "class-assignment"
  | "work-assignment"
  | "mentorship";

export interface SideProject {
  title: string;
  summary: string;
  description: string;
  role: string;
  yearPublished: number;
  origin: ProjectOrigin;
  isGroupProject: boolean;
  groupRole?: string;
  impact: string;
  learnings: string[];
  demo?: string;
  link?: string;
  imgs: string[];
}

export const resume = {
  downloadLink:
    "https://docs.google.com/document/d/1TqtCslIiSuBjtmp9slNIkWSJ-nji97vdDGQkpw6JFn8/export?format=pdf",
  aboutMe: {
    title: "About Me",
    description:
      `Software Engineer with ${calculateYearsOfExperience(2020)}+ years of experience engineering high-scale web ecosystems across enterprise and startup environments. Expert in React, Next.js, and TypeScript, with a focus on system design, modular architectures, and scalable design systems that drive 40% gains in development efficiency. Proven leader in technical roadmapping, mentorship, and performance engineering, optimizing Core Web Vitals to directly impact user retention and business growth.`,
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
    marquee: {
      row1: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Redux Toolkit",
        "Zustand",
        "TanStack Query",
        "React Hook Form",
        "Zod",
        "Tailwind CSS",
        "Design Systems",
        "Atomic Design",
        "Accessibility (a11y)",
        "Web Performance",
        "Core Web Vitals",
        "SSR",
        "SSG",
        "ISR",
        "Code Splitting",
        "Micro Frontends",
        "Module Federation",
        "Storybook",
        "Jest",
        "Playwright",
        "Cypress",
        "Framer Motion",
        "i18n",
        "SEO",
        "Git",
        "GitHub",
        "GitLab",
      ],
      row2: [
        "Node.js",
        "Express.js",
        "Python",
        "Flask",
        "REST API",
        "GraphQL",
        "WebSockets",
        "gRPC",
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "MongoDB",
        "Redis",
        "Prisma",
        "AuthN/AuthZ",
        "OAuth 2.0",
        "JWT",
        "RBAC",
        "Event-Driven Architecture",
        "Message Queues",
        "System Design",
        "Scalable Architecture",
        "Observability",
        "Monitoring",
        "CI/CD",
        "Docker",
        "Kubernetes",
        "DevOps",
        "Cloud",
        "AWS",
        "GCP",
        "Azure",
        "Firebase",
      ],
    },
  },
  projects: {
    qualifications: [
      {
        title: "Bachelor of Science",
        subtitle: "Concentration in Software Engineering",
        location: "Texas, USA",
      },
      {
        title: "Master of Information Technology",
        subtitle: "Concentration in Computing and Networking",
        location: "Singapore",
      },
    ],
    experiences: [
      {
        company: "Tixia OTA",
        location: "Jakarta, Indonesia",
        position: "Software Engineer (React)",
        companyIcon: "/img/tixia.png",
        "descriptions": [
          "Architected and led the frontend ecosystem for a multi-tenant OTA suite (Customer Web, Back-office, Internal Ops), ensuring high availability and system resilience for thousands of monthly active users.",
          "Engineered a scalable, Atomic Design-based System that served as the 'single source of truth' across all platforms; reduced UI delivery cycles by 40% and eliminated design debt across engineering pods.",
          "Designed a modular Payment & Checkout Architecture, abstracting gateway logic to support seamless Xendit integration and multi-provider hotel/flight APIs (Voltras, MG, Panorama).",
          "Optimized Critical Path Performance and Core Web Vitals, implementing code-splitting strategies and aggressive caching that reduced Time to Interactive (TTI) by 35% and increased booking conversion rates.",
          "Spearheaded Technical Excellence initiatives, standardizing ESLint configurations, unit testing mandates, and automated CI/CD checks, reducing production regressions by 25%.",
          "Engineered a Dynamic Metadata & SEO Engine utilizing Next.js SSR and SSG to boost organic discoverability by 20% while maintaining real-time tracking accuracy via GA4 and Meta Pixel."
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
        title: "ChainVault (First Place Hackaton)",
        summary:
          "First place Hackaton. A blockchain-powered decentralized file storage system built on the Internet Computer, combining secure on-chain storage with intelligent content understanding.",
        description:
          "ChainVault is a blockchain-powered storage system built on the Internet Computer offering secure, decentralized file storage. ChainVault provides a trustless, on-chain file storage system. Built on the Internet Computer, it delivers high-speed decentralized storage while offering intelligent content understanding.",
        role: "Lead Interactive Engineer",
        yearPublished: 2025,
        origin: "self-initiated",
        isGroupProject: true,
        groupRole:
          "Lead Interactive Engineer, Frontend Architect, UI/UX architect",
        impact:
          "Delivered an end-to-end decentralized upload flow and deployed a live canister demo, giving users a working proof of on-chain file storage on the Internet Computer.",
        learnings: [
          "Motoko canister patterns and candid interface design for storage APIs.",
          "Bridging React frontends with Internet Computer wallet authentication.",
          "Trade-offs between on-chain storage cost and UX for large file uploads.",
        ],
        demo: "https://zmumb-qqaaa-aaaaj-a2bkq-cai.icp0.io/",
        link: "https://github.com/firnazluztian/ChainVault",
        imgs: [
          '/img/web/cv-bg1.png',
          // '/img/web/cv-bg2.png',
          // '/img/web/cv-bg3.png',
          '/img/web/cv1.jpg',
          // '/img/web/cv2.jpg',
        ],
      },
      {
        title: "O.S.C.A.R",
        summary:
          "Mentored a US-based student cohort through shipping O.S.C.A.R. a real-time classroom platform unifying teacher, student, and admin workflows with live learning and AI assisted tooling.",
        description:
          "Led frontend architecture for a mentorship program (students of a former US professor): taught programming by building O.S.C.A.R. end to end multi-role classroom surfaces, real-time interaction, AI-powered assistance, and admin operations. Defined component boundaries, guided implementation across the team, and delivered a production-deployed product used in live demos and stakeholder pitches.",
        role: "Frontend Lead & Architect",
        yearPublished: 2025,
        origin: "mentorship",
        isGroupProject: true,
        groupRole:
          "Frontend lead & architect dashboard system design, real-time classroom UI, shared component architecture, and Vercel production deployment.",
        impact:
          "Shipped the teacher and student dashboards that anchored team demos and product pitches, while mentoring contributors through production grade React delivery aligning a multi-role team on one cohesive, live classroom experience.",
        learnings: [
          "Translating classroom domain flows into scalable dashboard and real time UI contracts.",
          "Mentoring feature ownership, code review, and incremental shipping on a shared codebase.",
          "Coordinating multi role delivery and stakeholder-ready releases with Vercel deployment discipline.",
        ],
        demo: "https://team-oscar.vercel.app/",
        // link: "https://github.com/firnazluztian/oscar-app",
        imgs: [
          '/img/web/oscar1.png',
          '/img/web/oscar2.png',
          // '/img/web/oscar3.PNG',
        ],
      },
      {
        title: "Design System",
        summary:
          "Architected a production React design system for a startup—Atomic Design structure, Tailwind token layer, published to npm, and adopted across multiple product surfaces.",
        description:
          "Owned the full design-system lifecycle for a startup product suite: defined token and component contracts, built composable React primitives on Tailwind CSS using Atomic Design (atoms through organisms), documented usage patterns, and shipped a versioned npm package consumed by multiple apps to unify UI velocity and visual consistency.",
        role: "Lead Frontend Engineer & Design System Architect",
        yearPublished: 2025,
        origin: "self-initiated",
        isGroupProject: false,
        impact:
          "Centralized shared UI in a versioned npm package adopted by multiple consuming apps—cutting duplicate component work, standardizing interaction patterns, and giving the team a single source of truth for faster, consistent feature delivery.",
        learnings: [
          "Balancing composition vs. configuration in component APIs built for library consumers.",
          "Package boundaries, semantic versioning, and publish workflows for npm distribution.",
          "Token-first theming with Tailwind and structuring Atomic Design tiers for cross-app adoption.",
        ],
        demo: "https://firnazdev-design-system.vercel.app/",
        link: "https://firnazdev-design-system.vercel.app/",
        imgs: [
          '/img/web/designsystem1.png',
          '/img/web/designsystem2.png',
        ],
      },
      {
        title: "Stormy Android and Web",
        summary:
          "A hyperlocal weather app for Android and web that delivers minute-by-minute rain forecasts powered by the Dark Sky API.",
        description:
          "Stormy Mobile is the most accurate source of hyperlocal weather information in android. With down-to-the-minute forecasts, you'll know exactly when the rain will start or stop, right where you're standing. It's almost like magic. Powered by the most used weather service API, Dark Sky is the best source of accurate weather forecasts to help you plan your life.",
        role: "Android & Web Developer",
        yearPublished: 2019,
        origin: "self-initiated",
        isGroupProject: false,
        impact:
          "Built and published a complete weather experience from API integration through polished mobile UI, demonstrating end-to-end ownership of a consumer-facing product.",
        learnings: [
          "Consuming third-party weather APIs and mapping responses to intuitive UI states.",
          "Android activity lifecycle patterns and responsive layout design.",
          "Balancing battery usage with location-based refresh intervals.",
        ],
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
        summary:
          "A 3D survival horror PC game where players blow out candles via microphone input while evading a roaming ghost in a haunted mansion.",
        description:
          "In Darkness is a 3D survival horror game for PC, developed for Dr. Roberto Dillon at Adsumsoft using Scrum methodology. The game takes place in a haunted mansion, where the player must escape without dying. To stop the exorcism, they need to blow out all the candles using a microphone, adding an immersive gameplay element. However, a ghost roams the mansion, actively trying to prevent progress. If the player encounters the ghost, they die instantly, creating a tense and strategic challenge. The game requires players to stay alert, carefully avoiding the ghost while focusing on their primary objective. Designed for Windows PC users aged 18-40, In Darkness delivers a thrilling and immersive horror experience. 👻🔥",
        role: "Game Programmer",
        yearPublished: 2020,
        origin: "class-assignment",
        isGroupProject: true,
        groupRole:
          "Full Stack Game Developer",
        impact:
          "Implemented core horror mechanics that defined the game's unique pitch, including microphone-driven candle interactions and ghost patrol behavior used in the final showcase build.",
        learnings: [
          "Unity C# gameplay scripting and state machines for enemy AI.",
          "Integrating microphone input as a core mechanic without breaking immersion.",
          "Scrum delivery in a multidisciplinary game team with milestone-based reviews.",
        ],
        imgs: [
          "/img/game/1.png",
          "/img/game/2.png",
          "/img/game/3.png",
          "/img/game/4.png",

          "/img/game/beta.png",
          "/img/game/final.png",
        ],
      },
      // {
      //   title: "E-Commerce Dashboard (React & Redux)",
      //   description:
      //     "Integrated Redux Toolkit for efficient global state management, improving page responsiveness. Implemented data visualization using Chart.js to provide business insights",
      //   imgs: [],
      // },
      // {
      //   title: "Job Finder App (React & TypeScript)",
      //   description:
      //     "Built a dynamic job listing system with API integration, improving search performance. Used TypeScript to enforce strict typing, reducing runtime errors by 50%",
      //   imgs: [],
      // },
      // {
      //   title: "DevConnect Social Media App (React & Firebase)",
      //   description:
      //     "Implemented Firebase authentication with role-based access control for enhanced security, Developed a real-time chat feature using Firebase Firestore and WebSockets, improving user engagement",
      //   imgs: [],
      // },
    ] satisfies SideProject[],
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
