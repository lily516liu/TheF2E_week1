import React from 'react'
import MoreBtn from '../component/MoreBtn';
import PlaceCard from '../component/PlaceCard';

function CardGroup() {
    return (
      <div>
        <div className="d-flex justify-content-between container_style">
          <div className="content_title">熱門打卡景點</div>
          <MoreBtn />
        </div>
        {/* <div className="d-flex container_style_left"> */}
          <PlaceCard />
        {/* </div> */}
      </div>
    );
}

export default CardGroup
