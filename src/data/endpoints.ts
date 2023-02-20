export const endpoint = {
  LOGIN: "/auth/login",
  REGISTER: "/users",
  user: {
    UPDATE_PERSONAL_INFORMATION: (userId: string) => `/users/${userId}`,
  },
  FRIENDS: (userId: string) => "/users/" + userId + "?q=friends",

  message: {
    LAST_IMAGE: (messageId: string) => `/messages/${messageId}?q=lastmessage`,
  },
  MESSAGES: (userId: string) => "/messages?userId=" + userId,
  MESSAGE: (messageId: string, userId: string, page: number) =>
    `/messages/${messageId}/${userId}?page=${page}`,
  REQUESTS: (userId: string) => `/requests/${userId}`,

  SUGGESTIONS: (userId: string) => `/users/${userId}?q=suggestions`,

  notification: {
    GET_ALL: (userId: string) => `/notifications/${userId}`,
    MARK_AS_READ: (notificationId: string) =>
      `/notifications/${notificationId}`,
    MARK_ALL_AS_READ: (userId: string) =>
      `/notifications?destinationId=${userId}`,
  },
};
