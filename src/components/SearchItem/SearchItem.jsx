import './SearchItem.css';

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src="https://i.ibb.co/wg7thP8/modern-studio-apartment-design-with-bedroom-living-space.jpg" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className='siTitle'>Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubTitle">Studion Apartment with Air conditioning</span>
                <span className="siFeatures">Entire Studio • 1 bathroom • 31m² 1 full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so look in this great price today!</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span className='fw-semibold'>Excellent</span>
                    <button className='px-1 siBgColor fw-bold text-white rounded-sm border-0 mr-2'>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className='siPrice'>$123</span>
                    <span className='siTaxOp'>Include taxes and fees</span>
                    <button className='allBtn'>See Availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;