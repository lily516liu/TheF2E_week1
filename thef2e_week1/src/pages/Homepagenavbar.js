import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button,Row,Col} from 'react-bootstrap'
import Logo from '../component/Logo'
import { Link } from 'react-router-dom';
import SearchAll from '../component/SearchAll';
import SearchLocation from '../component/SearchLocation';
import SearchRestaurant from '../component/SearchRestaurant';
import SearchHotel from '../component/SearchHotel';
import MyTravel from '../component/MyTravel';


function Homepagenavbar() {
  return (
    <div>
      <div bg="light" className="home_nav">
          <div className="d-flex justify-content-start align-items-center nav_left col-6">
            <Navbar.Brand href="#">
              <Logo />
            </Navbar.Brand>
            <SearchAll />
          </div>
          <div className="d-flex align-items-center nav_right col-6">
            <SearchLocation />
            <SearchRestaurant />
            <SearchHotel />
            <MyTravel />
          </div>
      </div>
    </div>
  );
}

export default Homepagenavbar
