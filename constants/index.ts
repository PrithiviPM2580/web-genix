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
