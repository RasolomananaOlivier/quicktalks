export interface ICompleted {
  [key: number]: boolean;
}

export interface IRegisterValues {
  firstName: string;
  lastName: string;
  birthday: string;
  email: string;
}

export interface IRegisterErrors {
  firstName?: string;
  lastName?: string;
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
