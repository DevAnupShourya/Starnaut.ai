"use client"

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SignOutButton } from '@clerk/nextjs'

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useUser } from '@clerk/nextjs';

export function NavUser() {
  const { isMobile } = useSidebar()
  const { user } = useUser();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user?.hasImage ? user.imageUrl : ''} alt={`${user?.firstName}'s image`} />
                <AvatarFallback className="rounded-lg">{`${user?.fullName?.split(' ')[0][0]}${user?.fullName?.split(' ')[1][0]}`}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user?.firstName}</span>
                <span className="truncate text-xs">{user?.primaryEmailAddress?.emailAddress}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.hasImage ? user.imageUrl : ''} alt={`${user?.firstName}'s image`} />
                  <AvatarFallback className="rounded-lg">{`${user?.fullName?.split(' ')[0][0]}${user?.fullName?.split(' ')[1][0]}`}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user?.fullName}</span>
                  <span className="truncate text-xs">{user?.primaryEmailAddress?.emailAddress}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                {/* TODO Check if user is not premium user then show it */}
                <Button asChild variant='default' className="size-full">
                  <Link href='/dashboard/subscribe'>
                    <Sparkles />
                    Upgrade to Pro
                  </Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Button asChild variant='outline' className="size-full">
                  <Link href='/dashboard/profile'>
                    <BadgeCheck />
                    Account
                  </Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button asChild variant='outline' className="size-full">
                  <Link href='/dashboard/billing'>
                    <CreditCard />
                    Billing
                  </Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button asChild variant='outline' className="size-full">
                  <Link href='/dashboard/notifications'>
                    <Bell />
                    Notifications
                  </Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutButton redirectUrl="/">
                <Button variant='destructive' className="size-full">
                  <LogOut />
                  Log out
                </Button>
              </SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}