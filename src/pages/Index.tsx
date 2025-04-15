
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import JobCard from "@/components/JobCard";
import JobFilters from "@/components/JobFilters";
import EmptyState from "@/components/EmptyState";
import { mockJobs } from "@/data/mockJobs";
import { Job, JobFilters as JobFilterType } from "@/types/job";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<JobFilterType>({
    search: "",
    location: "",
    jobType: "",
    salaryMin: 0,
    salaryMax: 200000,
    datePosted: "Any time",
  });
  const isMobile = useIsMobile();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilters({ ...filters, search: query });
  };

  const handleFilterChange = (newFilters: JobFilterType) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setFilters({
      search: "",
      location: "",
      jobType: "",
      salaryMin: 0,
      salaryMax: 200000,
      datePosted: "Any time",
    });
  };

  useEffect(() => {
    // Filter jobs based on current filters and search query
    let results = [...jobs];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchLower) ||
          job.company.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower)
      );
    }

    if (filters.location) {
      const locationLower = filters.location.toLowerCase();
      results = results.filter((job) =>
        job.location.toLowerCase().includes(locationLower)
      );
    }

    if (filters.jobType) {
      results = results.filter((job) => job.jobType === filters.jobType);
    }

    // Filter by salary (assuming salary format like "$90,000 - $120,000")
    results = results.filter((job) => {
      const salaryText = job.salary;
      const salaryMatch = salaryText.match(/\$([0-9,]+)\s*-\s*\$([0-9,]+)/);
      
      if (salaryMatch) {
        const minSalary = parseInt(salaryMatch[1].replace(/,/g, ""), 10);
        const maxSalary = parseInt(salaryMatch[2].replace(/,/g, ""), 10);
        
        // Check if the salary range overlaps with the filter range
        return (
          (minSalary >= filters.salaryMin && minSalary <= filters.salaryMax) ||
          (maxSalary >= filters.salaryMin && maxSalary <= filters.salaryMax) ||
          (minSalary <= filters.salaryMin && maxSalary >= filters.salaryMax)
        );
      }
      
      return true; // Include if can't parse salary
    });

    // Filter by date posted
    if (filters.datePosted !== "Any time") {
      const now = new Date();
      let dateLimit: Date;
      
      switch (filters.datePosted) {
        case "Past 24 hours":
          dateLimit = new Date(now.setDate(now.getDate() - 1));
          break;
        case "Past week":
          dateLimit = new Date(now.setDate(now.getDate() - 7));
          break;
        case "Past month":
          dateLimit = new Date(now.setMonth(now.getMonth() - 1));
          break;
        default:
          dateLimit = new Date(0); // Beginning of time
      }
      
      results = results.filter((job) => {
        const jobDate = new Date(job.datePosted);
        return jobDate >= dateLimit;
      });
    }

    setFilteredJobs(results);
  }, [jobs, filters]);

  return (
    <div className="min-h-screen bg-jobgray-50 flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-jobblue-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect Job Match
            </h1>
            <p className="text-jobgray-100 mb-8 max-w-2xl mx-auto">
              Job Data Nexus aggregates job listings from multiple sources to help you find the right opportunity faster.
            </p>
            <div className="max-w-2xl mx-auto">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="container mx-auto py-8 px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters - Desktop */}
            <div className="hidden lg:block lg:w-1/4">
              <JobFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Jobs List */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-jobgray-800">
                  {filteredJobs.length} Jobs Available
                </h2>
                {/* Mobile filters */}
                <div className="lg:hidden">
                  <JobFilters onFilterChange={handleFilterChange} isMobile={true} />
                </div>
              </div>

              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <EmptyState action={resetFilters} />
              )}
            </div>
          </div>
        </section>
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

export default Index;
