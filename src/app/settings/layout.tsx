import Link from "next/link";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-start gap-8 bg">
        <Link href={"/settings/user"}>User setting</Link>
        <Link href={"/settings/organization"}>Organization setting</Link>
      </nav>
      {children}
    </>
  );
}