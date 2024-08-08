import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState, ChangeEvent } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex border rounded-lg bg-neutral-800 border-neutral-700">
      <div className="flex items-center justify-center w-[50px]">
        <MagnifyingGlassIcon className="w-5 h-5 text-neutral-600" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        className="flex-grow py-2 mr-2 text-base text-white bg-transparent rounded-lg outline-none"
      />
    </div>
  );
};

export default SearchInput;
