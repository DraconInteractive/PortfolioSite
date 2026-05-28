export type Project = {
  id: string;
  title: string;
  company: string;
  period: string;
  type: "professional" | "personal";
  description: string;
  overview: string[];
  highlights: string[];
  tags: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  // — Professional —
  {
    id: "ubf-studio",
    title: "UBF Studio",
    company: "Futureverse Inc",
    period: "2023 – 2025",
    type: "professional",
    description:
      "Cross-platform desktop application for authoring and rendering 3D assets from procedural node graphs. Built the React/Electron editor, Rust runtime library, and Unity/Unreal engine integration layers.",
    overview: [
      "UBF Studio is a cross-platform desktop application for authoring and rendering 3D assets from procedural node graph definitions. I contributed to the editor, the core runtime library, and both engine integration layers — working across the full vertical of the system.",
      "The editor was built with React, Electron, and Node.js, allowing users to author node graphs, manage asset resources like meshes and textures, and export packaged bundles containing all dependencies for runtime execution. The core runtime was written in Rust, responsible for deserializing graph definitions, validating node relationships, and executing instruction pipelines. This runtime acted as an engine-agnostic execution layer ensuring consistent behaviour across all host environments.",
      "I also implemented runtime integration layers for both Unity (C#) and Unreal (C++), bridging the Rust runtime with each engine's APIs to handle resource binding, rendering configuration, and dynamic asset construction. Distribution used AWS cloud infrastructure, a GraphQL backend for asset metadata, and CI/CD pipelines I built to validate, build, and distribute artifacts across all supported platforms.",
    ],
    highlights: [
      "React + Electron desktop editor for node graph authoring and asset resource management",
      "Rust core runtime for graph deserialization, node validation, and instruction pipeline execution",
      "Unity (C#) engine integration layer bridging Rust runtime with Unity APIs",
      "Unreal (C++) engine integration layer for resource binding and runtime asset construction",
      "Defined and maintained the cross-platform graph schema specification and versioning standards",
      "CI/CD pipelines for library builds, artifact validation, and multi-platform distribution via AWS",
    ],
    tags: ["Rust", "React", "Electron", "C#", "C++", "GraphQL", "AWS", "Node.js"],
    featured: true,
  },
  {
    id: "industrial-simulation",
    title: "Heavy Equipment Simulation",
    company: "BetterThanReality",
    period: "2025 – 2026",
    type: "professional",
    description:
      "Industrial training simulation modelling a Komatsu haul truck's electrical isolation, hydraulics, and mechanical subsystems in Unreal C++. Paired with a WPF desktop launcher communicating with a Go/PostgreSQL backend via REST.",
    overview: [
      "Developed industrial training applications for heavy equipment systems, combining a real-time Unreal C++ simulation with supporting desktop tooling. The primary project involved modelling the operational behaviour of a Komatsu haul truck — implementing a structured state system representing electrical isolation, hydraulic circuits, and mechanical components driven by state changes and event logic derived from equipment schematics and maintenance procedures.",
      "I implemented interaction frameworks allowing users to inspect and manipulate equipment systems while progressing through procedural workflows — inspection, isolation, and maintenance tasks. Alongside the simulation, I developed a C# WPF desktop application used to configure, launch, and manage training scenarios. Both applications communicated with a Go-based backend via REST APIs, with training data persisted in a PostgreSQL database.",
    ],
    highlights: [
      "State machine modelling electrical isolation, hydraulic circuits, and mechanical subsystems of a Komatsu haul truck",
      "Event-driven system interactions derived directly from equipment schematics and maintenance procedures",
      "Procedural inspection, isolation, and maintenance workflow frameworks for training evaluation",
      "C# WPF desktop launcher for scenario configuration and training session management",
      "REST API integration with a Go backend and PostgreSQL database for auth and training data",
    ],
    tags: ["Unreal C++", "WPF", "C#", "REST", "PostgreSQL", "Go"],
    featured: true,
  },
  {
    id: "ml-agent-system",
    title: "ML-Driven Agent Runtime",
    company: "Altered State Machine",
    period: "2023",
    type: "professional",
    description:
      "Mobile game runtime integrating TensorFlow models for on-device AI decision-making, developed in collaboration with FIFA. Achieved 16 model inferences per second across 8 agents at ~75 FPS on older Android devices.",
    overview: [
      "Developed mobile applications for iOS and Android integrating machine learning–driven decision systems into a real-time Unity runtime, developed in collaboration with FIFA. The core challenge was enabling on-device inference across multiple simultaneous agents without degrading frame rate on low-end hardware.",
      "I integrated TensorFlow-built models into the Unity runtime, enabling 16 model inferences per second across eight agents while maintaining ~75 FPS on older Android devices — all decision logic running locally with no server-side processing. Model outputs were evaluated by a rule-based decision layer that selected actions based on current application state. I also built training data pipelines using Unity ML-Agents and CI/CD infrastructure on containerised EC2 instances to automate training runs, generate model variants en masse, and use analytics to automate model selection.",
    ],
    highlights: [
      "TensorFlow model integration into Unity runtime for on-device multi-agent inference",
      "16 model inferences per second across 8 simultaneous agents at ~75 FPS on older Android hardware",
      "Hybrid ML + utility AI decision system combining model outputs with rule-based state logic",
      "Unity ML-Agents extensions for custom model configurations and agent behaviours",
      "Containerised EC2 training pipelines with parameterised runs generating model variants at scale",
      "Analytics-driven automated model selection integrated into the CI/CD process",
    ],
    tags: ["Unity", "C#", "TensorFlow", "Python", "AWS EC2", "CI/CD", "ML-Agents"],
  },
  {
    id: "cpr-training-platform",
    title: "CPR Training Platform",
    company: "St John WA",
    period: "2018 – 2021",
    type: "professional",
    description:
      "Cross-platform first aid training application across PC VR, iOS, Android, and WebGL featuring a custom ESP32 CPR peripheral for real-time compression analysis. GitHub Actions CI/CD and LMS integration for certification tracking.",
    overview: [
      "Developed a cross-platform training application platform for St John WA, delivering the Senior First Aid course as approximately thirty interactive learning modules across PC VR, iOS, Android, and WebGL. Working with subject matter experts, the course was restructured to combine guided instruction with timed assessment scenarios, requiring interaction systems that functioned consistently across both immersive and traditional interfaces.",
      "A key component was integration with a custom CPR training peripheral built around an ESP32 microcontroller attached to a training manikin. I implemented the device firmware and the application-side analysis systems used to evaluate compression depth and rate in real time. I also built GitHub Actions CI/CD pipelines for automated builds and deployment across all environments, and integrated with St John WA's LMS for authentication, course management, and certification tracking.",
    ],
    highlights: [
      "~30 interactive learning modules across PC VR, iOS, Android, and WebGL from a shared codebase",
      "Custom ESP32 firmware and application-side compression analysis for a real CPR training manikin",
      "Real-time evaluation of CPR compression depth and rate during timed assessment scenarios",
      "Unity Addressables for platform-specific asset configuration and runtime resource management",
      "GitHub Actions CI/CD for automated builds, addressable bundle generation, and environment deployment",
      "LMS integration for authentication, course progress tracking, and certification management",
    ],
    tags: ["Unity", "C#", "ESP32", "C++", "GitHub Actions", "WebGL", "iOS", "Android"],
  },

  // — Personal —
  {
    id: "wizards-codex",
    title: "Wizard's Codex",
    company: "Personal Project",
    period: "In Development",
    type: "personal",
    description:
      "A fantasy game built around in-game TypeScript programming. Players write real code — spells, rituals, automations — within a narrative-driven world where the language of magic is the language of software.",
    overview: [
      "Wizard's Codex is a personal game project exploring what happens when programming is the core mechanic rather than a meta-layer. Players interact with the world by writing TypeScript — casting spells, binding rituals, and building automations — within a fantasy narrative that frames the act of coding as wielding magic.",
      "The project is built in Unity with a custom in-game code editor and TypeScript runtime. Player-authored scripts are evaluated at runtime, with results feeding back into the game world — a spell that doesn't compile simply fails to fire. The design challenge is making real programming feel native to a fantasy context, rather than educational or gamified in a surface-level way.",
    ],
    highlights: [
      "In-game TypeScript editor and runtime evaluating player-authored code at play time",
      "Fantasy narrative framing where programming mechanics and game world are fully integrated",
      "Spell and ritual systems driven entirely by code the player writes",
      "Custom feedback systems translating compiler errors into in-world narrative responses",
    ],
    tags: ["Unity", "C#", "TypeScript", "Game Design", "Narrative Systems"],
  },
  {
    id: "bertie",
    title: "Bertie",
    company: "Personal Project",
    period: "2024",
    type: "personal",
    description:
      "A desktop companion robot with a two-axis servo head, e-ink display eyes, and voice input. A button press streams microphone audio to a server for transcription, which drives motor animations and expressive eye states.",
    overview: [
      "Bertie is a small desktop robot built around the idea of a physically expressive voice interface. The hardware consists of a two-axis servo mechanism for head movement, an e-ink display rendering expressive eye states, and a microphone with a hardware button for input triggering.",
      "Pressing the button streams microphone audio to a server-side transcription pipeline. The transcription output is parsed to drive two outputs simultaneously: servo animations that give Bertie physical reactions to what was said, and e-ink display updates that change the eye expression to match the response state. The result is a companion device that reacts to voice with both movement and expression rather than just audio feedback.",
    ],
    highlights: [
      "Two-axis servo head with motor animations driven by transcription output",
      "E-ink display rendering expressive eye states mapped to response context",
      "Hardware button triggers audio capture and streams to server-side transcription pipeline",
      "Coordinated physical and visual response system running from a single transcription result",
    ],
    tags: ["Python", "Hardware", "Servo Motors", "E-ink", "Speech Recognition", "Embedded"],
  },
  {
    id: "livegraph-studio",
    title: "LiveGraph Studio",
    company: "Personal Project",
    period: "2025",
    type: "personal",
    description:
      "A browser-based node graph editor that serialises DAGs to JSON for runtime consumption in Unity. Designed to drive behaviour tree AI, narrative systems, and other graph-structured game logic without recompiling.",
    overview: [
      "LiveGraph Studio is a personal project exploring visual programming tooling for game systems. Built with Vue.js and vue-flow, it provides a drag-and-drop node graph editor where developers can author DAG-based logic graphs, connect typed pins between nodes, and serialise the result to JSON.",
      "The JSON output is designed for runtime consumption by a Unity integration layer — graphs can define behaviour tree AI, narrative branching, event sequences, or any system that maps naturally to a directed acyclic graph. The editor includes undo/redo with viewport state preservation, save/load via localStorage, and a categorised node menu for building custom node libraries. The project grew directly out of the graph-based work at Futureverse, applied to a personal tooling context.",
    ],
    highlights: [
      "Visual node graph editor with drag-and-drop pin connections and typed node system",
      "Graph serialisation to JSON for runtime consumption by external systems",
      "Unity integration layer interpreting serialised graphs to drive in-engine behaviour",
      "Designed for behaviour tree AI, narrative systems, and DAG-driven game logic",
      "Undo/redo history with viewport state preservation and localStorage persistence",
      "Extensible BaseNode architecture for building custom node type libraries",
    ],
    tags: ["Vue.js", "TypeScript", "Vite", "Unity", "JSON", "DAG", "Node.js"],
    repo: "https://github.com/DraconInteractive/Dracon.Frontend.Studio",
    link: "https://pcarey.dev/2025/10/07/livegraph-studio/",
  },
];

export const experiences: Experience[] = [
  {
    id: "btr",
    company: "BetterThanReality",
    role: "Senior Developer",
    period: "2025 – 2026",
    description:
      "Built industrial training simulations for heavy equipment systems using Unreal C++, modelling complex mechanical and hydraulic state. Developed supporting WPF tooling and REST-integrated backend pipelines.",
    tags: ["Unreal C++", "WPF", "C#", "REST", "PostgreSQL"],
  },
  {
    id: "futureverse",
    company: "Futureverse Inc",
    role: "Senior Developer",
    period: "2023 – 2025",
    description:
      "Full-stack development across a cross-platform 3D asset generation platform — Rust runtime library, React/Electron editor, and C#/C++ engine integration layers for Unity and Unreal.",
    tags: ["Rust", "React", "Electron", "C#", "C++", "GraphQL", "AWS"],
  },
  {
    id: "asm",
    company: "Altered State Machine",
    role: "Senior Developer",
    period: "2023",
    description:
      "Integrated TensorFlow ML models into a Unity mobile runtime for on-device agent decision-making in collaboration with FIFA. Built training infrastructure and CI/CD pipelines on AWS EC2.",
    tags: ["Unity", "C#", "TensorFlow", "Python", "AWS", "CI/CD"],
  },
  {
    id: "coortical",
    company: "Coortical",
    role: "Head of Development",
    period: "2022 – 2023",
    description:
      "Joined at formation to establish the engineering team, technology stack, and development infrastructure. Led delivery of multiple VR client projects, implementing shared Unity application frameworks and CI/CD pipelines.",
    tags: ["Unity", "C#", "VR", "AWS S3", "CI/CD", "Agile"],
  },
  {
    id: "zarmada",
    company: "Zarmada",
    role: "Senior Developer",
    period: "2021 – 2022",
    description:
      "Developed immersive VR training environments for Oculus Quest and HTC Vive, including a Bluetooth peripheral integration layer for live taser device telemetry and a voice-driven interaction workflow.",
    tags: ["Unity", "C#", "ESP32", "Bluetooth", "VR", "Voice Recognition"],
  },
  {
    id: "stjohn",
    company: "St John WA",
    role: "Lead Developer",
    period: "2018 – 2021",
    description:
      "Led development of a cross-platform first aid training platform across VR, iOS, Android, and WebGL, including custom ESP32 firmware for CPR peripheral integration and GitHub Actions CI/CD deployment.",
    tags: ["Unity", "C#", "ESP32", "WebGL", "GitHub Actions", "LMS"],
  },
];
