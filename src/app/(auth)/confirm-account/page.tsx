"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (!formData.email) {
        setError("Todos os campos são obrigatórios.");
        return;
      }
      setLoading(false);
      // if (responseLogin) router.push("/");
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col max-[400px]:px-4 items-center justify-center min-h-screen">
      <div className="bg-background-primary w-full  max-w-md p-6 border border-border-primary rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center text-text-primary">
          Confirmar conta
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-primary"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-gray-400 w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Digite seu e-mail"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 text-sm font-medium text-white ${loading ? "bg-gray-500 rounded-md hover:bg-gray-600" : "bg-green-500 rounded-md hover:bg-green-600"}`}
          >
            {loading ? "Carregando..." : "Confirmar"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Já tem uma confirmada?
            <a href="/sign-in" className="ml-1 text-green-500 hover:underline">
              Entrar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
