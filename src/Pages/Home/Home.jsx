import About from '../../components/About/About'
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'
import Popular from '../../components/Popular/Popular'
import Recommended from '../../components/Recommended/Recommended'
import Video from '../../components/Video/Video'
import Header from '../../components/Header/Header'
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Recommended></Recommended>
            <Popular></Popular>
            <FeaturedCard></FeaturedCard>
            <Video></Video>
        </div>
    );
};

export default Home;