import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="p-1 max-w-screen-xl mx-auto">
      <nav className="flex justify-between items-center py-5">
        <a href="/">
          <Image
            src={'/logo-min.png'}
            width={64}
            height={64}
            alt="Starnaut.ai Logo"
          />
        </a>
        <ul className="flex justify-between gap-8">
          <li><a href="#features" className="uppercase tracking-widest hover:underline hover:underline-offset-4">Features</a></li>
          <li><a href="#pricing" className="uppercase tracking-widest hover:underline hover:underline-offset-4">Pricing</a></li>
          <li><a href="#faq" className="uppercase tracking-widest hover:underline hover:underline-offset-4">FAQ</a></li>
        </ul>
        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="/signup"
        >
          Signup
        </Link>
      </nav>
      <main className="py-10">
        <div className="max-w-screen-sm mx-auto text-center my-[10%]">
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-snug">AI-Powered Web3 Integration Suite</h1>
          <p className="mb-8 text-sm font-normal ">Harnessing the power of artificial intelligence <br /> to revolutionize industries and enhance human experiences.</p>
          <Link
            className="mx-auto max-w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/login"
          >
            Start Chatting
          </Link>
        </div>
      </main>
      <div id="features" className="py-10">
        <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-snug capitalize">Fully Packed with <br /> Amazing Features</h1>
        <p className="text-center mb-8 text-sm font-normal ">Harnessing the power of artificial intelligence to <br /> revolutionize industries and enhance human experiences.</p>
        <div className="my-5 ring-1">
          features cards
        </div>
        <hr />
        <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-snug capitalize">Function and Form, <br /> Acting Together</h1>
        <p className="text-center mb-8 text-sm font-normal ">Harnessing the power of artificial intelligence to <br /> revolutionize industries and enhance human experiences.</p>
        <div className="my-5 ring-1">
          Benefits cards
        </div>
      </div>
      <div id="pricing" className="py-10 ">
        <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-snug capitalize">Pick your plan</h1>
        <p className="text-center mb-8 text-sm font-normal ">No hidden fees, 100% secure payment, cancel anytime</p>
        <div className="my-5 ring-1">
          Pricing cards
        </div>
      </div>
      <div id="faq" className="py-10 ">
        <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-snug capitalize">We're here to help</h1>
        <p className="text-center mb-8 text-sm font-normal ">Have questions or need assistance? Reach out to our support team for expert guidance and personalized solutions.</p>
        <div className="my-5 ring-1">
          Simple Toggle Accordion
        </div>
      </div>
      <footer className="py-10">
        <hr />
        {/* // TODO : Glowing HR */}
        <div className="mt-20 flex flex-row flex-wrap justify-between items-start gap-5">

          <div className="w-2/5 max-lg:w-full max-lg:text-center">
            <h4 className="text-sm my-4">&copy; 2024 Starnaut.ai LLC</h4>
            <hr className="mb-2" />
            <p>Developed by
              <Link target="_blank" className="ml-2 font-bold tracking-widest hover:underline hover:underline-offset-4" href="https://anup-shourya.vercel.app/">Anup Shourya</Link>
            </p>
            <p>Code Hosted on
              <Link target="_blank" className="ml-2 font-bold tracking-widest hover:underline hover:underline-offset-4" href="https://github.com/DevAnupShourya/Starnaut.ai">Github</Link>
            </p>
          </div>

          <div className="w-1/5 max-lg:w-full max-lg:text-center">
            <h4 className="text-sm my-4">Our Product</h4>
            <hr className="mb-2" />
            <Link className="my-5 font-bold tracking-widest hover:underline hover:underline-offset-4" href="#">Features</Link>
            <br />
            <br />
            <Link className="my-5 font-bold tracking-widest hover:underline hover:underline-offset-4" href="#">Benefits</Link>
            <br />
            <br />
            <Link className="my-5 font-bold tracking-widest hover:underline hover:underline-offset-4" href="#">Pricing</Link>
            <br />
            <br />
            <Link className="my-5 font-bold tracking-widest hover:underline hover:underline-offset-4" href="#">Testimonials</Link>
            <br />
            <br />
          </div>
          <div className="w-1/5 max-lg:w-full max-lg:text-center">
            <h4 className="text-sm my-4">Company</h4>
            <hr className="mb-2" />
            <Link className="my-5 font-bold tracking-widest hover:underline hover:underline-offset-4" href="#">About Us</Link>
            <br />
            <br />
            <Link className="my-5 font-bold tracking-widest hover:underline hover:underline-offset-4" href="#">FAQ</Link>
            <br />
            <br />
            <Link className="my-5 font-bold tracking-widest hover:underline hover:underline-offset-4" href="#">Blog</Link>
            <br />
            <br />
            <Link className="my-5 font-bold tracking-widest hover:underline hover:underline-offset-4" href="#">Contact</Link>
            <br />
            <br />
          </div>

        </div>
      </footer>
    </section>
    // <section className="p-10">
    //   <h1>Home Page</h1>
    //   <br />
    //   <Link
    //     className="max-w-min rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //     href="/login"
    //   >
    //     Login
    //   </Link>
    //   <br />
    //   <Link
    //     className="max-w-min rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //     href="/signup"
    //   >
    //     Signup
    //   </Link>
    // </section>
  );
}
