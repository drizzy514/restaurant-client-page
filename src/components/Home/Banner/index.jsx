import React from 'react';
import './styles.css';
import bannerImg from './banner.png';
import Logo from '../../common/Logo';
import { Link } from 'react-router-dom';
import {DropdownButton, Dropdown} from'react-bootstrap'
import { useState, useEffect } from 'react';
const Banner = ({ handleScrollMenu }, id) => {
  const [fastFood, setFastFood]= useState([])
  // console.log(id)
  const [nationalFood, setNationalFood]= useState([])
  // const [foodName, setFoodName]  = useState('')
  useEffect(() => { 
    fetch('http://localhost:4000/api/foods/fastfood')
    .then(response => response.json() )
    .then(data => setFastFood(data))
 }, [])
  useEffect(() => {
    fetch('http://localhost:4000/api/foods/nationalfood')
    .then(response => response.json() )
    .then(data => setNationalFood(data))
 }, [])
  return <>
  

<header>
  
  <div className='header-content'>
    <Logo />
    <div className='dropdowns'> 
    <DropdownButton id="dropdown-basic-button" className="fast-foods" title="Fast foods">
        {
          fastFood.map((c) => {
            return <>
              <Dropdown.Item href="/food" >{c.name}</Dropdown.Item>

              </>
          })
        }
     
  </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Milliy Taomlar">
    {
          nationalFood.map((c) => {
            return <>
              <Dropdown.Item href="/nationalfood">{c.name}</Dropdown.Item>

              </>
          })
        }
  </DropdownButton>
    </div>
    <div className='content-main'>
      
    
      <h1>Delicious food for your cravings</h1>
      <p>We made fresh and healthy meals with different recipes</p>
      <button onClick={handleScrollMenu}>
        View Menu <i className='fas fa-long-arrow-alt-right'></i>
      </button>

    </div>
  </div>
  <img className='header-img' src={bannerImg} alt='banner' />
</header>

  </>
};

export default Banner;
