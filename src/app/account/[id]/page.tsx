"use client";

import { useState } from "react";

// MODULES
import Plans from "../../plans/page";
import AccountProfile from "./modules/profile";
import Integrations from "../../integrations/page";
import AccessProfile from "./modules/access";
import Finnance from "../../finance/page";

export default function Account() {
  const [activeTab, setActiveTab] = useState("Perfil");

  const renderContent = () => {
    switch (activeTab) {
      case "Perfil":
        return <AccountProfile />;

      case "Plano":
        return <Plans />;

      case "Integrações":
        return <Integrations />;

      case "Financeiro":
        return (
          <div className="py-4">
            <Finnance />
          </div>
        );

      case "Últimos Acessos":
        return <AccessProfile />;

      default:
        return <p className="text-gray-500">Selecione uma aba para começar.</p>;
    }
  };

  return (
    <div className="bg-background-deep min-h-screen">
      {/* Navegação */}
      <nav className="bg-background-primary shadow-sm p-4 border-b border-gray-200 flex justify-center items-center">
        <div className="flex gap-4">
          {[
            "Perfil",
            "Plano",
            "Integrações",
            "Financeiro",
            "Últimos Acessos",
          ].map((tab) => (
            <button
              key={tab}
              className={`px-2 sm:px-4 py-2 ${
                activeTab === tab
                  ? "bg-green-500 font-bold rounded text-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Conteúdo dinâmico */}
      <div>{renderContent()}</div>
    </div>
  );
}
