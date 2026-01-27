import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

// Provider
interface SidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SidebarProvider = React.forwardRef<HTMLDivElement, SidebarProviderProps>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = React.useState(false)
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open

    React.useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768)
      checkMobile()
      window.addEventListener("resize", checkMobile)

      return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value

        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }
      },
      [setOpenProp, open]
    )

    const toggleSidebar = React.useCallback(() => {
      setOpen((prev) => !prev)
    }, [setOpen])

    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)

      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    const contextValue = React.useMemo<SidebarContextValue>(
      () => ({
        open,
        setOpen,
        isMobile,
        toggleSidebar,
      }),
      [open, setOpen, isMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-state={open ? "open" : "closed"}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              ...style,
            } as React.CSSProperties
          }
          className={cn("group/sidebar flex min-h-svh w-full", className)}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

// Sidebar
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right"
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ side = "left", className, children, ...props }, ref) => {
    const { open, setOpen, isMobile } = useSidebar()

    // Mobile: slide-in drawer with overlay
    if (isMobile) {
      return (
        <>
          {open && (
            <div
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setOpen(false)}
            />
          )}
          <div
            ref={ref}
            data-state={open ? "open" : "closed"}
            data-side={side}
            className={cn(
              "fixed inset-y-0 z-50 flex w-[--sidebar-width-mobile] flex-col bg-card transition-transform duration-200 ease-in-out",
              side === "left"
                ? "left-0 data-[state=closed]:-translate-x-full"
                : "right-0 data-[state=closed]:translate-x-full",
              className
            )}
            style={
              { "--sidebar-width-mobile": SIDEBAR_WIDTH_MOBILE } as React.CSSProperties
            }
            {...props}
          >
            {children}
          </div>
        </>
      )
    }

    // Desktop: collapsible sidebar
    return (
      <div
        ref={ref}
        data-state={open ? "open" : "closed"}
        data-side={side}
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col border-r border-border bg-card text-foreground transition-[width,transform] duration-200 ease-in-out",
          !open && "w-0 -translate-x-full opacity-0",
          side === "right" && "order-last border-l border-r-0",
          side === "right" && !open && "translate-x-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

// Trigger
interface SidebarTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  ({ className, onClick, children, ...props }, ref) => {
    const { toggleSidebar } = useSidebar()

    return (
      <button
        ref={ref}
        type="button"
        onClick={(event) => {
          onClick?.(event)
          toggleSidebar()
        }}
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-sm text-muted-foreground hover:bg-muted hover:text-foreground",
          className
        )}
        {...props}
      >
        {children ?? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18" />
          </svg>
        )}
        <span className="sr-only">Toggle Sidebar</span>
      </button>
    )
  }
)
SidebarTrigger.displayName = "SidebarTrigger"

// Header
interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2 p-3", className)}
        {...props}
      />
    )
  }
)
SidebarHeader.displayName = "SidebarHeader"

// Footer
interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mt-auto flex flex-col gap-2 p-3", className)}
        {...props}
      />
    )
  }
)
SidebarFooter.displayName = "SidebarFooter"

// Content
interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-3", className)}
        {...props}
      />
    )
  }
)
SidebarContent.displayName = "SidebarContent"

// Group
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1", className)}
        {...props}
      />
    )
  }
)
SidebarGroup.displayName = "SidebarGroup"

// Group Label
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, SidebarGroupLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-2 py-1.5 text-xs font-medium text-muted-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

// Menu
interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {}

const SidebarMenu = React.forwardRef<HTMLUListElement, SidebarMenuProps>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn("flex flex-col gap-0.5", className)}
        {...props}
      />
    )
  }
)
SidebarMenu.displayName = "SidebarMenu"

// Menu Item
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const SidebarMenuItem = React.forwardRef<HTMLLIElement, SidebarMenuItemProps>(
  ({ className, ...props }, ref) => {
    return <li ref={ref} className={cn("relative", className)} {...props} />
  }
)
SidebarMenuItem.displayName = "SidebarMenuItem"

// Menu Button
const sidebarMenuButtonVariants = cva(
  "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-[13px] font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "text-muted-foreground hover:bg-muted hover:text-foreground",
        active: "bg-muted text-foreground",
      },
      size: {
        sm: "h-7 text-xs",
        md: "h-8",
        lg: "h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  isActive?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, variant, size, isActive, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          sidebarMenuButtonVariants({
            variant: isActive ? "active" : variant,
            size,
            className,
          })
        )}
        {...props}
      />
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

// Separator
interface SidebarSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarSeparator = React.forwardRef<HTMLDivElement, SidebarSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mx-2 my-2 h-px bg-border", className)}
        {...props}
      />
    )
  }
)
SidebarSeparator.displayName = "SidebarSeparator"

// Main content area (next to sidebar)
interface SidebarInsetProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarInset = React.forwardRef<HTMLDivElement, SidebarInsetProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-1 flex-col overflow-auto", className)}
        {...props}
      />
    )
  }
)
SidebarInset.displayName = "SidebarInset"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  sidebarMenuButtonVariants,
  useSidebar,
  type SidebarProps,
  type SidebarContentProps,
  type SidebarFooterProps,
  type SidebarGroupProps,
  type SidebarGroupLabelProps,
  type SidebarHeaderProps,
  type SidebarInsetProps,
  type SidebarMenuProps,
  type SidebarMenuButtonProps,
  type SidebarMenuItemProps,
  type SidebarProviderProps,
  type SidebarSeparatorProps,
  type SidebarTriggerProps,
}
