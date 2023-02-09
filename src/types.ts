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

export interface IMessageItem {
  _id: string;
  auth: string;
  type: "text" | "image" | "video";
  content: string;
  timeStamp: Date;
  authorizedUser: string[];
  imageUrl?: string;
}

export interface IMessage {
  _id: string;
  authorizedUser: string[];
  messages: IMessageItem[];
  isRead: boolean;
}
