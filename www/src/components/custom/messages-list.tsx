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
        <ScrollArea className="h-full max-h-screen">
            <ul className='flex flex-col gap-2'>
                {props.messages.map((message) => {
                    return (
                        <div key={`${message.timestamp}`} className={cn(
                            "p-2",
                            message.sender === 'system' ? "flex flex-row flex-nowrap gap-1 bg-muted" : "ml-12"
                        )}>
                            {message.sender === 'system' && (
                                <Avatar className="size-10">
                                    <AvatarImage src={message.sender === 'system' ? "https://ui.shadcn.com/avatars/01.png" : "https://github.com/shadcn.png"} />
                                    {/* <AvatarImage src={message.sender === 'system' ? "https://ui.shadcn.com/avatars/01.png" : "https://github.com/shadcn.png"}  /> */}
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            )}
                            <div className="mx-2">
                                <p className="text-lg">{message.data}</p>
                                <span className="text-xs text-muted-foreground">{message.sender === 'user' && ( <span>By you on</span> )} {new Date(message.timestamp).toLocaleTimeString()}</span>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </ScrollArea>
    );
}
