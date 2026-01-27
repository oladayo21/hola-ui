import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui-components/react/alert-dialog"
import { cn } from "@/lib/utils"

// Root
type AlertDialogProps = React.ComponentProps<typeof AlertDialogPrimitive.Root>

const AlertDialog = AlertDialogPrimitive.Root

// Trigger
interface AlertDialogTriggerProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Trigger> {}

const AlertDialogTrigger = React.forwardRef<
  HTMLButtonElement,
  AlertDialogTriggerProps
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Trigger
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
})
AlertDialogTrigger.displayName = "AlertDialogTrigger"

// Portal
interface AlertDialogPortalProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Portal> {}

const AlertDialogPortal = AlertDialogPrimitive.Portal

// Backdrop
interface AlertDialogBackdropProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Backdrop> {}

const AlertDialogBackdrop = React.forwardRef<
  HTMLDivElement,
  AlertDialogBackdropProps
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Backdrop
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
})
AlertDialogBackdrop.displayName = "AlertDialogBackdrop"

// Alias for shadcn compatibility
const AlertDialogOverlay = AlertDialogBackdrop

// Content (Popup)
interface AlertDialogContentProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Popup> {}

const AlertDialogContent = React.forwardRef<
  HTMLDivElement,
  AlertDialogContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <AlertDialogPortal>
      <AlertDialogBackdrop />
      <AlertDialogPrimitive.Popup
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
      </AlertDialogPrimitive.Popup>
    </AlertDialogPortal>
  )
})
AlertDialogContent.displayName = "AlertDialogContent"

// Header
interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  AlertDialogHeaderProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
      {...props}
    />
  )
})
AlertDialogHeader.displayName = "AlertDialogHeader"

// Footer
interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  AlertDialogFooterProps
>(({ className, ...props }, ref) => {
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
})
AlertDialogFooter.displayName = "AlertDialogFooter"

// Title
interface AlertDialogTitleProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Title> {}

const AlertDialogTitle = React.forwardRef<
  HTMLHeadingElement,
  AlertDialogTitleProps
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={cn("text-lg font-medium text-foreground", className)}
      {...props}
    />
  )
})
AlertDialogTitle.displayName = "AlertDialogTitle"

// Description
interface AlertDialogDescriptionProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Description> {}

const AlertDialogDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
AlertDialogDescription.displayName = "AlertDialogDescription"

// Action (confirm button)
interface AlertDialogActionProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Close> {}

const AlertDialogAction = React.forwardRef<
  HTMLButtonElement,
  AlertDialogActionProps
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Close
      ref={ref}
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-sm bg-accent px-4 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
})
AlertDialogAction.displayName = "AlertDialogAction"

// Cancel button
interface AlertDialogCancelProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Close> {}

const AlertDialogCancel = React.forwardRef<
  HTMLButtonElement,
  AlertDialogCancelProps
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Close
      ref={ref}
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-sm border border-border bg-muted px-4 text-[13px] font-medium text-foreground transition-colors hover:bg-accent hover:border-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-2 sm:mt-0",
        className
      )}
      {...props}
    />
  )
})
AlertDialogCancel.displayName = "AlertDialogCancel"

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  type AlertDialogProps,
  type AlertDialogTriggerProps,
  type AlertDialogPortalProps,
  type AlertDialogBackdropProps,
  type AlertDialogContentProps,
  type AlertDialogHeaderProps,
  type AlertDialogFooterProps,
  type AlertDialogTitleProps,
  type AlertDialogDescriptionProps,
  type AlertDialogActionProps,
  type AlertDialogCancelProps,
}
