import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});
    setLocation({ latitude, longitude });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
