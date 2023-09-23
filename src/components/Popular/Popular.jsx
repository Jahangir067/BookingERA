import './Popular.css';

// import Aos from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Popular = () => {

    // useEffect( () => {
    //     Aos.init({duration: 2000})
    // }, [])

  return (
    <div className="container-xxl destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 data-aos='fade-up' className="mb-5 fs-3">Popular <span className="text-decoration-underline text-color">Destination</span></h1>
        </div>
        <div data-aos='fade-up' className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                <a className="position-relative d-block overflow-hidden" href="#">
                  <img className="img-fluid" src="https://i.ibb.co/DYV9KYX/destination-1.jpg" alt="" />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">30% OFF</div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Thailand</div>
                </a>
              </div>
              <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                <a className="position-relative d-block overflow-hidden" href="#">
                  <img className="img-fluid" src="https://i.ibb.co/nDLGV5t/destination-2.jpg" alt="" />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">25% OFF</div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Malaysia</div>
                </a>
              </div>
              <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                <a className="position-relative d-block overflow-hidden" href="#">
                  <img className="img-fluid" src="https://i.ibb.co/nBsprkf/destination-3.jpg" alt="" />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">35% OFF</div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Australia</div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: '350px' }}>
            <a className="position-relative d-block h-100 overflow-hidden" href="#">
              <img className="img-fluid position-absolute w-100 h-100" src="https://i.ibb.co/SNXn6ZM/destination-4.jpg" alt="" style={{ objectFit: 'cover' }} />
              <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">20% OFF</div>
              <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Indonesia</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;