import './navbar.css';
import './navbar.scss';
import { MdTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';


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
                <Link to='/' href="#" className='logo flex text-decoration-none'>
                    <h1 className='text-secondary'><MdTravelExplore className='icon'></MdTravelExplore>  TravelERA</h1>
                </Link>
            </div>

            <div className={active}>
              <ul className="navLists flex">

                <li className="navItem">
                    <Link to='/' href="#" className="navLink text-decoration-none fs-6">Home</Link>
                </li>

                <li className="navItem">
                    <Link to='/guide' href="#" className="navLink text-decoration-none fs-6">Travel Guide</Link>
                </li>
                
                <li className="navItem">
                    <Link to='/about' href="#" className="navLink text-decoration-none fs-6">About</Link>
                </li>

                <li className="navItem">
                    <Link to='/contact' href="#" className="navLink text-decoration-none fs-6">Contact</Link>
                </li>

                <button className='allBtn'>
                    <Link href="#" className='text-decoration-none'>Book Now</Link>
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