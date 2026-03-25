import * as React from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

export interface PrimaryButtonProps extends React.ComponentProps<typeof Button> {}

export const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "bg-[#CA8A04] text-white hover:bg-[#CA8A04] hover:opacity-90 py-3 px-6 h-auto rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all duration-200 cursor-pointer",
          className
        )}
        {...props}
      />
    )
  }
)
PrimaryButton.displayName = "PrimaryButton"
