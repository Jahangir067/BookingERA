import './Header.scss';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook, FiInstagram, FiList } from 'react-icons/fi';
import { FaTripadvisor } from 'react-icons/fa';
import { TbApps } from 'react-icons/tb';
import video1 from '../../assets/destination/video1.mp4'

// import Aos from 'aos';
// import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Header = () => {
    const [price, setPrice] = useState(5000);
    const [destination, setDestination] = useState('')
    const navigate = useNavigate()


    const handleSearch = () => {
        if(price === 5000 || destination === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the required fields!',
              });
            navigate('/')
        }
        else{
            navigate('/hotels', {state: {destination, price}});  
        }
            
    }



    // useEffect(() => {
    //     Aos.init({ duration: 2000 })
    // }, [])

    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video1} className='homeImg' muted autoPlay loop type='video/webm'></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos='fade-up' className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos='fade-up' className="homeTitle">
                        Search Your Holidays
                    </h1>
                </div>

                <div  data-aos='fade-up' className="cardDiv grid">

                    <div className="destinationInput">
                        <label htmlFor="city">Search Your Destination</label>
                        <div className="input flex">
                            <input onChange={e=> setDestination(e.target.value)} type="text" name='city' placeholder='Enter Name Here...' required />
                            <GrLocation className='icon'></GrLocation>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select Your Date: </label>
                        <div className="input flex">
                            <input type="date" required/>
                            <input type="date"  className='ms-4' required/>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price: </label>
                            <h3 className="total">${price}</h3>
                        </div>
                        <div className="input flex">
                            <input
                                type="range"
                                id="priceRange"
                                max={1000}
                                min={50}
                                step={50}
                                value={price}
                                onChange={e=> setPrice(e.target.value)}
                            
                            />
                           
                        </div>
                    </div>

                    <div onClick={handleSearch} className="searchOptions flex">
                        <HiFilter className='icon'></HiFilter>
                        <span>Search</span>
                    </div>

                </div>

                <div data-aos='fade-up' className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className='icon' />
                        <FiInstagram className='icon' />
                        <FaTripadvisor className='icon' />

                    </div>
                    <div className="leftIcons">
                        <FiList className='icon' />
                        <TbApps className='icon' />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Header;