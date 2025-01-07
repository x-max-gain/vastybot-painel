export type FunctionsOptionsType = {
    _id: string;
    title: string;
    type: 'category';
    functions: Array<ModelFunctionSelectType>
}
type ModelFunctionSelectInputNumber = {
    default?: number;
    type: 'number';
    placeholder?: string;
}
type ModelFunctionSelectInputPrice = {
    default?: number;
    type: 'price';
    placeholder?: string;
}
type ModelFunctionSelectInputPercent = {
    default?: number;
    type: 'percent';
    placeholder?: string;
}
type ModelFunctionSelectInputBoolean = {
    type: 'boolean';
    default?: boolean;
    placeholder?: string;
    text?: {
        yes?: string;
        not?: string;
    }
}
type ModelFunctionSelectInputSelect = {
    type: 'select';
    default?: string;
    placeholder?: string;
    options: Array<{
        name: string;
        type: 'string' | 'boolean' | 'number';
        value: any;
    }>
}
export type ModelFunctionSelectInput =
    ModelFunctionSelectInputNumber |
    ModelFunctionSelectInputSelect |
    ModelFunctionSelectInputBoolean |
    ModelFunctionSelectInputPercent |
    ModelFunctionSelectInputPrice;
export type ModelFunctionSelectType = {
    signal: string;
    title: string;
    type: 'function';
    info: {
        description: string;
        code: {
            body: string;
            language: string;
        },
        technical: string;
    },
    params: Array<{
        index: number;
        name: string;
        title: string;
        input: ModelFunctionSelectInput;
        info: {
            description: string;
        };
        validations: {
            required: boolean;
        }
    }>
}
export type ModelDataSelectType = {
    _id: string;
    name: string;
    type: 'data';
    style: {
        backgroundColor: string;
        color: string;
    },
    signals: Array<{
        signal: string;
        name: string;
        placeholder?: string
    }>
}
export type ModelFunctionSelectEndType = {
    signal: string;
    params: Array<any>
}



// CREATE
export const SignalObjectLogicType: Array<SignalLogicType> = ['&&', '||'];
export type SignalLogicType = '&&' | '||';
export type LogicParamType = Array<MathType | ComparisonType | DataType>;
export type LogicType = {
    type: 'logic',
    signal: SignalLogicType,
    params: LogicParamType,
}

export type LogicContinue = Array<DataFunctionType | LogicMainType | ComparisonMainType>;
export interface LogicMainType extends LogicType {
    continue: LogicContinue
}
export const SignalObjectComparisonType = ['===', '!==', '>', '<', '>=', '<='];
export type SignalComparisonType = '===' | '!==' | '>' | '<' | '>=' | '<=';
export type ComparisonParamsType = Array<MathType | DataType>;
export type ComparisonType = {
    type: 'comparison',
    signal: SignalComparisonType,
    params: ComparisonParamsType,
}

export type ComparisonContinue = Array<DataFunctionType | LogicMainType | ComparisonMainType>;
export interface ComparisonMainType extends ComparisonType {
    continue: ComparisonContinue
}

export const SignalObjectMathType = ['+', '-', '*', '/', '%'];
export type SignalMathType = '+' | '-' | '*' | '/' | '%';
export type MathType = {
    type: 'math',
    signal: SignalMathType,
    params: Array<DataType>,
}

export interface MathMainType extends MathType {
    continue: Array<DataFunctionType | LogicType | ComparisonType>
}

export type DataType = DataFunctionType | DataValuesType;

export const SignalObjectDataValuesType = ['percent', 'number', 'boolean', 'float'];
export type SignalDataValuesType = 'percent' | 'number' | 'boolean' | 'float';
export type DataValuesType = {
    type: 'data',
    signal: SignalDataValuesType,
    value: string,
}
export const SignalObjectDataFunctionType = ['func'];
export type SignalDataFunctionType = 'func';
export type DataFunctionType = {
    type: 'data',
    signal: SignalDataFunctionType,
    value: string,
    params: Array<any>
}
export type DataMainType = DataValuesMainType | DataFunctionMianType;
export interface DataValuesMainType extends DataValuesType {
    continue: Array<DataFunctionType | LogicType | ComparisonType>
}
export interface DataFunctionMianType extends DataValuesType {
    continue: Array<DataFunctionType | LogicType | ComparisonType>
}
export type BotType = LogicMainType | ComparisonMainType;
