import './Videp.css';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Video = () => {

    // useEffect( () => {
    //     Aos.init({duration: 2000})
    // }, [])

    return (
        <>
            <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
                <div className="row g-0">
                    <div className="col-md-6 bg-dark d-flex align-items-center">
                        <div className="p-5">
                            <h6 data-aos='fade-up' className="section-title text-start text-white text-uppercase mb-3">Luxury Living</h6>
                            <h1 data-aos='fade-up' className="text-white mb-4">Discover A Brand Luxurious Hotel</h1>
                            <p data-aos='fade-up' className="text-white mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <a data-aos='fade-up' href="#" className="allBtn py-md-3 px-md-5 me-3">Explore More</a>
                            <a data-aos='fade-up' href="#" className="btn btn-light rounded-pill py-md-3 px-md-5">Book Now</a>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-md-6">
                        <div className="video">
                            <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/-U5_GOl4Uhc?si=BEJF-S4k5sN3boUx" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* 16:9 aspect ratio  */}
                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </>
    );
};

export default Video;



