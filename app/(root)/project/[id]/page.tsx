"use client"

import { useGetProjectById } from "@/features/use-project-id"
import { useParams } from "next/navigation"
import Header from "./_common/header"

export default function Project() {
  const param = useParams()
  const id = param.id as string

  const { data: project, isPending } = useGetProjectById(id)
  const frames = project?.frames || []
  const theme = project?.theme || ""

  if (!isPending && !project) {
    return <div>Project not found</div>
  }
  return (
    <div className="relative flex h-screen w-full flex-col">
      <Header projectName={project?.name} />
    </div>
  )
}
