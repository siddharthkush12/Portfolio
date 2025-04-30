import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "block h-12 w-full border border-stone-500 bg-white bg-origin-border px-3 py-2 text-black placeholder:text-black focus:outline-none",
        className
      )}
      {...props} />
  );
}

export { Textarea }
