export type AuthResponseType = {
  message: {
    token: string;
    email: string;
    name: string;
  };
  error: boolean;
  statusCode: number;
};

export type AuthBodyType = {
  email: string;
  password: string;
};
