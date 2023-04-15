export interface IUser {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  friends?: string[];
  avatarUrl: string;
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
  avatarUrl: string;
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
  updated?: boolean;
}
export interface ICurrentMessage extends IMessage {
  totalMessages: number;
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
  isRead: boolean;
}

export interface IMessagePayload {
  messageId: string;
  messageItem: IMessageItem;
}

export interface IPersonalInformationValues {
  firstname: string;
  lastname: string;
  birthday?: string;
  email: string;
  avatarUrl: string;
}

export interface IPersonalInformationErrors {
  firstname?: string;
  lastname?: string;
  birthday?: string;
  email?: string;
}
