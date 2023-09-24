import { useEffect, useState } from "react";
import './HotelDetails.css';
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const HotelDetails = () => {
    const [photos, setPhotos] = useState();
    const [hotel, setHotel] = useState();
    const id = useLoaderData();
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    

    useEffect(() => {
        fetch(`https://bookingera-server.up.railway.app/singlehotel/${id}`)
            .then(res => res.json())
            .then(data => {
                setHotel(data)
            })


    }, [id])

    useEffect( () => {
        fetch('https://bookingera-server.up.railway.app/photos')
        .then(res => res.json())
        .then(data => setPhotos(data))
    }, [])

    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true);

    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === 'L') {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        }
        else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('L')} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('R')} />
                </div>}
                <div className="hotelWrapper">
                    <Link to={`/reserve/${id}/${hotel?.cardTitle}/${hotel?.cardPrice}`}><button className='bookNow'>Reserve or Book Now!</button></Link>
                    <h3 className="cardTitle font-bold">{hotel?.cardTitle}</h3>
                    <div className="hotelAddres">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 {hotel?.location}</span>
                    </div>
                    <span className='hotelDistance'>{hotel?.review} location {hotel?.cardDistance}</span>
                    <span className="hotelPriceHighLight">{hotel?.cardSubTitle} at ${hotel?.cardPrice} {hotel?.tax}</span>
                    <div className="hotelImages">
                        {
                          photos &&  photos.map((photo, index) => (
                                <div className="hotelImgWrapper" key={index}>
                                    <img onClick={() => handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailTexts">
                            <h3 className="cardTitle text-2xl font-bold">Stay in the heart of <span>{hotel?.location}</span></h3>
                            <p className="text-[16px] mt-4">Located in {hotel?.location}, a few steps from {hotel?.location} Sea Beach, {hotel?.cardTitle}. Has accommodations with an outdoor swimming pool, free private parking, a garden and a shared lounge. This 5-star hotel offers a private beach area and room service. The property provides a 24-hour front desk, airport transportation, a kids club and free WiFi throughout the property. The nearest airport is {hotel?.location}, {hotel?.cardDistance} of {hotel?.cardTitle}..</p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h5 className='font-bold text-[#555]'>Perfect view with {hotel?.cardTitle}</h5>
                            <span>This property has taken 17 steps to make your stay more sustainable.
                            </span>
                            <h6>
                                <b>${hotel?.cardPrice}</b> (per nights)
                            </h6>
                            <Link to={`/reserve/${id}/${hotel?.cardTitle}/${hotel?.cardPrice}`}><button className='bookBtn'>Reserve or Book Now</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HotelDetails;