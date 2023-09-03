import './footer.scss';
import { FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { BiChevronRight } from 'react-icons/bi';
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className="footer">
            <div className="ImgDiv">
                <img src="https://i.ibb.co/F4V1Yqf/light-garden-luxury-pool-nature.jpg" alt="" />
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos='fade-up' className="text">
                        <small>Keep In Touch</small>
                        <h2>Travel With Us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos='fade-up' type="text" placeholder='Enter Email Address' />
                        <button data-aos='fade-up' className='btn flex' type='submit'>
                            Send <FiSend className='icon' />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <MdOutlineTravelExplore className='icon'/>   TravelERA.
                            </a>
                        </div>

                        <div data-aos='fade-up' className="footerParagraph">
                            Experience the awe-inspiring beauty of the Grand Canyon. Marvel at the vast landscapes, hike scenic trails, and witness breathtaking sunrises and sunsets
                        </div>

                        <div data-aos='fade-up' className="footerSocial flex">
                            <AiOutlineTwitter className='icon' />
                            <AiFillYoutube className='icon' />
                            <AiFillInstagram className='icon' />
                            <AiFillLinkedin className='icon' />
                        </div>

                    </div>


                    <div className="footerLinks grid">
                            {/* Group One */}
                        <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
                            <span className="groupTitle">Our Agency</span>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> Services
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> Insurance
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> Agency
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> Tourism
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> Payment
                            </li>
                        </div>
                            {/* Group Two */}
                        <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                            <span className="groupTitle">PartNers</span>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> Bookings
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> RentCars
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> HostelWorld
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> Trivago
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> TriAdvisor
                            </li>
                        </div>
                            {/* Group Three */}
                        <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
                            <span className="groupTitle">Last Minute</span>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> London
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> California
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> Indonesia
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> Europe
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className='icon' /> Australia
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                       <small>Best Travel Website</small>
                       <small>@Copyright Reserved - BookingERA 2023</small>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;