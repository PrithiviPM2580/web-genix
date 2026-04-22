import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-1 items-center gap-2 text-xl sm:max-w-6xl"
    >
      <span className="inline-block font-extrabold text-primary">X</span>
      <span className="font-semibold text-foreground">Design.ai</span>
    </Link>
  )
}
