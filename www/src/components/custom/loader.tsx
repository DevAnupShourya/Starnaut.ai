import { Loader2 } from "lucide-react";

export default function Loader() {
    return (
        <div className="size-full min-h-96 grid place-items-center cursor-wait">
            <div>
                <Loader2 className="animate-spin m-4 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Loading...</p>
            </div>
        </div>
    );
}
