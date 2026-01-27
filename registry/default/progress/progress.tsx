import * as React from "react"
import { Progress as ProgressPrimitive } from "@base-ui-components/react/progress"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const progressVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-bg-tertiary",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, size, ...props }, ref) => {
    return (
      <ProgressPrimitive.Root
        ref={ref}
        value={value}
        className={cn(progressVariants({ size, className }))}
        {...props}
      >
        <ProgressPrimitive.Track className="h-full w-full">
          <ProgressPrimitive.Indicator
            className="h-full bg-accent transition-all duration-300 ease-in-out"
            style={{ width: `${value ?? 0}%` }}
          />
        </ProgressPrimitive.Track>
      </ProgressPrimitive.Root>
    )
  }
)
Progress.displayName = "Progress"

export { Progress, progressVariants }
