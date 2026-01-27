import * as React from "react"
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip"
import { cn } from "@/lib/utils"

// Provider
type TooltipProviderProps = React.ComponentProps<typeof TooltipPrimitive.Provider>

const TooltipProvider = TooltipPrimitive.Provider

// Root
type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root>

const Tooltip = TooltipPrimitive.Root

// Trigger
interface TooltipTriggerProps
  extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {}

const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ className, ...props }, ref) => {

    return (
      <TooltipPrimitive.Trigger
        ref={ref}
        className={cn("outline-none", className)}
        {...props}
      />
    )
  }
)
TooltipTrigger.displayName = "TooltipTrigger"

// Portal
type TooltipPortalProps = React.ComponentProps<typeof TooltipPrimitive.Portal>

const TooltipPortal = TooltipPrimitive.Portal

// Content (Positioner + Popup)
interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipPrimitive.Popup> {
  sideOffset?: number
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, children, sideOffset = 4, side = "top", align = "center", ...props }, ref) => {

    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner sideOffset={sideOffset} side={side} align={align}>
          <TooltipPrimitive.Popup
            ref={ref}
            className={cn(
              "bg-accent text-foreground text-xs px-2 py-1 rounded-sm shadow-md",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
              className
            )}
            {...props}
          >
            {children}
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    )
  }
)
TooltipContent.displayName = "TooltipContent"

// Arrow
interface TooltipArrowProps
  extends React.ComponentProps<typeof TooltipPrimitive.Arrow> {}

const TooltipArrow = React.forwardRef<HTMLDivElement, TooltipArrowProps>(
  ({ className, ...props }, ref) => {

    return (
      <TooltipPrimitive.Arrow
        ref={ref}
        className={cn(
          "fill-bg-elevated",
          className
        )}
        {...props}
      />
    )
  }
)
TooltipArrow.displayName = "TooltipArrow"

export {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
  type TooltipProps,
  type TooltipProviderProps,
  type TooltipTriggerProps,
  type TooltipPortalProps,
  type TooltipContentProps,
  type TooltipArrowProps,
}
