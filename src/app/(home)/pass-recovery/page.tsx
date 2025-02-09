"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("O campo de e-mail é obrigatório.");
      return;
    }

    console.log("E-mail para recuperação enviado:", email);

    setIsCardVisible(true);
  };

  return (
    <div className="flex flex-col max-[400px]:px-4 items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-6 border border-border-primary rounded-lg shadow-lg ">
        <h2 className="mb-6 text-2xl font-semibold text-center text-white">
          Recuperar Senha
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Digite seu e-mail"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
          >
            Enviar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Lembrou sua senha?{" "}
            <a href="/sign-in" className="text-green-500 hover:underline">
              Entrar
            </a>
          </p>
        </div>
      </div>

      {isCardVisible && (
        <div className="mt-5 top-20 w-full max-[400px]:px-4  max-w-sm p-4 bg-green-500 text-white rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Link enviado com sucesso!</h3>
          <p className="mt-2 text-sm">
            Um link para redefinição de senha foi enviado para{" "}
            <strong>{email}</strong>.
          </p>
          <button
            onClick={() => setIsCardVisible(false)}
            className="mt-4 py-1 px-4 text-sm bg-gray-800 rounded-md hover:bg-gray-700"
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}
