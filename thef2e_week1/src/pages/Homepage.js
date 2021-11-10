import React from 'react'
import SearchAll from '../component/SearchAll';
import PopBtn from '../component/PopBtn';
import CardGroup from '../component/CardGroup';

function Homepage() {
    return (
      <div>
        <div className="homepage_pic1 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            <div className="search_title">開始實現你的夢想旅程</div>
            <SearchAll />
          </div>
        </div>
        <CardGroup />
        <div className="pop_title_bg d-flex flex-column justify-content-center align-items-center">
            <div className="pop_title">你不能錯過的注目景點！</div>
            <PopBtn />
        </div>
        <CardGroup />
      </div>
    );
}

export default Homepage