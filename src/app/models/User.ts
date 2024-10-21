export type LoginInput = {
  username: string;
  password: string;
};

export type RegisterInput = {
  fullname: string;
  username: string;
  password: string;
};

export type User = {
  accessToken: string;
  fullname: string;
  role: string;
  id: string;
};

export type UpdatePasswordInput = {
  username: string;
  password: string;
  newPassword: string;
};

export type Admin = {
  fullname: string;
  role: string;
  _id: string;
  email: string;
};
