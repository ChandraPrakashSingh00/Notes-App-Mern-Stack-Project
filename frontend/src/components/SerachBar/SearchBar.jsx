import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="flex items-center w-80 px-4 bg-slate-100 rounded-md">
      
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent py-2 outline-none"
        value={value}
        onChange={onChange}
        aria-label="Search Notes"
      />
      
      {value && (
        <IoMdClose
          className="text-xl text-slate-500 mr-3 cursor-pointer hover:text-black"
          onClick={onClearSearch}
        />
      )}
      
      <FaMagnifyingGlass
        className="text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
