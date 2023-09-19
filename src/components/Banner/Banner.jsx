import './Banner.scss';

const Banner = () => {
    return (
        <div className='bannerHome'>
            <div className="bannerOverlay"></div>
            <img src="https://i.ibb.co/F4V1Yqf/light-garden-luxury-pool-nature.jpg" className='bannerImg' alt="icon" />
            <div className="BannerContainer">
                <div className='divTitle'>
                    <span data-aos='fade-up' className="BannerText">
                    Discover our world-class Hotel & Resort
                    </span>
                    <p data-aos='fade-up' className="BannerTitle">
                    Enjoy Your Vacation With Us
                    </p>
                    <button className='allBtn'>Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;