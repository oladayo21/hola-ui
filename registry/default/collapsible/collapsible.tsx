import * as React from "react"
import { Collapsible as CollapsiblePrimitive } from "@base-ui-components/react/collapsible"
import { cn } from "@/lib/utils"

// Root
type CollapsibleProps = React.ComponentProps<typeof CollapsiblePrimitive.Root>

const Collapsible = CollapsiblePrimitive.Root

// Trigger
interface CollapsibleTriggerProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.Trigger> {}

const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  CollapsibleTriggerProps
>(({ className, ...props }, ref) => {
  return (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
})
CollapsibleTrigger.displayName = "CollapsibleTrigger"

// Content (Panel)
interface CollapsibleContentProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.Panel> {}

const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  CollapsibleContentProps
>(({ className, ...props }, ref) => {
  return (
    <CollapsiblePrimitive.Panel
      ref={ref}
      className={cn(
        "overflow-hidden",
        "data-[open]:animate-collapsible-down",
        "data-[closed]:animate-collapsible-up",
        className
      )}
      {...props}
    />
  )
})
CollapsibleContent.displayName = "CollapsibleContent"

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  type CollapsibleProps,
  type CollapsibleTriggerProps,
  type CollapsibleContentProps,
}
