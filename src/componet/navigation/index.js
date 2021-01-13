import React from 'react';
import './nav.css';


const Nav = () => {
  return (
    <header className='navi'>
    <nav>
        <ul id="navi">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <div class="name">Barbaro Fernando Thinkful</div>
</header>
  )
}
export default Nav