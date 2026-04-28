import { CSSProperties } from "react"
import { Skeleton } from "../ui/skeleton"

type DeviceFrameSkeletonProps = {
  style: CSSProperties
}

export default function DeviceFrameSkeleton({
  style,
}: DeviceFrameSkeletonProps) {
  return (
    <div
      className="absolute origin-center overflow-hidden rounded-[36px] shadow-sm ring"
      style={{
        width: 420,
        height: 800,
        background: "#fff",
        ...style,
      }}
    >
      <div className="flex items-center gap-2 border-b p-3">
        <Skeleton className="size-5 rounded-md" />
        <Skeleton className="h-4 w-32" />
      </div>
      <div className="space-y-4 p-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />

        <Skeleton className="h-48 w-full rounded-xl" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  )
}
