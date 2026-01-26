import * as React from "react"
import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs"
import { cn } from "@/lib/utils"

// Root
type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>

const Tabs = TabsPrimitive.Root

// List
interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsPrimitive.List
        ref={ref}
        className={cn(
          "relative flex gap-1 border-b border-border-subtle",
          className
        )}
        {...props}
      />
    )
  }
)
TabsList.displayName = "TabsList"

// Tab (Trigger)
interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Tab> {}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsPrimitive.Tab
        ref={ref}
        className={cn(
          "px-3 py-2 text-[13px] text-text-secondary transition-colors",
          "hover:text-text-primary",
          "data-[selected]:text-text-primary data-[selected]:border-b-2 data-[selected]:border-accent data-[selected]:-mb-px",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-bg-primary",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      />
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

// Indicator (animated underline)
interface TabsIndicatorProps
  extends React.ComponentProps<typeof TabsPrimitive.Indicator> {}

const TabsIndicator = React.forwardRef<HTMLSpanElement, TabsIndicatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsPrimitive.Indicator
        ref={ref}
        className={cn(
          "absolute bottom-0 h-0.5 bg-accent transition-all duration-200",
          "left-[var(--active-tab-left)] w-[var(--active-tab-width)]",
          className
        )}
        {...props}
      />
    )
  }
)
TabsIndicator.displayName = "TabsIndicator"

// Panel (Content)
interface TabsContentProps
  extends React.ComponentProps<typeof TabsPrimitive.Panel> {}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsPrimitive.Panel
        ref={ref}
        className={cn(
          "pt-4 focus-visible:outline-none",
          className
        )}
        {...props}
      />
    )
  }
)
TabsContent.displayName = "TabsContent"

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsIndicator,
  TabsContent,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsIndicatorProps,
  type TabsContentProps,
}
