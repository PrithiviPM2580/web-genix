export interface SuggestionItems {
  id: number
  label: string
  icon: string
  value: string
}

export type Task =
  | "title"
  | "chat"
  | "code"
  | "reasoning"
  | "ocr"
  | "multimodal"

export type Speed = "fast" | "balanced" | "quality"
