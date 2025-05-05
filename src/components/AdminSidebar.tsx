
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart2,
  CalendarDays,
  FileText,
  Users,
  Database,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const AdminSidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      label: "Dashboard",
      icon: <BarChart2 className="h-5 w-5" />,
      href: "/admin",
    },
    {
      label: "Campaigns",
      icon: <CalendarDays className="h-5 w-5" />,
      href: "/admin/campaigns",
    },
    {
      label: "Users",
      icon: <Users className="h-5 w-5" />,
      href: "/admin/users",
    },
    {
      label: "Analytics",
      icon: <BarChart2 className="h-5 w-5" />,
      href: "/admin/analytics",
    },
    {
      label: "Reports",
      icon: <FileText className="h-5 w-5" />,
      href: "/admin/reports",
    },
    {
      label: "Database",
      icon: <Database className="h-5 w-5" />,
      href: "/admin/database",
    },
  ];

  return (
    <aside className="w-64 h-screen bg-spiritual-600 text-white flex flex-col">
      <div className="p-4 border-b border-spiritual-500/30">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full spiritual-gradient flex items-center justify-center">
            <span className="text-white font-bold text-lg">UC</span>
          </div>
          <Link to="/" className="font-poppins font-semibold text-xl">
            Unity Connect
          </Link>
        </div>
      </div>

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-spiritual-300" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-spiritual-500/20 text-white placeholder:text-spiritual-300/70 rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-spiritual-300"
          />
        </div>
      </div>

      <nav className="flex-1 py-2 overflow-y-auto">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                asChild
                className={cn(
                  "w-full justify-start px-4 text-base font-normal h-12 rounded-none",
                  isActive(item.href)
                    ? "bg-spiritual-500/30 text-white"
                    : "text-spiritual-300 hover:bg-spiritual-500/20 hover:text-white"
                )}
              >
                <Link to={item.href} className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-spiritual-500/30">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-spiritual-300 flex items-center justify-center">
            <span className="font-semibold text-spiritual-600">A</span>
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">Admin User</p>
            <p className="text-spiritual-300 text-xs">admin@unityconnect.org</p>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-spiritual-300 hover:text-white hover:bg-spiritual-500/30"
            onClick={() => {
              logout();
              window.location.href = '/login';
            }}
          >
            Log out
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
