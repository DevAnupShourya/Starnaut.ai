"use client";

import { Heart, Eye, GripIcon, MessageSquare } from "lucide-react";
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
        <CardContainer className="inter-var w-full">
            <CardBody className="size-fit">
                <CardItem as={Card} className="w-full max-w-md h-fit rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] " translateZ="10">
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
                    <CardItem translateZ="50">
                        <CardContent>
                            <p className="text-xs capitalize">{props.description}</p>
                        </CardContent>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <Eye className="size-5 mr-2" />
                                    {/* use numeral.js  */}
                                    <span className="text-xs font-semibold">{props.users ? props.likes : 0}</span>
                                </div>
                                <div className="flex items-center">
                                    {/* TODO : should have hearted if user has */}
                                    <Heart className="size-5 mr-2" />
                                    {/* use numeral.js  */}
                                    <span className="text-xs font-semibold">{props.likes ? props.likes : 0}</span>
                                </div>
                            </div>
                        </CardContent>
                    </CardItem>
                    <CardItem translateZ="80" as={CardFooter} className="w-full">
                        <Button variant='default' className="w-full text-white" onClick={initiateChatWithPersonaID}>
                            <MessageSquare className="size-5 mr-2" />
                            Start Chat
                        </Button>
                        <Button variant='ghost' className="w-full text-white ml-1" asChild>
                            <Link href={`/dashboard/persona/${props.id}`}>
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
