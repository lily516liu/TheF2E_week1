import React from 'react'
import { BsSearch } from "react-icons/bs";

function SearchAll() {
    return (
        <div>
            <div className="input_search d-flex align-items-center justify-content-between">
              <input
                type="search"
                className="input_text me-2"
                placeholder="想要去哪？"
              />
              <button className="border-0 bg-white d-flex align-items-center" href="#">
                <BsSearch />
              </button>
            </div>
        </div>
    )
}

export default SearchAll
