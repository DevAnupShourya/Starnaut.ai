"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbsAsCurrentLocation() {
    const currentAddress = usePathname();
    const [currentPath, setCurrentPath] = useState<string[]>([]);

    useEffect(() => {
        setCurrentPath(currentAddress.replace('/', '').split('/'));
    }, [currentAddress])

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {currentPath.map((path, idx) => {
                    return (
                        <React.Fragment key={`${path}-${idx}`}>
                            {idx === currentPath.length - 1 ? (
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="capitalize">
                                        {path}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            ) : (
                                <>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild className="capitalize">
                                            <Link href={`${currentAddress.slice(0, currentAddress.search(path))}${path}`}>
                                                {path}
                                            </Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                </>
                            )}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};