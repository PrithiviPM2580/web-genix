"use client"

import { TOOL_MODE_ENUM, ToolModeType } from "@/constants"
import { useCanvas } from "@/context/canvas-context"
import { getHTMLWrapper } from "@/lib/frame-wrapper"
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

  const Handle = () => (
    <div className="z-30 size-4 border-2 border-blue-500 bg-white" />
  )
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
      }}
    ></Rnd>
  )
}
