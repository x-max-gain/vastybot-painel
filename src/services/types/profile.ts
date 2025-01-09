export type updateProfileInformationsType = {
  name: string;
  phone: {
    number: string;
    areaCode: string;
    countryCode: string;
  };
  email?: string;
};

export type getProfileInformationsType = {
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
