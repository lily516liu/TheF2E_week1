import React from "react";
import home_pic1 from '../img/home_pic1.jpg'
import {BsStarFill,BsStarHalf,BsStar,BsHeart} from "react-icons/bs"
import SmallTag from "./SmallTag";
import axios from 'axios';
import { useEffect,useState } from "react";


function PlaceCard() {
  // 熱門打卡景點 data
  const [popPlace, setPopPlace] = useState([]);

  useEffect(()=>{
    // 抓取景點api資料
    async function getplace(){
      try{
        // let response = await axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=4&$format=JSON');
        // console.log('response.data', response.data); 
        // setPopPlace(response.data);
        // setPopPlace(123);
      }catch(e){
        console.log(e);
      }
    }
    getplace()
  },[])

  useEffect(()=>{
    console.log("popPlace",popPlace);
  },[popPlace])


  

  return (
    <div className="d-flex container_style_left">
    {popPlace.map((place,i)=>{
      return (
        <div className="place_card">
          <div className="place_card_img">
            <img src={place.Picture.PictureUrl1} alt="place_card_img"></img>
            <div className="add_heart pt-1">
              <BsHeart />
            </div>
          </div>
          <div className="place_card_text">{place.Name}</div>
          <div className="place_card_stars d-flex justify-content-between">
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarHalf></BsStarHalf>
            <BsStar></BsStar>
          </div>
          <div className="place_card_tag d-flex">
            <p className="small_tag_text">{place.Address}</p>
          </div>
        </div>
      );
    })}
    </div>
  );
}

export default PlaceCard;
