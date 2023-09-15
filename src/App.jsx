import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import FeaturedCard from './components/FeaturedCard/FeaturedCard'
import Navbar from './components/Navbar/Navbar'
import Popular from './components/Popular/Popular'
import Recommended from './components/Recommended/Recommended'
import Video from './components/Video/Video'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Recommended></Recommended>
    <Popular></Popular>
    <FeaturedCard></FeaturedCard>
    <Video></Video>
    <Footer></Footer>
    </>
  )
}

export default App
