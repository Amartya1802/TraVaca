import axios from "axios";

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async (type, sw, ne) => {
    try {
        const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,    
                tr_latitude: ne.lat,
            },
            headers: {
                'X-RapidAPI-Key': '3a19f5960dmshfdb7c3189b440bdp1800e5jsnc0ed29a2c989',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
