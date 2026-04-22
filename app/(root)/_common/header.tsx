import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import React from "react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <header className="sticky top-0 right-0 left-0 z-30">
      <div className="h-16 border-b bg-background py-4">
        <div className="mx-auto flex w-full items-center justify-between sm:max-w-6xl">
          <Logo />
          <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
            <Link href="/" className="text-foreground-muted text-sm">
              Home
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end gap-3">
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
            <LoginLink>
              <Button>Sign In</Button>
            </LoginLink>
          </div>
        </div>
      </div>
    </header>
  )
}
