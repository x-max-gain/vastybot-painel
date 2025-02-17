export type createAccountValidationType = {
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

export type createAccountBodyType = {
  name: string;
  email: string;
  password: string;
  phone: {
    number: string;
    areaCode: string;
    countryCode: string;
  };
};
export type recoverAccountBodyType = {
  email: string;
};

export type createAccountResponseType = {
  message: Array<string>;
  error: boolean;
  statusCode: number;
};
