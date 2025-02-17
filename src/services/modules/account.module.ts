import { API } from "../http/api";
import {
  createAccountBodyType,
  createAccountResponseType,
  recoverAccountBodyType,
} from "../types/account";

export const createAccount = async (
  body: createAccountBodyType,
): Promise<createAccountResponseType> => {
  const { data }: { data: createAccountResponseType } = await API.post(
    "/auth",
    body,
  );
  return data;
};

export const recoverAccount = async (
  body: recoverAccountBodyType,
): Promise<boolean> => {
  const { data }: { data: boolean } = await API.post(
    "/recover-password/create-code",
    body,
  );
  return data;
};
