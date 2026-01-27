import * as React from "react"
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui-components/react/scroll-area"
import { cn } from "@/lib/utils"

// Root
interface ScrollAreaProps
  extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    )
  }
)
ScrollArea.displayName = "ScrollArea"

// ScrollBar
interface ScrollBarProps
  extends React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar> {
  orientation?: "vertical" | "horizontal"
}

const ScrollBar = React.forwardRef<HTMLDivElement, ScrollBarProps>(
  ({ className, orientation = "vertical", ...props }, ref) => {
    return (
      <ScrollAreaPrimitive.Scrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
          "flex touch-none select-none transition-colors",
          orientation === "vertical" &&
            "h-full w-2.5 border-l border-l-transparent p-px",
          orientation === "horizontal" &&
            "h-2.5 flex-col border-t border-t-transparent p-px",
          className
        )}
        {...props}
      >
        <ScrollAreaPrimitive.Thumb
          className={cn(
            "relative rounded-full bg-border",
            orientation === "vertical" && "flex-1"
          )}
        />
      </ScrollAreaPrimitive.Scrollbar>
    )
  }
)
ScrollBar.displayName = "ScrollBar"

export {
  ScrollArea,
  ScrollBar,
  type ScrollAreaProps,
  type ScrollBarProps,
}
