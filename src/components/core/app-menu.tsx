import Image from "next/image";
import Link from "next/link";

export default function AppMenu() {
  const menu = [
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Our Playlist",
      href: "#",
    },
    {
      title: "Settings",
      href: "#",
    },
    {
      title: "My reviews",
      href: "#",
    },
    {
      title: "Sign out",
      href: "#",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-14">
        <Image
          src="/images/logo-light.svg"
          alt="Mento logo"
          width={110}
          height={25}
        />
      </div>
      <div className="flex flex-col space-y-6 items-end">
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-2xl text-white font-medium"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
