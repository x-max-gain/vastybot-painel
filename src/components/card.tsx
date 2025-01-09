"use client";

import { ICard } from "@/interfaces/cards-interface";
import CountUp from "react-countup";

export function Card({ title, value, type }: ICard) {
  return (
    <div className="bg-background-primary bg-opacity-50 border border-border-primary rounded-md p-6">
      <div className="flex flex-col gap-3">
        <p className="text-text-secondary">{title}</p>
        <div className="font-bold text-2xl">
          {type === "money" ? (
            <span className="text-white">
              R$ <CountUp end={parseInt(value)} duration={3} start={0.0} />
            </span>
          ) : type === "percentage" ? (
            <span className="text-white">
              <CountUp end={parseFloat(value)} duration={3} start={0} />%
            </span>
          ) : (
            <span className="text-white">
              <CountUp end={parseInt(value)} duration={3} start={0} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
