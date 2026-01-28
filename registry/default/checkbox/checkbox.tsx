import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { IconCheck } from "@tabler/icons-react"

const checkboxVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-sm border border-border bg-muted transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const checkIconVariants = cva("", {
  variants: {
    size: {
      sm: "h-2.5 w-2.5",
      md: "h-3 w-3",
      lg: "h-3.5 w-3.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface CheckboxProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange">,
    VariantProps<typeof checkboxVariants> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, size, checked, onCheckedChange, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="checkbox"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        className={cn(
          checkboxVariants({ size, className }),
          checked && "bg-primary border-primary text-primary-foreground"
        )}
        onClick={() => onCheckedChange?.(!checked)}
        {...props}
      >
        {checked && <IconCheck className={cn(checkIconVariants({ size }))} strokeWidth={3} />}
      </button>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox, checkboxVariants }
