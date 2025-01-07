"use client";
import { ChangeEvent, useState } from "react";
import "./select.css";

// ICONS
import { Plus, X, ChevronDown, Code, Info, Minimize, Maximize } from "lucide-react";
import BotInfo from "./info";
import { FunctionsOptionsType, ModelFunctionSelectType } from "./types";
import { InformationsSelectedActiveType } from "../type";
type CreateBotAlgorithmModelFuncType = {
    data: Array<FunctionsOptionsType | ModelFunctionSelectType>;
    startOpen?: boolean,
    informationsActiveSelected: InformationsSelectedActiveType
}

export default function CreateBotAlgorithmModelFunc(
    { data, informationsActiveSelected, startOpen = false }: CreateBotAlgorithmModelFuncType,
) {
    const [minimize, setMinimize] = useState<boolean>(false);
    const [dataFunction, setDataFunction] = useState<any>({})
    const [selectOption, setSelecteOption] = useState<ModelFunctionSelectType>()
    const [selectInfo, setSelectInfo] = useState("");
    const [open, setOpen] = useState<boolean>(startOpen);
    const [opensCategories, setOpensCategories] = useState<Array<string>>([]);

    const clickCategory = (event: any, _id: string) => {
        if (event.target === event.currentTarget) {
            const exist = opensCategories.includes(_id);

            if (exist) {
                setOpensCategories(opensCategories.filter(item => item !== _id))
            } else {
                setOpensCategories([...opensCategories, _id])
            }
        }
    }

    const selectOptionFunction = (item: ModelFunctionSelectType) => {
        setSelecteOption(item)
    }

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
    const maskPrice = (value: string) => {
        let input = value;

        // Remove todos os caracteres que não são números
        input = input.replace(/\D/g, '');

        // Converte para número e divide por 100 para obter os centavos
        input = (parseFloat(input) / 100).toFixed(2);

        // Formata como moeda no padrão brasileiro
        input = input.replace('.', ',');

        // Adiciona separadores de milhar
        input = input.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return input;
    }

    const mask = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>, type: string) => {
        const name = event.target.name;
        const value = event.target.value;

        if (type === "number" || type === "percent") {
            const response = maskNumber(value);
            setDataFunction({ ...dataFunction, [name]: response })
        }
        if (type === "price") {
            const response = maskPrice(value);
            setDataFunction({ ...dataFunction, [name]: response })
        }
        if (type === "boolean" && 'checked' in event.target) {
            console.log(event.target.checked)
            setDataFunction({ ...dataFunction, [name]: event.target.checked ? true : false })
        }
        if (type === "select") {
            setDataFunction({ ...dataFunction, [name]: value })
        }
    }

    return <div className="select-bot relative">
        {
            !selectOption && (
                <div onClick={() => setOpen(!open)} className="min-w-80 bg-background-secondary text-text-primary px-4 py-2 rounded-md flex items-center cursor-pointer">
                    {!open ? <Plus className="mr-4 size-4" /> : <X className="mr-4 size-4" />}
                    <p>Selecione o dado</p>
                </div>
            )
        }
        {
            selectOption && (
                <div className="min-w-80 bg-background-secondary text-text-primary px-4 py-2 rounded-md flex flex-col relative">
                    <div
                        className="top-[-10px] left-[-10px] p-1 bg-background-danger rounded-full text-text-ligth cursor-pointer absolute"
                    >
                        <X size={12} />
                    </div>
                    <div className="flex justify-between py-2 mb-2 border-b border-gray-300">
                        <h2 className="font-bold">{selectOption.title}</h2>
                        <div className="flex items-center">
                            <div onClick={() => setMinimize(!minimize)} className="p-1 bg-background-warnning rounded-full cursor-pointer">
                                {!minimize ? <Minimize size={14} /> : <Maximize size={14} />}
                            </div>
                        </div>
                    </div>
                    <ul className={`overflow-hidden ${minimize && 'h-0'}`}>
                        {
                            selectOption.params.map((param, index) => (
                                <li key={index} className="flex items-center">
                                    <p className="w-52">{param.title}: </p>
                                    <div className="flex w-full ml-2 mb-1">
                                        {
                                            param.input.type === "number" && (
                                                <input
                                                    inputMode="numeric"
                                                    name={param.name}
                                                    onChange={(event: ChangeEvent<HTMLInputElement>) => mask(event, param.input.type)}
                                                    value={dataFunction[param.name]}
                                                    type="text"
                                                    placeholder={param.input.placeholder}
                                                    className="w-full px-2 h-10 bg-background-primary rounded focus:outline-gray-200"
                                                />
                                            )
                                        }
                                        {
                                            param.input.type === "price" && (
                                                <div className="w-full flex items-center bg-background-primary h-10 px-2">
                                                    <p className="mr-2">{informationsActiveSelected.selectedActive.coin.signal}</p>
                                                    <input
                                                        inputMode="numeric"
                                                        name={param.name}
                                                        onChange={(event: ChangeEvent<HTMLInputElement>) => mask(event, param.input.type)}
                                                        value={dataFunction[param.name]}
                                                        type="text"
                                                        placeholder={param.input.placeholder}
                                                        className="w-full px-2 h-8 bg-gray-50 rounded focus:outline-none"
                                                    />
                                                </div>
                                            )
                                        }
                                        {
                                            param.input.type === "percent" && (
                                                <div className="w-full flex items-center bg-background-primary h-10 px-2">
                                                    <input
                                                        inputMode="numeric"
                                                        name={param.name}
                                                        onChange={(event: ChangeEvent<HTMLInputElement>) => mask(event, param.input.type)}
                                                        value={dataFunction[param.name]}
                                                        type="text"
                                                        placeholder={param.input.placeholder}
                                                        className="w-full px-2 h-8 bg-gray-50 rounded focus:outline-none text-end"
                                                    />
                                                    <p className="mr-2">%</p>
                                                </div>
                                            )
                                        }
                                        {
                                            param.input.type === "boolean" && (
                                                <div className="w-full bg-background-primary rounded flex h-10 items-center">
                                                    <label htmlFor={`check-input-${param.name}`} className={`bg-background-secondary rounded h-1/4 flex w-2/12 mx-2 relative items-center ${dataFunction[param.name] ? 'justify-end' : 'justify-start'}`}>
                                                        <div className={`w-5 ${dataFunction[param.name] ? 'bg-green-500' : 'bg-gray-400'} h-[200%] absolute rounded-full`}></div>
                                                        <input
                                                            type="checkbox"
                                                            onChange={(event: ChangeEvent<HTMLInputElement>) => mask(event, param.input.type)}
                                                            name={param.name}
                                                            id={`check-input-${param.name}`}
                                                            value="y"
                                                            className="hidden"
                                                        />
                                                    </label>

                                                    <div className="bg-background-primary rounded w-full h-full flex justify-start items-center">
                                                        {dataFunction[param.name] ? param.input.text?.yes : param.input.text?.not}
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            param.input.type === "select" && (
                                                <select
                                                    name={param.name}
                                                    onChange={(event: ChangeEvent<HTMLSelectElement>) => mask(event, param.input.type)}
                                                    value={dataFunction[param.name]}
                                                    className="w-full px-2 h-10 bg-background-primary rounded focus:outline-gray-200">
                                                    {
                                                        param.input.options.map((item, i) => (
                                                            <option key={i} value={item.value}>{item.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            )
                                        }
                                    </div>
                                    <div
                                        onClick={() => setSelectInfo(`${index}`)}
                                        className="border border-background-secondaryDark px-2 py-2 hover:bg-background-secondary"
                                    >
                                        <Info className="size-6 text-text-secondary" />
                                        <BotInfo setOpen={setSelectInfo} info={param.info} open={selectInfo === `${index}`} />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>


                    {
                        !minimize && selectOption.params.length > 0 && <div className="flex justify-end mt-2">
                            <button className="bg-background-main font-bold rounded text-white py-2 w-full">Salvar</button>
                        </div>
                    }
                </div>
            )
        }
        {
            open && <div className="z-20 max-h-96 overflow-y-auto overflow-visible select-bot-list bg-background-primary border border-gray-500 w-full rounded-md">
                <ul>
                    {
                        data.map((item, index) => (
                            <>
                                {
                                    item.type == "function" ? (
                                        <li
                                            key={index}
                                            onClick={() => { selectOptionFunction(item); setOpen(false); }}
                                            className="bg-background-secondary hover:bg-background-deep border border-gray-200 text-text-primary px-4 py-2 cursor-pointer rounded-md"
                                        >{item.title}</li>
                                    ) : (
                                        <li key={index}>
                                            <div
                                                onClick={(event) => clickCategory(event, item._id)}
                                                className="flex justify-between items-center bg-background-secondaryDark hover:bg-background-secondaryDarkBig border border-gray-200 text-text-primary px-4 py-2 cursor-pointer rounded-md">
                                                <p onClick={(event) => clickCategory(event, item._id)}>{item.title}</p>
                                                <ChevronDown onClick={(event) => clickCategory(event, item._id)} className="size-6 text-text-primary2" />
                                            </div>
                                            {
                                                opensCategories.includes(item._id) && <ul>
                                                    {
                                                        item.functions.map((func: any, index2: number) => (
                                                            <li
                                                                key={`${index}${index2}`}
                                                                className="flex items-center justify-between border border-gray-200 text-text-primary cursor-pointer rounded-md"
                                                            >
                                                                <div
                                                                    onClick={() => { selectOptionFunction(item.functions[index2]); setOpen(false); }}
                                                                    className="w-full flex items-center px-4 py-2 hover:bg-background-secondary"
                                                                >
                                                                    <Code className="mr-2 size-4 text-text-primary2" />{func.title}
                                                                </div>
                                                                <div
                                                                    onClick={() => setSelectInfo(`${index}${index2}`)}
                                                                    className="border border-background-secondaryDark px-2 py-2 hover:bg-background-secondary"
                                                                >
                                                                    <Info className="size-6 text-text-secondary" />
                                                                    <BotInfo setOpen={setSelectInfo} info={func.info} open={selectInfo === `${index}${index2}`} />
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            }
                                        </li>
                                    )
                                }
                            </>
                        ))
                    }
                </ul>
            </div>
        }
    </div>
}
