import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui-components/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const toggleVariants = cva(
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

export interface ToggleProps
  extends React.ComponentProps<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Toggle.displayName = "Toggle"

export { Toggle, toggleVariants }
