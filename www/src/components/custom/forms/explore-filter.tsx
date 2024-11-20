"use client";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Link from "next/link";

import { useDebouncedCallback } from 'use-debounce';

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { FilterByCategory } from "@/components/custom/filter-by-type-btn";

export default function ExploreFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(searchTerm: string) {
        const params = new URLSearchParams(searchParams);
        if (searchTerm) {
            params.set('search', searchTerm);
        } else {
            params.delete('search');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    const searchCallback = useDebouncedCallback(handleSearch, 1000);

    return (
        <div id="header" className="w-full flex gap-4 items-center justify-between">
            <div className="relative md:grow-0 w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search Personas..."
                    defaultValue={searchParams.get('search')?.toString()}
                    onChange={(e) => searchCallback(e.target.value)}
                    className="w-full rounded-lg bg-background pl-8"
                />
            </div>

            <div className="flex items-center gap-2 max-sm:gap-1">
                <FilterByCategory />
                <Link href="/dashboard/new" className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm">
                    <ShimmerButton role="button" shimmerDuration="2s" className="shadow-2xl mx-auto group">
                        <div className="flex flex-row flex-nowrap gap-2 justify-between items-center">
                            <svg className="size-4 ease-in-out transform transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                            <span className="max-md:hidden ease-in-out transform transition-transform duration-300 group-hover:scale-95">Create Persona</span>
                        </div>
                    </ShimmerButton>
                </Link>
            </div>
        </div>
    );
}
