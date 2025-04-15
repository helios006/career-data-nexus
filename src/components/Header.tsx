
import { Link } from "react-router-dom";
import { BriefcaseIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Browse Jobs", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="border-b border-jobgray-200 bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <BriefcaseIcon className="h-6 w-6 text-jobblue-600" />
          <span className="font-bold text-xl text-jobgray-800">Job Data Nexus</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-jobgray-600 hover:text-jobblue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Button className="bg-jobblue-600 hover:bg-jobblue-700">
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col mt-8 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-jobgray-600 hover:text-jobblue-600 transition-colors py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-jobblue-600 hover:bg-jobblue-700 mt-2">
                Get Started
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
