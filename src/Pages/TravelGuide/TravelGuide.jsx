import AllHotel from "../../components/AllHotel/AllHotel";
import Banner from "../../components/Banner/Banner";
import Process from "../../components/Process/Process";
import Property from "../../components/Property/Property";
import Testimonial from "../../components/Testimonial/Testimonial";

const TravelGuide = () => {
    return (
        <>
        {/* <Banner></Banner> */}
        <Banner></Banner>
        <AllHotel></AllHotel>
        <Property></Property>
        <Process></Process>
        <Testimonial></Testimonial>
        </>
    );
};

export default TravelGuide;