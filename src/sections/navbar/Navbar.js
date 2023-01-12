import React from 'react'
import './Navbar.css'
import logo from '../../assets/jailson-logo.png'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { IoIosColorPalette } from 'react-icons/io'
import data from './data'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <Box className="container nav__container" p={0} m={0}>
            <a href="#" className='nav__logo'>
              <img src={logo} alt="logo" id='nav-img' />
            </a>      
            <ul className='nav__menu'>
              {data.map((item)=>{ return(
                <li key={item.id}><a href={item.link}>{item.title}</a></li>
              )
                
              })}
            </ul>
            <button className='theme__icon'> <IoIosColorPalette /> </button>
      </Box>
    </nav>
  )
}

export default Navbar