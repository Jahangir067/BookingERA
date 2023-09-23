import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

import { GrLocation } from 'react-icons/gr';
import { BsClipboardCheck } from 'react-icons/bs';
import './recommended.scss';

// import Aos from 'aos';
// import 'aos/dist/aos.css';

const Recommended = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    // useEffect(() => {
    //     Aos.init({ duration: 2000 })
    // }, [])

    return (
        <div className='container-xxl py-5'>
            <div className='container'>
                <div className='row g-0 '>
                    <div className='col-md-8'>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            
                            modules={[Pagination]}
                            className="mySwiper"
                        >

                            {data.map(singleData => (
                                <SwiperSlide className='py-5' key={singleData._id}>
                                    <div className="cardDestination" data-aos='fade-up'>
                                        <div className="cardImg">
                                            <img src={singleData.imgSrc} alt={singleData.desTitle} />
                                        </div>
                                        <div className="cardDetails">
                                            <h4 className="cardTitle">{singleData.desTitle}</h4>
                                            <span className="cardContent flex">
                                                <GrLocation className='icon' />
                                                <span className='cardName'>{singleData.location}</span>
                                            </span>
                                            <div className="cardfee flex">
                                                <div className="cardGrade">
                                                    <span>{singleData.grade}<small>+1</small></span>
                                                </div>
                                                <div className="cardPrice">
                                                    <h5>${singleData.fees}</h5>
                                                </div>
                                            </div>
                                            <button className='allBtn flex'>Details <BsClipboardCheck className='icon' /></button>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='col-md-4 py-5 '>
                        <div className='bgColor'>
                            <div data-aos='fade-up' className='recHeaderColor'>
                                <h3>Recommended Places</h3>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                            <div data-aos='fade-up' className='recMainGap'>
                                <div className='recMain'>
                                    <img src="https://i.ibb.co/nBsprkf/destination-3.jpg" className='recImage' alt="" />
                                    <h4 className="recHeader">Europe</h4>
                                </div>
                            </div>
                            <div data-aos='fade-up' className='recMainGap'>
                                <div className='recMain'>
                                    <img src="https://i.ibb.co/nBsprkf/destination-3.jpg" className='recImage' alt="" />
                                    <h4 className="recHeader">Asia</h4>
                                </div>
                            </div>
                            <div data-aos='fade-up' className='recMainGap'>
                                <div className='recMain'>
                                    <img src="https://i.ibb.co/nBsprkf/destination-3.jpg" className='recImage' alt="" />
                                    <h4 className="recHeader">Africa</h4>
                                </div>
                            </div>
                            <div data-aos='fade-up' className='recMainGap'>
                                <div className='recMain'>
                                    <img src="https://i.ibb.co/nBsprkf/destination-3.jpg" className='recImage' alt="" />
                                    <h4 className="recHeader">South America</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommended;
