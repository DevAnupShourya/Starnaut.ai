import Link from "next/link";

export default function SignupPage() {
  return (
    <section className='w-screen h-screen grid place-items-center'>
      <div>
        <h1>Clerk Signup Components</h1>
        <br />
        <Link
          className="max-w-min rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/"
        >
          Back
        </Link>
      </div>
    </section>
  );
}
