"use client";
import { X } from "lucide-react";

type PopupType = {
  title: string;
  closed: boolean;
  setClosed: (value: boolean) => void;
  body: any;
};

export function PopUp({ title, setClosed, closed, body }: PopupType) {
  return (
    <>
      {closed && (
        <div className="max-[640px]:px-5 bg-[#000000ae] fixed w-full h-screen flex justify-center items-center left-0 top-0 z-50">
          <div className="bg-[#000] border border-gray-700 rounded-md w-1/4 max-[1024px]:w-1/2 max-[640px]:w-full">
            <div className="flex justify-between p-4 border-b border-gray-700 p-4">
              <p className="font-bold">{title}</p>
              <span
                onClick={() => setClosed(!closed)}
                className="border-2 rounded-full flex justify-center items-center py-1"
              >
                <X height={16} />
              </span>
            </div>
            <div className="p-4">{body}</div>
          </div>
        </div>
      )}
    </>
  );
}
