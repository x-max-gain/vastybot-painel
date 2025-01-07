/* eslint-disable react/no-children-prop */
"use client";
import { useEffect, useState } from "react";
import "./algorithm.css";
import CreateBotAlgorithmModelMain from "./components/model-main";

// MODULES
import CreateBotAlgorithmSelect from "./components/select";
import { execute } from "./data";
import { InformationsSelectedActiveType } from "./type";
import { generateKeyRandom } from "@/utils/generate";

export default function CreateBotAlgorithm({ setConditionsReturn }: { setConditionsReturn: (value: Array<any>) => void }) {
    const [conditions, setConditions] = useState<Array<any>>([]);
    const [informationsActiveSelected] = useState<InformationsSelectedActiveType>({
        selectedActive: {
            coin: {
                location: 'pt-br',
                signal: 'R$'
            }
        }
    })

    const setElementSelectMain = (element: any) => {
        if (element?.id) {
            const data = conditions.map(item => item.id === element.id ? (element) : item);
            setConditions(data)
            setConditionsReturn(data)
        } else {
            const data = [
                ...conditions,
                {
                    ...element,
                    id: generateKeyRandom(),
                    options: {
                        left: null,
                        right: null,
                        continue: null
                    }
                }
            ];
            setConditions(data)
            setConditionsReturn(data)
        }
    }
    return (
        <div className="w-full mt-4">
            <div className="canva-box flex w-full rounded-md">
                <div className="canva py-2 px-4">
                    {
                        conditions.map((item: any, index) => (
                            <div key={index} className="flex py-2">
                                <CreateBotAlgorithmModelMain setElementSelect={setElementSelectMain} informationsActiveSelected={informationsActiveSelected} data={item} />
                            </div>
                        ))
                    }

                    <div className="flex py-2">
                        <CreateBotAlgorithmSelect title="Adicionar condição" setElementSelect={setElementSelectMain} options={execute} />
                    </div>
                </div>
            </div>
        </div>
    );
}
