/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useMyContextDataBot } from "@/services/context/dataBot";
import {
  Bolt,
  BarChart,
  SlidersHorizontal,
  FlaskConical,
  Play,
  Menu,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLayout({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const pathname = usePathname();
  const dataBot = useMyContextDataBot();
  const lastPart = pathname.split("/").filter(Boolean).pop();
  return (
    <>
      {dataBot && (
        <>
          <div className="flex justify-between mb-4 bg-background-primary p-4">
            <div className="flex items-center">
              <div className="mr-2 hover:bg-background-secondary p-2">
                <ChevronLeft />
              </div>
              <h1 className="text-2xl font-bold mr-2">{dataBot.name}</h1>
              <div
                className={`${dataBot.mode === "DEMO" ? "bg-background-main" : "bg-background-success"} text-text-ligth px-2 rounded-md font-bold cursor-default text-xs`}
              >
                {dataBot.mode === "DEMO" ? "SIMULADO" : "REAL"}
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center bg-background-success text-text-ligth py-2 px-4 rounded-md font-bold cursor-pointer ml-2">
                <Play className="mr-2" /> <p>Rodando</p>
              </div>
              <div className="bg-background-secondary text-text-primary py-2 px-4 rounded-md font-bold cursor-pointer ml-2">
                <Menu />
              </div>
            </div>
          </div>
          <div className="flex">
            <Link
              href={`/bot/${params.id}/statistics`}
              className={`${lastPart === "statistics" ? "bg-background-main text-text-ligth" : "bg-background-primary text-text-primary"} mr-4 rounded-md py-2 px-4 flex items-center`}
            >
              <BarChart className="mr-2" />
              <p>Estátisticas</p>
            </Link>
            <Link
              href={`/bot/${params.id}/algorithm`}
              className={`${lastPart === "algorithm" ? "bg-background-main text-text-ligth" : "bg-background-primary text-text-primary"} mr-4 rounded-md py-2 px-4 flex items-center`}
            >
              <SlidersHorizontal className="mr-2" />
              <p>Lógica</p>
            </Link>
            <Link
              href={`/bot/${params.id}/simulations`}
              className={`${lastPart === "simulations" ? "bg-background-main text-text-ligth" : "bg-background-primary text-text-primary"} mr-4 rounded-md py-2 px-4 flex items-center`}
            >
              <FlaskConical className="mr-2" />
              <p>Simulações</p>
            </Link>
            <Link
              href={`/bot/${params.id}/configs`}
              className={`${lastPart === "configs" ? "bg-background-main text-text-ligth" : "bg-background-primary text-text-primary"} rounded-md py-2 px-4 flex items-center`}
            >
              <Bolt className="mr-2" />
              <p>Configurações</p>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
