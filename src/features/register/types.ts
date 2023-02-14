export interface ICompleted {
  [key: number]: boolean;
}

export interface IRegisterValues {
  firstname: string;
  lastname: string;
  birthday?: string;
  email: string;
}

export interface IRegisterErrors {
  firstname?: string;
  lastname?: string;
  birthday?: string;
  email?: string;
}

export interface IPasswordValues {
  password: string;
  confirmedPassword: string;
}

export interface IPasswordErrors {
  password?: string;
  confirmedPassword?: string;
}
