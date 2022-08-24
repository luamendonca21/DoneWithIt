import client from "./client";

const endpoint = "expoPushTokens";

const registerPushToken = (pushToken) =>
  client.post(endpoint, { token: pushToken });

export default {
  registerPushToken,
};
