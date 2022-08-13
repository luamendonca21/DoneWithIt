import React, { useState } from "react";

import Screen from "./app/components/Screen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
