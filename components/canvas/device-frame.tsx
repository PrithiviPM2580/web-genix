"use client"

import { TOOL_MODE_ENUM, ToolModeType } from "@/constants"
import { useCanvas } from "@/context/canvas-context"
import { getHTMLWrapper } from "@/lib/frame-wrapper"
import { cn } from "@/lib/utils"
import { useRef, useState } from "react"
import { Rnd } from "react-rnd"

type DeviceFrameProps = {
  html: string
  title?: string
  width?: number
  minHeight?: number | string
  initialPostition?: {
    x: number
    y: number
  }
  frameId: string
  scale?: number
  toolMode: ToolModeType
  themeStyle?: string
}

export default function DeviceFrame({
  html,
  title = "Untitled",
  width = 420,
  minHeight = 800,
  initialPostition = { x: 0, y: 0 },
  frameId,
  scale = 1,
  toolMode,
  themeStyle,
}: DeviceFrameProps) {
  const { setSelectedFrameId, selectedFrameId } = useCanvas()
  const [frameSize, setFrameSize] = useState({
    width,
    height: minHeight,
  })
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const isSlected = selectedFrameId === frameId
  const fullHtml = getHTMLWrapper(html, title, themeStyle, frameId)

  return (
    <Rnd
      default={{
        x: initialPostition.x,
        y: initialPostition.y,
        width,
        height: frameSize.height,
      }}
      minWidth={width}
      minHeight={minHeight}
      size={{
        width: frameSize.width,
        height: frameSize.height,
      }}
      disableDragging={toolMode === TOOL_MODE_ENUM.HAND}
      enableResizing={isSlected && toolMode === TOOL_MODE_ENUM.HAND}
      scale={scale}
      onClick={(e: any) => {
        e.stopPropagation()
        if (toolMode === TOOL_MODE_ENUM.SELECT) {
          setSelectedFrameId(frameId)
        }
      }}
      resizeHandleComponent={{
        topLeft: isSlected ? <Handle /> : undefined,
        topRight: isSlected ? <Handle /> : undefined,
        bottomRight: isSlected ? <Handle /> : undefined,
        bottomLeft: isSlected ? <Handle /> : undefined,
      }}
      resizeHandleStyles={{
        top: { cursor: "ns-resize" },
        bottom: { cursor: "ns-resize" },
        left: { cursor: "ew-resize" },
        right: { cursor: "ew-resize" },
      }}
      onResize={(e, direction, ref) => {
        setFrameSize({
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
        })
      }}
      className={cn(
        "relative z-10",
        isSlected &&
          toolMode !== TOOL_MODE_ENUM.HAND &&
          "ring-3 ring-blue-400 ring-offset-1",
        toolMode === TOOL_MODE_ENUM.HAND
          ? "cursor-grab active:cursor-grabbing"
          : "cursor-move"
      )}
    >
      <div className="h-full w-full">
        <div
          className={cn(
            "relative h-auto w-full overflow-hidden rounded-[36px] shadow-sm",
            isSlected && toolMode !== TOOL_MODE_ENUM.HAND && "rounded-none"
          )}
        >
          <iframe
            ref={iframeRef}
            title={title}
            srcDoc={fullHtml}
            sandbox="allow-scripts allow-same-origin"
            style={{
              width: "100%",
              minHeight: `${minHeight}px`,
              height: `${frameSize.height}px`,
              border: "none",
              pointerEvents: "none",
              display: "block",
              background: "white",
            }}
          />
        </div>
      </div>
    </Rnd>
  )
}

const Handle = () => (
  <div className="z-30 size-4 border-2 border-blue-500 bg-white" />
)
