import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/custom/sidebar-nav";

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/dashboard/settings",
    },
    {
        title: "Persona",
        href: "/dashboard/settings/persona",
    },
];

export default function SettingsLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <section className="space-y-6 p-5 pb-16 md:block max-md:p-0">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and set persona's preferences.
                </p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-4 lg:w-1/5 max-md:mx-0">
                    <SidebarNav items={sidebarNavItems} />
                </aside>
                <div className="flex-1">{children}</div>
            </div>
        </section>
    )
}