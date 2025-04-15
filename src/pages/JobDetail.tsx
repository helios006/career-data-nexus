
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mockJobs } from "@/data/mockJobs";
import { Job } from "@/types/job";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  MapPinIcon, 
  BriefcaseIcon,
  ChevronLeftIcon,
  ExternalLinkIcon,
  BookmarkIcon,
  ShareIcon
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call by waiting a bit
    const timer = setTimeout(() => {
      const foundJob = mockJobs.find((j) => j.id === id);
      setJob(foundJob || null);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-jobgray-50 flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto py-8 px-4">
          <div className="flex justify-center items-center h-full">
            <div className="animate-pulse space-y-6 w-full max-w-3xl">
              <div className="h-8 bg-jobgray-200 rounded w-3/4"></div>
              <div className="h-6 bg-jobgray-200 rounded w-1/2"></div>
              <div className="h-64 bg-jobgray-200 rounded"></div>
              <div className="h-24 bg-jobgray-200 rounded"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-jobgray-50 flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto py-8 px-4">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-semibold text-jobgray-700 mb-4">Job Not Found</h2>
            <p className="text-jobgray-500 mb-6">The job listing you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button className="bg-jobblue-600 hover:bg-jobblue-700">
                <ChevronLeftIcon className="mr-2 h-4 w-4" />
                Back to Jobs
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-jobgray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center text-jobgray-600 hover:text-jobblue-600 mb-6">
            <ChevronLeftIcon className="h-4 w-4 mr-1" />
            Back to Jobs
          </Link>

          {/* Job header */}
          <div className="bg-white rounded-lg border border-jobgray-200 p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-16 h-16 overflow-hidden rounded-md flex items-center justify-center bg-jobgray-100 flex-shrink-0">
                  {job.companyLogo ? (
                    <img src={job.companyLogo} alt={`${job.company} logo`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl font-semibold text-jobgray-500">{job.company.substring(0, 2)}</span>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-jobgray-800 mb-1">{job.title}</h1>
                  <p className="text-lg text-jobgray-600 mb-2">{job.company}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge className="bg-jobblue-100 text-jobblue-700 hover:bg-jobblue-200">{job.jobType}</Badge>
                    <span className="text-sm text-jobgray-500">Source: {job.sourceWebsite}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="border-jobgray-300">
                  <BookmarkIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-jobgray-300">
                  <ShareIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Job details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-lg border border-jobgray-200 p-6">
                <h2 className="text-xl font-semibold text-jobgray-800 mb-4">Job Description</h2>
                <p className="text-jobgray-700 mb-6 whitespace-pre-line">{job.description}</p>
                
                <h3 className="text-lg font-semibold text-jobgray-800 mb-3">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-jobgray-700">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Side content */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-jobgray-200 p-6">
                <h2 className="text-lg font-semibold text-jobgray-800 mb-4">Job Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-jobgray-600 mb-1">
                      <MapPinIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Location</span>
                    </div>
                    <p className="text-jobgray-800 pl-6">{job.location}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-jobgray-600 mb-1">
                      <BriefcaseIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Salary</span>
                    </div>
                    <p className="text-jobgray-800 pl-6">{job.salary}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-jobgray-600 mb-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Posted On</span>
                    </div>
                    <p className="text-jobgray-800 pl-6">{formatDate(job.datePosted)}</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <Button className="w-full bg-jobblue-600 hover:bg-jobblue-700" asChild>
                  <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">
                    Apply Now
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-jobblue-50 rounded-lg border border-jobblue-100 p-6">
                <h3 className="text-jobblue-800 font-medium mb-2">About Job Data Nexus</h3>
                <p className="text-sm text-jobblue-700 mb-4">
                  We aggregate job listings from various sources to help you find the right opportunities faster.
                </p>
                <p className="text-xs text-jobblue-600">
                  Note: This is a demo application with mock data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-jobgray-200 py-6 px-4 mt-8">
        <div className="container mx-auto text-center text-jobgray-500 text-sm">
          <p>© 2025 Job Data Nexus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default JobDetail;
