export type ExternalLink = {
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type ExperienceRole = {
  company: string;
  location?: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  links?: ExternalLink[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type FeaturedProject = {
  title: string;
  subtitle: string;
  analogy: string;
  demoVideo: ExternalLink;
  summary: string;
  capabilities: string[];
  contributions: string[];
  gallery: GalleryImage[];
};

export type ProjectHighlight = {
  title: string;
  summary: string;
  traction?: string;
  links: ExternalLink[];
};

export type RepositoryGroup = {
  title: string;
  summary: string;
  repositories: ExternalLink[];
};

export type Contribution = {
  project: string;
  summary: string;
  links: ExternalLink[];
};

export type LegacyProject = {
  title: string;
  summary: string;
  links: ExternalLink[];
};

export type SkillDomain = {
  label: string;
  items: string[];
};

export const portfolioData = {
  identity: {
    name: "Punal Manalan",
    headline: "Professional Software Engineer with over 6 years of experience.",
    focus:
      "Cross-platform systems programming, Unreal Engine development, AI tooling, backend infrastructure, GPU computing, and shipped game production.",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/punal-manalan-9a1b8b1a2/",
      },
      {
        label: "GitHub",
        href: "https://github.com/punal100",
      },
    ] satisfies ExternalLink[],
    stats: [
      {
        label: "Experience",
        value: "6+ years in professional software engineering",
      },
      {
        label: "Engine Work",
        value: "5+ years across UE5 single-player, multiplayer, AR, and VR",
      },
      {
        label: "Platforms",
        value: "Windows, Linux, Mac, iOS, Android",
      },
    ] satisfies HeroStat[],
  },
  about: {
    introduction:
      "Software engineer and open-source maintainer focused on systems programming, Unreal Engine development, AI developer tooling, backend infrastructure, and graphics-adjacent runtime work.",
    bullets: [
      "Open-source maintainer with public projects spanning AI developer tooling, VS Code extensions, GPU computing, and cross-platform systems programming.",
      "Specialized in building cross-platform C/C++ applications, specifically for Windows and Linux.",
      "Expert in the use of CMake and MSVC generators.",
      "Primarily a server-side software infrastructure development engineer, able to build entire backend infrastructure from the ground up.",
      "Experienced in GPU and FPGA programming using OpenCL and OpenGL.",
      "Adept in shader language programming such as GLSL.",
      "Fairly experienced with DirectX 9, 10, 11, and 12 APIs.",
      "Expert in low-level UDP/TCP sockets and higher-level WebSockets across multiple languages, including C, C++, C#, Java, and Kotlin.",
      "Experienced with front-end business-oriented and launcher-type applications.",
      "Unreal Engine 5 developer with over 5 years of experience across FPS, horror, TPS, souls-like, multiplayer, adventure, metaverse, AR, and VR projects.",
      "Highly experienced with UE C++, Blueprints, and SteamVR.",
      "Able to use RPC as well as external UDP/TCP or WebSockets for highly optimized, low-latency networking.",
      "Expert in integrating external network infrastructure with Unreal Engine 5, including PlayFab, Xsolla, and AWS GameLift.",
      "Familiar with multiple source control systems, especially SVN, Perforce, and Git.",
      "Experienced in writing clear technical documentation describing API usage, purpose, and implementation details of source code.",
      "Experienced in leading teams, splitting and assigning tasks, and maintaining well-documented team progress.",
      "Expert in hosting production-ready server applications with or without containers, with properly configured endpoints and routing.",
      "Packaged and published UE5 production titles on Windows, Mac, iOS, and Android.",
      "Experienced with Vive VR integration via SteamVR in UE.",
    ],
  },
  experience: [
    {
      company: "OpEzee",
      location: "Bangalore",
      title: "Unreal Engine Developer",
      period: "July 2025 - Present",
      summary:
        "Unreal Engine Developer in the R&D department, working on in-house VR titles with integrations around QGIS, GDAL, Cesium, and related technologies.",
      highlights: [
        "Worked in the R&D department on in-house VR titles.",
        "Primarily developed integrations for QGIS, GDAL, Cesium, and related technologies.",
        "Awarded a certificate for outstanding contribution to several other in-house confidential software projects.",
      ],
    },
    {
      company: "Pixis AI",
      location: "Bangalore",
      title: "Unreal Engine Developer",
      period: "June 2023 - July 2025",
      summary:
        "Built the full C++ production variant of the backend codebase for an in-house runtime animation platform compatible with Maya, Blender, and Unreal Sequencer, with AI-driven animation generation.",
      highlights: [
        "Created the full C++ production variant of the backend codebase of an in-house project.",
        "Worked on proprietary runtime animation software compatible with Maya, Blender, and UE Sequencer.",
        "Contributed Unreal Engine modifications and managed Git workflows.",
      ],
    },
    {
      company: "Wrexa Technologies",
      location: "USA",
      title: "Senior Software Development Engineer",
      period: "May 2022 - May 2023",
      summary:
        "Served as senior software development engineer and network engineer across five major projects, acting as senior developer in four and team lead in three.",
      highlights: [
        "Maintained the Git source control repository and regularly interacted with clients and management.",
        "Worked across 5 major projects, serving as senior developer in 4 and team lead in 3.",
        "Combined senior engineering responsibilities with client-facing communication and team leadership.",
      ],
    },
    {
      company: "Freelance Unreal Engine Developer",
      title: "Major Development Contributor - Kingdoms Collide Mobile",
      period: "Project-based freelance work",
      summary:
        "Contributed major Unreal Engine development work to a live real-time multiplayer fantasy strategy game released on Google Play and the Apple App Store.",
      highlights: [
        "Worked across a long engine migration span from Unreal Engine 4.7 through Unreal Engine 5.4.",
        "Contributed UI development, new hero abilities, and new minion characters.",
        "Implemented Play Store and iOS payment integration using Microsoft PlayFab.",
        "Implemented multiplayer peer-to-peer session flows using EOS integrated with PlayFab.",
      ],
      links: [
        {
          label: "Kingdoms Collide Mobile",
          href: "https://kingdomscollidemobile.com/",
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.kc.kingdomscollide",
        },
        {
          label: "Apple App Store",
          href: "https://apps.apple.com/us/app/kingdoms-collide-mobile/id6446848751",
        },
      ],
    },
  ] satisfies ExperienceRole[],
  featuredProject: {
    title: "xMall 3D Meet / Virtual Meeting Platform",
    subtitle: "Highlighted Wrexa Project",
    analogy: "Google Meet in a Virtual 3D World",
    demoVideo: {
      label: "Watch demo video",
      href: "https://drive.google.com/file/d/1fLxWC6ULwrbK4bcAwaSloeKBN32YuYVT/view?usp=sharing",
    },
    summary:
      "Developed and helped lead a virtual 3D meeting platform at Wrexa with real-time collaboration, in-world presentation workflows, and custom C++ backend and engine integration work.",
    capabilities: [
      "Seamless matchmaking using proprietary in-house servers.",
      "Voice chat.",
      "Text chat.",
      "Screen recording.",
      "Sharing screen to users via the user interface.",
      "Sharing screen to users via virtual screens such as in-world monitors and projectors.",
      "Character creator using Ready Player Me.",
      "Emote system.",
    ],
    contributions: [
      "Personally programmed the C++ screen-recording pipeline.",
      "Built server and backend components for the experience.",
      "Implemented Unreal Engine integration work, excluding widget design.",
      "Combined development execution with team-leading responsibilities during the project.",
    ],
    gallery: [
      {
        src: "/wrexa/meeting-3d-classroom.jpeg",
        alt: "Wrexa xMall 3D Meet classroom environment screenshot",
        caption: "Meeting 3D Classroom",
      },
      {
        src: "/wrexa/meeting-server-lobby-ui.jpeg",
        alt: "Wrexa xMall 3D Meet server lobby user interface screenshot",
        caption: "Meeting Server Lobby UI",
      },
      {
        src: "/wrexa/meeting-ui.jpeg",
        alt: "Wrexa xMall 3D Meet user interface screenshot",
        caption: "Meeting UI",
      },
      {
        src: "/wrexa/screen-sharing-3d-presentation-on-wall.jpeg",
        alt: "Wrexa xMall 3D Meet screen sharing projected on an in-world wall",
        caption: "Screen Sharing 3D Presentation on Wall",
      },
      {
        src: "/wrexa/screensharing-presentation-on-ui.jpeg",
        alt: "Wrexa xMall 3D Meet screen sharing shown inside the main interface",
        caption: "Screensharing Presentation on UI",
      },
    ] satisfies GalleryImage[],
  } satisfies FeaturedProject,
  selectedProjects: [
    {
      title: "Creator and Maintainer - GSD for GitHub Copilot",
      summary:
        "Built a GitHub Copilot adaptation of the GSD context-engineering and spec-driven development workflow using custom agents, prompt files, agent skills, instruction files, and MCP-aware tooling patterns.",
      traction: "Public traction: 92 GitHub stars and 9 forks.",
      links: [
        {
          label: "get-stuff-done-for-github-copilot",
          href: "https://github.com/punal100/get-stuff-done-for-github-copilot",
        },
      ],
    },
    {
      title: "Creator and Maintainer - GSD for Kilo Code",
      summary:
        "Adapted the GSD workflow system for Kilo Code using custom modes, skills, codebase indexing strategies, and MCP server integration patterns.",
      traction: "Public traction: 18 GitHub stars and 2 forks.",
      links: [
        {
          label: "get-stuff-done-for-kilocode",
          href: "https://github.com/punal100/get-stuff-done-for-kilocode",
        },
      ],
    },
    {
      title: "Creator and Maintainer - Antigravity for Copilot",
      summary:
        "Authored a VS Code extension exposing Google Antigravity models to Copilot Chat through VS Code's official BYOK interface, including proxy lifecycle management, automatic model configuration, rate limiting, retry logic, and status tooling.",
      traction: "Public traction: 11 GitHub stars, 4 forks, and 10 releases.",
      links: [
        {
          label: "antigravity-copilot",
          href: "https://github.com/punal100/antigravity-copilot",
        },
      ],
    },
    {
      title: "Creator and Maintainer - OpenCL Wrapper By Punal Manalan",
      summary:
        "Developed a lightweight header-only OpenCL wrapper with backward compatibility to OpenCL 1.2, multi-platform support, multi-GPU workload sharing, and automatic resource cleanup.",
      traction: "Public traction: 2 public releases.",
      links: [
        {
          label: "OpenCL_Wrapper_By_PunalManalan",
          href: "https://github.com/punal100/OpenCL_Wrapper_By_PunalManalan",
        },
      ],
    },
    {
      title: "Creator and Maintainer - Open Embed Router",
      summary:
        "Built a provider-agnostic, Docker-based OpenAI-compatible embeddings router supporting Ollama, OpenAI, NanoGPT, Together AI, and other compatible providers, with retries, health checks, logging, HTTPS deployment paths, Cloudflare Tunnel support, and flexible authentication modes.",
      links: [
        {
          label: "open-embed-router",
          href: "https://github.com/punal100/open-embed-router",
        },
      ],
    },
    {
      title: "Creator and Maintainer - Networking Wrapper By Punal",
      summary:
        "Built a cross-platform C++ networking wrapper focused on TCP, UDP, and low-level network programming across Windows and Linux, continuing broader work on systems programming and reusable infrastructure libraries.",
      links: [
        {
          label: "Networking-Wrapper-By-Punal",
          href: "https://github.com/punal100/Networking-Wrapper-By-Punal",
        },
      ],
    },
    {
      title: "Lead Developer - Souls-like Unreal Engine Project",
      summary:
        "Spear-headed the development of a souls-like Unreal Engine 4 project with a fully functional AI and combat system.",
      links: [
        {
          label: "Project Demo",
          href: "https://drive.google.com/file/d/14rI7nsLaHvUmaglc8YHSspCP2gVQ1izp/view",
        },
      ],
    },
    {
      title: "Senior Software Development Engineer",
      summary:
        "Hosted and managed Git repositories, worked across five major projects as both senior developer and team lead, and maintained clear technical progress documentation.",
      links: [],
    },
  ] satisfies ProjectHighlight[],
  unrealRepositoryGroups: [
    {
      title: "AI and Gameplay Systems",
      summary:
        "Public UE5 plugins and gameplay systems focused on JSON-first AI, visual AI editing, and dynamic input handling.",
      repositories: [
        { label: "P_EAIS", href: "https://github.com/punal100/P_EAIS" },
        { label: "P_MEIS", href: "https://github.com/punal100/P_MEIS" },
      ],
    },
    {
      title: "UMG and Editor Automation Tooling",
      summary:
        "Spec-driven Widget Blueprint creation, HTML/CSS-to-UMG tooling, and Python-driven Unreal Editor utility workflows.",
      repositories: [
        { label: "P_MWCS", href: "https://github.com/punal100/P_MWCS" },
        { label: "A_WCG", href: "https://github.com/punal100/A_WCG" },
        {
          label: "UE_PythonEditorUtility",
          href: "https://github.com/punal100/UE_PythonEditorUtility",
        },
      ],
    },
    {
      title: "Networking and Backend Integration Plugins",
      summary:
        "Unreal Engine networking repositories spanning Boost.Beast WebSockets, proxy-server connectivity, login, and crypto integration.",
      repositories: [
        {
          label: "PunalWebsocket",
          href: "https://github.com/punal100/PunalWebsocket",
        },
        { label: "P_ProxyServer", href: "https://github.com/punal100/P_ProxyServer" },
      ],
    },
    {
      title: "Platform and Utility Plugins",
      summary:
        "Utility plugins covering Android Chrome Custom Tabs, UMG sizing behavior, and custom scroll-box interaction support, including an Android custom tab plugin used in production in two confidential game projects.",
      repositories: [
        {
          label: "P_AndroidBrowserCustomTab",
          href: "https://github.com/punal100/P_AndroidBrowserCustomTab",
        },
        {
          label: "AlignableSizeBox",
          href: "https://github.com/punal100/AlignableSizeBox",
        },
        {
          label: "ControllableScrollBox",
          href: "https://github.com/punal100/ControllableScrollBox",
        },
      ],
    },
    {
      title: "Analysis, Rendering, and Specialized Tooling",
      summary:
        "Specialized Unreal repositories for viewshed analysis, volume analysis, and custom HLSL shader and plugin work.",
      repositories: [
        {
          label: "P_ViewshedAnalysis",
          href: "https://github.com/punal100/P_ViewshedAnalysis",
        },
        {
          label: "P_VolumeAnalysis",
          href: "https://github.com/punal100/P_VolumeAnalysis",
        },
        {
          label: "Punal_Shaders",
          href: "https://github.com/punal100/Punal_Shaders",
        },
      ],
    },
    {
      title: "Example and Integration Projects",
      summary:
        "Example Unreal projects and integration repositories demonstrating applied plugin usage, gameplay systems, server-host integration, and packaging workflows.",
      repositories: [
        { label: "A_MiniFootball", href: "https://github.com/punal100/A_MiniFootball" },
        { label: "P_MiniFootball", href: "https://github.com/punal100/P_MiniFootball" },
        { label: "A_ServerHost", href: "https://github.com/punal100/A_ServerHost" },
        { label: "TestChunkPak", href: "https://github.com/punal100/TestChunkPak" },
      ],
    },
  ] satisfies RepositoryGroup[],
  contributions: [
    {
      project: "3DTek-xyz/HumanAgent-MCP",
      summary:
        "Contributed critical reliability and Windows compatibility fixes to the HumanAgent-MCP VS Code extension, including safer response handling, detached server lifecycle management, update-safe standalone staging, SSE auto-reconnection, and session persistence improvements.",
      links: [
        {
          label: "PR #8",
          href: "https://github.com/3DTek-xyz/HumanAgent-MCP/pull/8",
        },
        {
          label: "PR #5",
          href: "https://github.com/3DTek-xyz/HumanAgent-MCP/pull/5",
        },
      ],
    },
    {
      project: "ChiR24/Unreal_mcp",
      summary:
        "Contributed a large feature PR to the standalone McpAutomationBridge plugin for Unreal Engine MCP workflows, covering targeted mouse and keyboard automation, simulated cursor visualization, improved screenshot behavior, and plugin-owned tool catalog metadata.",
      links: [
        {
          label: "PR #321",
          href: "https://github.com/ChiR24/Unreal_mcp/pull/321",
        },
      ],
    },
    {
      project: "RayBytes/ChatMock",
      summary:
        "Contributed compatibility and feature work for ChatMock, including gpt-5.3-codex model support, dynamic Copilot tool discovery, improved Ollama tool-calling compatibility, and reasoning wrapper refinements.",
      links: [
        {
          label: "PR #91",
          href: "https://github.com/RayBytes/ChatMock/pull/91",
        },
      ],
    },
  ] satisfies Contribution[],
  legacyProjects: [
    {
      title: "PythonScriptForTwitter",
      summary:
        "Built as an API-dependent social automation and integration project. It no longer works in its original form because the upstream Twitter/X APIs and access patterns changed substantially over time.",
      links: [],
    },
    {
      title: "InstragramScrape",
      summary:
        "Built as a Python and Flask-based Instagram discovery and scraping project focused on Bangalore food influencer analysis, with multiple scraping backends, analytics, exports, and a web dashboard. It should now be treated as a legacy API-dependent tool because upstream platform behavior and access restrictions changed.",
      links: [
        {
          label: "InstragramScrape",
          href: "https://github.com/punal100/InstragramScrape",
        },
      ],
    },
  ] satisfies LegacyProject[],
  skillDomains: [
    {
      label: "Systems Languages and Toolchains",
      items: [
        "C++",
        "Python",
        "CMake",
        "MSVC generators",
        "Cross-platform Windows and Linux application development",
      ],
    },
    {
      label: "Unreal Engine and Interactive Runtime Work",
      items: [
        "Unreal Engine 5",
        "UE C++",
        "Blueprints",
        "SteamVR",
        "AR and VR development",
        "Gameplay systems",
        "Multiplayer networking",
      ],
    },
    {
      label: "Networking and Backend Infrastructure",
      items: [
        "UDP/TCP sockets",
        "WebSockets",
        "Server-side software infrastructure",
        "Production hosting",
        "PlayFab",
        "Xsolla",
        "AWS GameLift",
        "EOS integration",
      ],
    },
    {
      label: "GPU, Graphics, and Low-Level Runtime Work",
      items: [
        "OpenCL",
        "OpenGL",
        "FPGA programming",
        "GLSL",
        "DirectX 9/10/11/12",
        "Shader and rendering tooling",
      ],
    },
    {
      label: "Tooling, Source Control, and Delivery",
      items: [
        "Git",
        "Perforce",
        "SVN",
        "Technical documentation",
        "Team leadership",
        "Windows, Mac, iOS, and Android shipping",
      ],
    },
  ] satisfies SkillDomain[],
} as const;