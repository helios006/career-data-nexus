
import { useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { mockJobs } from "@/data/mockJobs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Edit, 
  MoreVertical, 
  Plus, 
  Search, 
  Trash2 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminJobList = () => {
  const [jobs, setJobs] = useState(mockJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setJobs(jobs.filter(job => job.id !== id));
    toast({
      title: "Job deleted",
      description: "The job listing has been removed successfully.",
    });
  };

  return (
    <AdminLayout>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Job Listings</h1>
          <p className="text-muted-foreground mt-2">Manage and edit your job listings</p>
        </div>
        <Button asChild>
          <Link to="/admin/jobs/new" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Add New Job
          </Link>
        </Button>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search jobs..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="hidden md:table-cell">Location</TableHead>
              <TableHead className="hidden md:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Posted</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.company}</TableCell>
                <TableCell className="hidden md:table-cell">{job.location}</TableCell>
                <TableCell className="hidden md:table-cell">{job.jobType}</TableCell>
                <TableCell className="hidden md:table-cell">{job.datePosted}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link to={`/admin/jobs/edit/${job.id}`} className="flex items-center cursor-pointer">
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="flex items-center text-red-600 focus:text-red-600 cursor-pointer"
                        onClick={() => handleDelete(job.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default AdminJobList;
