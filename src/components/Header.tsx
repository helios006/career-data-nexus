
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Lock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-jobgray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-jobblue-600">Job Data Nexus</span>
        </Link>
        
        <nav>
          <Link to="/admin">
            <Button variant="outline" size="sm" className="flex items-center">
              <Lock className="mr-2 h-4 w-4" />
              Admin
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
