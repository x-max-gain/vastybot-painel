import { Pagination } from "@/interfaces/paginations";
import { API } from "../http/api";
import { createBotInformationsType } from "../types/bot";

export const createBotInformations = async (
  data: createBotInformationsType,
) => {
  const res = await API.post("/bot", data);
};

export const getMyBots = async (): Promise<Pagination<Array<any>>> => {
  const { data } = await API.get("/bot?page=1&limit=20");
  return data;
};
