import * as React from "react"
import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const switchVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center rounded-full border border-border bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary data-[checked]:border-primary",
  {
    variants: {
      size: {
        sm: "h-[18px] w-8",
        md: "h-[22px] w-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const thumbVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-sm transition-transform data-[checked]:translate-x-full",
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5 translate-x-0.5 data-[checked]:translate-x-[14px]",
        md: "h-[18px] w-[18px] translate-x-0.5 data-[checked]:translate-x-[18px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface SwitchProps
  extends Omit<React.ComponentProps<typeof SwitchPrimitive.Root>, "children">,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <SwitchPrimitive.Root
        ref={ref}
        className={cn(switchVariants({ size, className }))}
        {...props}
      >
        <SwitchPrimitive.Thumb className={cn(thumbVariants({ size }))} />
      </SwitchPrimitive.Root>
    )
  }
)
Switch.displayName = "Switch"

export { Switch, switchVariants }
