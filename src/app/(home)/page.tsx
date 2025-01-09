"use client";

export default function HomeDashboard() {
  return (
    <div className="flex flex-col gap-4 bg-background-primary pt-4 pr-4 pl-4 pb-4 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-background-deep p-4 rounded shadow">
          <h2 className="text-md font-bold text-gray-700">Histórico do dia</h2>
          <div className="mt-2 text-green-500 text-xl font-bold">R$ 0,00</div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Última atualização: 09:00</p>
          </div>
        </div>

        <div className="bg-background-deep p-4 rounded shadow flex flex-col items-center justify-center">
          <h2 className="text-md font-bold text-gray-700">Robôs executando</h2>
          <p className="text-gray-500 text-sm mt-2 text-center">
            Você ainda não possui nenhum robô em execução.
          </p>
          <button className="mt-4 bg-green-500 text-dark px-4 py-2 rounded">
            Criar robô
          </button>
        </div>

        {/* Posições abertas */}
        <div className="bg-background-deep p-4 rounded shadow">
          <h2 className="text-md font-bold text-gray-700">Posições abertas</h2>
          <div className="mt-2 text-gray-500">
            <p className="text-xl font-bold">R$ 0.000,00</p>
            <p>Aguardando operações</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="bg-background-deep p-4 rounded shadow">
          <h2 className="text-md font-bold text-gray-700">
            Estratégias de analistas de sucesso
          </h2>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between bg-background-primary rounded p-3 shadow">
              <div>
                <p className="font-bold text-gray-700">Stonehenge</p>
                <p className="text-sm text-gray-500">Butterfly</p>
              </div>
              <div className="text-green-500 font-bold">165,6%</div>
            </div>
            <div className="flex items-center justify-between bg-background-primary rounded p-3 shadow">
              <div>
                <p className="font-bold text-gray-700">Deuteronômio</p>
                <p className="text-sm text-gray-500">Consistência Trader</p>
              </div>
              <div className="text-green-500 font-bold">138,2%</div>
            </div>
            <div className="flex items-center justify-between bg-background-primary rounded p-3 shadow">
              <div>
                <p className="font-bold text-gray-700">Stonehenge</p>
                <p className="text-sm text-gray-500">Butterfly</p>
              </div>
              <div className="text-green-500 font-bold">165,6%</div>
            </div>
            <div className="flex items-center justify-between bg-background-primary rounded p-3 shadow">
              <div>
                <p className="font-bold text-gray-700">Deuteronômio</p>
                <p className="text-sm text-gray-500">Consistência Trader</p>
              </div>
              <div className="text-green-500 font-bold">138,2%</div>
            </div>

            <div className="flex items-center justify-between bg-background-primary rounded p-3 shadow">
              <div>
                <p className="font-bold text-gray-700">Deuteronômio</p>
                <p className="text-sm text-gray-500">Consistência Trader</p>
              </div>
              <div className="text-green-500 font-bold">138,2%</div>
            </div>
          </div>
        </div>

        {/* Notícias da plataforma */}
        <div className="bg-background-deep p-4 rounded shadow">
          <h2 className="text-md font-bold text-gray-700">
            Notícias da plataforma
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-500 font-bold shadow justify-between bg-background-primary rounded p-3 text-md hover:bg-green-500 hover:text-white">
              PLANOS BLACK: Até R$ 47 mil...
            </li>
            <li className="flex items-center text-gray-500 font-bold shadow justify-between bg-background-primary rounded p-3 text-md hover:bg-green-500 hover:text-white">
              TOP ROBÔS com 30% OFF 🔥...
            </li>
            <li className="flex items-center text-gray-500 font-bold shadow justify-between bg-background-primary rounded p-3 text-md hover:bg-green-500 hover:text-white">
              Novos Planos BLACK com DES...
            </li>
          </ul>
        </div>

        <div className="bg-background-deep p-4 rounded shadow">
          <h2 className="text-md font-bold text-gray-700">
            Top robôs da semana
          </h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center text-green-500 hover:text-white justify-between bg-background-primary rounded p-3 hover:bg-green-500 shadow">
              <p className="font-bold">Bullbear Premium Lite</p>
              <p className=" font-bold">65.95%</p>
            </div>
            <div className="flex items-center text-green-500 hover:text-white justify-between bg-background-primary rounded p-3 hover:bg-green-500 shadow">
              <p className="font-bold">Bullbear Premium Lite</p>
              <p className=" font-bold">65.95%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
