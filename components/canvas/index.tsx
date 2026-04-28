import { useCanvas } from "@/context/canvas-context"
import { cn } from "@/lib/utils"
import { LoadingStatusType } from "@/types"
import { Spinner } from "../ui/spinner"
import CanvasFloatingToolbar from "./canvas-floating-toobar"
import { useState } from "react"
import { DEMO_HTML, TOOL_MODE_ENUM, ToolModeType } from "@/constants"
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
import CanvasControls from "./canvas-controls"
import DeviceFrame from "./device-frame"
import DeviceFrameSkeleton from "./device-frame-skeleton"

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
  const { theme, frames, loadingStatus } = useCanvas()

  const [toolMode, setToolMode] = useState<ToolModeType>(TOOL_MODE_ENUM.SELECT)
  const [zoomPercent, setZoomPercent] = useState<number>(53)
  const [currentScale, setCurrentScale] = useState<number>(0.53)

  const currentStatus = isPending
    ? "fetching"
    : loadingStatus !== "idle" && loadingStatus !== "completed"
      ? loadingStatus
      : null
  return (
    <div className="relative h-full w-full overflow-hidden">
      <CanvasFloatingToolbar />
      {currentStatus && <CanvasLoader status={currentStatus} />}
      <TransformWrapper
        initialScale={0.53}
        initialPositionX={40}
        initialPositionY={5}
        minScale={0.1}
        maxScale={3}
        wheel={{ step: 0.1 }}
        pinch={{ step: 0.1 }}
        doubleClick={{ disabled: true }}
        centerZoomedOut={false}
        centerOnInit={false}
        smooth={true}
        limitToBounds={false}
        onTransform={(ref) => {
          setZoomPercent(Math.round(ref.state.scale * 100))
          setCurrentScale(ref.state.scale)
        }}
        panning={{
          disabled: toolMode !== TOOL_MODE_ENUM.HAND,
        }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div
              className={cn(
                "absolute inset-0 h-full w-full bg-[#eee] p-3 dark:bg-[#242423]",
                toolMode === TOOL_MODE_ENUM.HAND
                  ? "cursor-grab active:cursor-grabbing"
                  : "cursor-default"
              )}
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              <TransformComponent
                wrapperStyle={{
                  width: "100%",
                  height: "100%",
                  overflow: "unset",
                }}
                contentStyle={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div>
                  {" "}
                  {frames?.map((frame, index) => {
                    const baseX = 100 + index * 480
                    const y = 100

                    if (frame.isLoading) {
                      return (
                        <DeviceFrameSkeleton
                          key={index}
                          style={{ transform: `translate(${baseX}px, 100px)` }}
                        />
                      )
                    }
                    return (
                      <DeviceFrame
                        key={frame.id}
                        frameId={frame.id}
                        title={frame.title}
                        html={frame.htmlContent}
                        scale={currentScale}
                        initialPostition={{
                          x: baseX,
                          y: y,
                        }}
                        toolMode={toolMode}
                        themeStyle={theme?.style}
                      />
                    )
                  })}
                </div>
              </TransformComponent>
            </div>
            <CanvasControls
              zoomIn={zoomIn}
              zoomOut={zoomOut}
              zoomPercent={zoomPercent}
              toolMode={toolMode}
              setToolMode={setToolMode}
            />
          </>
        )}
      </TransformWrapper>
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
