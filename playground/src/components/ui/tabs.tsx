import * as React from "react"
import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ============================================================================
// Context for variant propagation
// ============================================================================

type TabsContextValue = {
  variant: "line" | "pills" | "boxed"
  size: "sm" | "md" | "lg"
}

const TabsContext = React.createContext<TabsContextValue>({
  variant: "line",
  size: "md",
})

const useTabsContext = () => React.useContext(TabsContext)

// ============================================================================
// Tabs Root
// ============================================================================

interface TabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root>,
    Partial<TabsContextValue> {}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ variant = "line", size = "md", children, ...props }, ref) => {
    return (
      <TabsContext.Provider value={{ variant, size }}>
        <TabsPrimitive.Root ref={ref} {...props}>
          {children}
        </TabsPrimitive.Root>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = "Tabs"

// ============================================================================
// TabsList
// ============================================================================

const tabsListVariants = cva("relative flex items-center", {
  variants: {
    variant: {
      line: "gap-1 border-b border-border-default",
      pills: "gap-1 rounded-lg bg-bg-secondary p-1",
      boxed: "gap-0 border-b border-border-default",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "line",
    size: "md",
  },
})

interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant: variantProp, size: sizeProp, ...props }, ref) => {
    const context = useTabsContext()
    const variant = variantProp ?? context.variant
    const size = sizeProp ?? context.size

    return (
      <TabsPrimitive.List
        ref={ref}
        className={cn(tabsListVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
TabsList.displayName = "TabsList"

// ============================================================================
// TabsTrigger
// ============================================================================

const tabsTriggerVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap font-medium",
    "transition-all duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        line: [
          "relative text-text-secondary",
          "hover:text-text-primary",
          "data-[selected]:text-text-primary",
          // Animated underline pseudo-element
          "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5",
          "after:scale-x-0 after:bg-accent after:transition-transform after:duration-200",
          "data-[selected]:after:scale-x-100",
          // Offset to overlap border
          "-mb-px",
        ],
        pills: [
          "rounded-md text-text-secondary",
          "hover:text-text-primary hover:bg-bg-tertiary/50",
          "data-[selected]:bg-bg-elevated data-[selected]:text-text-primary data-[selected]:shadow-sm",
        ],
        boxed: [
          "relative border border-transparent text-text-secondary",
          "hover:text-text-primary",
          "rounded-t-md -mb-px",
          "data-[selected]:border-border-default data-[selected]:border-b-bg-primary data-[selected]:bg-bg-primary data-[selected]:text-text-primary",
        ],
      },
      size: {
        sm: "h-7 px-2.5 text-xs",
        md: "h-9 px-4 text-[13px]",
        lg: "h-11 px-6 text-sm",
      },
    },
    defaultVariants: {
      variant: "line",
      size: "md",
    },
  }
)

interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Tab>,
    VariantProps<typeof tabsTriggerVariants> {}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, variant: variantProp, size: sizeProp, ...props }, ref) => {
    const context = useTabsContext()
    const variant = variantProp ?? context.variant
    const size = sizeProp ?? context.size

    return (
      <TabsPrimitive.Tab
        ref={ref}
        className={cn(tabsTriggerVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

// ============================================================================
// TabsIndicator (for line variant - animated underline)
// ============================================================================

const tabsIndicatorVariants = cva(
  "absolute bottom-0 h-0.5 bg-accent transition-all duration-200 ease-out",
  {
    variants: {
      size: {
        sm: "h-[1.5px]",
        md: "h-0.5",
        lg: "h-[3px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

interface TabsIndicatorProps
  extends React.ComponentProps<typeof TabsPrimitive.Indicator>,
    VariantProps<typeof tabsIndicatorVariants> {}

const TabsIndicator = React.forwardRef<HTMLSpanElement, TabsIndicatorProps>(
  ({ className, size: sizeProp, ...props }, ref) => {
    const context = useTabsContext()
    const size = sizeProp ?? context.size

    return (
      <TabsPrimitive.Indicator
        ref={ref}
        className={cn(
          tabsIndicatorVariants({ size }),
          "left-[var(--active-tab-left)] w-[var(--active-tab-width)]",
          className
        )}
        {...props}
      />
    )
  }
)
TabsIndicator.displayName = "TabsIndicator"

// ============================================================================
// TabsContent
// ============================================================================

const tabsContentVariants = cva(
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  {
    variants: {
      size: {
        sm: "pt-3 text-sm",
        md: "pt-4 text-sm",
        lg: "pt-5 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

interface TabsContentProps
  extends React.ComponentProps<typeof TabsPrimitive.Panel>,
    VariantProps<typeof tabsContentVariants> {}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, size: sizeProp, ...props }, ref) => {
    const context = useTabsContext()
    const size = sizeProp ?? context.size

    return (
      <TabsPrimitive.Panel
        ref={ref}
        className={cn(tabsContentVariants({ size, className }))}
        {...props}
      />
    )
  }
)
TabsContent.displayName = "TabsContent"

// ============================================================================
// Exports
// ============================================================================

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsIndicator,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
  tabsIndicatorVariants,
  tabsContentVariants,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsIndicatorProps,
  type TabsContentProps,
}
