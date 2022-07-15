import { AppStateProvider } from "./contexts/app-state";
import Layout from "./layout";

function App() {
  return (
    <AppStateProvider>
      <Layout />
    </AppStateProvider>
  );
}

export default App;
