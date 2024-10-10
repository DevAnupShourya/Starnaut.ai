
import { CalendarDays, Settings2, Trash2 } from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle
} from "@/components/ui/card"
import Link from "next/link";

export default function PersonaSettingsForm() {
    return (
        <section className='flex flex-col gap-2'>
            {Data.map((persona) => {
                return (
                    <Card key={persona.name} className="max-w-screen-sm">
                        <CardContent className="pt-6">
                            <div className="w-full flex justify-between space-x-4 max-w-screen-sm">
                                <div className="flex justify-between space-x-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/vercel.png" />
                                        <AvatarFallback>VC</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1">
                                        <CardTitle>{persona.name}</CardTitle>
                                        <CardDescription>
                                            {persona.about}
                                        </CardDescription>
                                        <div className="flex items-center pt-2">
                                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                            <span className="text-xs text-muted-foreground">
                                                Created {persona.dob}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <TooltipProvider>
                                        <div className="ml-auto flex items-center gap-2">
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="destructive" size="icon" disabled={false}>
                                                        <Trash2 className="h-4 w-4" />
                                                        <span className="sr-only">Delete Persona</span>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>Delete Persona</TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="secondary" size="icon" disabled={false} asChild>
                                                        <Link href='/dashboard/'>
                                                            <Settings2 className="h-4 w-4" />
                                                            <span className="sr-only">Edit Persona</span>
                                                        </Link>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>Edit Persona</TooltipContent>
                                            </Tooltip>
                                        </div>
                                    </TooltipProvider>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </section>
    );
}

const Data = [
    {
        name: 'Elon Musk',
        about: 'CEO of Tesla and SpaceX',
        dob: 'June 28, 1971'
    },
    {
        name: 'Bill Gates',
        about: 'Co-founder of Microsoft and philanthropist',
        dob: 'October 28, 1955'
    },
    {
        name: 'Sundar Pichai',
        about: 'CEO of Alphabet Inc. and Google',
        dob: 'June 10, 1972'
    },
    {
        name: 'Sheryl Sandberg',
        about: 'Former COO of Facebook and author',
        dob: 'August 28, 1969'
    },
    {
        name: 'Tim Cook',
        about: 'CEO of Apple Inc.',
        dob: 'November 1, 1960'
    },
    {
        name: 'Satya Nadella',
        about: 'CEO of Microsoft',
        dob: 'August 19, 1967'
    },
    {
        name: 'Oprah Winfrey',
        about: 'Media executive and philanthropist',
        dob: 'January 29, 1954'
    },
    {
        name: 'Jeff Bezos',
        about: 'Founder of Amazon',
        dob: 'January 12, 1964'
    },
    {
        name: 'Mark Zuckerberg',
        about: 'Co-founder and CEO of Facebook',
        dob: 'May 14, 1984'
    },
    {
        name: 'Angela Merkel',
        about: 'Former Chancellor of Germany',
        dob: 'July 8, 1954'
    }
];
