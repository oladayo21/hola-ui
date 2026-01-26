import * as React from "react"
import { Textarea as BaseTextarea } from "@base-ui-components/react/textarea"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "w-full text-text-primary placeholder:text-text-muted focus:outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 resize-y",
  {
    variants: {
      variant: {
        default:
          "bg-bg-secondary border border-border-default hover:border-border-hover focus:border-accent px-3 py-2 rounded-sm",
        ghost: "bg-transparent border-none",
      },
      size: {
        sm: "min-h-[60px] text-xs",
        md: "min-h-[80px] text-[13px]",
        lg: "min-h-[120px] text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface TextareaProps
  extends Omit<React.ComponentProps<typeof BaseTextarea>, "size">,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <BaseTextarea
        ref={ref}
        className={cn(textareaVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
