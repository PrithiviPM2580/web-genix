import { THEME_LIST, ThemeType } from "@/lib/themes"
import { FrameType, LoadingStatusType } from "@/types"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

interface CanvasContextType {
  theme?: ThemeType
  setTheme: (id: string) => void
  themes: ThemeType[]

  frames: FrameType[]
  setFrames: (frames: FrameType[]) => void
  updateFrame: (id: string, data: Partial<FrameType>) => void
  addFrame: (frame: FrameType) => void
  selectedFrameId: string | null
  selectedFrame: FrameType | null
  setSelectedFrameId: (id: string | null) => void
  loadingStatus: LoadingStatusType
}

export const CanvasContext = createContext<CanvasContextType | undefined>(
  undefined
)

export function CanvasProvider({
  children,
  initialFrames,
  initialThemeId,
  hasnInitialData,
  projectId,
}: {
  children: React.ReactNode
  initialFrames: FrameType[]
  initialThemeId?: string
  hasnInitialData: boolean
  projectId: string | null
}) {
  const [themeId, setThemeId] = useState<string>(
    initialThemeId || THEME_LIST[0].id
  )
  const [frames, setFrames] = useState<FrameType[]>(initialFrames)
  const [selectedFrameId, setSelectedFrameId] = useState<string | null>(null)
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>(
    hasnInitialData ? "idle" : "running"
  )

  const theme = THEME_LIST.find((t) => t.id === themeId)
  const selectedFrame =
    selectedFrameId && frames.length !== 0
      ? frames.find((f) => f.id === selectedFrameId) || null
      : null

  //Update the loadingstate inngest realtime event

  const addFrame = useCallback((frame: FrameType) => {
    setFrames((prevFrames) => [...prevFrames, frame])
  }, [])

  const updateFrame = useCallback((id: string, data: Partial<FrameType>) => {
    setFrames((prevFrames) =>
      prevFrames.map((f) => (f.id === id ? { ...f, ...data } : f))
    )
  }, [])
  return (
    <CanvasContext.Provider
      value={{
        theme,
        setTheme: setThemeId,
        themes: THEME_LIST,
        frames,
        setFrames,
        updateFrame,
        addFrame,
        selectedFrameId,
        selectedFrame,
        setSelectedFrameId,
        loadingStatus,
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}

export function useCanvas() {
  const context = useContext(CanvasContext)
  if (!context) {
    throw new Error("useCanvas must be used within a CanvasProvider")
  }
  return context
}
