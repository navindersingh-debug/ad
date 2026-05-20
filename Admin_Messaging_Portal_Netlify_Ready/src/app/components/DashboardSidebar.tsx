import { useState } from "react";
import {
  Shield,
  List,
  DollarSign,
  BarChart3,
  Network,
  ShoppingCart,
  Wrench,
  TrendingUp,
  HelpCircle,
  Link2,
  Terminal,
  CheckSquare,
  ChevronRight,
  ChevronLeft,
  Plus,
  LayoutDashboard
} from "lucide-react";

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userRole: string;
  onLogout: () => void;
}

export function DashboardSidebar({ activeTab, onTabChange, userRole, onLogout }: DashboardSidebarProps) {
  const [selectedView, setSelectedView] = useState<"admin" | "operations">("admin");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isExploreExpanded, setIsExploreExpanded] = useState(false);

  const adminModules = [
    { id: "acl", label: "Admin & ACL", icon: Shield },
    { id: "backlog", label: "Backlog", icon: List },
    { id: "finance", label: "Finance", icon: DollarSign },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "routes", label: "Route Management", icon: Network },
    { id: "sales", label: "Sales", icon: ShoppingCart },
  ];

  const operationsModules = [
    { id: "sdm", label: "SDM Tools", icon: Wrench },
    { id: "marketing", label: "Marketing", icon: TrendingUp },
    { id: "help", label: "Help", icon: HelpCircle },
    { id: "internal", label: "Internal Links", icon: Link2 },
    { id: "tech", label: "Tech", icon: Terminal },
    { id: "tasks", label: "Task Management", icon: CheckSquare },
  ];

  const currentModules = selectedView === "admin" ? adminModules : operationsModules;

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-72'} bg-[#1a2332] h-screen flex flex-col transition-all duration-300`}>
      {/* Header */}
      {!isCollapsed && (
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3 px-3 py-2 border border-white/20 rounded-lg">
            <LayoutDashboard className="h-5 w-5 text-white/80" />
            <h2 className="text-white font-medium">Account Dashboard</h2>
          </div>
        </div>
      )}

      {/* Tabs */}
      {!isCollapsed && (
        <div className="px-4 pt-4 pb-2">
          <div className="flex gap-1 bg-[#0f1419] rounded-lg p-1">
            <button
              onClick={() => setSelectedView("admin")}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedView === "admin"
                  ? "bg-transparent text-white border-b-2 border-white"
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              Admin
            </button>
            <button
              onClick={() => setSelectedView("operations")}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedView === "operations"
                  ? "bg-transparent text-white border-b-2 border-white"
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              Operations
            </button>
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <nav className="space-y-1">
          {currentModules.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
              {!isCollapsed && (
                <>
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Explore Products */}
      {!isCollapsed && (
        <div className="px-4 pb-4 border-t border-white/10 pt-4">
          <button
            onClick={() => setIsExploreExpanded(!isExploreExpanded)}
            className="w-full flex items-center justify-between px-3 py-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-sm font-medium">Explore products</span>
            <Plus className={`h-5 w-5 transition-transform ${isExploreExpanded ? 'rotate-45' : ''}`} />
          </button>
          {isExploreExpanded && (
            <div className="mt-2 space-y-1 px-3">
              <div className="text-xs text-white/50 py-1">Additional modules coming soon</div>
            </div>
          )}
        </div>
      )}

      {/* Collapse Toggle */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors ml-auto"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}