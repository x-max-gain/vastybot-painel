import { API } from "../http/api";
import { AuthBodyType, AuthResponseType } from "../types/auth";
import Cookies from "js-cookie";
import {
  VASTYBOT_AUTH_EMAIL,
  VASTYBOT_AUTH_NAME,
  VASTYBOT_AUTH_TOKEN,
} from "../variables/auth";

export const Login = async (body: AuthBodyType): Promise<AuthResponseType> => {
  const { data }: { data: AuthResponseType } = await API.post("/auth", body);

  if (data.statusCode === 201 || data.statusCode === 200) {
    Cookies.set(VASTYBOT_AUTH_EMAIL, data.message.email, { expires: 7 }); // Expira em 7 dias
    Cookies.set(VASTYBOT_AUTH_NAME, data.message.name, { expires: 7 }); // Expira em 7 dias
    Cookies.set(VASTYBOT_AUTH_TOKEN, data.message.token, { expires: 7 }); // Expira em 7 dias
  }
  return data;
};
