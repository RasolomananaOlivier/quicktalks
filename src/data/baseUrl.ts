export let baseURL = "http://127.0.0:5000";

if (import.meta.env.PROD) {
  baseURL = "https://quicktalks-server.up.railway.app";
}

export const apiV1 = baseURL + "/api/v1";
