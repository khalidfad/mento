export default function MenteeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col h-full justify-center items-center pt-6">
      <div className="container md:max-w-sm">{children}</div>
    </div>
  );
}
