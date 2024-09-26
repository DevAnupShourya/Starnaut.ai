import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <section className="p-10">
      <h1>Dashboard Layout</h1>
      <br />
      <Link
        className="mx-2 float-right max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className="mx-2 float-right max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="/dashboard/new"
      >
        Create Persona
      </Link>
      <Link
        className="mx-2 float-right max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="/dashboard/chats"
      >
        Chats
      </Link>
      <Link
        className="mx-2 float-right max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="/dashboard/settings"
      >
        Settings
      </Link>

      {children}
    </section>
  );
}
