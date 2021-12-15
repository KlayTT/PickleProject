import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function SearchBar({ placeholder, func, data }) {
  const [wordEntered, setWordEntered] = useState('');

  const filteredData = () => data?.filter((posts) => posts.location.toLowerCase().includes(wordEntered.toLowerCase()));

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);

    if (searchWord === '') {
      func({});
    } else {
      func(filteredData);
    }
  };

  const clearInput = () => {
    func({});
    setWordEntered('');
  };

  return (
    <div>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            value={wordEntered}
            onChange={handleFilter}
            placeholder={placeholder}
          />
          <div className="searchIcon">
            {wordEntered?.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  func: PropTypes.func.isRequired,
};
