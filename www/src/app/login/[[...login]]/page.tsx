import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <>
      <div className="p-10">
        <Button
          asChild
          size='icon'
          variant='secondary'
        >
          <Link href='/'>
            <ChevronLeft />
          </Link>
        </Button>
      </div>
      <section className='w-full h-full grid place-items-center '>
        <div>
          <SignIn />
        </div>
      </section>
    </>
  );
}
