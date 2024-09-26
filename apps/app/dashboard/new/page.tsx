import Link from "next/link";

export default function CreatePersonaPage() {
  return (
    <section className="p-10">
      <h1>Create Persona Page</h1>
      <br />
      <br />
      <p>
        some forms
      </p>
      <br />
      <br />
      <br />
      <Link
        className="max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="/dashboard/new"
      >
        Start Chat
      </Link>

    </section>
  );
}
