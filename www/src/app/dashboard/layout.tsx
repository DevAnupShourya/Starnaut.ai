import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/custom/sidebar/app-sidebar"

import { Separator } from "@/components/ui/separator";
import ModeToggle from "@/components/custom/theme-toggle";
import BreadcrumbsAsCurrentLocation from "@/components/custom/sidebar/location-breadcrumb";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-sidebar">
          <div className="w-full flex items-center flex-nowrap justify-between px-2">
            <div className="w-full flex flex-nowrap items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="max-md:hidden">
                <BreadcrumbsAsCurrentLocation />
              </div>
              <div className="md:hidden">
                <div className="flex flex-row gap-1 items-center justify-center cursor-none">
                  <Image
                    src={'/Logo.svg'}
                    width={42}
                    height={42}
                    alt="Starnaut.ai Logo"
                  />
                  <span className="font-bold tracking-[-4%] text-2xl group-data-[state=collapsed]:hidden">Starnaut.AI</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4">
              <Separator orientation="vertical" className="mr-2 h-4" />
              <ModeToggle />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>

  );
};