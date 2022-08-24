import { useEffect } from "react";
import expoPushTokensApi from "../api/expoPushTokens";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

export default useNotifications = () => {
  useEffect(() => {
    registerForPushNotifications();
  }),
    [];
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const { data: token } = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.registerPushToken(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
