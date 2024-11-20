"use client"

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { filterByCategories } from "@/schemas/index";

export function FilterByCategory() {
    const [open, setOpen] = useState(false);
    const [categoryTerm, setCategoryTerm] = useState("all");

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (categoryTerm) {
            params.set('category', categoryTerm);
        } else {
            params.delete('category');
        }
        replace(`${pathname}?${params.toString()}`);
    }, [categoryTerm])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="min-w-fit justify-between"
                >
                    {categoryTerm
                        ? filterByCategories.find((category) => category.value === categoryTerm)?.label
                        : "Select category..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="min-w-fit p-0">
                <Command>
                    <CommandInput placeholder="Search category..." />
                    <CommandList>
                        <CommandEmpty>No category found.</CommandEmpty>
                        <CommandGroup>
                            {filterByCategories.map((category) => (
                                <CommandItem
                                    key={category.value}
                                    value={category.value}
                                    onSelect={(currentValue) => {
                                        setCategoryTerm(currentValue === categoryTerm ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {category.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            categoryTerm === category.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
