"use client";
import { LogOut, Settings, SquareMenu, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  const { setTheme } = useTheme();
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT side  */}
      <div className="nav-left-side">btn</div>

      {/* RIGHT side  */}
      <div className="nav-right-side flex items-center justify-center gap-4">
        <Link href="/">Dashboard</Link>
        {/* Theme Mode toggle start */}
        <ModeToggle />
        {/* Theme Mode toggle end */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <SquareMenu />
              <span className="sr-only">Open Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Menu 1</DropdownMenuItem>
            <DropdownMenuItem>Menu 2</DropdownMenuItem>
            <DropdownMenuItem>Menu 3</DropdownMenuItem>
            <DropdownMenuItem>Menu 4</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
