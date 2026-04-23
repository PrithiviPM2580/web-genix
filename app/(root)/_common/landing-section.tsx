"use client"

import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion"
import PromptInput from "@/components/prompt-input"
import { suggestionItems } from "@/constants"
import { memo, useState } from "react"
import Header from "./header"
import { useCreateProject, useGetProjects } from "@/features/use-project"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { Spinner } from "@/components/ui/spinner"
import { ProjectType } from "@/types"
import { useRouter } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { FolderOpenDotIcon } from "lucide-react"

export default function LandingSection() {
  const [promptText, setPromptText] = useState<string>("")
  const { user } = useKindeBrowserClient()
  const { mutate, isPending } = useCreateProject()
  const userId = user?.id
  const { data: projects, isLoading, isError } = useGetProjects(userId)

  function handleSuggestionClick(value: string) {
    setPromptText(value)
  }

  function handleSubmit() {
    if (!promptText) return
    mutate(promptText)
  }
  return (
    <div className="min-h-screen w-full px-4 md:px-0">
      <div className="flex flex-col">
        <Header />
        <div className="relative overflow-hidden pt-28">
          <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-6xl">
            <div className="space-y-3">
              <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                Design mobile apps <br className="md:hidden" />
                <span className="text-primary">in minutes</span>
              </h1>
              <p className="mx-auto max-w-2xl text-center leading-relaxed font-medium text-muted-foreground sm:text-lg">
                Go from idea to beautiful app mockups in minutes by chatting
                with AI.
              </p>
            </div>
            <div className="relative z-50 mt-4 flex w-full max-w-3xl flex-col items-center gap-8">
              <div className="w-full">
                <PromptInput
                  className="rounded-3xl ring-2 ring-primary"
                  promptText={promptText}
                  setPromptText={setPromptText}
                  isLoading={isPending}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
            <div className="mt-5 flex h-fit w-full flex-wrap items-center justify-center gap-2 px-5">
              <Suggestions className="w-full">
                {suggestionItems.map((item) => (
                  <Suggestion
                    key={item.id}
                    suggestion={item.value}
                    className="h-7 px-2.5 pt-1 text-xs"
                    onClick={() => handleSuggestionClick(item.value)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Suggestion>
                ))}
              </Suggestions>
            </div>
            <div className="absolute top-[80%] left-1/2 -z-10 h-750 w-1250 -translate-x-1/2">
              <div className="bg-radial-primary absolute bottom-[calc(100%-300px)] left-1/2 h-500 w-500 -translate-x-1/2 opacity-20"></div>
              <div className="absolute -mt-2.5 size-full rounded-[50%] bg-primary/20 opacity-70 [box-shadow:0_-15px_24.8px_var(--primary)]"></div>
              <div className="absolute z-0 size-full rounded-[50%] bg-background"></div>
            </div>
          </div>
        </div>
        <div className="w-full py-10">
          <div className="mx-auto max-w-3xl">
            {userId && (
              <div className="">
                <h1 className="text-xl font-medium tracking-tight">Recent</h1>
                {isLoading ? (
                  <div className="flex items-center justify-center py-2">
                    <Spinner />
                  </div>
                ) : (
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {projects?.data?.map((project: ProjectType) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectCard = memo(function ProjectCard({
  project,
}: {
  project: ProjectType
}) {
  const router = useRouter()
  const createdAtDate = new Date(project.createdAt)
  const timeAgo = formatDistanceToNow(createdAtDate, { addSuffix: true })
  const thumbnail = project.thumbnail || null

  const onRoute = () => {
    router.push(`/project/${project.id}`)
  }
  return (
    <div
      role="button"
      className="flex w-full cursor-pointer flex-col overflow-hidden rounded-xl border hover:shadow-md"
      onClick={onRoute}
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-[#eee]">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt="Project Thumbnail"
            className="h-full w-full scale-110 object-cover object-left"
          />
        ) : (
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/20 text-primary">
            <FolderOpenDotIcon />
          </div>
        )}
      </div>
      <div className="flex flex-col p-4">
        <h3 className="mb-1 line-clamp-1 w-full truncate text-sm font-semibold">
          {project.name}
        </h3>
        <p className="text-xs text-muted-foreground">{timeAgo}</p>
      </div>
    </div>
  )
})
