import { useCanvas } from "@/context/canvas-context"
import { cn } from "@/lib/utils"
import { LoadingStatusType } from "@/types"
import { Spinner } from "../ui/spinner"
import CanvasFloatingToolbar from "./canvas-floating-toobar"

type CanvasProps = {
  projectId: string
  projectName: string | null
  isPending: boolean
}

export default function Canvas({
  projectId,
  projectName,
  isPending,
}: CanvasProps) {
  const { theme, frames, selectedFrame, setSelectedFrameId, loadingStatus } =
    useCanvas()

  const currentStatus = isPending
    ? "fetching"
    : loadingStatus !== "idle" && loadingStatus !== "completed"
      ? loadingStatus
      : null
  return (
    <div className="relative h-full w-full overflow-hidden">
      <CanvasFloatingToolbar />
      {currentStatus && <CanvasLoader status={currentStatus} />}
      <div
        className={cn(
          "absolute inset-0 h-full w-full bg-[#eee] p-3 dark:bg-[#242423]"
        )}
        style={{
          backgroundImage:
            "radial-gradient(circle, var(---primary)) 1px, transparent 1px",
          backgroundSize: "20px 20px",
        }}
      ></div>
    </div>
  )
}

function CanvasLoader({ status }: { status?: LoadingStatusType | "fetching" }) {
  return (
    <div
      className={cn(
        "absolute top-4 left-1/2 z-10 flex max-w-full min-w-40 -translate-x-1/2 items-center space-x-2 rounded-br-xl rounded-bl-xl px-4 pt-1.5 pb-2 shadow-md",
        status === "fetching" && "bg-gray-500 text-white",
        status === "running" && "bg-amber-500 text-white",
        status === "analyzing" && "bg-blue-500 text-white",
        status === "generating" && "bg-violet-500 text-white"
      )}
    >
      <Spinner className="size-4 stroke-3" />
      <span className="text-sm font-semibold capitalize">
        {status === "fetching" ? "Loading project..." : status}
      </span>
    </div>
  )
}
