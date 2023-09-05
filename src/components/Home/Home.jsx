import './home.scss';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook, FiInstagram, FiList } from 'react-icons/fi';
import { FaTripadvisor } from 'react-icons/fa';
import { TbApps } from 'react-icons/tb';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="home">
            <div className="overlay"></div>
            <img src="https://i.ibb.co/F4V1Yqf/light-garden-luxury-pool-nature.jpg" alt="" className='homeImg' />

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos='fade-up' className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos='fade-up' className="homeTitle">
                        Search Your Holidays
                    </h1>
                </div>

                <div data-aos='fade-up' className="cardDiv grid">

                    <div className="destinationInput">
                        <label htmlFor="city">Search Your Destination</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter Name Here...' />
                            <GrLocation className='icon'></GrLocation>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select Your Date: </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price: </label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max='5000' min='1000' />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className='icon'></HiFilter>
                        <span>More Filter</span>
                    </div>

                </div>

                <div data-aos='fade-up' className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className='icon' />
                        <FiInstagram className='icon' />
                        <FaTripadvisor className='icon' />

                    </div>
                    <div className="leftIcons">
                        <FiList className='icon' />
                        <TbApps className='icon' />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;