"use client";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function Finnance() {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <div className="w-full min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-background-primary text-gray-700 p-6 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Relatório Financeiro</h1>
          <p className="text-sm">
            Resumo dos resultados financeiros do período
          </p>
        </div>
        <div>
          <div
            onClick={() => setOpenFilter(!openFilter)}
            className="flex justify-between px-4 py-2 bg-background-deep font-bold rounded text-text-primary cursor-pointer hover:bg-background-secondary"
          >
            Filtrar <SlidersHorizontal className="ml-8" />
          </div>
          {openFilter && (
            <div>
              <h3>Filtrar período</h3>
              <p>Selecione o período</p>
              <ul>
                <li>Todos</li>
                <li>Hoje</li>
                <li>Ontem</li>
                <li>Última semana</li>
                <li>Último mês</li>
                <li>Personalizado</li>
              </ul>
              <div>map</div>
              <div className="w-full">
                <button className="px-2 sm:px-4 py-2 bg-green-500 font-bold rounded text-white">
                  Aplicar filtro
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Resumo do Relatório */}
      <section className="p-6 bg-background-primary shadow-md mt-4">
        <h2 className="text-lg font-bold text-gray-500 mb-4">
          Resumo do Período
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-background-deep rounded shadow">
            <p className="text-sm text-gray-500">Total de Lucro</p>
            <p className="text-green-600 text-2xl font-bold">R$ 1.530,00</p>
          </div>
          <div className="p-4 bg-background-deep rounded shadow">
            <p className="text-sm text-gray-500">Lucro Diário Médio</p>
            <p className="text-green-600 text-2xl font-bold">R$ 200,00</p>
          </div>
          <div className="p-4 bg-background-deep rounded shadow">
            <p className="text-sm text-gray-500">Transações</p>
            <p className="text-green-500 text-2xl font-bold">25</p>
          </div>
          <div className="p-4 bg-background-deep rounded shadow">
            <p className="text-sm text-gray-500">Bots Ativos</p>
            <p className="text-green-500 text-2xl font-bold">4</p>
          </div>
        </div>
      </section>

      {/* Detalhes do Relatório */}
      <section className="p-6 bg-background-primary shadow-md mt-4">
        <h2 className="text-lg font-bold text-gray-500 mb-4">
          Detalhes por Bot
        </h2>
        <table className="w-full border-collapse border border-green-500 text-sm">
          <thead>
            <tr className="bg-background-deep">
              <th className="border border-green-500 text-gray-500 p-2 text-xs md:text-base">
                Nome
              </th>
              <th className="border border-green-500 text-gray-500 p-2 text-xs md:text-base">
                Lucro
              </th>
              <th className="border border-green-500 text-gray-500 p-2 text-xs md:text-base">
                Lucro Diário
              </th>
              <th className="border border-green-500 text-gray-500 p-2 text-xs md:text-base">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">
                Laurício-Bitcoin
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 320,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 999,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-500">
                ATIVO
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">
                Alcan-Fibonacci
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 310,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 199,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-red-500">
                PARADO
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">
                Laurício-Bitcoin
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 320,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 999,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-500">
                ATIVO
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">
                Laurício-Bitcoin
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 320,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 999,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-500">
                ATIVO
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">
                Alcan-Fibonacci
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 310,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 199,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-red-500">
                PARADO
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">
                Laurício-Bitcoin
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 320,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 999,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-500">
                ATIVO
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-green-500 p-2 text-xs md:text-base text-gray-500">
                Alcan-Fibonacci
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 310,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-green-600">
                R$ 199,00
              </td>
              <td className="border border-green-500 p-2 text-xs md:text-base text-red-500">
                PARADO
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
