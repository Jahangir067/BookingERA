import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import TravelGuide from '../Pages/TravelGuide/TravelGuide'
import Hotels from "../components/Hotels/Hotels";
import HotelDetails from "../components/HotelDetails/HotelDetails";
import Reserved from "../components/Reserved/Reserved";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/guide',
          element: <TravelGuide></TravelGuide>
        },
        {
          path: '/hotels',
          element: <Hotels></Hotels>
        },
        {
          path: '/hotelDetails/:id',
          element: <HotelDetails></HotelDetails>,
          loader: ({params}) => `${params.id}`
        },
        {
          path: '/reserve/:id/:cardTitle/:cardPrice',
          element: <Reserved></Reserved>,
        }
      ]
    },
  
  ]);