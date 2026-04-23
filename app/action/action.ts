"use server"

import { selectModel } from "@/lib/helper"
import { openRouter } from "@/lib/open-router"
import { GENERATE_PROJECT_NAME_PROMPT } from "@/lib/prompt"
import { generateText } from "ai"

export async function generateProjectName(prompt: string) {
  try {
    const {} = generateText({
      model: openRouter.chat(selectModel("title", "fast")),
      system: GENERATE_PROJECT_NAME_PROMPT,
      prompt: prompt,
    })
  } catch (error) {}
}
