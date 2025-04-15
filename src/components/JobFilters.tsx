
import { useState } from "react";
import { JobFilters as JobFilterType, JOB_TYPES, DATE_POSTED_OPTIONS } from "../types/job";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { FilterIcon, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

interface JobFiltersProps {
  onFilterChange: (filters: JobFilterType) => void;
  isMobile?: boolean;
}

const JobFilters = ({ onFilterChange, isMobile = false }: JobFiltersProps) => {
  const [filters, setFilters] = useState<JobFilterType>({
    search: "",
    location: "",
    jobType: "",
    salaryMin: 0,
    salaryMax: 200000,
    datePosted: "Any time",
  });

  const handleChange = (name: keyof JobFilterType, value: string | number) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSalaryChange = (values: number[]) => {
    setFilters((prev) => ({
      ...prev,
      salaryMin: values[0],
      salaryMax: values[1],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleReset = () => {
    const resetFilters: JobFilterType = {
      search: "",
      location: "",
      jobType: "",
      salaryMin: 0,
      salaryMax: 200000,
      datePosted: "Any time",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const FiltersContent = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="City, state, or remote"
            value={filters.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="jobType">Job Type</Label>
          <Select 
            value={filters.jobType} 
            onValueChange={(value) => handleChange("jobType", value)}
          >
            <SelectTrigger id="jobType">
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All job types</SelectItem>
              {JOB_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="datePosted">Date Posted</Label>
          <Select 
            value={filters.datePosted} 
            onValueChange={(value) => handleChange("datePosted", value)}
          >
            <SelectTrigger id="datePosted">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              {DATE_POSTED_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex justify-between">
            <Label>Salary Range</Label>
            <span className="text-sm text-jobgray-500">
              ${filters.salaryMin.toLocaleString()} - ${filters.salaryMax.toLocaleString()}
            </span>
          </div>
          <div className="pt-6 px-2">
            <Slider
              defaultValue={[filters.salaryMin, filters.salaryMax]}
              max={200000}
              step={5000}
              value={[filters.salaryMin, filters.salaryMax]}
              onValueChange={handleSalaryChange}
              className="my-4"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button type="submit" className="flex-1 bg-jobblue-600 hover:bg-jobblue-700">
          Apply Filters
        </Button>
        <Button type="button" variant="outline" onClick={handleReset} className="border-jobgray-300">
          <X className="h-4 w-4 mr-1" /> Reset
        </Button>
      </div>
    </form>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex items-center border-jobgray-300">
            <FilterIcon className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Job Filters</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FiltersContent />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-jobgray-200 sticky top-4">
      <h3 className="font-medium text-lg mb-4 text-jobgray-800">Filter Jobs</h3>
      <FiltersContent />
    </div>
  );
};

export default JobFilters;
