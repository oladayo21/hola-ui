import * as React from "react"
import { cn } from "@/lib/utils"

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn(className)}
        {...props}
      />
    )
  }
)
Breadcrumb.displayName = "Breadcrumb"

export interface BreadcrumbListProps
  extends React.ComponentPropsWithoutRef<"ol"> {}

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => {
    return (
      <ol
        ref={ref}
        className={cn(
          "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
          className
        )}
        {...props}
      />
    )
  }
)
BreadcrumbList.displayName = "BreadcrumbList"

export interface BreadcrumbItemProps
  extends React.ComponentPropsWithoutRef<"li"> {}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn("inline-flex items-center gap-1.5", className)}
        {...props}
      />
    )
  }
)
BreadcrumbItem.displayName = "BreadcrumbItem"

export interface BreadcrumbLinkProps
  extends React.ComponentPropsWithoutRef<"a"> {
  render?: React.ReactElement
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, render, children, ...props }, ref) => {
    const linkClassName = cn("transition-colors hover:text-foreground", className)

    if (render) {
      return React.cloneElement(render, {
        ref,
        className: cn(linkClassName, render.props.className),
        ...props,
        children,
      })
    }

    return (
      <a ref={ref} className={linkClassName} {...props}>
        {children}
      </a>
    )
  }
)
BreadcrumbLink.displayName = "BreadcrumbLink"

export interface BreadcrumbPageProps
  extends React.ComponentPropsWithoutRef<"span"> {}

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn("font-medium text-foreground", className)}
        {...props}
      />
    )
  }
)
BreadcrumbPage.displayName = "BreadcrumbPage"

export interface BreadcrumbSeparatorProps
  extends React.ComponentPropsWithoutRef<"li"> {}

const BreadcrumbSeparator = React.forwardRef<
  HTMLLIElement,
  BreadcrumbSeparatorProps
>(({ className, children, ...props }, ref) => {
  return (
    <li
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5 text-muted-foreground-dim", className)}
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
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </li>
  )
})
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

export interface BreadcrumbEllipsisProps
  extends React.ComponentPropsWithoutRef<"span"> {}

const BreadcrumbEllipsis = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbEllipsisProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
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
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
      <span className="sr-only">More</span>
    </span>
  )
})
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
