// app/context/MyContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getOneBotType } from "../types/bot";
import { getOneBot } from "../modules/bot.module";

const MyContextDataBot = createContext<getOneBotType | null>(null);

export function MyProviderDataBot({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const [dataBot, setDataBot] = useState<getOneBotType | null>(null);
  useEffect(() => {
    (async () => {
      const response = await getOneBot(params.id);
      setDataBot(response);
    })();
  }, [params.id]);

  return (
    <MyContextDataBot.Provider value={dataBot}>
      {children}
    </MyContextDataBot.Provider>
  );
}

export function useMyContextDataBot() {
  const context = useContext(MyContextDataBot);
  return context;
}
