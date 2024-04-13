"use client";

import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { Button } from "@/components/ui/button";

export function SearchHeader() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="w-full flex-1 md:w-auto md:flex-none">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center whitespace-nowrap transition-colors 
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
          disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent 
          hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start 
          rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground 
          shadow-none sm:pr-12 md:w-40 lg:w-64"
        >
          <span>Search...</span>
          <kbd
            className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] 
            hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 
            font-mono text-[10px] font-medium opacity-100 sm:flex"
          >
            <span className="text-xs">⌘</span>J
          </kbd>
        </button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export function SearchHero() {
  return (
    <div className="mt-12 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" className="border border-input">
            Marketing
          </Button>
          <Button variant="ghost" className="border border-input">
            Photos et videos
          </Button>
          <Button variant="ghost" className="border border-input">
            Copywriting
          </Button>
          <Button variant="ghost" className="border border-input">
            Design
          </Button>
        </div>
      </div>
    </div>
  );
}
