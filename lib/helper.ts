import { MODELS } from "@/constants"
import { Task, Speed } from "@/types"

export function selectModel(task: Task, speed: Speed = "balanced") {
  switch (task) {
    case "title":
      return speed === "fast"
        ? MODELS.TITLE_FAST
        : speed === "quality"
          ? MODELS.TITLE_BEST
          : MODELS.TITLE_GOOD

    case "chat":
      return speed === "fast"
        ? MODELS.CHAT_FAST
        : speed === "quality"
          ? MODELS.CHAT_BEST
          : MODELS.CHAT_GOOD

    case "code":
      return speed === "fast" ? MODELS.CODE_FAST : MODELS.CODE_BEST

    case "reasoning":
      return speed === "fast"
        ? MODELS.THINK_FAST
        : speed === "quality"
          ? MODELS.THINK_BEST
          : MODELS.THINK_GOOD

    case "ocr":
      return MODELS.OCR

    case "multimodal":
      return MODELS.MULTIMODAL

    default:
      return MODELS.AUTO
  }
}
