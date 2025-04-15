
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart4, Briefcase, Users } from "lucide-react";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage your job listings and monitor statistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-muted-foreground mt-1">+5 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">854</div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <BarChart4 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.3%</div>
            <p className="text-xs text-muted-foreground mt-1">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Button asChild className="w-full md:w-auto">
          <Link to="/admin/jobs">Manage Job Listings</Link>
        </Button>
        <Button asChild variant="outline" className="w-full md:w-auto">
          <Link to="/">View Public Site</Link>
        </Button>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
