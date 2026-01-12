import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login/Login";

const AppRoutes = () => {
  const isAuthenticated = false; // replace with real auth logic

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
{/* 
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      /> */}

      {/* Default route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
