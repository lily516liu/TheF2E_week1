import React from 'react'
import HotelIcon from './HotelIcon'

function SearchHotel() {
    return (
        <div>
        <button className="search_location">
          <div className="search_location_text">找飯店</div>
          <div className="pb-1">
            <HotelIcon />
          </div>
        </button>
      </div>
    )
}

export default SearchHotel
