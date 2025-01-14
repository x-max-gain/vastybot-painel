export type createBotInformationsType = {
  name: string;
  mode: "demo" | "real";
  close24hours: boolean;
  typeActive: string;
  active: string;
  companyActive: string;
  stoploss:
    | {
        type: "percentage" | "value";
        value: number;
      }
    | false;
  stopgain:
    | {
        type: "percentage" | "value";
        value: number;
      }
    | false;
};
