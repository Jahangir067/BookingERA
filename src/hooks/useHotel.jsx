import { useEffect, useState } from "react";

const useHotel = () => {
    const [hotel, setHotel] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://travel-era-server.vercel.app/hotelsInfo')
            .then(res => res.json())
            .then(data => {
                setHotel(data)
                setLoading(false)
            });
    }, [])
    return [hotel, loading]
};

export default useHotel;