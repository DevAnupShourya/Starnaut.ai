import Image from "next/image";
import Link from "next/link";

import { FadeText } from "@/components/magicui/fade-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { HoverBorderGradient } from "@/components/magicui/hover-border-gradient";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import PricingCards from "@/components/custom/pricing-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';

export default async function Home() {
  const authData = await currentUser();

  if (authData?.id) {
    // ? Redirect if the user is logged in
    redirect('/dashboard');
  }

  return (
    <section className="p-1 max-w-screen-xl mx-auto">
      <nav className="flex justify-between items-center py-5">
        <a href="/">
          <Image
            src={'/Logo.svg'}
            width={64}
            height={64}
            alt="Starnaut.ai Logo"
          />
        </a>
        <ul className="flex justify-between gap-8">
          <li key="#features"><a href="#features" className="uppercase tracking-widest hover:underline hover:underline-offset-4">Features</a></li>
          <li key="#pricing"><a href="#pricing" className="uppercase tracking-widest hover:underline hover:underline-offset-4">Pricing</a></li>
          <li key="#faq"><a href="#faq" className="uppercase tracking-widest hover:underline hover:underline-offset-4">FAQ</a></li>
        </ul>
        <Link
          href="/signup"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white"
          >
            Signup
          </HoverBorderGradient>
        </Link>
      </nav>
      <main className="py-10 my-[5%]">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-snug">
            <FadeText text="Starnaut.AI" direction="down" framerProps={{
              show: { transition: { delay: 0.1 } },
            }} />
            <FadeText text="AI-Powered Web3" direction="down" framerProps={{
              show: { transition: { delay: 0.2 } },
            }} />
            <FadeText text="Integration Suite" direction="down" framerProps={{
              show: { transition: { delay: 0.5 } },
            }} />
          </h1>
          <FadeText className="block mb-8 text-sm font-normal" text="Harnessing the power of artificial intelligence to revolutionize industries and enhance human experiences." direction="down" framerProps={{
            show: { transition: { delay: 0.8 } },
          }} />
          <Link
            href="/login"
          >
            <RainbowButton>
              Start Chatting
            </RainbowButton>
          </Link>
        </div>
        <div className="relative max-w-screen-lg mx-auto mt-8 px-5">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </main>
      <div id="features" className="py-10  my-[5%]">
        <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-snug capitalize">Fully Packed with <br /> Amazing Features</h1>
        <p className="text-center mb-8 text-sm font-normal ">Harnessing the power of artificial intelligence to <br /> revolutionize industries and enhance human experiences.</p>
        <div className="my-5">
          <BentoGrid className="lg:grid-rows-3">
            {LandingPageFeatures.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
      <div id="pricing" className="py-10  my-[5%] ">
        <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-snug capitalize">Pick your plan</h1>
        <p className="text-center mb-8 text-sm font-normal ">No hidden fees, 100% secure payment, cancel anytime</p>
        <PricingCards />
      </div>
      <div id="faq" className="py-10  my-[5%] ">
        <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-snug capitalize">We're here to help</h1>
        <p className="text-center mb-8 text-sm font-normal ">Have questions or need assistance? <br /> Reach out to our support team for expert guidance and personalized solutions.</p>
        <div className="my-5">
          <Accordion type="single" collapsible className="max-w-screen-sm mx-auto">
            {FAQs.map((faq, i) => {
              return (
                <AccordionItem value={`faq-${i}`} key={`faq-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}
                  </AccordionContent>
                </AccordionItem>
              )
            })}

          </Accordion>
        </div>
      </div>
      <footer className="py-10  my-[5%]">
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

  );
}

// TODO : Update FAQS
const FAQs = [
  {
    q: 'Is it accessible?',
    a: 'Yes. It adheres to the WAI-ARIA design pattern.'
  },
  {
    q: 'Is it styled?',
    a: '  Yes. It comes with default styles that matches the other components\' aesthetic.'
  },
  {
    q: 'Is it animated?',
    a: 'Yes. It\'s animated by default, but you can disable it if you prefer.'
  },
]

// TODO : Update Info
const LandingPageFeatures = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];