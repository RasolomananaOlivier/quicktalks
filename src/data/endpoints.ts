export const endpoint = {
  LOGIN: "/auth/login",
  REGISTER: "/users",
  FRIENDS: (userId: string) => "/users/" + userId + "?q=friends",
  MESSAGES: (userId: string) => "/messages?userId=" + userId,
  MESSAGE: (messageId: string, userId: string, page: number) =>
    `/messages/${messageId}/${userId}?page=${page}`,
  REQUESTS: (userId: string) => `/requests/${userId}`,
  NOTIFICATIONS: (userId: string) => `/notifications/${userId}`,
  SUGGESTIONS: (userId: string) => `/users/${userId}?q=suggestions`,
};
