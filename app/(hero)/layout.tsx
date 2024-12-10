import Header from "@/components/header";
import type { HeaderItem } from '@/types/header'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headerItems: HeaderItem[] = [
    {
      name: "performance",
      path: "/performance"
    }, {
      name: "reliability",
      path: "/reliability"
    }, {
      name: "scale",
      path: "/scale"
    }
  ]

  return (
    <>
      <Header headerItems={headerItems} />
      {children}
    </>
  );
}
