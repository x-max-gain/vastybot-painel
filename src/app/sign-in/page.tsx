"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";
import GoogleLogo from "../../../public/social/goolge-logo.png";
import { Login } from "@/services/modules/auth.module";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      if (!formData.email || !formData.password) {
        setError("Todos os campos são obrigatórios.");
        return;
      }
      const responseLogin = await Login(formData);
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
          Entrar na sua conta
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
              className="w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-text-primary"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Digite sua senha"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className={`w-full py-2 text-sm font-medium text-white ${loading ? "bg-gray-500 rounded-md hover:bg-gray-600" : "bg-green-500 rounded-md hover:bg-green-600"}`}
          >
            {loading ? "Carregando..." : "Entrar"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{" "}
            <a href="/sign-up" className="text-green-500 hover:underline">
              Cadastre-se
            </a>
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <p className="text-sm text-gray-600">Entre com sua conta Google </p>

          <a href="/signup" className="ml-2 flex items-center justify-center">
            <Image
              src={GoogleLogo}
              alt="Google Logo"
              width={20}
              height={20}
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
