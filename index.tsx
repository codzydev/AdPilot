import React from "react";

import { registerRootComponent } from "expo";
import { AppContainer } from "./src";

const App = () => {
  return <AppContainer />;
};

export default registerRootComponent(App);
