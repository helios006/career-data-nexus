
import { FileSearchIcon } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: () => void;
  actionLabel?: string;
}

const EmptyState = ({
  title = "No jobs found",
  description = "Try adjusting your search or filter criteria to find more job listings.",
  action,
  actionLabel = "Clear filters",
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="rounded-full bg-jobgray-100 p-4 mb-4">
        <FileSearchIcon className="h-10 w-10 text-jobgray-400" />
      </div>
      <h3 className="text-xl font-semibold text-jobgray-800 mb-2">{title}</h3>
      <p className="text-jobgray-500 max-w-md mb-6">{description}</p>
      {action && (
        <Button onClick={action} variant="outline" className="border-jobgray-300">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
