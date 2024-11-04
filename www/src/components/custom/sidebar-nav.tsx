"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
    }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const pathname = usePathname();
    
    return (
        <ScrollArea>
            <nav
                className={cn(
                    "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 max-md:py-4",
                    className
                )}
                {...props}
            >
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            pathname === item.href
                                ? "bg-muted hover:bg-muted"
                                : "hover:bg-transparent hover:underline",
                            "justify-start"
                        )}
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
            <ScrollBar orientation="horizontal" className="md:hidden" />
        </ScrollArea>
    )
}