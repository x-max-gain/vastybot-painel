"use client";

import { Pagination } from "@/interfaces/paginations";
import { getMyBots } from "@/services/modules/bot.module";
import { Pause, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Bot() {
  const [bots, setBots] = useState<Pagination<Array<any>>>({
    content: [],
    cacheable: true,
    currentPage: 1,
    totalDocuments: 0,
    totalPages: 0,
  });
  const [myBots, setMyBots] = useState<Pagination<Array<any>>>({
    content: [],
    cacheable: true,
    currentPage: 1,
    totalDocuments: 0,
    totalPages: 0,
  });

  useEffect(() => {
    (async () => {
      const response = await getMyBots();
      setMyBots(response);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      setBots({
        cacheable: true,
        content: [
          { name: "Bot Financeiro v2.0" },
          { name: "Bot Financeiro v2.1" },
          { name: "Bot Financeiro v2.2" },
        ],
        currentPage: 1,
        totalDocuments: 3,
        totalPages: 1,
      });
    })();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col mt-4">
        {myBots?.content.length > 0 && (
          <div className="flex justify-end pb-4">
            <Link
              href="/bot/create"
              className="flex bg-background-main text-white px-4 py-2 rounded hover:bg-background-main"
            >
              <Plus className="mr-3" />
              <p>Criar meu robô</p>
            </Link>
          </div>
        )}
        <div className="w-full">
          {myBots?.content.length === 0 && (
            <div className="w-full flex justify-start mb-4">
              <h2 className="text-text-main text-xl font-bold">Seus robôs</h2>
            </div>
          )}
          <div className="w-full grid grid-cols-4 gap-4 mb-8">
            {myBots?.content.length === 0 && (
              <Link
                href="/bot/create"
                className="rounded-lg cursor-pointer hover:bg-background-hoverPrimary bg-background-primary h-[248px] flex justify-center items-center flex-col"
              >
                <Plus className="text-text-main mb-4" size={40} />
                <p className="text-text-main">Crie seu primeiro bot</p>
              </Link>
            )}
            {myBots?.content.map((item, index) => (
              <div
                key={index}
                className="bg-background-secondary border border-gray-200 shadow rounded-lg"
              >
                <Link href="/bot/22">
                  <div className="p-4 bg-background-primary rounded-lg">
                    <div className="flex justify-between items-center">
                      <h2 className="text-green-500 font-bold">#3945605</h2>
                      <p className="text-gray-500">Pessimista</p>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-600">
                      {item.name}
                    </h3>
                    <p className="text-gray-400">Fibonacci</p>

                    <div className="h-32 bg-gray-200 mt-4 rounded flex items-center justify-center">
                      <p className="text-gray-500">[Gráfico Aqui]</p>
                    </div>

                    <div className="flex justify-between mt-4">
                      <div>
                        <p className="text-gray-500">2</p>
                        <p className="text-gray-700 font-semibold">WINZ24</p>
                        <p className="text-green-600">R$134,00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400">240,00</p>
                        <p className="text-gray-500">Venda</p>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <p className="text-green-600 text-lg font-semibold">
                        R$260,50
                      </p>
                      <p className="text-red-600 text-lg font-semibold">
                        R$-49,00
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="mt-4 w-full bg-gray-200	 p-2 flex items-center justify-between">
                  <button className="text-gray-500 font-bold flex items-center underline">
                    VER MAIS
                  </button>
                  <button className="flex items-center">
                    <span className="text-green-500 mr-2 font-bold">
                      Executando
                    </span>
                    <span className="p-1 border border-green-500 hover:bg-green-500">
                      <Pause width={20} height={20} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-start mb-4">
            <h2 className="text-text-main text-xl font-bold">
              Encontre um robô
            </h2>
          </div>
          <div className="w-full grid grid-cols-4 gap-4">
            {bots?.content.map((item, index) => (
              <div
                key={index}
                className="bg-background-secondary border border-gray-200 shadow rounded-lg"
              >
                <Link href="/bot/22">
                  <div className="p-4 bg-background-primary rounded-lg">
                    <div className="flex justify-between items-center">
                      <h2 className="text-green-500 font-bold">#3945605</h2>
                      <p className="text-gray-500">Pessimista</p>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-600">
                      {item.name}
                    </h3>
                    <p className="text-gray-400">Fibonacci</p>

                    <div className="h-32 bg-gray-200 mt-4 rounded flex items-center justify-center">
                      <p className="text-gray-500">[Gráfico Aqui]</p>
                    </div>

                    <div className="flex justify-between mt-4">
                      <div>
                        <p className="text-gray-500">2</p>
                        <p className="text-gray-700 font-semibold">WINZ24</p>
                        <p className="text-green-600">R$134,00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400">240,00</p>
                        <p className="text-gray-500">Venda</p>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <p className="text-green-600 text-lg font-semibold">
                        R$260,50
                      </p>
                      <p className="text-red-600 text-lg font-semibold">
                        R$-49,00
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="mt-4 w-full bg-gray-200	 p-2 flex items-center justify-between">
                  <button className="text-gray-500 font-bold flex items-center underline">
                    VER MAIS
                  </button>
                  <button className="flex items-center">
                    <span className="text-green-500 mr-2 font-bold">
                      Executando
                    </span>
                    <span className="p-1 border border-green-500 hover:bg-green-500">
                      <Pause width={20} height={20} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
