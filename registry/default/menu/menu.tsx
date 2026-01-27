import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui-components/react/menu"
import { cn } from "@/lib/utils"

// Root
type MenuProps = React.ComponentProps<typeof MenuPrimitive.Root>

const Menu = MenuPrimitive.Root

// Trigger
interface MenuTriggerProps
  extends React.ComponentProps<typeof MenuPrimitive.Trigger> {}

const MenuTrigger = React.forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({ className, ...props }, ref) => {
    return (
      <MenuPrimitive.Trigger
        ref={ref}
        className={cn("outline-none", className)}
        {...props}
      />
    )
  }
)
MenuTrigger.displayName = "MenuTrigger"

// Portal
type MenuPortalProps = React.ComponentProps<typeof MenuPrimitive.Portal>

const MenuPortal = MenuPrimitive.Portal

// Content (Positioner + Popup)
interface MenuContentProps
  extends React.ComponentProps<typeof MenuPrimitive.Popup> {
  sideOffset?: number
}

const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(
  ({ className, children, sideOffset = 4, ...props }, ref) => {
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
  }
)
MenuContent.displayName = "MenuContent"

// Item
interface MenuItemProps
  extends React.ComponentProps<typeof MenuPrimitive.Item> {}

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <MenuPrimitive.Item
        ref={ref}
        className={cn(
          "flex items-center px-3 py-2 rounded-sm text-[13px] text-foreground cursor-pointer select-none outline-none",
          "hover:bg-muted focus:bg-muted",
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className
        )}
        {...props}
      />
    )
  }
)
MenuItem.displayName = "MenuItem"

// Group
interface MenuGroupProps
  extends React.ComponentProps<typeof MenuPrimitive.Group> {}

const MenuGroup = React.forwardRef<HTMLDivElement, MenuGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <MenuPrimitive.Group
        ref={ref}
        className={cn("py-1", className)}
        {...props}
      />
    )
  }
)
MenuGroup.displayName = "MenuGroup"

// GroupLabel
interface MenuLabelProps
  extends React.ComponentProps<typeof MenuPrimitive.GroupLabel> {}

const MenuLabel = React.forwardRef<HTMLDivElement, MenuLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <MenuPrimitive.GroupLabel
        ref={ref}
        className={cn(
          "px-3 py-2 text-xs font-medium text-muted-foreground-dim",
          className
        )}
        {...props}
      />
    )
  }
)
MenuLabel.displayName = "MenuLabel"

// Separator
interface MenuSeparatorProps
  extends React.ComponentProps<typeof MenuPrimitive.Separator> {}

const MenuSeparator = React.forwardRef<HTMLDivElement, MenuSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <MenuPrimitive.Separator
        ref={ref}
        className={cn("h-px my-1 bg-border", className)}
        {...props}
      />
    )
  }
)
MenuSeparator.displayName = "MenuSeparator"

export {
  Menu,
  MenuTrigger,
  MenuPortal,
  MenuContent,
  MenuItem,
  MenuGroup,
  MenuLabel,
  MenuSeparator,
  type MenuProps,
  type MenuTriggerProps,
  type MenuPortalProps,
  type MenuContentProps,
  type MenuItemProps,
  type MenuGroupProps,
  type MenuLabelProps,
  type MenuSeparatorProps,
}
