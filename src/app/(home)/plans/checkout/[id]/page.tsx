"use client";
import Image from "next/image";
// components/PaymentForm.jsx
import { useState } from "react";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [pixData, setPixData] = useState({ cpfCnpj: "" });

  return (
    <div className="flex flex-col space-x-8  p-4 rounded-lg text-gray-500">
      <div className="flex space-x-8 ">
        <div className="w-2/3 bg-background-secondary rounded pl-2 pr-2 pb-2">
          <nav className="border-b border-slate-800	 shadow-sm pb-3 flex justify-center items-center">
            <div className="flex gap-1 w-full p-1">
              <button
                onClick={() => setPaymentMethod("creditCard")}
                className={`py-2 px-4 rounded w-full ${paymentMethod === "creditCard" ? "bg-green-500 text-white" : "bg-background-primary"}`}
              >
                Cartão de Crédito
              </button>
              <button
                onClick={() => setPaymentMethod("pix")}
                className={`py-2 px-4 rounded w-full ${paymentMethod === "pix" ? "bg-green-500 text-white" : "bg-background-primary"}`}
              >
                PIX
              </button>
              <button
                onClick={() => setPaymentMethod("boleto")}
                className={`py-2 px-4 rounded w-full ${paymentMethod === "boleto" ? "bg-green-500 text-white" : "bg-background-primary"}`}
              >
                Boleto
              </button>
            </div>
          </nav>

          {paymentMethod === "creditCard" && (
            <div className="w-full pt-4">
              <div className="py-4">
                <Image
                  src="https://cdn.shoplightspeed.com/shops/650301/files/36742703/credit-cards.png"
                  alt="User"
                  width={187}
                  height={187}
                  className="rounded-full"
                />
              </div>
              <div className="flex gap-4 w-full ">
                <div className="flex flex-col w-full">
                  <label className="block mb-2">
                    Nome do titular do cartão
                  </label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    placeholder="Nome do tilular"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label className="block mb-2">Sobrenome</label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    placeholder="Sobrenome"
                  />
                </div>
              </div>
              <div className="flex gap-4 w-full ">
                <div className="flex flex-col w-full">
                  <label className="block mb-2">Validade</label>
                  <input
                    type="date"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    value={cardDetails.expiry}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, expiry: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label className="block mb-2">CVV</label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    maxLength={3}
                    placeholder="3 Dígitos"
                    value={cardDetails.cvv}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvv: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex gap-4 w-full ">
                <div className="flex flex-col w-full">
                  <label className="block mb-2">Endereço</label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    placeholder="Endereço"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label className="block mb-2">Cidade</label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    placeholder="Cidade"
                  />
                </div>
              </div>

              <div className="flex gap-4 w-full ">
                <div className="flex flex-col w-full">
                  <label className="block mb-2">Estado</label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    placeholder="Estado"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label className="block mb-2">Distrito/Bairro</label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    placeholder="Distrito/Bairro"
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "pix" && (
            <div className="p-3">
              <div className="flex gap-4 w-full ">
                <div className="flex flex-col w-full max-w-64">
                  <label className="block mb-2">CPF ou CNPJ</label>
                  <input
                    type="text"
                    className="w-full  mb-4 p-2 bg-background-primary rounded"
                    value={pixData.cpfCnpj}
                    onChange={(e) => setPixData({ cpfCnpj: e.target.value })}
                    placeholder="000.000.000-00"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label className="block mb-2">Nome completo</label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    placeholder="Nome completo"
                  />
                </div>
              </div>
              <button className="py-2 px-4 bg-green-500 text-white rounded w-[300px]">
                Gerar QR Code
              </button>
            </div>
          )}

          {paymentMethod === "boleto" && (
            <div className="w-full pt-4">
              <div className="py-4">
                <Image
                  src="https://cdn.shoplightspeed.com/shops/650301/files/36742703/credit-cards.png"
                  alt="User"
                  width={187}
                  height={187}
                  className="rounded-full"
                />
              </div>
              <div className="flex gap-4 w-full ">
                <div className="flex flex-col w-full">
                  <label className="block mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    placeholder="Nome"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label className="block mb-2">Sobrenome</label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    placeholder="Sobrenome"
                  />
                </div>
              </div>
              <div className="flex gap-4 w-full ">
                <div className="flex flex-col w-full">
                  <label className="block mb-2">CPF ou CNPJ</label>
                  <input
                    type="text"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    value={pixData.cpfCnpj}
                    onChange={(e) => setPixData({ cpfCnpj: e.target.value })}
                    placeholder="000.000.000-00"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label className="block mb-2">Data de Nascimento</label>
                  <input
                    type="date"
                    className="w-full mb-4 p-2 bg-background-primary rounded"
                    placeholder="Sobrenome"
                  />
                </div>
              </div>
              <button className="py-2 px-4 bg-green-500 text-white rounded w-full max-w-[300px]">
                Gerar Boleto
              </button>
            </div>
          )}
        </div>

        {/* Coluna 3: Resumo do Pedido */}
        <div className="w-1/3 rounded bg-background-secondary p-4">
          <h2 className="text-lg font-semibold mb-4">Resumo do Pedido</h2>
          <div className="p-4 bg-background-secondary rounded">
            <p>Ambiente: Max Gain Bot</p>
            <p>Produto: Assinatura Max Gain Bot</p>
            <p>Nível: Iniciante</p>
            <p>Assinatura: Anual</p>
            <p>Valor: R$ 1.308,00</p>
            {paymentMethod === "creditCard" && (
              <p>Cartão: **** **** **** {cardDetails.number.slice(-4)}</p>
            )}
          </div>
          <button className="py-2 px-4 bg-green-500 rounded w-full mt-4 text-white">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
