"use client";
import { useState } from "react";
import "./select.css";

// ICONS
import { Code, Plus, X, Info } from "lucide-react";

type CreateBotAlgorithmSelectType = {
    title: string;
    options: Array<any>,
    setElementSelect: (element: any) => void,
    startOpen?: boolean
}
export default function CreateBotAlgorithmSelect({ title, options, setElementSelect, startOpen = false }: CreateBotAlgorithmSelectType) {
    const [open, setOpen] = useState<boolean>(startOpen);

    return <div className="select-bot relative">
        <div onClick={() => setOpen(!open)} className="min-w-72 bg-background-secondary text-text-primary px-4 py-2 rounded-md flex items-center cursor-pointer">
            {!open ? <Plus className="mr-4 size-4" /> : <X className="mr-4 size-4" />}
            <p>{title}</p>
        </div>

        {
            open && <div className="z-20 select-bot-list bg-background-primary border border-gray-500 w-full rounded-md">
                <ul>
                    {
                        options.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between border border-gray-200 text-text-primary cursor-pointer rounded-md"
                            >
                                <div
                                    onClick={() => { setElementSelect(item); setOpen(false); }}
                                    className="w-full flex items-center px-4 py-2 hover:bg-background-deep"
                                >
                                    <Code className="mr-2 size-4 text-text-primary2" /> {item.name}
                                </div>
                                <div className="border border-background-secondaryDark px-2 py-2 hover:bg-background-deep">
                                    <Info className="size-6 text-text-secondary" />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        }
    </div>
}
