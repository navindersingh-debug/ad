import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { DashboardSidebar } from "./components/DashboardSidebar";
import { DashboardContent } from "./components/DashboardContent";

type Page = "login" | "register" | "dashboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("login");
  const [userRole, setUserRole] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("home");

  const handleLogin = (role: string) => {
    setUserRole(role);
    setCurrentPage("dashboard");
    setActiveTab("home");
  };

  const handleRegister = (role: string) => {
    setUserRole(role);
    setCurrentPage("dashboard");
    setActiveTab("home");
  };

  const handleLogout = () => {
    setCurrentPage("login");
    setUserRole("");
    setActiveTab("home");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  if (currentPage === "login") {
    return (
      <LoginPage 
        onLogin={handleLogin}
        onSwitchToRegister={() => setCurrentPage("register")}
      />
    );
  }

  if (currentPage === "register") {
    return (
      <RegisterPage 
        onRegister={handleRegister}
        onSwitchToLogin={() => setCurrentPage("login")}
      />
    );
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <DashboardSidebar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        userRole={userRole}
        onLogout={handleLogout}
      />
      <div className="flex-1 overflow-y-auto">
        <DashboardContent
          activeTab={activeTab}
          userRole={userRole}
        />
      </div>
    </div>
  );
}