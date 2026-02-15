import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

    const currentTheme = savedTheme || "light";
    setTheme(currentTheme);

    document.documentElement.classList.remove("dark");
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify(profile));
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      navigate("/dashboard");
    }, 1000);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Toggling theme to:", newTheme); 

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    console.log("Saved to localStorage:", localStorage.getItem("theme")); 

    
    document.documentElement.classList.remove("dark");
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
    console.log("Applied class:", newTheme === "dark" ? "dark" : "light"); 
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold dark:text-white">Settings</h1>
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Back to Dashboard
          </Link>
        </div>

        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Theme</h2>
          <div className="flex items-center gap-4">
            <span className="dark:text-white">Light</span>
            <button
              onClick={toggleTheme}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                theme === "dark" ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  theme === "dark" ? "translate-x-7" : ""
                }`}
              />
            </button>
            <span className="dark:text-white">Dark</span>
          </div>
        </div>

        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Profile
          </h2>
          <form onSubmit={handleSave}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 dark:text-white">
                Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 dark:text-white">
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
              {saved && (
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded">
                  ✓ Saved!
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
