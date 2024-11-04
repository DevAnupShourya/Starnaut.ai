import Link from "next/link";

import { MagicCard } from "@/components/magicui/magic-card";
import { HoverBorderGradient } from "@/components/magicui/hover-border-gradient";

export default function PricingCards() {
    return (
        <div className="my-5 flex flex-row justify-around items-center">
            {/* Free Card */}
            <MagicCard
                className="w-1/3 px-4 py-6 shadow-2xl"
            >
                <h3 className="text-2xl font-semibold">Free</h3>
                <p className="mt-1 font-light text-sm">For individuals.</p>
                <div className="my-8">
                    <span className="mr-2 text-5xl font-extrabold">$0</span>
                    <span>/month</span>
                </div>
                <ul className="mb-8 space-y-5">
                    {AllFeatures.map((feature, i) => {
                        return (
                            <li key={feature.name} className={clsx(
                                "flex items-center space-x-4",
                                i >= 2 && "opacity-45 cursor-not-allowed",
                            )}>
                                <feature.Icon className="size-6 text-red-500" />
                                <span className="capitalize">{feature.name}</span>
                            </li>

                        )
                    })}
                </ul>
                <HoverBorderGradient
                    containerClassName="rounded-full w-full mt-10"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white w-full"
                >
                    <Link
                        href="/"
                    >
                        Get Started
                    </Link>
                </HoverBorderGradient>

            </MagicCard>
            {/* Paid Card */}
            <MagicCard
                className="w-1/3 px-4 py-6 shadow-2xl"
            >
                <h3 className="text-2xl font-semibold">Ultimate</h3>
                <p className="mt-1 font-light text-sm">For enterprise</p>
                <div className="my-8">
                    <span className="mr-2 text-5xl font-extrabold">$55</span>
                    <span className="">/month</span>
                </div>
                <ul role="list" className="mb-8 space-y-5">
                    {AllFeatures.map((feature) => {
                        return (
                            <li key={feature.name} className="flex items-center space-x-4">
                                <feature.Icon className="size-6 text-red-500" />
                                <span className="capitalize">{feature.name}</span>
                            </li>

                        )
                    })}
                </ul>
                <HoverBorderGradient
                    containerClassName="rounded-full w-full mt-10"
                    as="button"
                    className="dark:text-black dark:bg-white text-white bg-black  w-full"
                >
                    <Link
                        href="#"
                    >
                        Get Started
                    </Link>
                </HoverBorderGradient>

            </MagicCard>
        </div>
    );
}

import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import clsx from "clsx";

// TODO : Update Info
const AllFeatures = [
    {
        Icon: FileTextIcon,
        name: "Save your files"
    },
    {
        Icon: InputIcon,
        name: "Full text search"
    },
    {
        Icon: GlobeIcon,
        name: "Multilingual"
    },
    {
        Icon: CalendarIcon,
        name: "Calendar"
    },
    {
        Icon: BellIcon,
        name: "Notifications"
    },
];