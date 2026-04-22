"use client"

import { cn } from "@/lib/utils"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "./ui/input-group"
import { Spinner } from "./ui/spinner"
import { CornerDownLeft } from "lucide-react"

type PromptInputProps = {
  className?: string
  promptText: string
  setPromptText: (text: string) => void
  isLoading?: boolean
  hideSubmitBtn?: boolean
  onSubmit?: () => void
}

export default function PromptInput({
  className,
  promptText,
  setPromptText,
  isLoading,
  hideSubmitBtn = false,
  onSubmit,
}: PromptInputProps) {
  return (
    <div className="bg-background">
      <InputGroup
        className={cn(
          "min-h-43 rounded-3xl bg-background",
          className && className
        )}
      >
        <InputGroupTextarea
          className="py-2.5 text-base"
          placeholder="I want to design an app that..."
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
        />
        <InputGroupAddon
          align="block-end"
          className="flex items-center justify-end"
        >
          {!hideSubmitBtn && (
            <InputGroupButton
              variant="default"
              className=""
              size="sm"
              disabled={!promptText?.trim() || isLoading}
              onClick={() => onSubmit?.()}
            >
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  Design
                  <CornerDownLeft className="size-4" />
                </>
              )}
            </InputGroupButton>
          )}
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
