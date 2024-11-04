import { ScrollArea } from "@/components/ui/scroll-area";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ChatsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section id="chats-layout" className="w-full h-full">
            <ResizablePanelGroup direction="horizontal" className="items-">
                <ResizablePanel defaultSize={20} minSize={30} className="max-h-fit">
                    <Tabs defaultValue="all">
                        <div className="flex items-center px-4 py-2">
                            <h1 className="text-xl font-bold">Inbox</h1>
                            <TabsList className="ml-auto">
                                <TabsTrigger
                                    value="all"
                                    className="text-zinc-600 dark:text-zinc-200"
                                >
                                    All
                                </TabsTrigger>
                                <TabsTrigger
                                    value="unread"
                                    className="text-zinc-600 dark:text-zinc-200"
                                >
                                    Unread
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <Separator />
                        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search" className="pl-8" />
                                </div>
                            </form>
                        </div>
                        <ScrollArea>
                            <TabsContent value="all" className="m-0 h-full max-h-dvh">
                                <div className="flex flex-col gap-2 p-4 pt-0">
                                    {/* Read Chat List */}
                                    {[1,2,3,4,5,6,7,8,9].map((idx) => {
                                        return (
                                            <Link
                                                key={idx}
                                                className={cn(
                                                    "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                                                    // mail.selected === item.id && "bg-muted"
                                                )}
                                                href={`/dashboard/chats/${idx}`}
                                            >
                                                <div className="flex w-full flex-col gap-1">
                                                    <div className="flex items-center">
                                                        <div className="flex items-center gap-2">
                                                            <div className="font-semibold">William Smith</div>
                                                            {/* {!item.read && (<span className="flex h-2 w-2 rounded-full bg-blue-600" />)} */}
                                                        </div>
                                                        <div
                                                            className={cn(
                                                                "ml-auto text-xs",
                                                                // mail.selected === item.id
                                                                //     ? "text-foreground"
                                                                //     : "text-muted-foreground"
                                                            )}
                                                        >
                                                            {/* {formatDistanceToNow(new Date(item.date), {addSuffix: true,})} */}
                                                            over {idx}  mins ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="line-clamp-2 text-xs text-muted-foreground">
                                                    {/* {item.text.substring(0, 300)} */}
                                                    Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </TabsContent>
                            <TabsContent value="unread" className="m-0">
                                <div className="flex flex-col gap-2 p-4 pt-0">
                                    {/* Unread Chat List */}
                                    {[1].map((idx) => {
                                        return (
                                            <Link
                                                key={idx}
                                                className={cn(
                                                    "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                                                    // mail.selected === item.id && "bg-muted"
                                                )}
                                                href="/dashboard/chats/12345"
                                            >
                                                <div className="flex w-full flex-col gap-1">
                                                    <div className="flex items-center">
                                                        <div className="flex items-center gap-2">
                                                            <div className="font-semibold">Alice Smith</div>
                                                            {true && (
                                                                <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                                                            )}
                                                        </div>
                                                        <div
                                                            className={cn(
                                                                "ml-auto text-xs",
                                                                // mail.selected === item.id
                                                                //     ? "text-foreground"
                                                                //     : "text-muted-foreground"
                                                            )}
                                                        >
                                                            {/* {formatDistanceToNow(new Date(item.date), {addSuffix: true,})} */}
                                                            12 months ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="line-clamp-2 text-xs text-muted-foreground">
                                                    {/* {item.text.substring(0, 300)} */}
                                                    Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </TabsContent>
                        </ScrollArea>
                    </Tabs>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}  minSize={50} className="">{children}</ResizablePanel>
            </ResizablePanelGroup>
        </section >
    );
};