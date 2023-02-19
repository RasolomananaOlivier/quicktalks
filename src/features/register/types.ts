export interface ICompleted {
  [key: number]: boolean;
}

export interface IPasswordValues {
  password: string;
  confirmedPassword: string;
}

export interface IPasswordErrors {
  password?: string;
  confirmedPassword?: string;
}
