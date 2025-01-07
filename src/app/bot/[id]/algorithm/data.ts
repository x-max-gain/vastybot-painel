import { FunctionsOptionsType, ModelDataSelectType, ModelFunctionSelectType } from "./components/types"

const createOperation: ModelFunctionSelectType = {
    signal: 'createOperation',
    title: 'Abrir operação',
    type: 'function',
    info: {
        description: "Criar um operação",
        code: {
            body: "",
            language: "javascript"
        },
        technical: ""
    },
    params: [
        {
            index: 0,
            title: "Tipo de pagamento",
            name: 'typePayment',
            info: {
                description: "Tipo de pagamento para criar operação"
            },
            input: {
                type: "price",
                placeholder: "0,00",
            },
            validations: {
                required: true
            }
        }
    ]
}

export const FunctionsOptions: Array<FunctionsOptionsType> = [
    {
        _id: 'd1d121dd1111',
        title: 'Indicadores',
        type: 'category',
        functions: [
            {
                signal: 'movingAverages',
                title: 'Médias móveis',
                type: 'function',
                info: {
                    description: "As médias móveis são ferramentas amplamente utilizadas na análise técnica de mercados financeiros e em outras áreas da estatística e da previsão. Elas ajudam a suavizar os dados, eliminando as flutuações de curto prazo e destacando tendências mais longas.",
                    code: {
                        body: `function valueFibonnaci(candles: number){
    return candles * 2;
}`,
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'periods',
                        title: 'Períodos',
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
                        input: {
                            placeholder: '0.00',
                            type: 'number',
                        },
                        validations: {
                            required: true
                        }
                    },
                    {
                        index: 0,
                        name: 'typeCalc',
                        title: 'Tipo',
                        info: {
                            description: 'Tipo de cálculo usado para calcular os períodos',
                        },
                        input: {
                            type: 'select',
                            default: 'ponderada',
                            options: [
                                { name: 'Exponencial', value: 'exponentions', type: 'string' },
                                { name: 'Ponderada', value: 'ponderada', type: 'string' },
                                { name: 'Adaptativa', value: 'adaptativa', type: 'string' }
                            ]
                        },
                        validations: {
                            required: true
                        }
                    },
                    {
                        index: 0,
                        title: 'Deslocamento',
                        name: 'displacement',
                        input: {
                            default: 0,
                            type: 'price',
                            placeholder: '0,00'
                        },
                        info: {
                            description: 'Deslocamento depois do última registro',
                        },
                        validations: {
                            required: true
                        }
                    },
                    {
                        index: 0,
                        title: 'Força bruta',
                        name: 'forceBrut',
                        input: {
                            type: 'boolean',
                            default: true,
                            text: {
                                not: 'Desativado',
                                yes: 'Ativado'
                            }
                        },
                        info: {
                            description: 'Deslocamento depois do última registro',
                        },
                        validations: {
                            required: true
                        }
                    },
                    {
                        index: 0,
                        title: 'Nivel da banca',
                        name: 'levelBank',
                        input: {
                            type: 'percent',
                            placeholder: '0'
                        },
                        info: {
                            description: 'Deslocamento depois do última registro',
                        },
                        validations: {
                            required: true
                        }
                    }
                ]
            },
        ]
    },
    {
        _id: 'd1d121dd1123',
        title: 'Buscar dados',
        type: 'category',
        functions: [
            {
                signal: 'valueCurrent',
                type: 'function',
                title: "Valor atual do ativo",
                info: {
                    description: "Busca em qual posição do fibonacci o valor atual do ativo está",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: []
            },
            {
                signal: 'averagesDays',
                title: 'Média dos últimos dias',
                type: 'function',
                info: {
                    description: "Busca a média do ativo nos últimos tantos dias",
                    code: {
                        body: "(candles: number) => {return candles * 2}",
                        language: "JavaScript",
                    },
                    technical: "O indicador é criado a partir da soma de tal"
                },
                params: [
                    {
                        index: 0,
                        name: 'quantDay',
                        title: 'Quantidades de dias',
                        input: {
                            type: 'number',
                        },
                        info: {
                            description: 'Aqui você diz a quantidade de velas que você quer buscar a informação',
                        },
                        validations: {
                            required: true
                        }
                    }
                ]
            }
        ]
    }
]

export const DataFunction = (continueOption: boolean) => {
    return {
        name: 'Buscar dados',
        type: 'func',
        style: {
            backgroundColor: "#fea304",
            color: "#FFF"
        },
        signais: [
            {
                signal: 'Funções',
                name: 'func'
            },
        ],
        params: continueOption ? [createOperation] : FunctionsOptions
    }
}

const DataValue: ModelDataSelectType = {
    _id: 'add_data001',
    name: 'Adicionar dados',
    type: 'data',
    style: {
        backgroundColor: "#909320",
        color: "#FFF"
    },
    signals: [
        {
            signal: 'number',
            name: 'Número',
            placeholder: '0.00',
        },
        {
            signal: 'percent',
            name: 'Porcentagem',
            placeholder: '0.00',
        },
        {
            signal: 'boolean',
            name: 'Verdade/falso'
        },
        {
            signal: 'text',
            name: 'Texto',
            placeholder: 'Digite aqui',
        },
    ]
}

const MathOptions = {
    name: 'Criar conta matemática',
    type: 'math',
    style: {
        backgroundColor: "#125a44",
        color: "#FFF"
    },
    signals: [
        {
            signal: '+',
            name: 'Multiplica'
        },
        {
            signal: '-',
            name: 'Subtrai'
        },
        {
            signal: '*',
            name: 'Multiplica'
        },
        {
            signal: '/',
            name: 'Divide'
        },
        {
            signal: '%',
            name: 'Resto da divisão'
        }
    ],
    params: [DataValue, DataFunction(false)]
}

const Comparison = {
    style: {
        backgroundColor: "#37192c",
        color: "#FFF"
    },
    name: 'Criar comparação',
    type: 'comparison',
    signals: [
        {
            signal: '===',
            name: 'Igual'
        },
        {
            signal: '!==',
            name: 'Diferente'
        },
        {
            signal: '>',
            name: 'Maior'
        },
        {
            signal: '<',
            name: 'Menos'
        },
        {
            signal: '>=',
            name: 'Maior ou igual'
        },
        {
            signal: '<=',
            name: 'Menor ou igual'
        }
    ],
    params: [MathOptions, DataValue, DataFunction(false)]
}

const Logic = {
    style: {
        backgroundColor: "#220315",
        color: "#FFF"
    },
    name: 'Criar lógica',
    type: 'logic',
    signals: [
        {
            signal: '&&',
            name: 'E'
        },
        {
            signal: '||',
            name: 'Ou'
        }
    ],
    params: [MathOptions, Comparison, DataValue, DataFunction(false)]
}
const continueFunc = () => {
    const logicC = { ...Logic, continue: continueFunc };
    const CoparisonC = { ...Comparison, continue: continueFunc }
    return [logicC, CoparisonC, DataFunction(true)]
}
export const continueCoparison = {
    ...Logic,
    continue: continueFunc
}
export const continueLogic = {
    ...Comparison,
    continue: continueFunc
}

export const execute = [continueCoparison, continueLogic];
