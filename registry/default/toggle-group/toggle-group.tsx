import * as React from "react"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const toggleGroupVariants = cva(
  "inline-flex items-center justify-center gap-1",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const toggleGroupItemVariants = cva(
  "inline-flex items-center justify-center rounded-sm text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-bg-tertiary data-[pressed]:text-text-primary",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-text-secondary hover:bg-bg-tertiary hover:text-text-primary",
        outline:
          "border border-border-default bg-transparent text-text-secondary hover:bg-bg-tertiary hover:text-text-primary data-[pressed]:border-accent",
      },
      size: {
        sm: "h-7 px-2",
        md: "h-8 px-3",
        lg: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

type ToggleGroupContextValue = VariantProps<typeof toggleGroupVariants>

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  variant: "default",
  size: "md",
})

export interface ToggleGroupProps
  extends React.ComponentProps<typeof ToggleGroupPrimitive.Root>,
    VariantProps<typeof toggleGroupVariants> {}

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <ToggleGroupPrimitive.Root
        ref={ref}
        className={cn(toggleGroupVariants({ variant, size, className }))}
        {...props}
      >
        <ToggleGroupContext.Provider value={{ variant, size }}>
          {children}
        </ToggleGroupContext.Provider>
      </ToggleGroupPrimitive.Root>
    )
  }
)
ToggleGroup.displayName = "ToggleGroup"

export interface ToggleGroupItemProps
  extends React.ComponentProps<typeof ToggleGroupPrimitive.Item>,
    VariantProps<typeof toggleGroupItemVariants> {}

const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  ToggleGroupItemProps
>(({ className, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleGroupItemVariants({
          variant: variant ?? context.variant,
          size: size ?? context.size,
          className,
        })
      )}
      {...props}
    />
  )
})
ToggleGroupItem.displayName = "ToggleGroupItem"

export {
  ToggleGroup,
  ToggleGroupItem,
  toggleGroupVariants,
  toggleGroupItemVariants,
}
