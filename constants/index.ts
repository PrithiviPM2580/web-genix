import { SuggestionItems } from "@/types"

export const suggestionItems: SuggestionItems[] = [
  {
    id: 1,
    label: "Food Delivery",
    icon: "🍔",
    value:
      "Create a fast, intuitive, and visually appealing food delivery website that allows users to browse menus, customize orders, and track deliveries in real time. Include features like restaurant filtering, user reviews, secure payments, and a seamless checkout experience to ensure convenience and engagement.",
  },
  {
    id: 2,
    label: "E-commerce Store",
    icon: "🛒",
    value:
      "Build a complete e-commerce platform with detailed product listings, categories, and search functionality, along with a secure and smooth checkout process. Add features like user accounts, order tracking, inventory management, and promotional tools to create a scalable and professional online store.",
  },
  {
    id: 3,
    label: "Portfolio",
    icon: "🎨",
    value:
      "Design a clean and modern portfolio website that highlights your projects, skills, and achievements in a visually compelling way. Include interactive galleries, case studies, and contact sections to help potential clients or employers easily understand your work and reach out to you.",
  },
  {
    id: 4,
    label: "Blog",
    icon: "✍️",
    value:
      "Develop a stylish and easy-to-navigate blog platform where you can publish articles, share ideas, and engage with readers. Incorporate features like categories, tags, comments, and search functionality to enhance content discovery and user interaction.",
  },
  {
    id: 5,
    label: "Business Website",
    icon: "🏢",
    value:
      "Create a professional business website that effectively communicates your brand, services, and value proposition. Include sections like service descriptions, testimonials, team profiles, and contact forms to build trust and make it easy for customers to connect with your business.",
  },
  {
    id: 6,
    label: "Restaurant",
    icon: "🍽️",
    value:
      "Design an engaging restaurant website that showcases your menu, ambiance, and unique offerings. Add features like online reservations, location maps, customer reviews, and photo galleries to attract and inform potential diners while enhancing their overall experience.",
  },
  {
    id: 7,
    label: "Landing Page",
    icon: "🚀",
    value:
      "Generate a high-converting landing page focused on capturing leads or promoting a specific product or service. Use compelling headlines, clear calls to action, and engaging visuals to guide users toward conversion while maintaining a clean and distraction-free design.",
  },
  {
    id: 8,
    label: "Educational Platform",
    icon: "📚",
    value:
      "Build an online educational platform that offers structured courses, interactive lessons, and user-friendly dashboards for learners and instructors. Include features like progress tracking, quizzes, certificates, and content management tools to create an effective learning environment.",
  },
  {
    id: 9,
    label: "Event Website",
    icon: "🎉",
    value:
      "Create a dynamic event website that provides all the essential details such as schedules, speakers, and venue information. Add features like online registration, ticket purchasing, countdown timers, and updates to keep attendees informed and engaged.",
  },
  {
    id: 10,
    label: "Personal Website",
    icon: "👤",
    value:
      "Design a personal website that reflects your personality, interests, and professional background in a cohesive and engaging way. Include sections like an about page, blog, portfolio, and contact information to help visitors learn more about you and connect بسهولة.",
  },
]

export const MODELS = {
  // =========================
  // ✍️ TITLE / SHORT CONTENT
  // =========================
  TITLE_FAST: "google/gemma-3-4b-it:free",
  TITLE_GOOD: "google/gemma-3-12b-it:free",
  TITLE_BEST: "meta-llama/llama-3.3-70b-instruct:free",

  // =========================
  // 💬 CHAT / CONVERSATION
  // =========================
  CHAT_FAST: "inclusionai/ling-2.6-flash:free",
  CHAT_GOOD: "google/gemma-3-27b-it:free",
  CHAT_BEST: "meta-llama/llama-3.3-70b-instruct:free",

  // =========================
  // 🧠 REASONING / THINKING
  // =========================
  THINK_FAST: "openai/gpt-oss-20b:free",
  THINK_GOOD: "qwen/qwen3-next-80b-a3b-instruct:free",
  THINK_BEST: "nousresearch/hermes-3-llama-3.1-405b:free",

  // =========================
  // 💻 CODING
  // =========================
  CODE_FAST: "qwen/qwen3-coder:free",
  CODE_BEST: "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",

  // =========================
  // ⚡ VERY FAST / LIGHT MODELS
  // =========================
  FAST_TINY: "meta-llama/llama-3.2-3b-instruct:free",
  FAST_SMALL: "google/gemma-3n-e4b-it:free",
  FAST_BALANCED: "nvidia/nemotron-nano-9b-v2:free",
  FAST_LARGE: "nvidia/nemotron-3-nano-30b-a3b:free",

  // =========================
  // 🚀 FLASH CHAT (VERY QUICK)
  // =========================
  QUICK_CHAT_1: "inclusionai/ling-2.6-flash:free",
  QUICK_CHAT_2: "z-ai/glm-4.5-air:free",
  QUICK_CHAT_3: "minimax/minimax-m2.5:free",
  QUICK_CHAT_4: "tencent/hy3-preview:free",

  // =========================
  // 🧾 SPECIAL TOOLS
  // =========================
  OCR: "baidu/qianfan-ocr-fast:free",
  MULTIMODAL: "nvidia/nemotron-nano-12b-v2-vl:free",

  // =========================
  // 🔁 AUTO FALLBACK
  // =========================
  AUTO: "openrouter/free",
} as const

export type ModelKey = keyof typeof MODELS

export const TOOL_MODE_ENUM = {
  SELECT: "SELECT",
  HAND: "HAND",
} as const

export type ToolModeType = keyof typeof TOOL_MODE_ENUM

export const DEMO_HTML = `<div class="min-h-screen bg-slate-950 text-slate-100">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1e293b,#020617_55%)]"></div>

  <main class="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 lg:px-10">
    <header class="mb-12 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
      <div class="flex items-center gap-3">
        <span class="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/20 text-lg font-bold text-cyan-300">WG</span>
        <div>
          <p class="text-sm text-slate-300">Web Genix</p>
          <p class="text-xs text-slate-500">Tailwind Demo UI</p>
        </div>
      </div>
      <button class="rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20">
        Get Started
      </button>
    </header>

    <section class="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p class="mb-3 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
          Build Faster with Tailwind
        </p>
        <h1 class="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Beautiful websites from a single prompt.
        </h1>
        <p class="mb-8 max-w-xl text-base leading-7 text-slate-300">
          Generate modern layouts, reusable sections, and production-ready components in seconds. Tailwind utility classes keep everything clean and easy to customize.
        </p>
        <div class="flex flex-wrap gap-3">
          <button class="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300">
            Create Project
          </button>
          <button class="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
            View Templates
          </button>
        </div>
      </div>

      <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-lg font-medium text-white">Quick Stats</h2>
          <span class="rounded-lg bg-indigo-400/20 px-2 py-1 text-xs text-indigo-200">Live</span>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <p class="text-xs text-slate-400">Projects</p>
            <p class="mt-2 text-2xl font-semibold text-white">1,284</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <p class="text-xs text-slate-400">Templates</p>
            <p class="mt-2 text-2xl font-semibold text-white">96</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <p class="text-xs text-slate-400">Avg Build Time</p>
            <p class="mt-2 text-2xl font-semibold text-white">42s</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <p class="text-xs text-slate-400">Satisfaction</p>
            <p class="mt-2 text-2xl font-semibold text-white">99%</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>`
