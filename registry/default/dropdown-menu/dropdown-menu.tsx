import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui-components/react/menu"
import { cn } from "@/lib/utils"

// Root
type DropdownMenuProps = React.ComponentProps<typeof MenuPrimitive.Root>

const DropdownMenu = MenuPrimitive.Root

// Trigger
interface DropdownMenuTriggerProps
  extends React.ComponentProps<typeof MenuPrimitive.Trigger> {}

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuTriggerProps
>(({ className, ...props }, ref) => {
  return (
    <MenuPrimitive.Trigger
      ref={ref}
      className={cn("outline-none", className)}
      {...props}
    />
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

// Content
interface DropdownMenuContentProps
  extends React.ComponentProps<typeof MenuPrimitive.Popup> {
  sideOffset?: number
}

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ className, children, sideOffset = 4, ...props }, ref) => {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner sideOffset={sideOffset}>
        <MenuPrimitive.Popup
          ref={ref}
          className={cn(
            "bg-card border border-border shadow-lg rounded-sm min-w-[160px] p-1",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            className
          )}
          {...props}
        >
          {children}
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
})
DropdownMenuContent.displayName = "DropdownMenuContent"

// Item
interface DropdownMenuItemProps
  extends React.ComponentProps<typeof MenuPrimitive.Item> {
  inset?: boolean
}

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>(({ className, inset, ...props }, ref) => {
  return (
    <MenuPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-[13px] text-foreground outline-none",
        "hover:bg-muted focus:bg-muted",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
})
DropdownMenuItem.displayName = "DropdownMenuItem"

// Checkbox Item
interface DropdownMenuCheckboxItemProps
  extends React.ComponentProps<typeof MenuPrimitive.CheckboxItem> {}

const DropdownMenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuCheckboxItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <MenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-[13px] text-foreground outline-none",
        "hover:bg-muted focus:bg-muted",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenuPrimitive.CheckboxItemIndicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
})
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem"

// Radio Group
interface DropdownMenuRadioGroupProps
  extends React.ComponentProps<typeof MenuPrimitive.RadioGroup> {}

const DropdownMenuRadioGroup = React.forwardRef<
  HTMLDivElement,
  DropdownMenuRadioGroupProps
>(({ className, ...props }, ref) => {
  return (
    <MenuPrimitive.RadioGroup
      ref={ref}
      className={cn("py-1", className)}
      {...props}
    />
  )
})
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup"

// Radio Item
interface DropdownMenuRadioItemProps
  extends React.ComponentProps<typeof MenuPrimitive.RadioItem> {}

const DropdownMenuRadioItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuRadioItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <MenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-[13px] text-foreground outline-none",
        "hover:bg-muted focus:bg-muted",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenuPrimitive.RadioItemIndicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
})
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem"

// Label
interface DropdownMenuLabelProps
  extends React.ComponentProps<typeof MenuPrimitive.GroupLabel> {
  inset?: boolean
}

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, ref) => {
  return (
    <MenuPrimitive.GroupLabel
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-xs font-medium text-muted-foreground-dim",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
})
DropdownMenuLabel.displayName = "DropdownMenuLabel"

// Separator
interface DropdownMenuSeparatorProps
  extends React.ComponentProps<typeof MenuPrimitive.Separator> {}

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <MenuPrimitive.Separator
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
})
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

// Shortcut
interface DropdownMenuShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const DropdownMenuShortcut = React.forwardRef<
  HTMLSpanElement,
  DropdownMenuShortcutProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground-dim",
        className
      )}
      {...props}
    />
  )
})
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

// Group
interface DropdownMenuGroupProps
  extends React.ComponentProps<typeof MenuPrimitive.Group> {}

const DropdownMenuGroup = React.forwardRef<
  HTMLDivElement,
  DropdownMenuGroupProps
>(({ className, ...props }, ref) => {
  return (
    <MenuPrimitive.Group
      ref={ref}
      className={cn("py-1", className)}
      {...props}
    />
  )
})
DropdownMenuGroup.displayName = "DropdownMenuGroup"

// Sub (Submenu Root)
type DropdownMenuSubProps = React.ComponentProps<typeof MenuPrimitive.Root>

const DropdownMenuSub = (props: DropdownMenuSubProps) => (
  <MenuPrimitive.Root {...props} />
)

// Sub Trigger
interface DropdownMenuSubTriggerProps
  extends React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger> {
  inset?: boolean
}

const DropdownMenuSubTrigger = React.forwardRef<
  HTMLDivElement,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => {
  return (
    <MenuPrimitive.SubmenuTrigger
      ref={ref}
      className={cn(
        "flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-[13px] text-foreground outline-none",
        "hover:bg-muted focus:bg-muted",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-auto"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </MenuPrimitive.SubmenuTrigger>
  )
})
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger"

// Sub Content
interface DropdownMenuSubContentProps
  extends React.ComponentProps<typeof MenuPrimitive.Popup> {}

const DropdownMenuSubContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuSubContentProps
>(({ className, ...props }, ref) => {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner sideOffset={2}>
        <MenuPrimitive.Popup
          ref={ref}
          className={cn(
            "bg-card border border-border shadow-lg rounded-sm min-w-[160px] p-1",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
})
DropdownMenuSubContent.displayName = "DropdownMenuSubContent"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  type DropdownMenuProps,
  type DropdownMenuTriggerProps,
  type DropdownMenuContentProps,
  type DropdownMenuItemProps,
  type DropdownMenuCheckboxItemProps,
  type DropdownMenuRadioGroupProps,
  type DropdownMenuRadioItemProps,
  type DropdownMenuLabelProps,
  type DropdownMenuSeparatorProps,
  type DropdownMenuShortcutProps,
  type DropdownMenuGroupProps,
  type DropdownMenuSubProps,
  type DropdownMenuSubTriggerProps,
  type DropdownMenuSubContentProps,
}
