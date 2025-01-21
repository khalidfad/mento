import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col h-full relative">
      <Image
        src="/images/home-bg.jpg"
        alt="Splash background"
        fill
        className="object-cover size-full z-0"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="container relative flex flex-col justify-between flex-1 pb-24">
        <div className="mt-16">
          <Image
            src="/images/logo-light.svg"
            alt="Mento logo"
            width={110}
            height={25}
          />
        </div>
        <div>
          <div className="max-w-[263px] md:max-w-sm mb-14">
            <h1 className="text-3xl leading-10 text-white mb-6">
              The world&apos;s largest community of{" "}
              <span className="font-bold">Mentors</span>
            </h1>
            <p className="text-white">
              Mentor aims to connect ambitious individuals to their mentors
            </p>
          </div>
          <Link href="/sign-up">
            <Button size="lg" className="w-full md:w-fit">
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
