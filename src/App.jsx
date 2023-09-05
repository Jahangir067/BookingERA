import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import Popular from './components/Popular/Popular'
import Recommended from './components/Recommended/Recommended'
import Video from './components/Video/Video'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Recommended></Recommended>
    <Popular></Popular>
    <Main></Main>
    <Video></Video>
    <Footer></Footer>
    </>
  )
}

export default App
