"use client";

import CreateBotAlgorithmSelect from "./select";
import CreateBotAlgorithmModelFunc from "./model-func";
import CreateBotAlgorithmModelData from "./model-data";
import { InformationsSelectedActiveType } from "../type";
import { X } from "lucide-react";
import { generateKeyRandom } from "@/utils/generate";

type CreateBotAlgorithmModelMainType = {
    data: any,
    informationsActiveSelected: InformationsSelectedActiveType,
    setElementSelect: (element: any) => void
}
export default function CreateBotAlgorithmModelMain(
    { data, informationsActiveSelected, setElementSelect }: CreateBotAlgorithmModelMainType,
) {
    const continueObj = data?.continue ? data.continue() : null;

    const selectOptionLeft = (select: any) => {
        setElementSelect({
            ...data,
            _id: generateKeyRandom(),
            options: {
                ...data.options,
                left: select
            }
        });
    }
    const selectOptionRight = (select: any) => {
        setElementSelect({
            ...data,
            _id: generateKeyRandom(),
            options: {
                ...data.options,
                right: select
            }
        });
    }
    const selectOptionContinue = (select: any) => {
        setElementSelect({
            ...data,
            _id: generateKeyRandom(),
            options: {
                ...data.options,
                continue: select
            }
        });
    }

    return <div
        style={{ backgroundColor: data.style.backgroundColor || 'white' }}
        className="text-text-primary p-4 rounded-md relative"
    >
        <div
            className="top-[-10px] left-[-10px] p-1 bg-background-danger rounded-full text-text-ligth cursor-pointer absolute"
        >
            <X size={12} />
        </div>
        <div className="flex items-start mb-4">
            {
                continueObj && <div className="col-span-1 flex items-center">
                    <p
                        style={{ color: data.style.color || 'white' }}
                        className="font-bold w-10"
                    >Se</p>
                </div>
            }
            <div className="col-span-4 flex">
                {
                    data?.options?.left && data?.options?.left.type === "func" && (
                        <CreateBotAlgorithmModelFunc informationsActiveSelected={informationsActiveSelected} startOpen={true} data={data?.options?.left.params} />
                    )
                }
                {
                    data?.options?.left && data?.options?.left.type === "data" && (
                        <CreateBotAlgorithmModelData data={data?.options?.left} />
                    )
                }
                {
                    data?.options?.left && data?.options?.left.type !== "func" && data?.options?.left.type !== "data" && (
                        <CreateBotAlgorithmModelMain
                            setElementSelect={selectOptionLeft}
                            informationsActiveSelected={informationsActiveSelected}
                            data={data?.options?.left}
                        />
                    )
                }
                {
                    !data?.options?.left && (
                        <CreateBotAlgorithmSelect title="Selecione um opção" options={data.params} setElementSelect={selectOptionLeft} />
                    )
                }
            </div>
            <div className="col-span-2 flex items-center justify-center mx-2">
                <select name="" id="" className="rounded-md cursor-pointer w-full py-2 px-4 text-center min-w-36">
                    {
                        data.signals.map((item: any, index: number) => (
                            <option value={item.type} key={index}>{item.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="col-span-4 flex">
                {
                    data?.options?.right && data?.options?.right.type === "func" && (
                        <CreateBotAlgorithmModelFunc informationsActiveSelected={informationsActiveSelected} data={data?.options?.right.params} startOpen={true} />
                    )
                }
                {
                    data?.options?.right && data?.options?.right.type === "data" && (
                        <CreateBotAlgorithmModelData data={data?.options?.right} />
                    )
                }
                {
                    data?.options?.right && data?.options?.right.type! !== "func" && data?.options?.right.type !== "data" && (
                        <CreateBotAlgorithmModelMain setElementSelect={selectOptionRight} informationsActiveSelected={informationsActiveSelected} data={data?.options?.right} />
                    )
                }
                {
                    !data?.options?.right && (
                        <CreateBotAlgorithmSelect title="Selecione um opção" options={data.params} setElementSelect={selectOptionRight} />
                    )
                }
            </div>
        </div>
        {
            continueObj && <div className="flex">
                <div
                    style={{ color: data.style.color }}
                    className="w-10 col-span-1 font-bold flex items-center"
                >Faz</div>
                <div className="col-span-10 w-full">
                    {
                        data?.options?.continue ? (
                            <CreateBotAlgorithmModelMain setElementSelect={selectOptionContinue} informationsActiveSelected={informationsActiveSelected} data={data?.options?.continue} />
                        ) : (
                            <CreateBotAlgorithmSelect title="Selecione um opção" options={continueObj} setElementSelect={selectOptionContinue} />
                        )
                    }
                </div>
            </div>
        }
    </div>
}
