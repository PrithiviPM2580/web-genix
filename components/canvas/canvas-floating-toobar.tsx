import { Palette, Wand2 } from "lucide-react"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { useCanvas } from "@/context/canvas-context"
import { useState } from "react"
import PromptInput from "../prompt-input"
import { parseThemeColors } from "@/lib/themes"
import { cn } from "@/lib/utils"

export default function CanvasFloatingToolbar() {
  const { themes, theme: currentTheme, setTheme } = useCanvas()
  const [promptText, setPromptText] = useState<string>("")
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2">
      <div className="w-full max-w-2xl rounded-full border bg-background shadow-xl dark:bg-gray-950">
        <div className="flex flex-row items-center gap-2 px-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size="icon-sm"
                className="cursor-pointer rounded-2xl bg-linear-to-r from-purple-500 to-indigo-600 px-4 text-white shadow-lg shadow-purple-200/50"
              >
                <Wand2 className="size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="mt-1 w-80 rounded-xl border p-2 shadow-lg">
              <PromptInput
                promptText={promptText}
                setPromptText={setPromptText}
                className="min-h-37.5 ring-1 ring-purple-500"
              />
              <Button className="mt-2 w-full cursor-pointer bg-linear-to-r from-purple-500 to-indigo-500 shadow-lg shadow-purple-200/50">
                Design
              </Button>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center gap-2 px-3 py-2">
                <Palette className="size-4" />
                <div className="flex gap-1.5">
                  {themes?.slice(0, 4)?.map((theme, index) => {
                    const color = parseThemeColors(theme.style)
                    return (
                      <div
                        role="button"
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          setTheme(theme.id)
                        }}
                        className={cn(
                          "size-6.5 cursor-pointer rounded-full",
                          currentTheme?.id === theme.id &&
                            "ring-1 ring-offset-1"
                        )}
                        style={{
                          background: `linear-gradient(135deg, ${color.primary}, ${color.accent})`,
                        }}
                      ></div>
                    )
                  })}
                </div>
              </div>
            </PopoverTrigger>
          </Popover>
        </div>
      </div>
    </div>
  )
}
