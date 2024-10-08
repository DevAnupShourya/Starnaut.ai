import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardNavbar from "@/components/sections/dashboard-navbar";

import { UserButton } from '@clerk/nextjs'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section id="user-dashboard" className="w-screen h-screen grid grid-rows-[auto,1fr,auto] px-4 max-w-screen-xl mx-auto">
        <div id="topbar" className="flex flex-row flex-nowrap justify-between items-center py-2">
          <a href="/dashboard">
            <Image
              src={'/Logo.svg'}
              width={42}
              height={42}
              alt="Starnaut.ai Logo"
            />
          </a>

          <UserButton />
        </div>
        <ScrollArea id="dashboard">
          {children}
        </ScrollArea>
        <div id="navbar" className="pb-1">
          <DashboardNavbar />
        </div>
      </section>
  );
};