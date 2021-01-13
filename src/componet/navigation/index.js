import React from 'react';
import './header.css';


const Header = () => {
  return (
    <header>
    <h2 className='box'>Barbaro Fernando</h2>
    <ul className='uls'>
    <li ><a href="#home">Home</a></li>
    <li ><a href="#about">About</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li ><a href="#contact">Contact</a></li>
    </ul>
    <h2 className='box'>Software Developer</h2>
    
    </header>
  )
}
export default Header