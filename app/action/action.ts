"use server"

import { selectModel } from "@/lib/helper"
import { openRouter } from "@/lib/open-router"
import { GENERATE_PROJECT_NAME_PROMPT } from "@/lib/prompt"
import { generateText } from "ai"

export async function generateProjectName(prompt: string) {
  try {
    const { text } = await generateText({
      model: openRouter.chat(selectModel("title", "fast")),
      prompt: `${GENERATE_PROJECT_NAME_PROMPT}\n\n${prompt}`,
    })

    return text?.trim() || "Untitled Project"
  } catch (error) {
    console.log("Error generating project name:", error)
    return "Untitled Project"
  }
}
