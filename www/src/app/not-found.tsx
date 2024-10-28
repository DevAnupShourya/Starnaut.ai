"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bot, Home, MoveLeft } from "lucide-react";
import { cn } from '@/lib/utils';

export default function Notfound() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };
    
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="space-y-6 text-center">
                    <div className="relative w-24 h-24 mx-auto">
                        <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                        <Bot className="w-full h-full text-primary p-5" />
                    </div>
                    <div className="space-y-2">
                        <h1 className={cn(
                            "text-7xl font-bold bg-clip-text text-transparent",
                            "bg-gradient-to-r from-primary to-primary/50"
                        )}>
                            404
                        </h1>
                        <h2 className="text-2xl font-semibold text-foreground/90">
                            Page Not Found
                        </h2>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                            It seems my neural networks couldn't locate the page you're looking for. Let's get you back on track.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center pt-4">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full sm:w-auto"
                            asChild
                        >
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Back Home
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={handleGoBack}
                        >
                            <MoveLeft className="mr-2 h-4 w-4" />
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}