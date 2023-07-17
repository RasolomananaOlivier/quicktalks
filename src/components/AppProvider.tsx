import { ThemeProvider } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";

import { Provider } from "react-redux";
import { theme } from "../data/theme";
import { store } from "../redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

// import { PersistGate } from "redux-persist/integration/react";
// import persistStore from "redux-persist/es/persistStore";
// import store from "../Services/Data/store";

// let persistor = persistStore(store);

export const NavigationStateOnMobileContext = React.createContext({
  show: true,
  setShow: () => {},
});

interface IAppProviderProps {}

const AppProvider = ({ children }: PropsWithChildren<IAppProviderProps>) => {
  const [showNavigationOnMobile, setShowNavigationOnMobile] = useState(true);

  return (
    <div style={{ margin: 0 }}>
      <Provider store={store}>
        {/* TODO: move the clientId in .env */}
        <GoogleOAuthProvider clientId="618482084106-88280a9b0go6icucpdn1bb6368m9j676.apps.googleusercontent.com">
          <ThemeProvider theme={theme}>
            {/* <PersistGate persistor={persistor}> */}
            <NavigationStateOnMobileContext.Provider
              value={{
                show: showNavigationOnMobile,
                setShow: () => setShowNavigationOnMobile,
              }}
            >
              {children}
            </NavigationStateOnMobileContext.Provider>
            {/* </PersistGate> */}
          </ThemeProvider>
        </GoogleOAuthProvider>
      </Provider>
    </div>
  );
};

export default AppProvider;
