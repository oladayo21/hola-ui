import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui-components/react/select"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const selectTriggerVariants = cva(
  "inline-flex items-center justify-between w-full text-foreground transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-card border border-border hover:border-border-hover focus:border-ring px-3 py-2 rounded-sm",
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

// Root
type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>

const Select = SelectPrimitive.Root

// Trigger
interface SelectTriggerProps
  extends Omit<React.ComponentProps<typeof SelectPrimitive.Trigger>, "size">,
    VariantProps<typeof selectTriggerVariants> {}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn(selectTriggerVariants({ variant, size, className }))}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon className="ml-2 text-muted-foreground-dim">
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    )
  }
)
SelectTrigger.displayName = "SelectTrigger"

// Value
interface SelectValueProps
  extends React.ComponentProps<typeof SelectPrimitive.Value> {
  placeholder?: string
}

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <SelectPrimitive.Value
        ref={ref}
        placeholder={placeholder}
        className={cn("text-foreground data-[placeholder]:text-muted-foreground", className)}
        {...props}
      />
    )
  }
)
SelectValue.displayName = "SelectValue"

// Content (Positioner + Popup + List)
interface SelectContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Popup> {
  sideOffset?: number
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, sideOffset = 4, ...props }, ref) => {
    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner sideOffset={sideOffset}>
          <SelectPrimitive.Popup
            ref={ref}
            className={cn(
              "bg-card border border-border shadow-lg rounded-sm overflow-hidden min-w-[var(--anchor-width)]",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
              className
            )}
            {...props}
          >
            <SelectPrimitive.List className="p-1">
              {children}
            </SelectPrimitive.List>
          </SelectPrimitive.Popup>
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    )
  }
)
SelectContent.displayName = "SelectContent"

// Item
interface SelectItemProps
  extends React.ComponentProps<typeof SelectPrimitive.Item> {}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitive.Item
        ref={ref}
        className={cn(
          "relative flex items-center px-2 py-1.5 rounded-sm text-[13px] text-foreground cursor-pointer select-none outline-none",
          "hover:bg-muted focus:bg-muted",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className
        )}
        {...props}
      >
        <SelectPrimitive.ItemIndicator className="absolute left-0 w-6 flex items-center justify-center">
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
        <SelectPrimitive.ItemText className="pl-6">
          {children}
        </SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)
SelectItem.displayName = "SelectItem"

// Group
interface SelectGroupProps
  extends React.ComponentProps<typeof SelectPrimitive.Group> {}

const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectPrimitive.Group
        ref={ref}
        className={cn("py-1", className)}
        {...props}
      />
    )
  }
)
SelectGroup.displayName = "SelectGroup"

// GroupLabel
interface SelectLabelProps
  extends React.ComponentProps<typeof SelectPrimitive.GroupLabel> {}

const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectPrimitive.GroupLabel
        ref={ref}
        className={cn(
          "px-2 py-1.5 text-xs font-medium text-muted-foreground-dim",
          className
        )}
        {...props}
      />
    )
  }
)
SelectLabel.displayName = "SelectLabel"

// Separator
interface SelectSeparatorProps
  extends React.ComponentProps<typeof SelectPrimitive.Separator> {}

const SelectSeparator = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectPrimitive.Separator
        ref={ref}
        className={cn("h-px my-1 bg-border", className)}
        {...props}
      />
    )
  }
)
SelectSeparator.displayName = "SelectSeparator"

// Icons
function ChevronDownIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 6L5 8.5L9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  selectTriggerVariants,
  type SelectProps,
  type SelectTriggerProps,
  type SelectValueProps,
  type SelectContentProps,
  type SelectItemProps,
  type SelectGroupProps,
  type SelectLabelProps,
  type SelectSeparatorProps,
}
