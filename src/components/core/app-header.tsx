"use client";

import { useAppContext } from "@/contexts/app";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AppMenu from "@/components/core/app-menu";
import Hamburger from "@/components/icons/hamburger";
import clsx from "clsx";

export default function AppHeader({ addContainer }: { addContainer?: boolean }) {
  const { menuOpen, setMenuOpen } = useAppContext();

  return (
    <div
      className={clsx(
        "flex justify-between items-center mb-7",
        addContainer && "container"
      )}
    >
      <Image
        src="/images/logo-dark.svg"
        alt="Mento logo"
        width={110}
        height={25}
      />
      <Sheet open={menuOpen} onOpenChange={(open) => setMenuOpen(open)}>
        <SheetTrigger>
          <Hamburger className="size-9 text-dark-600" />
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-lg bg-black border-0" aria-describedby={undefined}>
          <SheetHeader>
            <SheetTitle className="sr-only"> Menu</SheetTitle>

            <AppMenu />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
