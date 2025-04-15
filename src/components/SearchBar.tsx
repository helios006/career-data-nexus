
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search job titles, companies, or keywords..." }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="relative flex w-full max-w-3xl">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="pr-10 w-full rounded-r-none border-r-0 focus-visible:ring-jobblue-500"
        />
        <Button 
          type="submit" 
          className="rounded-l-none bg-jobblue-600 hover:bg-jobblue-700"
        >
          <SearchIcon className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
