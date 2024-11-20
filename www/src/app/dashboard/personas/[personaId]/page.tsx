import { format } from "date-fns";

import { HeartIcon, UserIcon } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getPersonaByIdDB } from "@/server/database/personaQueries";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function PersonaDetailsByIdPage({
    params,
}: {
    params: Promise<{ personaId: string }>
}) {
    const pId = (await params).personaId;
    const personaDetails = await getPersonaByIdDB(pId);

    if (!personaDetails) {
        notFound()
    }

    return (
        <section className="container mx-auto my-4 w-full">
            <div className="grid gap-8 md:grid-cols-3">
                <main className="md:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="flex items-center space-x-4">
                        <Avatar className="size-20">
                            <AvatarImage src={personaDetails?.image} />
                            <AvatarFallback className="rounded-lg">{`${personaDetails?.name.split(' ')[0][0]}${personaDetails?.name.split(' ')[1][0]}`}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-3xl font-bold">{personaDetails?.name}</h1>
                            <Badge className="mt-2">{personaDetails?.category}</Badge>
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <div>
                        <h2 className="text-xl font-semibold mb-2">About</h2>
                        <p className="text-muted-foreground">{personaDetails?.description}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                        <p className="text-muted-foreground">{personaDetails?.instructions}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Example Conversation</h2>
                        <pre className="bg-muted p-4 rounded-lg whitespace-pre-wrap text-sm">{personaDetails?.exampleConversation}</pre>
                    </div>
                    <div>
                        <p className="text-sm">
                            Launched:
                            <span className="text-muted-foreground ml-1">
                                {format(personaDetails?.createdAt!, "PPP")}
                            </span>
                        </p>
                        <p className="text-sm">
                            Last updated:
                            <span className="text-muted-foreground ml-1">
                                {format(personaDetails?.updatedAt!, "PPP")}
                            </span>
                        </p>
                    </div>
                </main>

                <aside className="space-y-10">
                    <Card>
                        <CardHeader>
                            <CardTitle>Statistics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <HeartIcon className="mr-2 h-4 w-4 text-red-500" />
                                    <span>Likes</span>
                                </div>
                                <span className="font-semibold">{personaDetails?.likes?.toLocaleString() ?? "N/A"}</span>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <UserIcon className="mr-2 h-4 w-4 text-blue-500" />
                                    <span>Users</span>
                                </div>
                                <span className="font-semibold">{personaDetails?.users?.toLocaleString() ?? "N/A"}</span>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        {/* todo only show if user has created this persona */}
                        <Button className="w-full" asChild>
                            {/* TODO change it as needed */}
                            <Link href={`/dashboard/persona/edit/${personaDetails.id}`}>
                                Edit Persona
                            </Link>
                        </Button>
                        <Button variant="outline" className="w-full">Share Persona</Button>
                        {/* TODO change it as needed */}
                        <Button variant="destructive" className="w-full">Delete Persona</Button>
                    </div>
                </aside>
            </div>
        </section>
    );
};