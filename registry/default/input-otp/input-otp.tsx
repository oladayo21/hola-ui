import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { cn } from "@/lib/utils"

export interface InputOTPProps
  extends React.ComponentPropsWithoutRef<typeof OTPInput> {}

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  InputOTPProps
>(({ className, containerClassName, ...props }, ref) => {
  return (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
})
InputOTP.displayName = "InputOTP"

export interface InputOTPGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {}

const InputOTPGroup = React.forwardRef<HTMLDivElement, InputOTPGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
      />
    )
  }
)
InputOTPGroup.displayName = "InputOTPGroup"

export interface InputOTPSlotProps
  extends React.ComponentPropsWithoutRef<"div"> {
  index: number
}

const InputOTPSlot = React.forwardRef<HTMLDivElement, InputOTPSlotProps>(
  ({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext)
    const slot = inputOTPContext.slots[index]

    if (!slot) {
      return null
    }

    const { char, hasFakeCaret, isActive } = slot

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-9 w-9 items-center justify-center border-y border-r border-border bg-muted text-sm transition-all first:rounded-l-sm first:border-l last:rounded-r-sm",
          isActive && "z-10 ring-1 ring-ring",
          className
        )}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
          </div>
        )}
      </div>
    )
  }
)
InputOTPSlot.displayName = "InputOTPSlot"

export interface InputOTPSeparatorProps
  extends React.ComponentPropsWithoutRef<"div"> {}

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  InputOTPSeparatorProps
>(({ ...props }, ref) => {
  return (
    <div ref={ref} role="separator" {...props}>
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
        className="text-muted-foreground-dim"
      >
        <circle cx="12" cy="12" r="1" />
      </svg>
    </div>
  )
})
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
