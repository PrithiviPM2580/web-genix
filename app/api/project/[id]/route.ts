import { NextResponse } from "next/server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import prisma from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getKindeServerSession()
    const user = await session.getUser()

    if (!user) throw new Error("Unauthorized")

    const project = await prisma.project.findFirst({
      where: {
        userId: user.id,
        id: id,
      },
      include: {
        frames: true,
      },
    })

    if (!project)
      return NextResponse.json(
        {
          success: false,
          error: "Project not found",
        },
        { status: 404 }
      )

    return NextResponse.json({
      success: true,
      data: project,
    })
  } catch (error) {
    console.error("Error fetching project:", error)
    return NextResponse.json(
      {
        success: false,
        error:
          (error as Error).message ||
          "An error occurred while fetching projects",
      },
      { status: 500 }
    )
  }
}
