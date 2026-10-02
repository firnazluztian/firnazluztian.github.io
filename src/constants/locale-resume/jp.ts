import { calculateYearsOfExperience } from "../../utils";
import type { Resume, SideProject } from "./types";

export const resumeJp: Resume = {
  downloadLink:
    "https://docs.google.com/document/d/1TqtCslIiSuBjtmp9slNIkWSJ-nji97vdDGQkpw6JFn8/export?format=pdf",
  aboutMe: {
    title: "自己紹介",
    description: `エンタープライズおよびスタートアップ環境で大規模Webエコシステムを設計してきた、経験${calculateYearsOfExperience(2020)}+年のソフトウェアエンジニアです。React、Next.js、TypeScriptに精通し、システム設計、モジュラーアーキテクチャ、スケーラブルなデザインシステムに注力し、開発効率を最大40%向上させています。テクニカルロードマップ、メンタリング、パフォーマンスエンジニアリングで実績があり、Core Web Vitalsを最適化してユーザー定着と事業成長に直結させます。`,
    competencies: [
      "問題解決",
      "論理的思考",
      "結果志向",
      "コミュニケーション力",
      "Agile",
      "チームプレイヤー",
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
        title: "学士号（Bachelor of Science）",
        subtitle: "ソフトウェアエンジニアリング専攻",
        location: "Texas, USA",
      },
      {
        title: "情報技術修士",
        subtitle: "コンピューティング＆ネットワーキング専攻",
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
          "マルチテナントOTAスイート（Customer Web、Back-office、Internal Ops）のフロントエンドエコシステムを設計・主導し、数千の月間アクティブユーザー向けに高可用性とシステム耐性を確保。",
          "Atomic Designベースのスケーラブルなデザインシステムを構築し、全プラットフォームの『single source of truth』として機能。UIデリバリーサイクルを40%短縮し、エンジニアリングポッド横断のデザイン負債を解消。",
          "モジュラーなPayment & Checkoutアーキテクチャを設計し、ゲートウェイロジックを抽象化してXendit連携と複数プロバイダのホテル／フライトAPI（Voltras、MG、Panorama）を円滑に支援。",
          "Critical Path PerformanceとCore Web Vitalsを最適化。コード分割と積極的なキャッシュによりTime to Interactive（TTI）を35%削減し、予約コンバージョン率を向上。",
          "Technical Excellence施策を主導し、ESLint設定、ユニットテスト義務、自動CI/CDチェックを標準化。本番リグレッションを25%削減。",
          "Next.jsのSSR／SSGを用いたDynamic Metadata & SEO Engineを構築し、オーガニック発見性を20%向上。GA4とMeta Pixelによるリアルタイム計測精度も維持。",
        ],
      },
      {
        company: "Telkom Indonesia",
        location: "Jakarta, Indonesia",
        position: "Software Engineer (React)",
        companyIcon: "/img/telkom.png",
        descriptions: [
          "数百万人向けTelkomのMyTEnSスーパーアプリ機能をクロスファンクショナルチームで推進し、高トラフィックダッシュボードの読み込み時間を40%改善。",
          "デザインシステム、動的フォーム、アトミックアーキテクチャの開発に大きく貢献し、新機能開発時間を30%短縮。",
          "JenkinsによるCI/CDパイプラインを実装し、デプロイ時間を短縮しリリース時の人為ミスを最小化。",
          "コードレビューとジュニア開発者のメンタリングを実施し、全体のコード品質を15%向上。",
          "Google Analytics 4などのパフォーマンス監視ツールを導入し、最適化を特定・実装してページ速度とユーザー満足度を向上。",
        ],
      },
      {
        company: "Oromico Singapore",
        location: "Singapore",
        position: "Software Engineer (React)",
        companyIcon: "/img/oro.png",
        descriptions: [
          "アジャイルなフィンテックスタートアップで、安全かつ高性能な金融アプリケーションを開発。",
          "React、Redux、TypeScriptで堅牢なCRUD Chart of Accounts UIを構築し、データ管理効率を向上。",
          "フロントエンド性能最適化を推進し、ページ読み込み時間を20%削減。複雑なセキュリティ課題にも対応。",
          "Python FlaskでRESTful APIを開発・保守し、MongoDBと統合してデータ永続化を実現。",
          "プロダクト／デザインチームと横断連携し、要件を直感的なUIへ翻訳。APIテストでシステムの信頼性を担保。",
        ],
      },
      {
        company: "Addon Tech",
        location: "TX, USA",
        position: "Software Engineer (Android)",
        companyIcon: "/img/addon.jpeg",
        descriptions: [
          "健康保険プロジェクト向けの重要なAndroidモバイルアプリを開発し、UXと保守性を向上。",
          "ネイティブAndroid SDK、Java、Material Designで高レスポンシブかつ視覚的に魅力的なUIを構築し、エンゲージメントを15%向上。",
          "SQLiteによる堅牢なデータ永続化でオフライン対応を実現し、効率的なデータ取得向けにアプリ性能を最適化。",
          "ソフトウェア開発ライフサイクル全体でクロスファンクショナルチームと協業し、高品質な機能を予定どおり納品。",
          "定期的なコードレビューとAndroid開発ベストプラクティスへの準拠で、コード品質と保守性を確保。",
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
          "シネマティックなビジュアルノベル風コンパニオンチャット。ペルソナ作成、写真アップロード、感情キュー・読書設定・バイリンガルlocale対応のシーン風UIで会話できます。",
        description:
          "ソフトローンチのコンパニオンチャット製品としてVinoveをエンドツーエンドで構築。クライアントはReact 19 + Vite + TypeScript、Tailwind/shadcn、Zustand。SupabaseでAuth（Google + マジックリンク）、Postgres、写真Storage。Vercel serverless `/api/chat`でClaude HaikuまたはGemini、対話再生にはGemini TTS。コンパニオンオンボーディング、タイプライターとテーマ付きシーンチャット、モデル返信からの自動感情タグ、2体コンパニオン切替、日次チャット枠、en/id/jpロケールを出荷。",
        role: "フルスタックエンジニア",
        yearPublished: 2026,
        origin: "self-initiated",
        isGroupProject: false,
        impact:
          "認証・ストレージからLLM返信・TTSまで本番コンパニオンチャットを出荷し、履歴永続化・読書設定・ソフトローンチ運用（枠、プロバイダフェイルオーバー認識、認証リダイレクト強化）付きのオンボーディング〜シーンループを実現。",
        learnings: [
          "クライアント専用キーが特権パスを露出しないよう、Supabase Auth／RLS／Storageの境界を設計。",
          "Vite UIとVercel serverlessのLLM／TTSルートを分離し、プロバイダ切替と日次枠制御を実装。",
          "ストリーミングを次の賭けにしつつ、タイプライター・感情キュー・テーマ・localeを製品化。",
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
        title: "ChainVault（ハッカソン優勝）",
        summary:
          "ハッカソン優勝。Internet Computer上のブロックチェーン分散ファイルストレージで、安全なオンチェーン保存と知的コンテンツ理解を組み合わせます。",
        description:
          "ChainVaultはInternet Computer上のブロックチェーンストレージで、安全な分散ファイル保存を提供します。トラストレスなオンチェーンファイルストレージとして、高速な分散保存と知的なコンテンツ理解を両立します。",
        role: "Lead Interactive Engineer",
        yearPublished: 2025,
        origin: "self-initiated",
        isGroupProject: true,
        groupRole:
          "Lead Interactive Engineer、Frontend Architect、UI/UXアーキテクト",
        impact:
          "エンドツーエンドの分散アップロードフローを提供し、ライブキャニスターデモをデプロイ。Internet Computer上のオンチェーンファイル保存の動作証明をユーザーに提示。",
        learnings: [
          "ストレージAPI向けMotokoキャニスターパターンとCandidインターフェース設計。",
          "ReactフロントエンドとInternet Computerウォレット認証の橋渡し。",
          "大容量アップロードにおけるオンチェーン保存コストとUXのトレードオフ。",
        ],
        demo: "https://zmumb-qqaaa-aaaaj-a2bkq-cai.icp0.io/",
        link: "https://github.com/firnazluztian/ChainVault",
        imgs: ["/img/web/cv-bg1.png", "/img/web/cv1.jpg"],
      },
      {
        title: "O.S.C.A.R",
        summary:
          "米国ベースの学生コホートをメンタリングし、教師・生徒・管理者のワークフローを統合したリアルタイム教室プラットフォームO.S.C.A.R.を出荷。ライブ学習とAI支援ツールを搭載。",
        description:
          "元米国教授の学生向けメンタリングプログラムでフロントエンドアーキテクチャを主導。プログラミング教育としてO.S.C.A.R.をエンドツーエンド構築—マルチロール教室UI、リアルタイム相互作用、AI支援、管理者運用。コンポーネント境界を定義し、チーム実装を指導し、ライブデモとステークホルダーピッチで使われる本番デプロイ製品を納品。",
        role: "Frontend Lead & Architect",
        yearPublished: 2025,
        origin: "mentorship",
        isGroupProject: true,
        groupRole:
          "Frontendリード＆アーキテクト：ダッシュボード設計、リアルタイム教室UI、共有コンポーネントアーキテクチャ、Vercel本番デプロイ。",
        impact:
          "チームデモと製品ピッチの軸となった教師／生徒ダッシュボードを出荷し、本番級Reactデリバリーを通じて貢献者をメンタリング。マルチロールチームを一体のライブ教室体験に統合。",
        learnings: [
          "教室ドメインフローをスケーラブルなダッシュボードとリアルタイムUI契約へ翻訳。",
          "共有コードベースでの機能オーナーシップ、コードレビュー、段階的出荷のメンタリング。",
          "Vercelデプロイ規律のもとでのマルチロール納品とステークホルダー向けリリース調整。",
        ],
        demo: "https://team-oscar.vercel.app/",
        imgs: ["/img/web/oscar1.png", "/img/web/oscar2.png"],
      },
      {
        title: "Design System",
        summary:
          "スタートアップ向け本番Reactデザインシステムを設計—Atomic Design構造、Tailwindトークン層、npm公開、複数プロダクト面での採用。",
        description:
          "スタートアップ製品スイートのデザインシステム全ライフサイクルを担当。トークン／コンポーネント契約を定義し、Tailwind CSS上でAtomic Design（atom〜organism）の合成可能なReactプリミティブを構築。利用パターンを文書化し、複数アプリが消費するバージョン付きnpmパッケージとして出荷し、UI速度と視覚的一貫性を統一。",
        role: "Lead Frontend Engineer & Design System Architect",
        yearPublished: 2025,
        origin: "self-initiated",
        isGroupProject: false,
        impact:
          "共有UIを複数消費アプリが採用するバージョン付きnpmパッケージに集約—重複コンポーネント作業を削減し、インタラクションパターンを標準化し、より速く一貫した機能デリバリーの単一の真実源を提供。",
        learnings: [
          "ライブラリ消費者向けコンポーネントAPIにおけるcompositionとconfigurationのバランス。",
          "npm配布のためのパッケージ境界、セマンティックバージョニング、公開ワークフロー。",
          "Tailwindによるトークンファーストなテーマと、クロスアプ採用向けAtomic Design階層設計。",
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
          "Dark Sky APIによる分単位の降水予報を届ける、Android／Web向けハイパーローカル天気アプリ。",
        description:
          "Stormy MobileはAndroidで最も正確なハイパーローカル天気情報源です。分単位予報により、今いる場所で雨がいつ始まり／止むかを正確に把握できます。広く使われる天気サービスAPIのDark Skyにより、生活計画に役立つ正確な予報を提供します。",
        role: "Android & Web Developer",
        yearPublished: 2019,
        origin: "self-initiated",
        isGroupProject: false,
        impact:
          "API連携から洗練されたモバイルUIまで一気通貫の天気体験を構築・公開し、消費者向け製品のエンドツーエンド所有を実証。",
        learnings: [
          "サードパーティ天気APIの消費と、直感的なUI状態へのマッピング。",
          "Androidアクティビティライフサイクルとレスポンシブレイアウト設計。",
          "位置ベース更新間隔とバッテリー消費のバランス。",
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
          "マイク入力でろうそくを吹き消し、幽霊屋敷をうろつくゴーストを避けながら進む3DサバイバルホラーPCゲーム。",
        description:
          "In DarknessはAdsumsoftのDr. Roberto Dillon向けにScrumで開発したPC用3Dサバイバルホラーです。舞台は幽霊屋敷。死なずに脱出するのが目標で、マイクで全ろうそくを吹き消して儀式を止めます。一方ゴーストが進行を妨げ、遭遇すると即死という緊張と戦略が求められます。Windows PC向け（18–40歳想定）の没入感あるホラー体験です。",
        role: "ゲームプログラマー",
        yearPublished: 2020,
        origin: "class-assignment",
        isGroupProject: true,
        groupRole: "フルスタックゲーム開発者",
        impact:
          "マイク駆動のろうそく操作とゴースト巡回など、ゲーム独自の売りになるコアホラー機構を実装し、最終ショーケースビルドに採用。",
        learnings: [
          "Unity C#のゲームプレイスクリプティングと敵AI向けステートマシン。",
          "没入を壊さずマイク入力をコア機構として統合。",
          "マイルストーンレビューを伴う多職種ゲームチームでのScrum納品。",
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
      title: "Unity学生ボランティア",
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
