import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PersonaPage() {
    return (
        <div className="size-full min-h-full grid place-items-center">
            <div>
                <p className="text-xs text-muted-foreground mb-4">Explore Personas</p>
                <Button asChild variant='ghost' size='sm' className="w-full">
                    <Link href='/dashboard/explore'>
                        Explore
                    </Link>
                </Button>
            </div>
        </div>
    );
}
