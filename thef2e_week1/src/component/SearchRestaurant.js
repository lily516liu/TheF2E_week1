import React from 'react'
import RestaurantIcon from './RestaurantIcon'

function SearchRestaurant() {
    return (
        <div>
        <button className="search_location">
          <div className="search_location_text">找餐廳</div>
          <div className="pb-1">
            <RestaurantIcon />
          </div>
        </button>
      </div>
    )
}

export default SearchRestaurant
