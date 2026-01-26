import * as React from "react"
import { Input as BaseInput } from "@base-ui-components/react/input"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "w-full text-text-primary placeholder:text-text-muted focus:outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-bg-secondary border border-border-default hover:border-border-hover focus:border-accent px-3 py-2 rounded-sm",
        ghost: "bg-transparent border-none",
      },
      size: {
        sm: "h-8 text-xs",
        md: "h-9 text-[13px]",
        lg: "h-10 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface InputProps
  extends Omit<React.ComponentProps<typeof BaseInput>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <BaseInput
        ref={ref}
        className={cn(inputVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
