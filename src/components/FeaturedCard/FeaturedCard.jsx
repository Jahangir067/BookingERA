import { useEffect, useState } from 'react';
import './FeaturedCard.scss'
import { GrLocation } from 'react-icons/gr';
import { BsClipboardCheck } from 'react-icons/bs';

// import Aos from 'aos';
// import 'aos/dist/aos.css';

const FeaturedCard = () => {

    const [data, setData] = useState([]);

    const displayData = data.slice(0, 6);

    useEffect(() => {
        fetch('https://booking-era-server.vercel.app/hotels')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    // useEffect( () => {
    //     Aos.init({duration: 2000})
    // }, [])

    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos='fade-up'  className="title">Most Visited Destinations</h3>
            </div>

            <div className="secContent grid">
                {
                    displayData && displayData.map(singleData =>
                        <div className="singleDestination" key={singleData._id} data-aos='fade-up'>
                            <div className="imageDiv">
                                <img src={singleData.imgSrc} alt={singleData.desTitle} />
                            </div>
                            <div className="cardInfo">
                                <h4 className="desTitle">{singleData.desTitle}</h4>
                                <span className="continent flex">
                                    <GrLocation className='icon' />
                                    <span className='name'>{singleData.location}</span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{singleData.grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>${singleData.fees}</h5>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>{singleData.description}</p>
                                </div>
                                <button className='allBtn flex'>Details <BsClipboardCheck className='icon' /></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default FeaturedCard;