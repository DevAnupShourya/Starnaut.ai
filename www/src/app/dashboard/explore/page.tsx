import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ShimmerButton from "@/components/magicui/shimmer-button";
import BlurFade from "@/components/magicui/blur-fade";

import { ListFilter, Search } from "lucide-react";

import Link from "next/link";
import PersonaProfileCard from "@/components/custom/persona-profile";
import { PersonaList } from "@/data/data";

export default function ExplorePage() {
  return (
    <section className="py-2 max-sm:py-1 max-w-screen-lg mx-auto">
      {/* <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">
        Explore
      </h2> */}
      <div id="header" className="w-full flex gap-4 items-center justify-between">
        <div className="relative md:grow-0 w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Personas..."
            className="w-full rounded-lg bg-background pl-8"
          />
        </div>

        <div className="flex items-center gap-2 max-sm:gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Archived
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/dashboard/new" className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm">
            <ShimmerButton role="button" shimmerDuration="2s" className="shadow-2xl mx-auto group">
              <div className="flex flex-row flex-nowrap gap-2 justify-between items-center">
                <svg className="size-4 ease-in-out transform transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                <span className="max-md:hidden ease-in-out transform transition-transform duration-300 group-hover:scale-95">Create Persona</span>
              </div>
            </ShimmerButton>
          </Link>
        </div>
      </div>
      <main className="flex flex-row flex-wrap justify-around gap-2 max-sm:gap-1 my-2">
        {PersonaList.map((persona, idx) => {
          return (
            <BlurFade key={persona.image} delay={0.25 + idx * 0.05} inView>
              <PersonaProfileCard {...persona} />
            </BlurFade>
          )
        })}
      </main>
    </section>
  );
}
