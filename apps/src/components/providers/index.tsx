"use client";

import { ClerkProvider } from '@clerk/nextjs';
import { dark, experimental__simple } from '@clerk/themes';
import { useTheme } from "next-themes";

export default function RootProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { theme } = useTheme();
    const currentClerkTheme = theme === 'dark' ? dark : experimental__simple;

    return (
        <ClerkProvider
            appearance={{
                baseTheme: currentClerkTheme
            }}
        >
            {children}
        </ClerkProvider>
    );
}
