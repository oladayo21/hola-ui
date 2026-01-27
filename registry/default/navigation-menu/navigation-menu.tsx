import * as React from "react"
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui-components/react/navigation-menu"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Root
interface NavigationMenuProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Root> {}

const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <NavigationMenuPrimitive.Root
        ref={ref}
        className={cn(
          "relative z-10 flex max-w-max flex-1 items-center justify-center",
          className
        )}
        {...props}
      >
        {children}
        <NavigationMenuViewport />
      </NavigationMenuPrimitive.Root>
    )
  }
)
NavigationMenu.displayName = "NavigationMenu"

// List
interface NavigationMenuListProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.List> {}

const NavigationMenuList = React.forwardRef<
  HTMLDivElement,
  NavigationMenuListProps
>(({ className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
})
NavigationMenuList.displayName = "NavigationMenuList"

// Item
interface NavigationMenuItemProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Item> {}

const NavigationMenuItem = NavigationMenuPrimitive.Item

// Trigger style
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-8 w-max items-center justify-center rounded-sm bg-transparent px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-muted data-[state=open]:text-foreground"
)

// Trigger
interface NavigationMenuTriggerProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {}

const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative top-px ml-1 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </NavigationMenuPrimitive.Trigger>
  )
})
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

// Content
interface NavigationMenuContentProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Content> {}

const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  NavigationMenuContentProps
>(({ className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "left-0 top-0 w-full md:absolute md:w-auto",
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52",
        className
      )}
      {...props}
    />
  )
})
NavigationMenuContent.displayName = "NavigationMenuContent"

// Link
interface NavigationMenuLinkProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {}

const NavigationMenuLink = NavigationMenuPrimitive.Link

// Viewport
interface NavigationMenuViewportProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Viewport> {}

const NavigationMenuViewport = React.forwardRef<
  HTMLDivElement,
  NavigationMenuViewportProps
>(({ className, ...props }, ref) => {
  return (
    <div className="absolute left-0 top-full flex justify-center">
      <NavigationMenuPrimitive.Viewport
        ref={ref}
        className={cn(
          "origin-top-center relative mt-1.5 h-[var(--navigation-menu-viewport-height)] w-full overflow-hidden rounded-sm border border-border bg-card shadow-lg md:w-[var(--navigation-menu-viewport-width)]",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90",
          className
        )}
        {...props}
      />
    </div>
  )
})
NavigationMenuViewport.displayName = "NavigationMenuViewport"

// Indicator (not available in Base UI - pure styled div)
interface NavigationMenuIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavigationMenuIndicator = React.forwardRef<
  HTMLDivElement,
  NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </div>
  )
})
NavigationMenuIndicator.displayName = "NavigationMenuIndicator"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
  type NavigationMenuProps,
  type NavigationMenuListProps,
  type NavigationMenuItemProps,
  type NavigationMenuTriggerProps,
  type NavigationMenuContentProps,
  type NavigationMenuLinkProps,
  type NavigationMenuViewportProps,
  type NavigationMenuIndicatorProps,
}
