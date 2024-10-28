"use client";

import { Power, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen w-full bg-gradient-to-b from-destructive/5 via-background to-background flex items-center justify-center p-4 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          >
            <div
              className="w-full h-full"
            />
          </div>

          <div
            className="relative z-10 max-w-lg w-full"
          >
            <div className="space-y-8 text-center">
              <div className="relative w-32 h-32 mx-auto">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-destructive to-primary opacity-20 blur-2xl"
                />
                <div
                  className="relative"
                >
                  <Power className="w-full h-full text-destructive p-6" />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className={cn(
                  "text-5xl font-bold",
                  "bg-gradient-to-r from-destructive via-primary to-destructive bg-clip-text text-transparent"
                )}>
                  Critical System Error
                </h1>
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  Our core systems have encountered a critical error. Emergency protocols have been activated.
                </p>
                {process.env.NODE_ENV === 'development' && (
                  <div className="mt-6 p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                    <p className="text-sm text-destructive/80 font-mono">
                      {error.message || "A critical system error occurred"}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-6">
                <Button
                  variant="destructive"
                  size="lg"
                  className="w-full sm:w-auto group relative overflow-hidden"
                  onClick={reset}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-destructive/0 via-destructive/10 to-destructive/0 animate-shimmer" />
                  <Power className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Restart System
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-destructive/20 hover:bg-destructive/5"
                  asChild
                >
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Emergency Exit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}