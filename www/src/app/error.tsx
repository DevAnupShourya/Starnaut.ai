"use client";

import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen w-full  flex items-center justify-center p-4 relative overflow-hidden">
      <div 
        className="relative z-10 max-w-md w-full"
      >
        <div className="space-y-8 text-center">
          <div 
            className="relative w-28 h-28 mx-auto"
          >
            <div className="absolute inset-0 bg-destructive/10 rounded-full blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-destructive/40 to-primary/40 rounded-full animate-pulse" />
            <AlertCircle className="w-full h-full text-destructive p-6 relative z-10" />
          </div>

          <div className="space-y-3">
            <h1 className={cn(
              "text-4xl font-bold tracking-tighter",
              "bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent"
            )}>
              Something Went Wrong
            </h1>
            <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
              Our systems encountered an unexpected error. Don't worry, we're already analyzing the anomaly.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                <p className="text-sm text-destructive/80 font-mono">
                  {error.message ? `${error.message}` : `An unexpected error occurred...`} 
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
            <Button
              variant="default"
              size="lg"
              className="w-full sm:w-auto group relative overflow-hidden"
              onClick={reset}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 animate-shimmer" />
              <RefreshCcw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
              Try Again
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}