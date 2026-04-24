"use client"

import { useGetProjectById } from "@/features/use-project-id"
import { useParams } from "next/navigation"
import Header from "./_common/header"
import Canvas from "@/components/canvas"
import { CanvasProvider } from "@/context/canvas-context"

export default function Project() {
  const param = useParams()
  const id = param.id as string

  const { data: project, isPending } = useGetProjectById(id)
  const frames = project?.frames || []
  const themeId = project?.theme || ""

  const hasInitialData = frames.length > 0

  if (!isPending && !project) {
    return <div>Project not found</div>
  }
  return (
    <div className="relative flex h-screen w-full flex-col">
      <Header projectName={project?.name} />
      <CanvasProvider
        initialFrames={frames}
        initialThemeId={themeId}
        hasnInitialData={hasInitialData}
        projectId={project?.id}
      >
        <div className="flex flex-1 overflow-hidden">
          <div className="relative flex-1">
            <Canvas
              projectId={project?.id}
              projectName={project?.name}
              isPending={isPending}
            />
          </div>
        </div>
      </CanvasProvider>
    </div>
  )
}
