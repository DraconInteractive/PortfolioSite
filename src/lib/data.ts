export type ProjectMedia = {
  src: string;
  type: "video" | "image";
  caption?: string;
  cols?: 3 | 4 | 6 | 8 | 9 | 12; // grid column span out of 12, defaults to 12
  controls?: boolean; // show native video controls (disables autoplay loop)
};

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
  logo?: string;
  media?: ProjectMedia[];
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
    logo: "/logos/futureverse.png",
    tags: ["Rust", "React", "Electron", "C#", "C++", "GraphQL", "AWS", "Node.js"],
    media: [
      {
        src: "/assets/ubf/studio_example.mp4",
        type: "video",
        caption: "Node graph authoring in the UBF Studio editor",
        cols: 12,
      },
      {
        src: "/assets/ubf/JSID_Test01.mp4",
        type: "video",
        caption: "Rendered shiba inu — runtime asset output",
        cols: 6,
      },
      {
        src: "/assets/ubf/Raicers_Build_Test01.mp4",
        type: "video",
        caption: "Dynamic part-switching on a vehicle asset",
        cols: 6,
      },
    ],
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
    logo: "/logos/betterthanreality.png",
    tags: ["Unreal C++", "WPF", "C#", "REST", "PostgreSQL", "Go"],
    featured: true,
  },
  {
    id: "ml-agent-system",
    title: "FIFA: AI League",
    company: "Altered State Machine × FIFA",
    period: "2023",
    type: "professional",
    description:
      "Mobile football game developed in collaboration with FIFA, built around ML-driven agent decision-making. Achieved 16 TensorFlow model inferences per second across 8 simultaneous agents at ~75 FPS on older Android devices — all running on-device.",
    overview: [
      "FIFA: AI League is a mobile football game developed in collaboration with FIFA, built around a machine learning–driven agent system running entirely on-device. The core technical challenge was enabling real-time inference across multiple simultaneous agents on low-end Android hardware without server-side processing.",
      "I integrated TensorFlow-built models into the Unity runtime, achieving 16 model inferences per second across eight agents while maintaining ~75 FPS on older Android devices. Model outputs fed into a rule-based decision layer that selected actions based on current game state, combining the predictive power of ML with the reliability of explicit logic. I also designed and built the training infrastructure — Unity ML-Agents extensions for custom agent configurations, containerised EC2 training sessions running parameterised runs to generate model variants at scale, and analytics pipelines to automate model evaluation and selection for integration into mobile builds.",
    ],
    highlights: [
      "TensorFlow model integration into Unity runtime for on-device multi-agent inference",
      "16 model inferences per second across 8 simultaneous agents at ~75 FPS on older Android hardware",
      "Hybrid ML + utility AI decision system combining model outputs with rule-based state logic",
      "Unity ML-Agents extensions for custom model configurations and agent behaviours",
      "Containerised EC2 training pipelines with parameterised runs generating model variants at scale",
      "Analytics-driven automated model selection integrated into the CI/CD process",
    ],
    logo: "/logos/alteredstatemachine.png",
    tags: ["Unity", "C#", "TensorFlow", "Python", "AWS EC2", "CI/CD", "ML-Agents"],
    media: [
      {
        src: "/assets/fifa/banner_hires.png",
        type: "image",
        caption: "Game loading screen",
        cols: 12,
      },
      {
        src: "/assets/fifa/arena_page.png",
        type: "image",
        caption: "In-game arena selection screen",
        cols: 6,
      },
      {
        src: "/assets/fifa/training_01.mp4",
        type: "video",
        caption: "ML agent training in progress — agents playing at accelerated speed during automated training runs",
        cols: 6,
      },
      {
        src: "/assets/fifa/ui_graph.png",
        type: "image",
        caption: "Game loop and UI flow planning diagram",
        cols: 12,
      },
    ],
  },
  {
    id: "cpr-training-platform",
    title: "First Aid Skills VR",
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
    logo: "/logos/stjohn-wa.svg",
    tags: ["Unity", "C#", "ESP32", "C++", "GitHub Actions", "WebGL", "iOS", "Android"],
    media: [
      {
        src: "/assets/first-aid/vr-st-john.webp",
        type: "image",
        caption: "First Aid Skills VR — St John WA",
        cols: 9,
      },
      {
        src: "/assets/first-aid/fa_promo.mp4",
        type: "video",
        caption: "Promotional video",
        cols: 3,
      },
      {
        src: "/assets/first-aid/inengine_demo02.mp4",
        type: "video",
        caption: "In-engine demonstration",
        cols: 12,
      },
    ],
  },

  // — Personal —
  {
    id: "wizards-codex",
    title: "Wizard's Codex",
    company: "Personal Project",
    period: "In Development",
    type: "personal",
    description:
      "An Electron desktop game where TypeScript is the magic system. Players write real scripts in a sandboxed runtime to command spirits, run rituals, and automate a growing magical domain — inspired by Bitburner's write-code-to-play loop.",
    overview: [
      "Wizard's Codex is an Electron desktop game built around a single design premise: compiled TypeScript is the magic system. Inspired by Bitburner, the game starts with manual console commands — summon a spirit, channel a resource — but as the player's domain grows, manual control becomes infeasible. Automation is the progression. Players move from typing individual commands to writing scripts that manage spirits, schedule rituals, react to world events, and govern dominions across a persistent fantasy world.",
      "The interface is console-dominant — a 70/30 split between an xterm.js terminal and a read-only React status panel. Player scripts are authored in a Monaco editor overlay with full autocomplete via auto-generated TypeScript definitions, compiled in-process via ts.transpileModule, and executed in a worker_threads sandbox using SharedArrayBuffer and Atomics.wait for synchronous NS API calls back to the main process. The runtime exposes a fantasy-flavoured API (ns.summon(), ns.spirits(), ns.explore(), ns.dominion()) that drives a set of interconnected game systems — reservoir management, spirit progression, POI exploration, study trees, missive quests, and a dominion governance layer.",
    ],
    highlights: [
      "TypeScript sandbox via worker_threads + SharedArrayBuffer + Atomics.wait for synchronous NS calls",
      "In-process ts.transpileModule compilation with Monaco editor and auto-generated .d.ts for full autocomplete",
      "xterm.js console as primary interface — keyboard-first, all game state queryable via commands",
      "Interconnected systems: reservoir, spirits, POIs, activities, study tree, dominions, missives",
      "Diegetic design throughout — scripts are 'inscriptions', the editor is the 'Scriptorium', running scripts are 'weavings'",
      "Inspired by Bitburner — automation is the progression loop, not an optional power-up",
    ],
    logo: "/assets/wizards-codex/wc_logo.png",
    media: [
      {
        src: "/assets/wizards-codex/honor_start_rec.mp4",
        type: "video",
        caption: "Game startup — the console interface and live state panel",
        cols: 12,
        controls: true,
      },
      {
        src: "/assets/wizards-codex/sc_repscript.png",
        type: "image",
        caption: "The Scriptorium — Monaco editor with live-generated TypeScript API definitions",
        cols: 12,
      },
      {
        src: "/assets/wizards-codex/sc_studytree.png",
        type: "image",
        caption: "The Study Tree — upgrades and progression paths",
        cols: 6,
      },
      {
        src: "/assets/wizards-codex/sc_missives.png",
        type: "image",
        caption: "Missives — narrative quest log with active and completed objectives",
        cols: 6,
      },
    ],
    tags: ["Electron", "TypeScript", "React", "Node.js", "xterm.js", "Monaco Editor", "Vite"],
  },
  {
    id: "bertie",
    title: "Bertie",
    company: "Personal Project",
    period: "2024",
    type: "personal",
    description:
      "A desktop companion robot built on an ESP32 with a 2-DOF servo head, e-ink display, and voice input. Operates as a distributed system — the robot connects via TCP to a C# server brain, with a Python layer handling microphone streaming and speech-to-text transcription.",
    overview: [
      "Bertie is a desktop companion robot built around a distributed client-server architecture. The hardware — an ESP32 devkit on an aluminium frame with two servos for head rotation, an e-ink display for expressive eyes, a microphone, a button, and an IR positioning sensor — acts as a thin client. The 'brain' lives on a server the robot connects to via TCP: the robot forwards sensor readings and current state, and the server returns instructions.",
      "Pressing the button triggers a state machine that activates the microphone and streams audio to a Python server handling speech-to-text transcription. The transcription result flows back through the C# server, which parses the recognised speech into commands and dispatches servo animations and e-ink eye state updates simultaneously. The firmware is written in C++ using PlatformIO, with dual power rails — 4× AA batteries for the servos and USB-C for the ESP32 — a split that caused some early hardware failures before proper power management was in place.",
    ],
    highlights: [
      "Distributed architecture: ESP32 TCP client forwarding state to a C# server brain",
      "Python speech-to-text layer handling microphone streaming and transcription",
      "State machine-driven button and microphone handling on the embedded side",
      "Coordinated servo animation and e-ink eye state updates from a single transcription result",
      "2-DOF aluminium-framed head with dual power rails (servo + logic separated)",
      "IR positioning sensor with LED tracking capability",
    ],
    logo: "/assets/bertie/bertie_logo.png",
    tags: ["C++", "C#", "Python", "ESP32", "Arduino", "PlatformIO", "TCP", "E-ink", "Speech-to-Text"],
    repo: "https://github.com/DraconInteractive/Dracon.Embedded.Bertie",
  },
  {
    id: "esp-home-server",
    title: "ESP Home Server",
    company: "Personal Project",
    period: "Active",
    type: "personal",
    description:
      "A local command-and-control network for ESP32 devices. Voice commands stream from a handheld controller to a Python server, which transcribes, interprets, and dispatches events to a mesh of displays, cameras, and button nodes.",
    overview: [
      "ESP Home Server is a local-network-first home automation system built around a network of ESP32 devices. A handheld voice controller (Waveshare ESP32-C6 Touch AMOLED) streams hold-to-record mono PCM audio to a Python HTTP server over Wi-Fi. The server transcribes with ElevenLabs, resolves the command through a registry, and dispatches events to registered devices — displays, cameras, button nodes — which poll or expose endpoints depending on their role.",
      "The system supports multi-turn conversations (a 'set timer' command prompts for duration if not supplied), a script-based action registry for packaged server-side tasks, and a browser dashboard showing device state, recent commands, and proxied camera feeds. Each firmware project is a standalone ESP-IDF build targeting different chips — ESP32-C6 for the voice controller and display nodes, ESP32-C3 for button nodes, standard ESP32 for camera modules. The server persists the device registry, command history, and a local firmware catalog for future OTA rollout.",
    ],
    highlights: [
      "Waveshare ESP32-C6 Touch AMOLED voice controller streaming chunked PCM to a local Python server",
      "ElevenLabs speech-to-text → command registry → device event dispatch pipeline",
      "Multi-turn conversation support — commands can prompt for missing parameters before resolving",
      "Browser dashboard showing device online state, recent commands, and proxied camera feeds",
      "Media proxy routing camera and audio streams through the server to prevent device overload",
      "Seven ESP-IDF firmware projects across ESP32-C6, ESP32-C3, and ESP32 device families",
      "Local firmware catalog with semantic versioning (d/s/p channels) for future OTA rollout",
    ],
    tags: ["Python", "ESP32", "ESP-IDF", "C", "C++", "ElevenLabs", "HTTP", "Firmware", "Hardware"],
    repo: "https://github.com/DraconInteractive/ESP-Home-Server",
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
