import { useLocation } from "react-router-dom";
import SearchItem from "../SearchItem/SearchItem";
import './Hotels.css';
import { useState } from "react";

const Hotels = () => {
    const location = useLocation();
    const [destination, ] = useState(location.state.destination)
    const [price, ] = useState(location.state.price)
    return (
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className='isHeaderTitle'>Search</h1>
                    <div className="lsItem">
                        <label className=' fs-7 fw-semibold text-light-emphasis'>Destination</label>
                        <input className='h-8 border-none p-1' placeholder={destination} type="text" />
                    </div>
                    <div className="lsItem">
                        <label className=' fs-7 fw-semibold text-light-emphasis'>Price</label>
                        <input className='h-8 border-0 p-1' placeholder={price} type="text" />
                    </div>
                    <div className="lsItem">
                        <label className='fs-7 fw-semibold text-light-emphasis'>Options</label>
                        <div className='lsOptions'>
                            <div className="lsOptionItem">
                                <span className=' text-sm fw-semibold text-white'>Min Price <small>per night</small></span>
                                <input type="number" className="lsOptionInput" />
                            </div>

                            <div className="lsOptionItem">
                                <span className=' text-sm fw-semibold text-white' >Max Price <small>per night</small></span>
                                <input type="number" className="lsOptionInput" />
                            </div>

                            <div className="lsOptionItem">
                                <span className=' text-sm fw-semibold text-white'>Adult</span>
                                <input type="number" min={1} className="lsOptionInput" placeholder='' />
                            </div>

                            <div className="lsOptionItem">
                                <span className=' text-sm fw-semibold text-white'>Children</span>
                                <input type="number" min={0} className="lsOptionInput" placeholder='' />
                            </div>

                            <div className="lsOptionItem">
                                <span className=' text-sm fw-semibold text-white'>Room</span>
                                <input type="number" min={1} className="lsOptionInput" placeholder='' />
                            </div>
                        </div>
                    </div>
                    <button className='filterBtn'>Search</button>
                </div>
                <div className="listResult">
                    <SearchItem></SearchItem>
                    <SearchItem></SearchItem>
                    <SearchItem></SearchItem>
                    <SearchItem></SearchItem>
                    <SearchItem></SearchItem>
                </div>
            </div>
        </div>
    );
};

export default Hotels;