import { calculateYearsOfExperience } from "../../utils";
import type { Resume, SideProject } from "./types";

export const resumeId: Resume = {
  downloadLink:
    "https://docs.google.com/document/d/1TqtCslIiSuBjtmp9slNIkWSJ-nji97vdDGQkpw6JFn8/export?format=pdf",
  aboutMe: {
    title: "Tentang Saya",
    description: `Software Engineer dengan pengalaman ${calculateYearsOfExperience(2020)}+ tahun merekayasa ekosistem web berskala tinggi di lingkungan enterprise dan startup. Ahli React, Next.js, dan TypeScript, dengan fokus pada desain sistem, arsitektur modular, dan design system yang skalabel yang mendorong efisiensi pengembangan hingga 40%. Pemimpin terbukti dalam technical roadmapping, mentorship, dan performance engineering, mengoptimalkan Core Web Vitals untuk berdampak langsung pada retensi pengguna dan pertumbuhan bisnis.`,
    competencies: [
      "Pemecahan Masalah",
      "Penalaran Logis",
      "Berorientasi Hasil",
      "Kemampuan Komunikasi",
      "Agile",
      "Pemain Tim",
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
        title: "Sarjana Sains (Bachelor of Science)",
        subtitle: "Konsentrasi Software Engineering",
        location: "Texas, USA",
      },
      {
        title: "Magister Teknologi Informasi",
        subtitle: "Konsentrasi Computing and Networking",
        location: "Singapore",
      },
    ],
    experiences: [
      {
        company: "Tixia OTA",
        location: "Jakarta, Indonesia",
        position: "Software Engineer (React)",
        companyIcon: "/img/tixia.png",
        descriptions: [
          "Merancang dan memimpin ekosistem frontend untuk suite OTA multi-tenant (Customer Web, Back-office, Internal Ops), memastikan ketersediaan tinggi dan ketahanan sistem bagi ribuan pengguna aktif bulanan.",
          "Merekayasa Design System berbasis Atomic Design yang skalabel sebagai 'single source of truth' di semua platform; mengurangi siklus pengiriman UI hingga 40% dan menghilangkan design debt di berbagai engineering pod.",
          "Merancang arsitektur Payment & Checkout modular, mengabstraksi logika gateway untuk mendukung integrasi Xendit yang mulus serta API hotel/penerbangan multi-provider (Voltras, MG, Panorama).",
          "Mengoptimalkan Critical Path Performance dan Core Web Vitals, menerapkan code-splitting dan caching agresif yang menurunkan Time to Interactive (TTI) hingga 35% dan meningkatkan conversion rate booking.",
          "Memimpin inisiatif Technical Excellence, menstandarkan konfigurasi ESLint, mandat unit testing, dan pengecekan CI/CD otomatis, mengurangi regresi produksi hingga 25%.",
          "Merekayasa Dynamic Metadata & SEO Engine menggunakan Next.js SSR dan SSG untuk meningkatkan discoverability organik hingga 20% sambil menjaga akurasi pelacakan real-time via GA4 dan Meta Pixel.",
        ],
      },
      {
        company: "Telkom Indonesia",
        location: "Jakarta, Indonesia",
        position: "Software Engineer (React)",
        companyIcon: "/img/telkom.png",
        descriptions: [
          "Mengelola tim lintas fungsi untuk mengirimkan fitur pada super app MyTEnS Telkom yang melayani jutaan pengguna, serta berkontribusi pada dashboard lalu lintas tinggi yang memperbaiki waktu muat hingga 40%.",
          "Berkontribusi signifikan pada pengembangan design system, form dinamis, dan arsitektur atomik, mengurangi waktu pengembangan fitur baru hingga 30%.",
          "Mengimplementasikan pipeline CI/CD dengan Jenkins, yang mengurangi waktu deployment dan meminimalkan human error pada rilis.",
          "Melakukan code review dan membimbing junior developer, yang menghasilkan peningkatan kualitas kode keseluruhan hingga 15%.",
          "Mengintegrasikan tools monitoring performa (Google Analytics 4) untuk mengidentifikasi dan menerapkan optimasi, meningkatkan kecepatan halaman dan kepuasan pengguna.",
        ],
      },
      {
        company: "Oromico Singapore",
        location: "Singapore",
        position: "Software Engineer (React)",
        companyIcon: "/img/oro.png",
        descriptions: [
          "Berkontribusi di startup fintech agile, mengembangkan aplikasi keuangan yang aman dan berperforma tinggi.",
          "Merekayasa UI CRUD Chart of Accounts yang kokoh dengan React, Redux, dan TypeScript, meningkatkan efisiensi manajemen data.",
          "Mendorong optimasi performa frontend, menurunkan waktu muat halaman hingga 20%, serta menekan tantangan keamanan yang kompleks.",
          "Mengembangkan dan memelihara RESTful API dengan Python Flask, terintegrasi dengan MongoDB untuk persistensi data.",
          "Berkolaborasi lintas fungsi dengan tim produk dan desain, menerjemahkan requirement menjadi antarmuka intuitif dan memastikan keandalan sistem melalui pengujian API.",
        ],
      },
      {
        company: "Addon Tech",
        location: "TX, USA",
        position: "Software Engineer (Android)",
        companyIcon: "/img/addon.jpeg",
        descriptions: [
          "Mengembangkan aplikasi mobile Android kritis untuk proyek asuransi kesehatan, meningkatkan pengalaman pengguna dan maintainability.",
          "Merancang UI yang sangat responsif dan menarik secara visual menggunakan native Android SDK, Java, dan Material Design, meningkatkan engagement pengguna hingga 15%.",
          "Mengimplementasikan solusi persistensi data kokoh dengan SQLite untuk kapabilitas offline dan mengoptimalkan performa aplikasi untuk pengambilan data yang efisien.",
          "Berkolaborasi dengan tim lintas fungsi sepanjang siklus pengembangan perangkat lunak, mengirimkan fitur berkualitas tinggi sesuai jadwal.",
          "Menjaga kualitas dan maintainability kode melalui code review rutin serta kepatuhan terhadap best practice pengembangan Android.",
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
        title: "Vinove AI",
        summary:
          "Companion chat bergaya visual novel sinematik: buat persona, unggah foto, dan ngobrol di UI bergaya adegan dengan isyarat emosi, preferensi membaca, serta dukungan locale bilingual.",
        description:
          "Membangun Vinove end-to-end sebagai produk companion chat soft-launch: React 19 + Vite + TypeScript, Tailwind/shadcn, dan Zustand di klien; Supabase untuk Auth (Google + magic link), Postgres, dan Storage foto; Vercel serverless `/api/chat` dengan Claude Haiku atau Gemini, plus Gemini TTS untuk pemutaran dialog. Merilis onboarding companion, scene chat dengan typewriter dan tema, tag emosi otomatis dari balasan model, switcher dua companion, kuota chat harian, dan locale en/id/jp.",
        role: "Full Stack Engineer",
        yearPublished: 2026,
        origin: "self-initiated",
        isGroupProject: false,
        impact:
          "Merilis aplikasi companion chat produksi dari auth dan storage hingga balasan LLM dan TTS, memberikan loop onboarding-ke-adegan yang berfungsi dengan riwayat tersimpan, preferensi baca, serta operasi soft-launch (kuota, kesadaran failover provider, dan penguatan redirect auth).",
        learnings: [
          "Batas Supabase Auth, RLS, dan Storage agar kunci client-only tidak pernah mengekspos path istimewa.",
          "Memisahkan UI Vite dari rute serverless LLM/TTS Vercel, termasuk pergantian provider dan kontrol kuota harian.",
          "Memproduktisasi UX scene-chat—typewriter, isyarat emosi, tema, dan locale—tanpa menunggu streaming sebagai taruhan berikutnya.",
        ],
        demo: "https://vinove.vercel.app/",
        link: "https://github.com/firnazluztian/vinove-app",
        imgs: [
          "/img/web/vinove/1.png",
          "/img/web/vinove/2.png",
          "/img/web/vinove/3.png",
        ],
      },
      {
        title: "ChainVault (Juara 1 Hackaton)",
        summary:
          "Juara 1 Hackaton. Sistem penyimpanan file terdesentralisasi berbasis blockchain di Internet Computer, menggabungkan penyimpanan on-chain yang aman dengan pemahaman konten cerdas.",
        description:
          "ChainVault adalah sistem penyimpanan berbasis blockchain di Internet Computer yang menawarkan penyimpanan file terdesentralisasi yang aman. ChainVault menyediakan sistem penyimpanan file on-chain tanpa kepercayaan. Dibangun di Internet Computer, ia menghadirkan penyimpanan terdesentralisasi berkecepatan tinggi sekaligus pemahaman konten yang cerdas.",
        role: "Lead Interactive Engineer",
        yearPublished: 2025,
        origin: "self-initiated",
        isGroupProject: true,
        groupRole:
          "Lead Interactive Engineer, Frontend Architect, arsitek UI/UX",
        impact:
          "Mengirimkan alur upload terdesentralisasi end-to-end dan men-deploy demo canister live, memberikan bukti kerja penyimpanan file on-chain di Internet Computer.",
        learnings: [
          "Pola Motoko canister dan desain antarmuka candid untuk API penyimpanan.",
          "Menjembatani frontend React dengan autentikasi wallet Internet Computer.",
          "Trade-off antara biaya penyimpanan on-chain dan UX untuk upload file besar.",
        ],
        demo: "https://zmumb-qqaaa-aaaaj-a2bkq-cai.icp0.io/",
        link: "https://github.com/firnazluztian/ChainVault",
        imgs: ["/img/web/cv-bg1.png", "/img/web/cv1.jpg"],
      },
      {
        title: "O.S.C.A.R",
        summary:
          "Membimbing kohort mahasiswa berbasis AS hingga merilis O.S.C.A.R.—platform kelas real-time yang menyatukan alur guru, siswa, dan admin dengan pembelajaran live serta tooling berbantuan AI.",
        description:
          "Memimpin arsitektur frontend untuk program mentorship (mahasiswa mantan profesor AS): mengajar pemrograman dengan membangun O.S.C.A.R. end-to-end—permukaan kelas multi-peran, interaksi real-time, bantuan bertenaga AI, dan operasi admin. Menentukan batas komponen, membimbing implementasi lintas tim, dan mengirimkan produk production-deployed yang digunakan dalam demo live dan pitch pemangku kepentingan.",
        role: "Frontend Lead & Architect",
        yearPublished: 2025,
        origin: "mentorship",
        isGroupProject: true,
        groupRole:
          "Frontend lead & arsitek: desain sistem dashboard, UI kelas real-time, arsitektur komponen bersama, dan deployment produksi Vercel.",
        impact:
          "Merilis dashboard guru dan siswa yang menjadi jangkar demo tim dan pitch produk, sambil membimbing kontributor melalui pengiriman React production-grade yang menyelaraskan tim multi-peran pada satu pengalaman kelas live yang kohesif.",
        learnings: [
          "Menerjemahkan alur domain kelas menjadi kontrak dashboard yang skalabel dan UI real-time.",
          "Mentoring kepemilikan fitur, code review, dan pengiriman inkremental pada codebase bersama.",
          "Mengorkestrasi pengiriman multi-peran dan rilis siap pemangku kepentingan dengan disiplin deployment Vercel.",
        ],
        demo: "https://team-oscar.vercel.app/",
        imgs: ["/img/web/oscar1.png", "/img/web/oscar2.png"],
      },
      {
        title: "Design System",
        summary:
          "Merancang design system React produksi untuk startup—struktur Atomic Design, lapisan token Tailwind, dipublish ke npm, dan diadopsi di banyak permukaan produk.",
        description:
          "Memiliki siklus hidup design system penuh untuk suite produk startup: mendefinisikan kontrak token dan komponen, membangun primitif React yang dapat dikomposisi di Tailwind CSS dengan Atomic Design (atom hingga organism), mendokumentasikan pola penggunaan, dan merilis paket npm berversi yang dikonsumsi banyak aplikasi untuk menyatukan kecepatan UI dan konsistensi visual.",
        role: "Lead Frontend Engineer & Design System Architect",
        yearPublished: 2025,
        origin: "self-initiated",
        isGroupProject: false,
        impact:
          "Memusatkan UI bersama dalam paket npm berversi yang diadopsi banyak aplikasi konsumen—mengurangi kerja komponen duplikat, menstandarkan pola interaksi, dan memberi tim satu sumber kebenaran untuk pengiriman fitur yang lebih cepat dan konsisten.",
        learnings: [
          "Menyeimbangkan composition vs. configuration dalam API komponen untuk konsumen library.",
          "Batas paket, semantic versioning, dan alur publish untuk distribusi npm.",
          "Theming token-first dengan Tailwind dan struktur tier Atomic Design untuk adopsi lintas aplikasi.",
        ],
        demo: "https://firnazdev-design-system.vercel.app/",
        link: "https://firnazdev-design-system.vercel.app/",
        imgs: [
          "/img/web/designsystem1.png",
          "/img/web/designsystem2.png",
        ],
      },
      {
        title: "Stormy Android and Web",
        summary:
          "Aplikasi cuaca hiper-lokal untuk Android dan web yang menyajikan prakiraan hujan menit-demi-menit didukung Dark Sky API.",
        description:
          "Stormy Mobile adalah sumber informasi cuaca hiper-lokal paling akurat di Android. Dengan prakiraan hingga ke menit, Anda tahu persis kapan hujan mulai atau berhenti, tepat di lokasi Anda. Hampir seperti sihir. Didukung layanan cuaca yang paling banyak digunakan, Dark Sky adalah sumber prakiraan akurat untuk membantu merencanakan hari Anda.",
        role: "Android & Web Developer",
        yearPublished: 2019,
        origin: "self-initiated",
        isGroupProject: false,
        impact:
          "Membangun dan mempublikasikan pengalaman cuaca lengkap dari integrasi API hingga UI mobile yang dipoles, menunjukkan kepemilikan end-to-end produk konsumen.",
        learnings: [
          "Mengonsumsi API cuaca pihak ketiga dan memetakan respons ke state UI yang intuitif.",
          "Pola lifecycle activity Android dan desain layout responsif.",
          "Menyeimbangkan penggunaan baterai dengan interval refresh berbasis lokasi.",
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
          "Game survival horror 3D untuk PC di mana pemain meniup lilin via input mikrofon sambil menghindari hantu yang berkeliaran di mansion berhantu.",
        description:
          "In Darkness adalah game survival horror 3D untuk PC, dikembangkan untuk Dr. Roberto Dillon di Adsumsoft dengan metodologi Scrum. Berlatar mansion berhantu, pemain harus melarikan diri tanpa mati. Untuk menghentikan ritual, mereka harus meniup semua lilin menggunakan mikrofon—elemen gameplay imersif. Namun hantu berkeliaran dan aktif menghalangi kemajuan. Jika bertemu hantu, pemain mati seketika, menciptakan tantangan yang tegang dan strategis. Dirancang untuk pengguna Windows PC usia 18–40, In Darkness menghadirkan pengalaman horor yang menegangkan dan imersif.",
        role: "Game Programmer",
        yearPublished: 2020,
        origin: "class-assignment",
        isGroupProject: true,
        groupRole: "Full Stack Game Developer",
        impact:
          "Mengimplementasikan mekanik horor inti yang mendefinisikan pitch unik game, termasuk interaksi lilin berbasis mikrofon dan perilaku patroli hantu yang digunakan di build showcase final.",
        learnings: [
          "Scripting gameplay Unity C# dan state machine untuk AI musuh.",
          "Mengintegrasikan input mikrofon sebagai mekanik inti tanpa merusak immersi.",
          "Pengiriman Scrum di tim game multidisiplin dengan review berbasis milestone.",
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
    ] as SideProject[],
  },
  activities: [
    {
      title: "Hackaton IoT James Cook University",
      img: ["/img/activity/hack1.jpg", "/img/activity/hack2.jpg"],
    },
    {
      title: "Relawan mahasiswa Unity",
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
