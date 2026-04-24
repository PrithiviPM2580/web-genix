"use client"

import { useCanvas } from "@/context/canvas-context"
import { parseThemeColors, ThemeType } from "@/lib/themes"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

export default function ThemeSelector() {
  const { themes, theme: currentTheme, setTheme } = useCanvas()
  return (
    <div className="flex max-h-96 flex-col">
      <div className="flex-1 overflow-y-auto px-4 pb-2">
        <h3 className="mb-2 text-sm font-semibold">Choose a theme</h3>
        <div className="space-y-3 py-2">
          {themes?.map((theme) => (
            <ThemeItem
              key={theme.id}
              theme={theme}
              isSelected={currentTheme?.id === theme.id}
              onSelect={() => setTheme(theme.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ThemeItem({
  theme,
  isSelected,
  onSelect,
}: {
  theme: ThemeType
  isSelected: boolean
  onSelect: () => void
}) {
  const color = parseThemeColors(theme.style)
  return (
    <Button
      onClick={onSelect}
      className={cn(
        "flex w-full items-center justify-between gap-4 rounded-xl border bg-background p-1",
        isSelected ? "border-2" : "border"
      )}
      style={{ borderColor: isSelected ? color.primary : "" }}
    >
      <div className="flex gap-2">
        {["primary", "secondary", "accent", "muted"].map((colorKey) => (
          <div
            className="size-4 rounded-full border"
            key={colorKey}
            style={{ backgroundColor: color[colorKey], borderColor: "#ccc" }}
          />
        ))}
      </div>
      <div className="flex flex-[0.9] items-center gap-2">
        <span className="text-sm">{theme.name}</span>
        {isSelected && <CheckIcon size={16} color={color.primary} />}
      </div>
    </Button>
  )
}
