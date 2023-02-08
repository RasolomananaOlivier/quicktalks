import React, { PropsWithChildren, useState } from "react";

import { Provider } from "react-redux";
import { store } from "../redux/store";

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
      </Provider>
    </div>
  );
};

export default AppProvider;
