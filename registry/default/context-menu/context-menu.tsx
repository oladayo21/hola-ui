import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui-components/react/menu"
import { cn } from "@/lib/utils"

// Root
type ContextMenuProps = React.ComponentProps<typeof MenuPrimitive.Root>

const ContextMenu = (props: ContextMenuProps) => (
  <MenuPrimitive.Root {...props} />
)

// Trigger (context menu uses different trigger behavior)
interface ContextMenuTriggerProps
  extends React.ComponentProps<typeof MenuPrimitive.Trigger> {}

const ContextMenuTrigger = React.forwardRef<
  HTMLDivElement,
  ContextMenuTriggerProps
>(({ className, ...props }, ref) => {
  return (
    <MenuPrimitive.Trigger
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cn("outline-none", className)}
      {...props}
    />
  )
})
ContextMenuTrigger.displayName = "ContextMenuTrigger"

// Content
interface ContextMenuContentProps
  extends React.ComponentProps<typeof MenuPrimitive.Popup> {
  sideOffset?: number
}

const ContextMenuContent = React.forwardRef<
  HTMLDivElement,
  ContextMenuContentProps
>(({ className, children, sideOffset = 4, ...props }, ref) => {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner sideOffset={sideOffset}>
        <MenuPrimitive.Popup
          ref={ref}
          className={cn(
            "bg-bg-secondary border border-border-default shadow-lg rounded-sm min-w-[180px] p-1",
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
ContextMenuContent.displayName = "ContextMenuContent"

// Item
interface ContextMenuItemProps
  extends React.ComponentProps<typeof MenuPrimitive.Item> {
  inset?: boolean
}

const ContextMenuItem = React.forwardRef<HTMLDivElement, ContextMenuItemProps>(
  ({ className, inset, ...props }, ref) => {
    return (
      <MenuPrimitive.Item
        ref={ref}
        className={cn(
          "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-[13px] text-text-primary outline-none",
          "hover:bg-bg-tertiary focus:bg-bg-tertiary",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          inset && "pl-8",
          className
        )}
        {...props}
      />
    )
  }
)
ContextMenuItem.displayName = "ContextMenuItem"

// Checkbox Item
interface ContextMenuCheckboxItemProps
  extends React.ComponentProps<typeof MenuPrimitive.CheckboxItem> {}

const ContextMenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  ContextMenuCheckboxItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <MenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-[13px] text-text-primary outline-none",
        "hover:bg-bg-tertiary focus:bg-bg-tertiary",
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
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem"

// Radio Group
interface ContextMenuRadioGroupProps
  extends React.ComponentProps<typeof MenuPrimitive.RadioGroup> {}

const ContextMenuRadioGroup = React.forwardRef<
  HTMLDivElement,
  ContextMenuRadioGroupProps
>(({ className, ...props }, ref) => {
  return (
    <MenuPrimitive.RadioGroup
      ref={ref}
      className={cn("py-1", className)}
      {...props}
    />
  )
})
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup"

// Radio Item
interface ContextMenuRadioItemProps
  extends React.ComponentProps<typeof MenuPrimitive.RadioItem> {}

const ContextMenuRadioItem = React.forwardRef<
  HTMLDivElement,
  ContextMenuRadioItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <MenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-[13px] text-text-primary outline-none",
        "hover:bg-bg-tertiary focus:bg-bg-tertiary",
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
ContextMenuRadioItem.displayName = "ContextMenuRadioItem"

// Label
interface ContextMenuLabelProps
  extends React.ComponentProps<typeof MenuPrimitive.GroupLabel> {
  inset?: boolean
}

const ContextMenuLabel = React.forwardRef<
  HTMLDivElement,
  ContextMenuLabelProps
>(({ className, inset, ...props }, ref) => {
  return (
    <MenuPrimitive.GroupLabel
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-xs font-medium text-text-tertiary",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
})
ContextMenuLabel.displayName = "ContextMenuLabel"

// Separator
interface ContextMenuSeparatorProps
  extends React.ComponentProps<typeof MenuPrimitive.Separator> {}

const ContextMenuSeparator = React.forwardRef<
  HTMLDivElement,
  ContextMenuSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <MenuPrimitive.Separator
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-border-default", className)}
      {...props}
    />
  )
})
ContextMenuSeparator.displayName = "ContextMenuSeparator"

// Shortcut
interface ContextMenuShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const ContextMenuShortcut = React.forwardRef<
  HTMLSpanElement,
  ContextMenuShortcutProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "ml-auto text-xs tracking-widest text-text-tertiary",
        className
      )}
      {...props}
    />
  )
})
ContextMenuShortcut.displayName = "ContextMenuShortcut"

// Group
interface ContextMenuGroupProps
  extends React.ComponentProps<typeof MenuPrimitive.Group> {}

const ContextMenuGroup = React.forwardRef<
  HTMLDivElement,
  ContextMenuGroupProps
>(({ className, ...props }, ref) => {
  return (
    <MenuPrimitive.Group
      ref={ref}
      className={cn("py-1", className)}
      {...props}
    />
  )
})
ContextMenuGroup.displayName = "ContextMenuGroup"

// Sub (Submenu Root)
type ContextMenuSubProps = React.ComponentProps<typeof MenuPrimitive.Root>

const ContextMenuSub = (props: ContextMenuSubProps) => (
  <MenuPrimitive.Root {...props} />
)

// Sub Trigger
interface ContextMenuSubTriggerProps
  extends React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger> {
  inset?: boolean
}

const ContextMenuSubTrigger = React.forwardRef<
  HTMLDivElement,
  ContextMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => {
  return (
    <MenuPrimitive.SubmenuTrigger
      ref={ref}
      className={cn(
        "flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-[13px] text-text-primary outline-none",
        "hover:bg-bg-tertiary focus:bg-bg-tertiary",
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
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger"

// Sub Content
interface ContextMenuSubContentProps
  extends React.ComponentProps<typeof MenuPrimitive.Popup> {}

const ContextMenuSubContent = React.forwardRef<
  HTMLDivElement,
  ContextMenuSubContentProps
>(({ className, ...props }, ref) => {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner sideOffset={2}>
        <MenuPrimitive.Popup
          ref={ref}
          className={cn(
            "bg-bg-secondary border border-border-default shadow-lg rounded-sm min-w-[180px] p-1",
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
ContextMenuSubContent.displayName = "ContextMenuSubContent"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  type ContextMenuProps,
  type ContextMenuTriggerProps,
  type ContextMenuContentProps,
  type ContextMenuItemProps,
  type ContextMenuCheckboxItemProps,
  type ContextMenuRadioGroupProps,
  type ContextMenuRadioItemProps,
  type ContextMenuLabelProps,
  type ContextMenuSeparatorProps,
  type ContextMenuShortcutProps,
  type ContextMenuGroupProps,
  type ContextMenuSubProps,
  type ContextMenuSubTriggerProps,
  type ContextMenuSubContentProps,
}
