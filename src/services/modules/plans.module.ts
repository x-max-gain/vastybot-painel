import { addCaching, getCaching } from "../cache/cache";
import { PLANS_NAME_CACHING } from "../cache/consts";
import { API } from "../http/api";

export const getAllPlans = async () => {
  const time = 60 * 5; // 5 Minutes
  const dataCurrent = getCaching(PLANS_NAME_CACHING);
  if (!dataCurrent) {
    const { data } = await API.get("/plans");
    addCaching(PLANS_NAME_CACHING, data, time, "/");
    return data;
  } else {
    return dataCurrent;
  }
};
