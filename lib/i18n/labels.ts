export type Locale = "en" | "pt-PT" | "ja";

export type ProjectLabel = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  gallery?: [string, string, string];
  reverse: boolean;
};

const projectMedia = {
  lusonihongo: {
    imageUrl: "/picture/luso-nihongo-landing.png",
    gallery: [
      "/picture/luso-nihongo-dashboard.png",
      "/picture/luso-nihongo-learn.png",
      "/picture/luso-nihongo-lesson.png",
    ] as [string, string, string],
  },
  cobras: {
    imageUrl: "/picture/cobham-cobras-hero.png",
  },
  tools: {
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&h=900&fit=crop&q=80",
    ] as [string, string, string],
  },
};

export type Labels = {
  nav: {
    brand: string;
    work: string;
    contact: string;
    blogs: string;
  };
  hero: {
    nameLine1: string;
    nameLine2: string;
    nameAccent: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: string;
    scroll: string;
  };
  work: {
    heading: string;
    scrollHint: string;
    projects: ProjectLabel[];
  };
  contact: {
    heading: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
  };
  language: {
    en: string;
    "pt-PT": string;
    ja: string;
  };
};

export const labels: Record<Locale, Labels> = {
  en: {
    nav: {
      brand: "Marcel Mendes",
      work: "Work",
      contact: "Contact",
      blogs: "Blogs",
    },
    hero: {
      nameLine1: "Marcel",
      nameLine2: "Mendes",
      nameAccent: ".",
      titleLine1: "Software Engineer,",
      titleLine2: "based in Tokyo.",
      description: "I build reliable, user-focused software for complex problems. From large-scale applications to products built from the ground up.",
      cta: "Have a project in mind? Let's talk.",
      scroll: "Scroll",
    },
    work: {
      heading: "Work",
      scrollHint: "Scroll",
      projects: [
        {
          id: "lusonihongo",
          title: "Luso Nihongo",
          description:
            "A language-learning platform with glassmorphic dashboards, real-time progress, and a content pipeline built for scale.",
          ...projectMedia.lusonihongo,
          reverse: false,
        },
        {
          id: "cobham-cobras",
          title: "Cobham Cobras",
          description:
            "A multilingual portfolio with scroll-driven storytelling, designed to feel calm, intentional, and easy to navigate.",
          ...projectMedia.cobras,
          reverse: true,
        },
        // {
        //   id: "tools",
        //   title: "Internal Tools",
        //   description:
        //     "Operator-facing tooling that turns messy workflows into clear, reliable interfaces for day-to-day shipping.",
        //   ...projectMedia.tools,
        //   reverse: false,
        // },
      ],
    },
    contact: {
      heading: "Get in touch",
      subtitle:
        "Questions, feedback, or partnership inquiries — I read everything.",
      nameLabel: "Name",
      namePlaceholder: "John Smith",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Message",
      messagePlaceholder: "How can I help?",
      submit: "Send message",
    },
    language: {
      en: "EN",
      "pt-PT": "PT",
      ja: "JP",
    },
  },
  "pt-PT": {
    nav: {
      brand: "Marcel Mendes",
      work: "Trabalho",
      contact: "Contacto",
      blogs: "Blogs",
    },
    hero: {
      nameLine1: "Marcel",
      nameLine2: "Mendes",
      nameAccent: ".",
      titleLine1: "Engenheiro de Software,",
      titleLine2: "com base em Tóquio.",
      description: "Desenvolvo software fiável e centrado no utilizador para resolver problemas complexos, desde aplicações de grande escala a produtos construídos do zero.",
      cta: "Vamos criar algo especial",
      scroll: "Deslizar",
    },
    work: {
      heading: "Trabalho selecionado",
      scrollHint: "Deslizar",
      projects: [
        {
          id: "luso-nihongo",
          title: "Luso Nihongo",
          description:
            "Uma plataforma de aprendizagem de línguas com dashboards em vidro, progresso em tempo real e um pipeline de conteúdos pensado para crescer.",
          ...projectMedia.lusonihongo,
          reverse: false,
        },
        {
          id: "portfolio",
          title: "Site pessoal",
          description:
            "Um portefólio multilingue com narrativa baseada no scroll, desenhado para ser calmo, intencional e fácil de navegar.",
          ...projectMedia.cobras,
          reverse: true,
        },
        {
          id: "tools",
          title: "Ferramentas internas",
          description:
            "Ferramentas para operadores que transformam fluxos confusos em interfaces claras e fiáveis no dia a dia.",
          ...projectMedia.tools,
          reverse: false,
        },
      ],
    },
    contact: {
      heading: "Contacte-me",
      subtitle:
        "Perguntas, feedback ou parcerias — leio tudo com atenção.",
      nameLabel: "Nome",
      namePlaceholder: "Ada Lovelace",
      emailLabel: "Email",
      emailPlaceholder: "voce@empresa.com",
      messageLabel: "Mensagem",
      messagePlaceholder: "Em que posso ajudar?",
      submit: "Enviar mensagem",
    },
    language: {
      en: "EN",
      "pt-PT": "PT",
      ja: "JP",
    },
  },
  ja: {
    nav: {
      brand: "Marcel Mendes",
      work: "作品",
      contact: "連絡",
      blogs: "ブログ",
    },
    hero: {
      nameLine1: "Marcel",
      nameLine2: "Mendes",
      nameAccent: ".",
      titleLine1: "ソフトウェアエンジニア、",
      titleLine2: "東京在住。",
      description:
        "複雑な課題に対して洗練された解決策を設計し、差を生むスケーラブルなアプリケーションを構築しています。きれいなコードと直感的なデザインへのこだわりで、アイデアをテクノロジーで形にします。",
      cta: "特別なものを一緒に作りましょう",
      scroll: "スクロール",
    },
    work: {
      heading: "選りすぐりの作品",
      scrollHint: "スクロール",
      projects: [
        {
          id: "kotoba",
          title: "Kotoba Platform",
          description:
            "グラスモーフィックなダッシュボード、リアルタイム進捗、拡張を見据えたコンテンツパイプラインを備えた言語学習プラットフォーム。",
          ...projectMedia.lusonihongo,
          reverse: false,
        },
        {
          id: "portfolio",
          title: "パーソナルサイト",
          description:
            "スクロールで物語が進む多言語ポートフォリオ。静かで意図のある体験を目指して設計しています。",
          ...projectMedia.cobras,
          reverse: true,
        },
        {
          id: "tools",
          title: "社内ツール",
          description:
            "煩雑な業務フローを、日々の開発に使える明快で信頼性の高いUIへ落とし込んだオペレーター向けツール。",
          ...projectMedia.tools,
          reverse: false,
        },
      ],
    },
    contact: {
      heading: "お問い合わせ",
      subtitle:
        "ご質問・フィードバック・協業のご相談など、すべて拝見します。",
      nameLabel: "お名前",
      namePlaceholder: "Ada Lovelace",
      emailLabel: "メール",
      emailPlaceholder: "you@company.com",
      messageLabel: "メッセージ",
      messagePlaceholder: "どのようなご用件でしょうか？",
      submit: "送信する",
    },
    language: {
      en: "EN",
      "pt-PT": "PT",
      ja: "JP",
    },
  },
};

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "pt-PT", "ja"];
