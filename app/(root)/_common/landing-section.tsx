"use client"

import PromptInput from "@/components/prompt-input"
import { useState } from "react"

export default function LandingSection() {
  const [promptText, setPromptText] = useState<string>("")
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col">
        {/* <Header /> */}
        <div className="relative overflow-hidden pt-28">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center">
            <div className="space-y-3">
              <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                Design mobile apps <br className="md:hidden" />
                <span className="text-primary">in minutes</span>
              </h1>
              <p className="mx-auto max-w-2xl text-center leading-relaxed font-medium text-foreground sm:text-lg">
                Go from idea to beautiful app mockups in minutes by chatting
                with AI.
              </p>
            </div>
            <div className="relative z-50 flex w-full max-w-3xl flex-col items-center gap-8">
              <div className="w-full">
                <PromptInput
                  className="rounded-3xl ring-2 ring-primary"
                  promptText={promptText}
                  setPromptText={setPromptText}
                  isLoading={false}
                  onSubmit={() => {}}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 px-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
