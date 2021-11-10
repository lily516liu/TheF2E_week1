import React from 'react'
import LocationIcon from './LocationIcon'

function SearchLocation() {
    return (
      <div>
        <button className="search_location">
          <div className="search_location_text">找景點</div>
          <div className="pb-1">
            <LocationIcon />
          </div>
        </button>
      </div>
    );
}

export default SearchLocation
