"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";

import { cn } from "@/lib/utils";
import Image from "next/image";

type ChatBoxProps = {
    name: string;
    last_chat: string;
    last_message: string;
    avatar: string;
    chat_link: string;
}

export default function ChatBox(props: ChatBoxProps) {
    const { theme } = useTheme();
    return (
        <Link href={props.chat_link} className="w-full max-md:w-full rounded-xl m-1">
            <MagicCard
                className={cn(
                    "w-full rounded-xl border p-4",
                )}
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                <div className="flex flex-row items-center gap-2">
                    <Image className="rounded-full" width="32" height="32" alt="" src={props.avatar} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                            {props.name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">{props.last_chat}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm">{props.last_message}</blockquote>
            </MagicCard>
        </Link>
    );
}
