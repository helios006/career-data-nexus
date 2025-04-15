
import { Job } from "../types/job";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarIcon, MapPinIcon, BriefcaseIcon, ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <Card className="h-full job-card-hover">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 overflow-hidden rounded-md flex items-center justify-center bg-jobgray-100">
              {job.companyLogo ? (
                <img src={job.companyLogo} alt={`${job.company} logo`} className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm font-semibold text-jobgray-500">{job.company.substring(0, 2)}</span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-jobgray-800 leading-tight">{job.title}</h3>
              <p className="text-jobgray-500">{job.company}</p>
            </div>
          </div>
          <Badge className="bg-jobblue-100 text-jobblue-700 hover:bg-jobblue-200">{job.jobType}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-jobgray-600">
              <MapPinIcon className="w-4 h-4" />
              <span className="text-sm">{job.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-jobgray-600">
              <BriefcaseIcon className="w-4 h-4" />
              <span className="text-sm">{job.salary}</span>
            </div>
            <div className="flex items-center gap-1.5 text-jobgray-600">
              <CalendarIcon className="w-4 h-4" />
              <span className="text-sm">Posted {formatDate(job.datePosted)}</span>
            </div>
          </div>
          <p className="text-jobgray-700 line-clamp-3 text-sm">
            {job.description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex justify-between items-center w-full">
          <span className="text-xs text-jobgray-500">Source: {job.sourceWebsite}</span>
          <Link to={`/job/${job.id}`} className="text-jobblue-600 hover:text-jobblue-800 flex items-center gap-1 text-sm font-medium">
            View Job <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
