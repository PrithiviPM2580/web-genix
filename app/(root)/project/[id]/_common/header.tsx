"use client"

import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowLeftIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

type HeaderProps = {
  projectName?: string
}

export default function Header({ projectName }: HeaderProps) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"
  return (
    <header className="sticky top-0 right-0 left-0 z-30">
      <div className="border-b border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <Logo />
            <Button
              size="icon-sm"
              variant="ghost"
              className="rounded-full bg-muted"
              onClick={() => router.push("/")}
            >
              <ArrowLeftIcon className="size-4" />
            </Button>
            <p className="max-w-50 truncate font-medium">
              {projectName || "Untitled Project"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              <SunIcon
                className={cn(
                  "absolute size-5 transition",
                  isDark ? "scale-100" : "scale-0"
                )}
              />
              <MoonIcon
                className={cn(
                  "absolute size-5 transition",
                  isDark ? "scale-0" : "scale-100"
                )}
              />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
