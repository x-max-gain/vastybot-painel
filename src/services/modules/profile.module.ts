import { addCaching, getCaching, removeCaching } from "../cache/cache";
import { PROFILE_NAME_CACHING } from "../cache/consts";
import { API } from "../http/api";
import {
  getProfileInformationsType,
  updateProfileInformationsType,
} from "../types/profile";

export const getDataProfile = async (): Promise<getProfileInformationsType> => {
  const time = 60 * 5; // 5 Minutes
  const dataCurrent = getCaching(PROFILE_NAME_CACHING);
  if (!dataCurrent) {
    const { data } = await API.get("/users/my");
    addCaching(PROFILE_NAME_CACHING, data, time, "/");
    return data;
  } else {
    return dataCurrent;
  }
};

export const updateProfileInformations = async (
  data: updateProfileInformationsType,
) => {
  console.log(data);
  const res = await API.put("/users", data);
  if (res) removeCaching(PROFILE_NAME_CACHING);
  return res;
};
