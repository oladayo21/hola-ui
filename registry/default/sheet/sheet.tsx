import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Root
type SheetProps = React.ComponentProps<typeof DialogPrimitive.Root>

const Sheet = DialogPrimitive.Root

// Trigger
interface SheetTriggerProps
  extends React.ComponentProps<typeof DialogPrimitive.Trigger> {}

const SheetTrigger = React.forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ className, ...props }, ref) => {
    return (
      <DialogPrimitive.Trigger
        ref={ref}
        className={cn(className)}
        {...props}
      />
    )
  }
)
SheetTrigger.displayName = "SheetTrigger"

// Portal
interface SheetPortalProps
  extends React.ComponentProps<typeof DialogPrimitive.Portal> {}

const SheetPortal = DialogPrimitive.Portal

// Backdrop/Overlay
interface SheetOverlayProps
  extends React.ComponentProps<typeof DialogPrimitive.Backdrop> {}

const SheetOverlay = React.forwardRef<HTMLDivElement, SheetOverlayProps>(
  ({ className, ...props }, ref) => {
    return (
      <DialogPrimitive.Backdrop
        ref={ref}
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          className
        )}
        {...props}
      />
    )
  }
)
SheetOverlay.displayName = "SheetOverlay"

// Content variants
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-bg-secondary border-border-default p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

// Content (Popup)
interface SheetContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Popup>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, side = "right", ...props }, ref) => {
    return (
      <SheetPortal>
        <SheetOverlay />
        <DialogPrimitive.Popup
          ref={ref}
          className={cn(sheetVariants({ side }), className)}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-bg-primary transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Popup>
      </SheetPortal>
    )
  }
)
SheetContent.displayName = "SheetContent"

// Header
interface SheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col space-y-2 text-center sm:text-left",
          className
        )}
        {...props}
      />
    )
  }
)
SheetHeader.displayName = "SheetHeader"

// Footer
interface SheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const SheetFooter = React.forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
          className
        )}
        {...props}
      />
    )
  }
)
SheetFooter.displayName = "SheetFooter"

// Title
interface SheetTitleProps
  extends React.ComponentProps<typeof DialogPrimitive.Title> {}

const SheetTitle = React.forwardRef<HTMLHeadingElement, SheetTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <DialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-medium text-text-primary", className)}
        {...props}
      />
    )
  }
)
SheetTitle.displayName = "SheetTitle"

// Description
interface SheetDescriptionProps
  extends React.ComponentProps<typeof DialogPrimitive.Description> {}

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  SheetDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-text-secondary", className)}
      {...props}
    />
  )
})
SheetDescription.displayName = "SheetDescription"

// Close
interface SheetCloseProps
  extends React.ComponentProps<typeof DialogPrimitive.Close> {}

const SheetClose = React.forwardRef<HTMLButtonElement, SheetCloseProps>(
  ({ className, ...props }, ref) => {
    return (
      <DialogPrimitive.Close
        ref={ref}
        className={cn(className)}
        {...props}
      />
    )
  }
)
SheetClose.displayName = "SheetClose"

export {
  Sheet,
  SheetTrigger,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
  sheetVariants,
  type SheetProps,
  type SheetTriggerProps,
  type SheetPortalProps,
  type SheetOverlayProps,
  type SheetContentProps,
  type SheetHeaderProps,
  type SheetFooterProps,
  type SheetTitleProps,
  type SheetDescriptionProps,
  type SheetCloseProps,
}
