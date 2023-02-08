import { AppNavigation } from "./components/AppNavigation";
import AppProvider from "./components/AppProvider";

function App() {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  );
}

export default App;
