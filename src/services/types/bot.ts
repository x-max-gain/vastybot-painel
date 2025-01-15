export type createBotInformationsStopType =
  | {
      type: "percentage" | "value";
      value: number;
    }
  | false;

export type createBotInformationsType = {
  name: string;
  mode: "DEMO" | "REAL";
  close24hours: boolean;
  operationSimultaneous: number;
  activeType: string;
  active: string;
  activeBroker: string;
  stoploss: createBotInformationsStopType;
  stopgain: createBotInformationsStopType;
};
