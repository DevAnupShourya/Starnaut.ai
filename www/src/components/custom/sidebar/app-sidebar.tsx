"use client";

import { NavUser } from "@/components/custom/sidebar/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <div className="flex flex-row gap-1 items-center justify-center cursor-none">
                    <Image
                        src={'/Logo.svg'}
                        width={42}
                        height={42}
                        alt="Starnaut.ai Logo"
                    />
                    <span className="font-bold tracking-[-4%] text-2xl group-data-[state=collapsed]:hidden">Starnaut.AI</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {NavbarLinks.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild tooltip={item.label}>
                                        <Link href={item.href}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
};


export type IconProps = React.HTMLAttributes<SVGElement>;
const ICONS_SVG = {
    chats: (props: IconProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg>
    ),
    dashboard: (props: IconProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" /><path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" /></svg>
    ),
    new_chat: (props: IconProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
    ),
    explore: (props: IconProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M17 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.346 9.17l-.729 -1.261c-.16 -.248 -1.056 -.203 -1.117 .091l-.177 1.38" /><path d="M19.761 14.813l-2.84 -5.133c-.189 -.31 -.592 -.68 -1.421 -.68c-.828 0 -1.5 .448 -1.5 1v6" /><path d="M7.654 9.17l.729 -1.261c.16 -.249 1.056 -.203 1.117 .091l.177 1.38" /><path d="M4.239 14.813l2.84 -5.133c.189 -.31 .592 -.68 1.421 -.68c.828 0 1.5 .448 1.5 1v6" /><rect width="4" height="2" x="10" y="12" /></svg>
    ),
    settings: (props: IconProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>
    ),
};

const NavbarLinks = [
    { href: "/dashboard", icon: ICONS_SVG.dashboard, label: "Home" },
    { href: "/dashboard/new", icon: ICONS_SVG.new_chat, label: "New Persona" },
    { href: "/dashboard/chats", icon: ICONS_SVG.chats, label: "Chats" },
    { href: "/dashboard/explore", icon: ICONS_SVG.explore, label: "Explore Persona" },
    { href: "/dashboard/settings", icon: ICONS_SVG.settings, label: "Settings" },
];
