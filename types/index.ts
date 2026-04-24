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

export interface ProjectType {
  id: string
  name: string
  theme: string
  thumbnail?: string
  frames: FrameType[]
  createdAt: Date
  updatedAt: Date
}

export interface FrameType {
  id: string
  title: string
  htmlContent: string
  projectId?: string
  isLoading?: boolean
  createdAt: Date
  updatedAt: Date
}

export type LoadingStatusType =
  | "idle"
  | "running"
  | "analyzing"
  | "generating"
  | "completed"
