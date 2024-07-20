import React from "react";

// Import the MemoryRouter. This is a special kind of router that does not use the browser's URL bar.
import { MemoryRouter as Router } from "react-router-dom";

// Import the App
import "./App.scss";

// Import the AppRouting
import AppRouting from "./AppRouting";

// Import the WebXPanelService
import WebXPanelService from "./services/WebXPanelService";

import { Provider } from "react-redux";
import appStore from './utils/appStore';

// console.log(navigator.userAgent);

function App() {
  return (
    <Provider store={appStore}>
      <WebXPanelService />
      <Router>
        <AppRouting />
      </Router>
    </Provider>
  );
}

export default App;
