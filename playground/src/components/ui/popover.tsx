import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover"
import { cn } from "@/lib/utils"

// Root
type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root>

const Popover = PopoverPrimitive.Root

// Trigger
interface PopoverTriggerProps
  extends React.ComponentProps<typeof PopoverPrimitive.Trigger> {}

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ className, ...props }, ref) => {

    return (
      <PopoverPrimitive.Trigger
        ref={ref}
        className={cn("outline-none", className)}
        {...props}
      />
    )
  }
)
PopoverTrigger.displayName = "PopoverTrigger"

// Portal
type PopoverPortalProps = React.ComponentProps<typeof PopoverPrimitive.Portal>

const PopoverPortal = PopoverPrimitive.Portal

// Content (Positioner + Popup)
interface PopoverContentProps
  extends React.ComponentProps<typeof PopoverPrimitive.Popup> {
  sideOffset?: number
}

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, children, sideOffset = 8, ...props }, ref) => {

    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Positioner sideOffset={sideOffset}>
          <PopoverPrimitive.Popup
            ref={ref}
            className={cn(
              "bg-bg-secondary border border-border-default shadow-lg rounded-sm p-4",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
              className
            )}
            {...props}
          >
            {children}
          </PopoverPrimitive.Popup>
        </PopoverPrimitive.Positioner>
      </PopoverPrimitive.Portal>
    )
  }
)
PopoverContent.displayName = "PopoverContent"

// Arrow
interface PopoverArrowProps
  extends React.ComponentProps<typeof PopoverPrimitive.Arrow> {}

const PopoverArrow = React.forwardRef<HTMLDivElement, PopoverArrowProps>(
  ({ className, ...props }, ref) => {

    return (
      <PopoverPrimitive.Arrow
        ref={ref}
        className={cn(
          "fill-bg-secondary [&>path]:stroke-border-default [&>path]:stroke-1",
          className
        )}
        {...props}
      />
    )
  }
)
PopoverArrow.displayName = "PopoverArrow"

// Close
interface PopoverCloseProps
  extends React.ComponentProps<typeof PopoverPrimitive.Close> {}

const PopoverClose = React.forwardRef<HTMLButtonElement, PopoverCloseProps>(
  ({ className, ...props }, ref) => {

    return (
      <PopoverPrimitive.Close
        ref={ref}
        className={cn(
          "absolute right-2 top-2 p-1 rounded-sm text-text-tertiary",
          "hover:bg-bg-tertiary hover:text-text-primary",
          "outline-none focus:bg-bg-tertiary",
          className
        )}
        {...props}
      />
    )
  }
)
PopoverClose.displayName = "PopoverClose"

// Title
interface PopoverTitleProps
  extends React.ComponentProps<typeof PopoverPrimitive.Title> {}

const PopoverTitle = React.forwardRef<HTMLHeadingElement, PopoverTitleProps>(
  ({ className, ...props }, ref) => {

    return (
      <PopoverPrimitive.Title
        ref={ref}
        className={cn("text-sm font-medium text-text-primary", className)}
        {...props}
      />
    )
  }
)
PopoverTitle.displayName = "PopoverTitle"

// Description
interface PopoverDescriptionProps
  extends React.ComponentProps<typeof PopoverPrimitive.Description> {}

const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  PopoverDescriptionProps
>(({ className, ...props }, ref) => {

  return (
    <PopoverPrimitive.Description
      ref={ref}
      className={cn("text-sm text-text-secondary", className)}
      {...props}
    />
  )
})
PopoverDescription.displayName = "PopoverDescription"

export {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverArrow,
  PopoverClose,
  PopoverTitle,
  PopoverDescription,
  type PopoverProps,
  type PopoverTriggerProps,
  type PopoverPortalProps,
  type PopoverContentProps,
  type PopoverArrowProps,
  type PopoverCloseProps,
  type PopoverTitleProps,
  type PopoverDescriptionProps,
}
