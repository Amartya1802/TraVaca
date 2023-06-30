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
                // 'X-RapidAPI-Key': 'c476504673mshd9165be958ab205p1c8e7bjsn1b8e508055e4',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
