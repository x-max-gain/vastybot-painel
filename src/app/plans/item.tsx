"use client";

import Link from "next/link";
import { PlanType } from "./types";

export default function PlansItem({ plan }: { plan: PlanType }) {
  return (
    <div
      className={`bg-background-primary rounded-lg p-6 border shadow ${
        plan.recommendation ? " border-green-500" : "border-gray-200"
      }`}
    >
      <h2 className="text-xl font-bold mb-2 text-center text-gray-500">
        {plan.title}
      </h2>
      {plan.price ? (
        <p className="text-2xl font-semibold text-center text-green-600">
          {plan.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      ) : (
        <p className="text-2xl font-semibold text-center text-green-600">
          R$ 0,00
        </p>
      )}

      <Link href={`/plans/checkout/${plan.code}`}>
        <button
          className={`mt-4 w-full py-2 rounded bg-green-500 text-white font-bold`}
        >
          TRANSFORMAR
        </button>
      </Link>

      <ul className="mt-6 space-y-2">
        {plan.offers.map((offer, i) => (
          <li key={i} className="text-sm text-gray-500">
            {offer}
          </li>
        ))}
      </ul>
    </div>
  );
}
