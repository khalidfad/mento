import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full justify-center items-center pt-24">
      <Image
        src="/images/logo-dark.svg"
        alt="Mento logo"
        width={110}
        height={25}
        className="mb-7"
      />
      <div className="container md:max-w-sm">{children}</div>
    </div>
  );
}
