import { Toaster as Sonner, toast } from "sonner"
import { cn } from "@/lib/utils"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ className, ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className={cn("toaster group", className)}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-sm",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-accent group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error:
            "group-[.toaster]:bg-red-600/10 group-[.toaster]:border-red-600/50 group-[.toaster]:text-red-400",
          success:
            "group-[.toaster]:bg-green-600/10 group-[.toaster]:border-green-600/50 group-[.toaster]:text-green-400",
          warning:
            "group-[.toaster]:bg-yellow-600/10 group-[.toaster]:border-yellow-600/50 group-[.toaster]:text-yellow-400",
          info: "group-[.toaster]:bg-blue-600/10 group-[.toaster]:border-blue-600/50 group-[.toaster]:text-blue-400",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
