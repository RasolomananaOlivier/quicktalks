export interface IUser {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  friends?: string[];
}

export interface IUserServer {
  _id?: string;
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
  _id?: string;
  auth: string;
  type: "text" | "image" | "video";
  content?: string;
  timeStamp: string;
  authorizedUser: string[];
  imageUrl?: string;
}

export interface IMessage {
  _id: string;
  authorizedUser: string[];
  messages: IMessageItem[];
  readBy: string[];
}

export interface IRequest {
  _id: string;
  userId: string;
  fullname: string;
  email: string;
}

export interface INotification {
  _id: string;
  message: string;
  destinationId: string;
}

export interface IMessagePayload {
  messageId: string;
  messageItem: IMessageItem;
}
