import Cookies from "js-cookie";

export const getCaching = (name: string) => {
  const res = Cookies.get(name);
  return res ? JSON.parse(res) : null;
};

export const addCaching = (
  name: string,
  data: any,
  time: number,
  scope: string,
) => {
  const now = new Date();
  Cookies.set(name, JSON.stringify(data), {
    expires: new Date(now.getTime() + time * 1000),
    path: scope,
  });
};

export const removeCaching = (name: string) => {
  Cookies.remove(name);
};
