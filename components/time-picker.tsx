"use client"

import type React from "react"

import { Clock } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface TimePickerDemoProps {
  value: string
  onChange: (time: string) => void
}

export function TimePickerDemo({ value, onChange }: TimePickerDemoProps) {
  const [open, setOpen] = useState(false)

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-start text-left font-normal border-2 border-purple-100 dark:border-purple-900",
            !value && "text-slate-500",
          )}
        >
          <Clock className="mr-2 h-4 w-4" />
          {value || "Select time"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <div className="space-y-2">
          <Label htmlFor="time">Time</Label>
          <Input
            id="time"
            type="time"
            value={value}
            onChange={handleTimeChange}
            className="border-2 border-purple-100 dark:border-purple-900"
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
