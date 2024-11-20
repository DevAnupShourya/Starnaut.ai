import { Suspense } from "react";

import BlurFade from "@/components/magicui/blur-fade";

import PersonaProfileCard from "@/components/custom/persona-profile";
import Loader from "@/components/custom/loader";
import ExploreFilter from "@/components/custom/forms/explore-filter";

import { getAllPersonasWithParamsDB } from "@/server/database/personaQueries";
import { Persona } from "@/schemas";
import { SearchXIcon } from "lucide-react";

export default async function ExplorePage(props: { searchParams?: Promise<{ search?: string; category?: string; }>; }) {
  const searchParams = await props.searchParams;
  const searchQuery = searchParams?.search || '';
  const categoryQuery = searchParams?.category || '';

  const Personas: Persona[] = await getAllPersonasWithParamsDB({ name: searchQuery, category: categoryQuery });

  return (
    <section className="py-2 max-sm:py-1 max-w-screen-lg min-w-full mx-auto">
      <ExploreFilter />
      {Personas.length < 1 && (
        <div className="size-full min-h-96 grid place-items-center">
          <div>
            <SearchXIcon className="animate-pulse mx-auto text-muted-foreground" />
            <p className="text-xs text-muted-foreground my-4">No results found.</p>
          </div>
        </div>
      )}
      {/* TODO make it in grid format not looking good */}
      <main className="flex flex-wrap">
        <Suspense fallback={<Loader />}>
          {Personas.map((persona, idx) => {
            return (
              <BlurFade key={persona.id} delay={0.25 + idx * 0.05} inView className="size-full sm:w-1/2 lg:w-1/3 p-2">
                <PersonaProfileCard {...persona} />
              </BlurFade>
            )
          })}
        </Suspense>
      </main>
    </section>
  );
}
