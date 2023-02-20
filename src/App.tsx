import { AppNavigation } from "./components/AppNavigation";
import AppProvider from "./components/AppProvider";
import "typeface-poppins";
import { baseURL } from "./data/baseUrl";

function App() {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  );
}

export default App;
