import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "block h-12 w-full border border-stone-500 bg-white bg-origin-border px-3 py-2 text-black placeholder:text-black focus:outline-none",
        className
      )}
      {...props} />
  );
}

export { Input }
