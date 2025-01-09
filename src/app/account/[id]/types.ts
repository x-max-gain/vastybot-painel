export type ProfileType = {
  _id: string;
  name: string;
  email: string;
  active: boolean;
  phone: {
    number: string;
    areaCode: string;
    countryCode: string;
  };
};
