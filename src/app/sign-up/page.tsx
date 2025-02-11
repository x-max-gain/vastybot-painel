"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";
import GoogleLogo from "../../../public/social/goolge-logo.png";
import DDDs from "@/services/phone/ptbr";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: {
      number: "",
      areaCode: "",
      countryCode: "55",
    },
  });

  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificação de campos obrigatórios
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    // Verificação de senha
    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    console.log("Dados enviados:", formData);
  };

  return (
    <div className="flex flex-col max-[400px]:px-4 items-center justify-center min-h-screen">
      <div className="bg-background-primary w-full max-w-md p-6 border border-border-primary rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center text-text-primary">
          Criar uma conta
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-primary"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border-gray-400 w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Digite seu nome"
            />
          </div>
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
          <div className="flex">
            <div className="mr-2 w-24">
              <label
                htmlFor="phone.areaCode"
                className="block text-sm font-medium text-text-primary"
              >
                DDD
              </label>
              <select
                id="phone.areaCode"
                name="phone.areaCode"
                value={formData.phone.areaCode}
                onChange={handleSelectChange}
                className="border-gray-400 w-full text-gray-700 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              >
                {DDDs.map((ddd, index) => (
                  <option key={index} value={ddd.code}>
                    {ddd.code}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="phone.number"
                className="block text-sm font-medium text-text-primary"
              >
                Telefone
              </label>
              <input
                type="text"
                id="phone.number"
                name="phone.number"
                value={formData.phone.number}
                onChange={handleInputChange}
                className="border-gray-400 w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
                placeholder="Digite seu e-mail"
              />
            </div>
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
              className="border-gray-400 w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Digite sua senha"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-text-primary"
            >
              Confirme sua senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="border-gray-400 w-full text-gray-600 px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Confirme sua senha"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-text-ligth bg-green-500 rounded-md hover:bg-green-600"
          >
            Criar conta
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{" "}
            <a href="/signin" className="text-green-500 hover:underline">
              Entrar
            </a>
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <p className="text-sm text-gray-600">
            Ou cadastre-se com sua conta Google{" "}
          </p>
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
