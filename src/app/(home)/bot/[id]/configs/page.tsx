"use client";

import { useMyContextDataBot } from "@/services/context/dataBot";

export default function CreateBotConfig() {
  const dataBot = useMyContextDataBot();
  return (
    <>
      {dataBot && (
        <div className="p-4 bg-background-primary mt-4 rounded-md text-text-primary">
          Configs {dataBot.name}
        </div>
      )}
    </>
  );
}
