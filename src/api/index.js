import axios from "axios";

export const getPlacesData = async (lat, lng, value) => {
   try {
      console.log(lat);
      const {
         data: { data },
      } = await axios.get(
         "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng",
         {
            params: {
               latitude: lat,
               longitude: lng,
               hotel_class: value,
               limit: "30",
               currency: "EUR",
               subcategory: "hotel",
            },
            headers: {
               "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
               "X-RapidAPI-Key":
                  "41a079cf8dmsh6ea551e0ee5110cp1d3fefjsn253a049d85cf",
            },
         }
      );

      return data;
   } catch (error) {
      console.log(error);
   }
};
