import './navbar.css';
import './navbar.scss';
import { MdTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';


const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    const removeNav = () => {
        setActive('navBar')
    }

    return (
       <section className='navBarSection'>
          <header className="header flex">

            <div className="logoDiv">
                <a href="#" className='logo flex'>
                    <h1><MdTravelExplore className='icon'></MdTravelExplore>  TravelERA</h1>
                </a>
            </div>

            <div className={active}>
              <ul className="navLists flex">

                <li className="navItem">
                    <a href="#" className="navLink">Home</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Shop</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Packages</a>
                </li>
                
                <li className="navItem">
                    <a href="#" className="navLink">About</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Contact</a>
                </li>

                <button className='btn'>
                    <a href="#">Book Now</a>
                </button>

              </ul>

              <div onClick={removeNav} className="closeNavbar">
              <AiFillCloseCircle className='icon'></AiFillCloseCircle>
              </div>
                   

            </div>

            <div onClick={showNav} className="toggleNavbar">
                 <AiOutlineMenu className='icon'></AiOutlineMenu>
            </div>

          </header>
       </section>
    );
};

export default Navbar;