export type createBotInformationsStopType =
  | {
      type: "percentage" | "value";
      value: number;
    }
  | false;

export type createBotInformationsType = {
  name: string;
  mode: "demo" | "real";
  close24hours: boolean;
  typeActive: string;
  active: string;
  companyActive: string;
  stoploss: createBotInformationsStopType;
  stopgain: createBotInformationsStopType;
};
