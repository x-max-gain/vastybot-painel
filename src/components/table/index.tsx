"use client";

import Image from "next/image";

type FormType = {
  header: Array<{ label: string; children: (value: any) => any }>;
  body: Array<any>;
  notfoundMessage?: string;
  title?: string;
};
export function Table({
  header,
  body,
  notfoundMessage = "Nenhum registro encontrado",
  title,
}: FormType) {
  console.log(body);

  return (
    <div className="relative overflow-x-auto rounded-md mt-5">
      {title && <p className="mb-4">{title}</p>}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase border border-gray-700">
          <tr>
            {header &&
              header.map((hd, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {hd.label}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {body &&
            body.map((item, index) => (
              <tr className="border border-gray-700" key={index}>
                {header &&
                  header.map((hd, i) => (
                    <th
                      key={i}
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {hd.children(item)}
                    </th>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
      {body.length === 0 && (
        <div className="flex flex-col justify-center inline-flex items-center w-full py-10 border border-gray-700">
          <Image
            src="/no-sells.svg"
            width={200}
            height={200}
            alt="Nenhuma venda"
          />
          <p className="mt-4 text-text-secondary">{notfoundMessage}</p>
        </div>
      )}
    </div>
  );
}
