import "./App.css";
import { Provider } from "react-redux";
import AppRoutes from "./components/routes/AppRoutes";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
