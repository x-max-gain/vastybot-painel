"use client";

import Link from "next/link";
import Image from "next/image";

export default function Integrations() {
  const integrations = [
    {
      name: "Mercado Bitcoin",
      code: "MB",
      template: "t1",
      image: "/integrations/mercado_bitcoin.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background-deep py-10 pt-4">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 ">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-background-primary rounded-lg p-6 border shadow border-gray-200"
            >
              <div className="flex justify-center py-6">
                <Image
                  src={integration.image}
                  alt={"Imagem " + integration.name}
                  height={100}
                  width={100}
                />
              </div>

              <Link
                href={`/integration/${integration.template}/${integration.code}`}
              >
                <button
                  className={`mt-4 w-full py-2 rounded bg-green-500 text-white font-bold`}
                >
                  INTERGRAR
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
