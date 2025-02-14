export type createUserType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: {
    number: string;
    areaCode: string;
    countryCode: string;
  };
};
