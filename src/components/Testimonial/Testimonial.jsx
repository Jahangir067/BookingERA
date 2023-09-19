import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className='container py-4'>
            <div className="text-center">
                    <h6 className="section-title text-center text-primary px-3">Testimonial</h6>
                    <h1 className="mb-5">Our Clients Say!!!</h1>
                </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper pb-5"
            >


                <SwiperSlide>
                    <div className="testimonial-item bgCarusoel text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://i.ibb.co/xFCDRLP/team-2.jpg" style={{ width: '80px', height: '80px' }} />
                        <h5 className="mb-0">Sarah T</h5>
                        <p>New York, USA</p>
                        <p className="mb-0">I had a fantastic stay at your hotel! The booking process was a breeze, and the room was clean and comfortable. The staff was incredibly friendly and helpful. I'll definitely be back</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-item bgCarusoel text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://i.ibb.co/hVrmW40/team-1.jpg" style={{ width: '80px', height: '80px' }} />
                        <h5 className="mb-0">John M.</h5>
                        <p>Paris, France</p>
                        <p className="mb-0">The website made it easy to find the perfect room for my trip. The photos and descriptions were accurate, and the prices were competitive. Great experience overall!!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-item bgCarusoel text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://i.ibb.co/42kdCKR/team-4.jpg" style={{ width: '80px', height: '80px' }} />
                        <h5 className="mb-0">Lisa R.</h5>
                        <p>Los Angeles, USA</p>
                        <p className="mb-0">I appreciated the flexibility in booking options. Being able to choose between different room types and add-ons made planning my vacation a breeze. Thank you</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-item bgCarusoel text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://i.ibb.co/k3F2j09/team-3.jpg" style={{ width: '80px', height: '80px' }} />
                        <h5 className="mb-0">David H.</h5>
                        <p>Sydney, Australia</p>
                        <p className="mb-0">The hotel's location was fantastic, and I loved the view from my room. The booking confirmation was sent promptly, and the check-in process was smooth. Highly recommended</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-item bgCarusoel text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://i.ibb.co/yWNmFm0/testimonial-1.jpg" style={{ width: '80px', height: '80px' }} />
                        <h5 className="mb-0">Emily S.</h5>
                        <p>Toronto, Canada</p>
                        <p className="mb-0">I had to make some changes to my reservation, and the customer support team was super helpful and accommodating. They made the process stress-free. Great service!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-item bgCarusoel text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://i.ibb.co/D7dYXL3/testimonial-4.jpg" style={{ width: '80px', height: '80px' }} />
                        <h5 className="mb-0">Maria L.</h5>
                        <p>London, United Kingdom</p>
                        <p className="mb-0">I loved the special offers and discounts available on the website. I saved money on my stay, which was a pleasant surprise. Keep up the good work!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-item bgCarusoel text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://i.ibb.co/JCf8n54/testimonial-3.jpg" style={{ width: '80px', height: '80px' }} />
                        <h5 className="mb-0">Michael D.</h5>
                        <p>Berlin, Germany</p>
                        <p className="mb-0">The website's mobile responsiveness was a big plus for me. I could easily browse and book from my phone while on the go. Will definitely use your site again.</p>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Testimonial;
