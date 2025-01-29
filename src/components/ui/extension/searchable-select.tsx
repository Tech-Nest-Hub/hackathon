// Dependencies: pnpm install lucide-react

"use client";

import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface SearchableSelectProps {
  items: Items[];
  onValueChange?: (value: string) => void;
  emptyMessage?: string;
  placeHolderText?: string;
  disabled?: boolean;
}
interface Items {
  value: string;
  label: string;
}

export default function SearchableSelect({
  items,
  onValueChange,
  emptyMessage,
  placeHolderText,
  disabled,
}: SearchableSelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <Popover open={!disabled && open} onOpenChange={setOpen}>
      <PopoverTrigger className="bg-gray-100" asChild>
        <Button
          variant="outline"
          role="combobox"
          disabled={disabled}
          aria-expanded={open}
          className="w-full justify-between bg-background px-3 font-normal"
        >
          <span className={cn("truncate", !value && "text-muted-foreground")}>
            {value
              ? items.find((organization) => organization.value === value)
                  ?.label
              : placeHolderText}
          </span>
          <ChevronDown
            size={16}
            strokeWidth={2}
            className="shrink-0 text-muted-foreground/80"
            aria-hidden="true"
          />
        </Button>
      </PopoverTrigger>
      {!disabled && (
        <PopoverContent
          className="w-full min-w-[var(--radix-popper-anchor-width)] p-0 "
          align="start"
        >
          <Command>
            <CommandInput placeholder={placeHolderText} />
            <CommandList>
              <CommandEmpty>
                {emptyMessage ?? "No organization found."}
              </CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      onValueChange!(currentValue);
                    }}
                  >
                    {item.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              {/* <CommandGroup>
                 <Button variant="ghost" className="w-full justify-start font-normal">
                   <Plus
                     size={16}
                     strokeWidth={2}
                     className="-ms-2 me-2 opacity-60"
                     aria-hidden="true"
                   />
                   New organization
                 </Button>
               </CommandGroup> */}
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
}
