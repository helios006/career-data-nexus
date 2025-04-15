
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { FileSearchIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-jobgray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="mx-auto bg-jobgray-100 rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6">
            <FileSearchIcon className="h-12 w-12 text-jobgray-400" />
          </div>
          <h1 className="text-3xl font-bold text-jobgray-800 mb-3">Page Not Found</h1>
          <p className="text-jobgray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-jobblue-600 hover:bg-jobblue-700">
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-jobgray-200 py-6 px-4">
        <div className="container mx-auto text-center text-jobgray-500 text-sm">
          <p>© 2025 Job Data Nexus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
