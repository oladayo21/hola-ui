import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog"
import { cn } from "@/lib/utils"

// Root
type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>

const Dialog = DialogPrimitive.Root

// Trigger
interface DialogTriggerProps
  extends React.ComponentProps<typeof DialogPrimitive.Trigger> {}

const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(
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
DialogTrigger.displayName = "DialogTrigger"

// Portal
interface DialogPortalProps
  extends React.ComponentProps<typeof DialogPrimitive.Portal> {}

const DialogPortal = DialogPrimitive.Portal

// Backdrop
interface DialogBackdropProps
  extends React.ComponentProps<typeof DialogPrimitive.Backdrop> {}

const DialogBackdrop = React.forwardRef<HTMLDivElement, DialogBackdropProps>(
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
DialogBackdrop.displayName = "DialogBackdrop"

// Alias for shadcn compatibility
const DialogOverlay = DialogBackdrop

// Content (Popup)
interface DialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Popup> {}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, ...props }, ref) => {

    return (
      <DialogPortal>
        <DialogBackdrop />
        <DialogPrimitive.Popup
          ref={ref}
          className={cn(
            "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
            "w-full max-w-lg p-6",
            "bg-card border border-border rounded-sm shadow-xl",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
            className
          )}
          {...props}
        >
          {children}
        </DialogPrimitive.Popup>
      </DialogPortal>
    )
  }
)
DialogContent.displayName = "DialogContent"

// Header (custom wrapper)
interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...props }, ref) => {

    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 text-left", className)}
        {...props}
      />
    )
  }
)
DialogHeader.displayName = "DialogHeader"

// Footer (custom wrapper)
interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...props }, ref) => {

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6",
          className
        )}
        {...props}
      />
    )
  }
)
DialogFooter.displayName = "DialogFooter"

// Title
interface DialogTitleProps
  extends React.ComponentProps<typeof DialogPrimitive.Title> {}

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => {

    return (
      <DialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-medium text-foreground", className)}
        {...props}
      />
    )
  }
)
DialogTitle.displayName = "DialogTitle"

// Description
interface DialogDescriptionProps
  extends React.ComponentProps<typeof DialogPrimitive.Description> {}

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ className, ...props }, ref) => {

  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
DialogDescription.displayName = "DialogDescription"

// Close
interface DialogCloseProps
  extends React.ComponentProps<typeof DialogPrimitive.Close> {}

const DialogClose = React.forwardRef<HTMLButtonElement, DialogCloseProps>(
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
DialogClose.displayName = "DialogClose"

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  type DialogProps,
  type DialogTriggerProps,
  type DialogPortalProps,
  type DialogBackdropProps,
  type DialogContentProps,
  type DialogHeaderProps,
  type DialogFooterProps,
  type DialogTitleProps,
  type DialogDescriptionProps,
  type DialogCloseProps,
}
