"use client";

import { Heart, Eye, GripIcon, MessageSquare, CalendarRange, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardBody, CardContainer, CardItem } from "@/components/magicui/3d-card";
import Link from "next/link";
import { Persona } from "@/schemas";

export default function PersonaProfileCard(props: Persona) {
    // todo add loading state also
    async function initiateChatWithPersonaID() {
        console.log('creating chat', props.id);
    }

    return (
        <CardContainer className="inter-var size-full">
            <CardBody className="size-full">
                <CardItem as={Card} className="size-full rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] " translateZ="10">
                    <CardItem as={CardHeader} translateZ="100" className="flex flex-row items-center gap-4">
                        <Avatar className="size-8">
                            <CardItem translateZ="200">
                                <AvatarImage src={props.image} />
                            </CardItem>
                            <AvatarFallback className="rounded-lg">{`${props?.name?.split(' ')[0][0]}${props.name?.split(' ')[1][0]}`}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>
                                {props.name}
                            </CardTitle>
                            <CardDescription>
                                {props.category}
                            </CardDescription>
                        </div>
                    </CardItem>
                    <CardItem translateZ="50" className="w-full">
                        <CardContent>
                            <p className="text-sm capitalize">{props.description}</p>
                        </CardContent>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <Eye className="size-5 mr-2" />
                                    <span className="text-xs font-semibold">
                                        {props.users?.toLocaleString() ?? "n/a"}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    {/* TODO : should have hearted if user has */}
                                    <Heart className="size-5 mr-2" />
                                    <span className="text-xs font-semibold">
                                        {props.likes?.toLocaleString() ?? "n/a"}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </CardItem>
                    <CardItem as={CardHeader} translateZ="80" className="w-full flex flex-row gap-1 pt-0">
                        <CalendarCheck className="size-5 mr-2" />
                        <span className="text-xs font-semibold tracking-tighter">Launched 2 days ago</span>
                    </CardItem>
                    <CardItem translateZ="80" as={CardFooter} className="w-full flex flex-row flex-nowrap max-lg:flex-wrap gap-2">
                        <Button variant='default' className="w-full text-white" onClick={initiateChatWithPersonaID}>
                            <MessageSquare className="size-5 mr-2" />
                            Start Chat
                        </Button>
                        <Button variant='ghost' className="w-full ml-1" asChild>
                            <Link href={`/dashboard/personas/${props.id}`}>
                                <GripIcon className="size-5 mr-2" />
                                More Details
                            </Link>
                        </Button>
                    </CardItem>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
