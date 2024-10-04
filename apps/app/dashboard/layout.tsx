import { ScrollArea } from "@/components/ui/scroll-area";

import DashboardNavbar from "@/components/sections/dashboard-navbar";
import Image from "next/image";

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

        <Image
          src={'https://avatars.githubusercontent.com/u/124599'}
          width={42}
          height={42}
          alt="Starnaut.ai Logo"
          className="rounded-full"
        />

      </div>
      <ScrollArea id="dashboard" className="ring-1">
        {children}
      </ScrollArea>
      <div id="navbar" className="pb-1">
        <DashboardNavbar />
      </div>
    </section>
  );
}


// <section className="p-10">
//   <h1>Dashboard Layout</h1>
//   <br />
//   <Link
//     className="mx-2 float-right max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//     href="/dashboard"
//   >
//     Dashboard
//   </Link>
//   <Link
//     className="mx-2 float-right max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//     href="/dashboard/new"
//   >
//     Create Persona
//   </Link>
//   <Link
//     className="mx-2 float-right max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//     href="/dashboard/chats"
//   >
//     Chats
//   </Link>
//   <Link
//     className="mx-2 float-right max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//     href="/dashboard/settings"
//   >
//     Settings
//   </Link>
//   <Link
//     className="mx-2 float-right max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//     href="/dashboard"
//   >
//     Theme
//   </Link>

//   {children}
// </section>