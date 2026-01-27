import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary: "bg-muted text-foreground border border-border hover:border-border-hover hover:bg-accent",
        outline: "bg-muted text-foreground border border-border hover:border-border-hover hover:bg-accent",
        ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted",
        link: "text-primary underline-offset-4 hover:underline",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-7 px-2.5 text-xs rounded-sm",
        md: "h-8 px-3 text-[13px] rounded-sm",
        lg: "h-9 px-4 text-sm rounded-md",
        icon: "h-8 w-8 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
