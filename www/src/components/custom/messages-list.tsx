import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type MessagesListContainerProps = {
    messages: {
        timestamp: Date;
        sender: 'user' | 'system';
        data: string;
    }[];
};

export default function MessagesListContainer(props: MessagesListContainerProps) {
    return (
        <ScrollArea className="h-full max-h-screen p-2">
            <ul className='flex flex-col gap-6'>
                {props.messages.map((message) => {
                    return (
                        <div key={`${message.timestamp}`} className={"max-w-[95%] md:max-w-[75%] lg:max-w-[55%] px-1 flex flex-row flex-nowrap items-end gap-1"}>
                            <Avatar className="size-8">
                                <AvatarImage src={message.sender === 'system' ? "https://ui.shadcn.com/avatars/01.png" : "https://github.com/shadcn.png"} />
                                {/* TODO : senders name as fallback */}
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className={cn(
                                "mx-2 p-2 rounded-md",
                                message.sender === 'user' && "shadow-xl",
                                message.sender === 'system' && "bg-muted"
                            )}>
                                <p className="">{message.data}</p>
                                <p className="mt-2 text-xs text-muted-foreground text-end">
                                    {new Date(message.timestamp).toLocaleTimeString()}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </ScrollArea>
    );
}
