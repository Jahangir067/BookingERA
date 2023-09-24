import { useEffect, useState } from 'react';
import './SearchItem.css';
import { Link } from 'react-router-dom';

const SearchItem = () => {

    const [hotels, setHotels] = useState();
    useEffect( () => {
        fetch('https://booking-era-server.vercel.app/hotelsInfo')
        .then(res => res.json())
        .then(data => setHotels(data))
    } , [])


    return (
        <>
        {
          hotels &&  hotels.map((hotel, index) => 
            <div className='searchItem' key={index}>
            <img src={hotel.img} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className='siTitle'>{hotel.cardTitle}</h1>
                <span className="siDistance">{hotel.cardDistance}</span>
                <span className="siTaxiOp">{hotel.cardService}</span>
                <span className="siSubTitle">{hotel.cardSubTitle}</span>
                <span className="siFeatures">{hotel.cardDesc}</span>
                <span className="siCancelOp">{hotel.cardCancel}</span>
                <span className="siCancelOpSubtitle">{hotel.cancelSub}</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span className='fw-semibold'>{hotel.review}</span>
                    <button className='px-1 siBgColor fw-bold text-white rounded-sm border-0 mr-2'>{hotel.rating}</button>
                </div>
                <div className="siDetailTexts">
                    <span className='siPrice'>${hotel.cardPrice}</span>
                    <span className='siTaxOp'>{hotel.tax}</span>
                    <Link to={`/hotelDetails/${hotel._id}`}><button className='filterButton'>See Availability</button></Link>
                    
                </div>
            </div>
        </div>
            )
        }
        </>
        
    );
};

export default SearchItem;