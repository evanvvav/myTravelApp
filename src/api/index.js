import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng'

const options = { 
  params: {
    latitude: '60.183832598',
    longitude: '24.942829562',
    lang: 'en_US',
    hotel_class: '5',
    limit: '30',
    currency: 'EUR',
    subcategory: 'hotel,bb,specialty'
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '25a22228abmshe90e31e943b8facp153abfjsn326786a3036f'
  }
};

export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);
        
        return data;

    } catch (error) {
        console.log(error)
    }
}