"use client";

import { useEffect, useState } from "react";
import { ProfileType } from "../types";
import { getDataProfile } from "@/services/modules/profile.module";

export default function AccountProfile() {
  const [profile, setProfile] = useState<ProfileType>();

  useEffect(() => {
    (async () => {
      setProfile(await getDataProfile());
    })();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      <div className="bg-background-primary border border-gray-200  rounded-md p-4 shadow">
        <h2 className="text-lg font-bold mb-4 text-gray-500">
          Informações Pessoais
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              value={profile?.name}
              className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500  focus:border-gray-400 focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="text"
              value={profile?.email}
              className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <select
              className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
              defaultValue="Masculino"
            >
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-background-primary border border-gray-200 rounded-md p-4 shadow">
        <h2 className="text-lg font-bold mb-4 text-gray-500">Conta</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Senha atual
            </label>
            <input
              type="text"
              name="password-current"
              className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nova senha
            </label>
            <input
              type="text"
              name="password-new"
              className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirme a nova senha
            </label>
            <input
              type="text"
              name="password-confirm"
              className="mt-1 block w-full border-b text-sm border-gray-300 text-gray-500 bg-transparent focus:border-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
              Alterar Senha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
