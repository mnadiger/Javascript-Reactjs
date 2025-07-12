import React, { useState, useRef, useCallback } from 'react';
import { statesOfIndia, filterStates } from './util';
import DropdownSearch from './DropdownSearch';

/**
 * DisplaySearchComponent component
 * Handles search and selection, but does not display the selected term
 */
const DisplaySearchComponent = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStates, setFilteredStates] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Debounce logic
  const debounceRef = useRef();

  const debouncedFilter = useCallback((value) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      if (value.length > 0) {
        const filtered = filterStates(statesOfIndia, value);
        setFilteredStates(filtered);
        setShowDropdown(true);
      } else {
        setFilteredStates([]);
        setShowDropdown(false);
      }
    }, 400); // 400ms debounce
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedFilter(value);
  };

  const handleSelectState = (state) => {
    setSearchTerm(state);
    setShowDropdown(false);
    if (onSelect) onSelect(state);
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredStates([]);
    setShowDropdown(false);
    if (onSelect) onSelect("");
  };

  return (
    <DropdownSearch
      label="Search Indian State..."
      value={searchTerm}
      onChange={handleInputChange}
      onSelect={handleSelectState}
      onClear={handleClear}
      options={filteredStates}
      showDropdown={showDropdown && filteredStates.length > 0}
      onFocus={() => searchTerm && setShowDropdown(true)}
    />
  );
};

export default DisplaySearchComponent;
