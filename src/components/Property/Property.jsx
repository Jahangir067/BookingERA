import './Property.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Property = () => {

    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])

  return (
    <div className="container-xxl py-5">
      <div className="container sectionGap">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <h1 data-aos='fade-up' className="mb-3">Property Types</h1>
          <p data-aos='fade-up'>Lorem ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div className="row g-4" data-aos='fade-up'>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="propertyIcon mb-3">
                  <img className="img-fluid" src="https://i.ibb.co/HNHqt4n/icon-apartment.png" alt="Icon" />
                </div>
                <h6 className='heading'>Apartment</h6>
                <span className='subHeading'>48 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="propertyIcon mb-3">
                  <img className="img-fluid" src="https://i.ibb.co/26YH39p/icon-building.png" alt="Icon" />
                </div>
                <h6 className='heading'>Villa</h6>
                <span className='subHeading'>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="propertyIcon mb-3">
                  <img className="img-fluid" src="https://i.ibb.co/6Rh3Ny4/icon-house.png" alt="Icon" />
                </div>
                <h6 className='heading'>Home</h6>
                <span className='subHeading'>98 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="propertyIcon mb-3">
                  <img className="img-fluid" src="https://i.ibb.co/dfXdQyS/icon-housing.png" alt="Icon" />
                </div>
                <h6 className='heading'>Office</h6>
                <span className='subHeading'>113 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="propertyIcon mb-3">
                  <img className="img-fluid" src="https://i.ibb.co/TcSTfyb/icon-villa.png" alt="Icon" />
                </div>
                <h6 className='heading'>Building</h6>
                <span className='subHeading'>118 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="propertyIcon mb-3">
                  <img className="img-fluid" src="https://i.ibb.co/Z8ghS0m/icon-neighborhood.png" alt="Icon" />
                </div>
                <h6 className='heading'>Townhouse</h6>
                <span className='subHeading'>127 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="propertyIcon mb-3">
                  <img className="img-fluid" src="https://i.ibb.co/XxPgYBG/icon-condominium.png" alt="Icon" />
                </div>
                <h6 className='heading'>Shop</h6>
                <span className='subHeading'>12 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="propertyIcon mb-3">
                  <img className="img-fluid" src="https://i.ibb.co/1rT0Bdx/icon-luxury.png" alt="Icon" />
                </div>
                <h6 className='heading'>Garage</h6>
                <span className='subHeading'>3 Properties</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
