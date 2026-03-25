import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export interface StepIndicatorProps {
  currentStep: number // 1: Address, 2: Payment, 3: Review
  className?: string
}

const steps = [
  { id: 1, name: "Address" },
  { id: 2, name: "Payment" },
  { id: 3, name: "Review" },
]

export function StepIndicator({ currentStep, className }: StepIndicatorProps) {
  return (
    <div className={cn("flex items-center justify-center w-full mb-8", className)}>
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.id
        const isCurrent = currentStep === step.id

        return (
          <React.Fragment key={step.id}>
            {/* Step Circle & Label */}
            <div className="flex flex-col items-center relative z-10">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors duration-300",
                  isCompleted
                    ? "bg-[#DC2626] border-[#DC2626] text-white"
                    : isCurrent
                    ? "border-[#DC2626] text-[#DC2626] bg-[#FEF2F2]"
                    : "border-gray-200 text-gray-400 bg-white"
                )}
              >
                {isCompleted ? <Check className="h-5 w-5" /> : step.id}
              </div>
              <span
                className={cn(
                  "absolute -bottom-6 text-xs font-medium whitespace-nowrap",
                  isCurrent || isCompleted ? "text-[#450A0A]" : "text-gray-400"
                )}
              >
                {step.name}
              </span>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-[2px] w-24 sm:w-32 transition-colors duration-300 -my-6 mx-2",
                  isCompleted ? "bg-[#DC2626]" : "bg-gray-200"
                )}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
