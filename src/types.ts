export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  friends?: string[];
}

export interface IUserServer {
  firstname: string;
  lastname: string;
  email: {
    address: string;
    verified: boolean;
  };
  password: string;
  friends?: string[];
}
