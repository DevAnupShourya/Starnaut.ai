import PersonaSettingsForm from "@/components/custom/forms/persona-settings";
import { Separator } from "@/components/ui/separator";

export default function PersonaSettingsPage() {
    return (
        <div className="w-full h-full space-y-6">
            <div>
                <h3 className="text-lg font-medium">Personas</h3>
                <p className="text-sm text-muted-foreground">
                    Customize Personas and edit them here.
                </p>
            </div>
            <Separator />
            <PersonaSettingsForm />
        </div>
    );
}
