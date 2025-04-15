
import { Link, useLocation } from "react-router-dom";
import { Briefcase, Home, LogOut, Settings } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "bg-slate-800" : "";
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="bg-slate-900 text-white w-full md:w-64 md:min-h-screen">
        <div className="p-4 flex justify-between items-center md:block">
          <Link to="/admin" className="text-xl font-bold flex items-center">
            <Briefcase className="mr-2" /> Job Admin
          </Link>
          <button className="md:hidden">Menu</button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/admin" 
                className={`flex items-center p-2 rounded-md hover:bg-slate-800 ${isActive('/admin')}`}
              >
                <Home className="mr-2 h-5 w-5" /> Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/jobs" 
                className={`flex items-center p-2 rounded-md hover:bg-slate-800 ${isActive('/admin/jobs')}`}
              >
                <Briefcase className="mr-2 h-5 w-5" /> Job Listings
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/settings" 
                className={`flex items-center p-2 rounded-md hover:bg-slate-800 ${isActive('/admin/settings')}`}
              >
                <Settings className="mr-2 h-5 w-5" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto p-4 border-t border-slate-800">
          <Link to="/" className="flex items-center p-2 rounded-md hover:bg-slate-800">
            <LogOut className="mr-2 h-5 w-5" /> Logout
          </Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
