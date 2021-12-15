import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data?.filter((posts) => posts.title.toLowerCase().includes(searchWord.toLowerCase()));

    if (searchWord === '') {
      setFilteredData({});
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData({});
    setWordEntered('');
  };
  console.warn(data);

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
            {filteredData?.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData?.length !== 0 && (
          <div className="dataResult">
            {filteredData?.splice(0, 15).map((posts) => (
              <>
                <div className="dataItem">{posts.location}</div>
                <div className="dataItem">{posts.title}</div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// SearchBar.propTypes = {
//   placeholder: PropTypes.shape(PropTypes.obj).isRequired,
//   data: PropTypes.func.isRequired,
// };

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// import React from 'react';
// export default function SearchFilter() {
//   return (
//     <div>
//       <div className="input-location-search">
//         <input
//           type="text"
//           placeholder="Search by Location"
//           {}
//         />
//       </div>
//       {/* <div>
//         {searchValue.filter((location) => location.match(new RegExp('i')))}
//       </div> */}
//     </div>
//   );
// }
