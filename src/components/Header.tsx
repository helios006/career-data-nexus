
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="bg-white border-b border-jobgray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-jobblue-600">Job Data Nexus</span>
        </Link>
        
        <nav className="flex gap-4">
          {user ? (
            <>
              <Link to="/admin">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Lock className="mr-2 h-4 w-4" />
                  Admin
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="outline" size="sm" className="flex items-center">
                <Lock className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
