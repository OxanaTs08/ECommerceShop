import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserStore from "./store/UserStore.tsx";
import DeviceStore from "./store/DeviceStore.tsx";

// import { Provider } from "react-redux";
// import store from "./redux/store";

export const Context = createContext<{user: UserStore | null, device: DeviceStore | null}>({user: null, device: null});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Context.Provider value={{user: new UserStore(),
      device: new DeviceStore()
    }}>
      <App />
   </Context.Provider>
  </React.StrictMode>
);
