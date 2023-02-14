import "./App.css";
import { AppRoutes } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { TechProvider } from "./contexts/TechContext";

export const App = () => {
  return (
    <UserProvider>
      <TechProvider>
        <AppRoutes />
      </TechProvider>
    </UserProvider>
  );
};
