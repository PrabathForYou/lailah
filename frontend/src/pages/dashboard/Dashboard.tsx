import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../routes/AppRoute";

const Dashboard = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};

export default Dashboard;