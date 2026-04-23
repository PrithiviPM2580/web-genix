import Logo from "@/components/logo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs"
import { LogOut, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { user } = useKindeBrowserClient()
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
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage
                      src={user?.picture || ""}
                      alt={user?.given_name || "User"}
                    />
                    <AvatarFallback className="rounded-lg">
                      {user?.given_name?.charAt(0)}
                      {user?.family_name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogoutLink
                      postLogoutRedirectURL="/"
                      className="flex w-full items-center gap-1"
                    >
                      <LogOut className="size-4" />
                      Logout
                    </LogoutLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <LoginLink postLoginRedirectURL="/">
                <Button>Sign In</Button>
              </LoginLink>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
