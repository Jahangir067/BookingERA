import { useEffect, useState } from "react";

const useHotel = () => {
    const [hotel, setHotel] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://bookingera-server.up.railway.app/hotelsInfo')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setHotel(data)
                setLoading(false)
            });
    }, [])
    return [hotel, loading]
};

export default useHotel;