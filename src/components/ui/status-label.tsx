import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusVariants = cva(
  "inline-flex items-center justify-center font-extrabold tracking-tight text-center transition-colors",
  {
    variants: {
      variant: {
        comingsoon:
          "bg-gradient-primary bg-clip-text text-transparent drop-shadow-[0_0_40px_hsl(var(--primary-glow)/0.4)] animate-pulse",
        working:
          "bg-gradient-to-r from-primary to-[hsl(220_70%_55%)] bg-clip-text text-transparent drop-shadow-[0_0_40px_hsl(var(--primary-glow)/0.3)] animate-bounce",
        work:
          "bg-gradient-primary bg-clip-text text-transparent drop-shadow-[0_0_40px_hsl(var(--primary-glow)/0.4)] animate-pulse",
        },
      size: {
        // hero: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl", // covers most screens
        hero: "text-[clamp(2.5rem,10vw,8rem)]",
      },
    },
    defaultVariants: {
      variant: "comingsoon",
      size: "hero",
    },
  }
)

const StatusLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof statusVariants>
>(({ className, variant, size, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(statusVariants({ variant, size }), className)}
    {...props}
  />
))

StatusLabel.displayName = "StatusLabel"

export { StatusLabel }
