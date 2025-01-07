"use client";
import { ChangeEvent, useEffect, useState } from "react";
import "./select.css";

// ICONS
import { ModelDataSelectType } from "./types";
import { X } from "lucide-react";
type CreateBotAlgorithmModelFuncType = {
    data: ModelDataSelectType;
}

export default function CreateBotAlgorithmModelData(
    { data }: CreateBotAlgorithmModelFuncType,
) {
    const [dataInput, setDataInput] = useState<any>();
    const [dataInputType, setDataInputType] = useState<string>();

    useEffect(() => {
        setDataInputType(data.signals[0].signal)
    }, [])

    const maskNumber = (value: string) => {
        let input = value.replace(/[^0-9.]/g, '');

        // Remove pontos extras, mantendo apenas o primeiro
        const parts = input.split('.');
        if (parts.length > 2) {
            input = parts[0] + '.' + parts.slice(1).join('');
        }

        // Remove zeros à esquerda, mas mantém "0." válido
        if (input.startsWith('0') && input[1] !== '.' && input.length > 1) {
            input = parseFloat(input).toString();
        }

        return input;
    }

    const mask = (value: any) => {
        if (dataInputType === "number" || dataInputType === "percent") {
            console.log("number/percent:", value)
            setDataInput(maskNumber(value))
        }
        if (dataInputType === "boolean" || dataInputType === "text") {
            console.log('boolean/text', value)
            setDataInput(value)
        }
    }

    const selectFormatMask = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event?.target?.value) {
            setDataInputType(event.target.value);
            setDataInput('')
        }
    }

    return <div className="select-bot relative">
        <div
            className="top-[-10px] left-[-10px] p-1 bg-background-danger rounded-full text-text-ligth cursor-pointer absolute"
        >
            <X size={12} />
        </div>
        {
            data && (
                <div className="min-w-80 bg-background-secondary text-text-primary px-4 py-2 rounded-md flex flex-col cursor-pointer">
                    <h2 className="font-bold pb-2">{data.name}</h2>
                    <div>
                        <div className="flex items-center">
                            {
                                dataInputType === "boolean" ? <div className="w-64 bg-background-primary rounded flex h-10 items-center">
                                    <label htmlFor={`check-input-${data._id}`} className={`bg-background-secondary rounded h-1/4 flex w-14 mx-2 relative items-center ${dataInput ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`w-5 ${dataInput ? 'bg-green-500' : 'bg-gray-400'} h-[200%] absolute rounded-full`}></div>
                                        <input
                                            type="checkbox"
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => mask(event.target.checked)}
                                            id={`check-input-${data._id}`}
                                            value="y"
                                            className="hidden"
                                        />
                                    </label>

                                    <div className="bg-background-primary rounded w-full h-full flex justify-start items-center">
                                        {dataInput ? "Verdadeiro" : "Falso"}
                                    </div>
                                </div> : <input
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => mask(e.target.value)}
                                    value={dataInput}
                                    placeholder={data.signals.filter(item => item.signal === dataInputType && item)[0]?.placeholder ?? ''}
                                    type="text"
                                    className="p-2 bg-background-primary rounded focus:outline-gray-200"
                                />
                            }
                            <select
                                onChange={selectFormatMask}
                                className="ml-2 p-2 bg-background-primary rounded focus:outline-gray-200">
                                {
                                    data.signals.map((signal, i) => (
                                        <option key={i} value={signal.signal}>{signal.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2">
                        <button className="bg-background-main font-bold rounded text-white py-2 w-full">Salvar</button>
                    </div>
                </div>
            )
        }
    </div>
}
