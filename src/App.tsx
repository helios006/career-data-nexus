
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobDetail from "./pages/JobDetail";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminJobList from "./pages/admin/AdminJobList";
import AdminJobEdit from "./pages/admin/AdminJobEdit";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/jobs" element={<AdminJobList />} />
          <Route path="/admin/jobs/new" element={<AdminJobEdit />} />
          <Route path="/admin/jobs/edit/:id" element={<AdminJobEdit />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
