import './About.css';
import { FaHotel, FaHouseUser } from 'react-icons/fa';
import {   RiHotelBedFill } from 'react-icons/ri';


import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="container-xxl pt-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 data-aos='fade-up' className="section-title text-start text-primary text-uppercase">About Us</h6>
                        <h1 data-aos='fade-up' className="mb-4">Welcome to <span className="text-color text-uppercase">HotelERA</span></h1>
                        <p data-aos='fade-up' className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        {/* Rest of the code */}
                        <div className="row g-3 pb-4">
                            <div data-aos='fade-up' className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <FaHotel className='fs-1 textColor mb-2'/>
                                        <h2 className="mb-1" data-toggle="counter-up">11234</h2>
                                        <p className="mb-0">Hotels</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='fade-up' className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                    <FaHouseUser className='fs-1 textColor mb-2'/>
                                        <h2 className="mb-1" data-toggle="counter-up">10034</h2>
                                        <p className="mb-0">Apartments</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='fade-up' className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                    <RiHotelBedFill className='fs-1 textColor mb-2'/>
                                        <h2 className="mb-1" data-toggle="counter-up">25434</h2>
                                        <p className="mb-0">Resorts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="allBtn py-3 px-5 mt-2" href="">Explore More</a>
                    </div>
                    <div data-aos='fade-up' className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="https://i.ibb.co/mGVkrsD/about-1.jpg" style={{ marginTop: '25%' }} />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="https://i.ibb.co/h2jsqjV/about-2.jpg" />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="https://i.ibb.co/PgRrxBx/about-3.jpg" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="https://i.ibb.co/4ZvZs1V/about-4.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;