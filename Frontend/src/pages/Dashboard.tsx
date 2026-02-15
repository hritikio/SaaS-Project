import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getDashboard, getUsers } from "../utils/api";
import { logout } from "../utils/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apply saved theme
    const applyTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    applyTheme();

    // Listen for theme changes
    window.addEventListener("storage", applyTheme);
    return () => window.removeEventListener("storage", applyTheme);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashData, users] = await Promise.all([
          getDashboard(),
          getUsers(),
        ]);
        setUserData(dashData);
        setTotalUsers(users.length);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold dark:text-white">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm">
              Total Users
            </h3>
            <p className="text-3xl font-bold mt-2 dark:text-white">
              {totalUsers}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm">Status</h3>
            <p className="text-3xl font-bold mt-2 text-green-500">Active</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm">
              User Info
            </h3>
            <p className="text-sm mt-2 dark:text-white">
              {userData?.user?.email}
            </p>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <Link
            to="/users"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Users
          </Link>
          <Link
            to="/settings"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
