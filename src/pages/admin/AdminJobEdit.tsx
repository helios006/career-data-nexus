
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { mockJobs } from "@/data/mockJobs";
import { JOB_TYPES } from "@/types/job";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { ArrowLeft, Save } from "lucide-react";

interface JobFormValues {
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string;
  jobType: string;
  datePosted: string;
  companyLogo?: string;
  sourceWebsite: string;
  applicationUrl: string;
}

const AdminJobEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditMode = id !== undefined;
  
  const form = useForm<JobFormValues>({
    defaultValues: {
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
      requirements: "",
      jobType: "Full-time",
      datePosted: new Date().toISOString().split('T')[0],
      companyLogo: "",
      sourceWebsite: "",
      applicationUrl: "",
    },
  });

  useEffect(() => {
    if (isEditMode) {
      const job = mockJobs.find(job => job.id === id);
      
      if (job) {
        form.reset({
          title: job.title,
          company: job.company,
          location: job.location,
          salary: job.salary,
          description: job.description,
          requirements: job.requirements.join("\n"),
          jobType: job.jobType,
          datePosted: job.datePosted,
          companyLogo: job.companyLogo || "",
          sourceWebsite: job.sourceWebsite,
          applicationUrl: job.applicationUrl,
        });
      } else {
        toast({
          title: "Job not found",
          description: "The job you're trying to edit does not exist.",
          variant: "destructive",
        });
        navigate("/admin/jobs");
      }
    }
  }, [id, isEditMode, navigate, toast, form]);

  const onSubmit = (data: JobFormValues) => {
    console.log("Form submitted with data:", data);
    
    // In a real app, we would submit this data to an API
    // Instead, we'll just show a success message and redirect

    toast({
      title: isEditMode ? "Job updated" : "Job created",
      description: isEditMode 
        ? "The job listing has been updated successfully." 
        : "The new job listing has been created successfully.",
    });
    
    navigate("/admin/jobs");
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/admin/jobs")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
        </Button>
        <h1 className="text-3xl font-bold">{isEditMode ? "Edit Job" : "Add New Job"}</h1>
        <p className="text-muted-foreground mt-2">
          {isEditMode ? "Update job details" : "Create a new job listing"}
        </p>
      </div>

      <div className="bg-white p-6 rounded-md border max-w-3xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title*</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Senior Frontend Developer" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company*</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Acme Inc." {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location*</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. New York, NY or Remote" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary Range*</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. $80,000 - $100,000" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="jobType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Type*</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {JOB_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="datePosted"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Posted*</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description*</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter a detailed job description..." 
                      className="min-h-[120px]" 
                      {...field} 
                      required 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requirements*</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter job requirements, one per line..." 
                      className="min-h-[120px]" 
                      {...field} 
                      required 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="companyLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Logo URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/logo.png" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="sourceWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Source Website*</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. LinkedIn" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="applicationUrl"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Application URL*</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/apply" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/admin/jobs")}
              >
                Cancel
              </Button>
              <Button type="submit">
                <Save className="mr-2 h-4 w-4" />
                {isEditMode ? "Update Job" : "Create Job"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default AdminJobEdit;
