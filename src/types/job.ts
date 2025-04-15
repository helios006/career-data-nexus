
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  jobType: string;
  datePosted: string;
  companyLogo?: string;
  sourceWebsite: string;
  applicationUrl: string;
}

export type JobFilters = {
  search: string;
  location: string;
  jobType: string;
  salaryMin: number;
  salaryMax: number;
  datePosted: string;
};

export const JOB_TYPES = [
  'Full-time',
  'Part-time',
  'Contract',
  'Temporary',
  'Internship',
  'Remote'
];

export const DATE_POSTED_OPTIONS = [
  'Any time',
  'Past 24 hours',
  'Past week',
  'Past month'
];
