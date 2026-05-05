import { createContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login/login";
import Dashboard from "../pages/dashboard/Dashboard";
import { getAuthToken } from "../services/authService";

const AuthenticationContext = createContext({
  isAuthenticated: false,
});

const AppRoutes = () => {
  const isAuthenticated = Boolean(getAuthToken());

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthenticationContext.Provider>
  );
};

export default AppRoutes;
export { AuthenticationContext };