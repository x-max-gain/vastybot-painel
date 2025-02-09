/* eslint-disable @next/next/no-img-element */
import { MyProviderDataBot } from "@/services/context/dataBot";
import ProfileLayout from "./profile";

export default function ViewBotLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) {
  return (
    <MyProviderDataBot params={params}>
      <div className="rounded-md text-text-primary">
        <ProfileLayout params={params} />
        {children}
      </div>
    </MyProviderDataBot>
  );
}
