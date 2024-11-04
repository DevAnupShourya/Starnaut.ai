import {
    MoreVertical,
    Star,
    Trash2,
} from "lucide-react"

import {
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";
import MessagesListContainer from "@/components/custom/messages-list";

export default async function ChattingPage({ params }: { params: { chatId: string } }) {
    const { chatId } = await params;

    return (
        <>
            {/* TODO : Chat exists Check */}
            {true ? (
                <div className="flex h-full flex-col">
                    <div id="chat_header" className="flex items-center p-2 max-sm:p-1">
                        <TooltipProvider>
                            <div className="flex items-start gap-4 text-sm">
                                <Avatar>
                                    <AvatarImage src='https://ui.shadcn.com/avatars/01.png' />
                                    <AvatarFallback>
                                        Elon Musk
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <div className="font-semibold">Elon Musk</div>
                                    <div className="line-clamp-1 text-xs">{chatId}</div>
                                </div>
                            </div>
                            <div className="ml-auto flex items-center gap-2">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" disabled={false}>
                                            <Trash2 className="h-4 w-4" />
                                            <span className="sr-only">Move to trash</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Move to trash</TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" disabled={false}>
                                            <Star className="h-4 w-4" />
                                            <span className="sr-only">Star</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Star this chat</TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                        <Separator orientation="vertical" className="mx-2 h-6" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" disabled={false}>
                                    <MoreVertical className="h-4 w-4" />
                                    <span className="sr-only">More</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                                <DropdownMenuItem>Add label</DropdownMenuItem>
                                <DropdownMenuItem>Mute thread</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Separator />
                    <div id="chat_contents" className="flex flex-1 flex-col">
                        <div id="chat_message" className="flex-1 whitespace-pre-wrap p-4 text-sm">
                            <MessagesListContainer messages={messages} />
                        </div>
                        <Separator className="mt-auto" />
                        <div id="chat_form" className="p-4 max-sm:p-1">
                            <form>
                                <div className="grid gap-4 max-sm:gap-1">
                                    <Textarea
                                        className="p-4"
                                        placeholder={`Your messages goes here`}
                                    />
                                    <div className="flex items-center">
                                        <Label
                                            htmlFor="mute"
                                            className="flex items-center gap-2 text-xs font-normal"
                                        >
                                            <Switch id="mute" aria-label="Mute thread" /> Mute this chat
                                        </Label>
                                        <Button
                                            // onClick={(e) => e.preventDefault()}
                                            size="sm"
                                            className="ml-auto"
                                        >
                                            Send
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <section className="py-2 max-sm:py-1 max-w-screen-lg mx-auto h-full grid place-items-center">
                    <div>
                        <p className="text-sm text-muted-foreground text-center">
                            No Chat Found.
                        </p>
                    </div>
                </section>
            )}
        </>
    );
}

type MessagesListContainerProps = {
    timestamp: Date;
    sender: 'user' | 'system';
    data: string;
}[];


const messages: MessagesListContainerProps = [
    { timestamp: new Date('2024-10-08T09:00:00Z'), sender: 'user', data: "Hi there! What can you do for me today?" },
    { timestamp: new Date('2024-10-08T09:00:05Z'), sender: 'system', data: "Hello! I can assist you with a wide range of tasks, such as providing information, setting reminders, or just chatting. What would you like to start with?" },
    { timestamp: new Date('2024-10-08T09:00:15Z'), sender: 'user', data: "I’m curious about the weather forecast for today and tomorrow." },
    { timestamp: new Date('2024-10-08T09:00:20Z'), sender: 'system', data: "Of course! Please provide me with your location." },
    { timestamp: new Date('2024-10-08T09:00:30Z'), sender: 'user', data: "I’m in New York City." },
    { timestamp: new Date('2024-10-08T09:00:35Z'), sender: 'system', data: "Today in New York City, expect sunny skies with a high of 75°F. Tomorrow, there will be some clouds with a high of 70°F." },
    { timestamp: new Date('2024-10-08T09:00:45Z'), sender: 'user', data: "Great! Any chance of rain?" },
    { timestamp: new Date('2024-10-08T09:00:50Z'), sender: 'system', data: "No rain is expected today or tomorrow, so it’s a perfect time to be outdoors!" },
    { timestamp: new Date('2024-10-08T09:01:00Z'), sender: 'user', data: "Perfect! Can you remind me to water my plants later today?" },
    { timestamp: new Date('2024-10-08T09:01:05Z'), sender: 'system', data: "When would you like me to remind you?" },
    { timestamp: new Date('2024-10-08T09:01:10Z'), sender: 'user', data: "Let’s say at 4 PM." },
    { timestamp: new Date('2024-10-08T09:01:15Z'), sender: 'system', data: "Got it! I’ll remind you to water your plants at 4 PM." },
    { timestamp: new Date('2024-10-08T09:01:25Z'), sender: 'user', data: "Awesome! Also, can you set a timer for 10 minutes?" },
    { timestamp: new Date('2024-10-08T09:01:30Z'), sender: 'system', data: "Sure! Starting a 10-minute timer now." },
    { timestamp: new Date('2024-10-08T09:01:35Z'), sender: 'user', data: "What time is it right now?" },
    { timestamp: new Date('2024-10-08T09:01:40Z'), sender: 'system', data: "It’s currently 9:01 AM." },
    { timestamp: new Date('2024-10-08T09:01:50Z'), sender: 'user', data: "Thanks! What’s the latest news?" },
    { timestamp: new Date('2024-10-08T09:01:55Z'), sender: 'system', data: "Here are the top headlines: 1) New tech innovation boosts renewable energy. 2) Major city wins award for public transportation. 3) Local sports team secures championship title." },
    { timestamp: new Date('2024-10-08T09:02:05Z'), sender: 'user', data: "Can you summarize the first headline?" },
    { timestamp: new Date('2024-10-08T09:02:10Z'), sender: 'system', data: "Certainly! The first headline discusses a new technology that significantly increases the efficiency of solar panels, making renewable energy more accessible." },
    { timestamp: new Date('2024-10-08T09:02:20Z'), sender: 'user', data: "That sounds interesting! What about the sports team?" },
    { timestamp: new Date('2024-10-08T09:02:25Z'), sender: 'system', data: "The local sports team just won the championship title, marking their first win in over a decade! Fans are celebrating throughout the city." },
    { timestamp: new Date('2024-10-08T09:02:35Z'), sender: 'user', data: "Wow, that’s exciting! I love sports. Can you tell me what events are happening in the city this weekend?" },
    { timestamp: new Date('2024-10-08T09:02:40Z'), sender: 'system', data: "Sure! This weekend, there’s a street fair, a concert in the park, and a local marathon. Would you like more details on any of these events?" },
    { timestamp: new Date('2024-10-08T09:02:50Z'), sender: 'user', data: "Yes, please tell me more about the concert." },
    { timestamp: new Date('2024-10-08T09:02:55Z'), sender: 'system', data: "The concert will feature local bands and starts at 6 PM on Saturday at Central Park. It's free to attend!" },
    { timestamp: new Date('2024-10-08T09:03:05Z'), sender: 'user', data: "Sounds fun! I might check it out. Can you remind me about it as well?" },
    { timestamp: new Date('2024-10-08T09:03:10Z'), sender: 'system', data: "Sure! What time would you like the reminder?" },
    { timestamp: new Date('2024-10-08T09:03:15Z'), sender: 'user', data: "How about 5 PM on Saturday?" },
    { timestamp: new Date('2024-10-08T09:03:20Z'), sender: 'system', data: "Done! I’ll remind you about the concert at 5 PM on Saturday." },
    { timestamp: new Date('2024-10-08T09:03:30Z'), sender: 'user', data: "Thank you! You’ve been really helpful today." },
    { timestamp: new Date('2024-10-08T09:03:35Z'), sender: 'system', data: "You’re welcome! I'm here to help anytime. Is there anything else you need?" },
    { timestamp: new Date('2024-10-08T09:03:40Z'), sender: 'user', data: "Not right now. Have a great day!" },
    { timestamp: new Date('2024-10-08T09:03:45Z'), sender: 'system', data: "Thank you! You too! Don’t hesitate to reach out if you need anything." }
];
