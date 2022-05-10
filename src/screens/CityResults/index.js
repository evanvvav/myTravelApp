import { useState, useEffect } from "react";
import React from "react";
import { View, FlatList, ActivityIndicator, Dimensions } from "react-native";
import Post from "../../components/Post";
import { StyleSheet } from "react-native";
import { getPlacesData } from "../../api";
import { useRoute } from "@react-navigation/native";

import DropDownPicker from "react-native-dropdown-picker";

export default function CityResultsScreen(props) {
   const route = useRoute();
   const cityData = route.params.cityData;

   const [places, setPlaces] = useState([false]);
   const [coordinates, setCoordinates] = useState({});
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState("5");
   const [items, setItems] = useState([
      { label: "5 star", value: "5" },
      { label: "4 star", value: "4" },
      { label: "3 star ", value: "3" },
      { label: "2 star", value: "1,2" },
   ]);

   console.log(cityData);

   useEffect(() => {
      (async () => {
         setCoordinates({
            lat: cityData.geometry.location.lat,
            lng: cityData.geometry.location.lng,
         });
      })();
   }, []);

   useEffect(() => {
      console.log(coordinates);

      getPlacesData(coordinates.lat, coordinates.lng, value).then((data) => {
         setPlaces(data);
      });
   }, [coordinates, value]);

   return (
      <View style={styles.container}>
         {places ? (
            <>
               <DropDownPicker
                  style={styles.picker}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
               />

               <FlatList
                  data={places}
                  renderItem={({ item, index }) => <Post post={item} />}
                  keyExtractor={(item, index) => index.toString()}
               />
            </>
         ) : (
            <View style={styles.loading}>
               <ActivityIndicator size="large" color="#C996CC" />
            </View>
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   picker: {
      color: "black",
      width: Dimensions.get("screen").width - 40,
      marginTop: 10,
      marginBottom: 10,
      marginHorizontal: 20,
      borderRadius: 12,
   },
   loading: {
      marginTop: "50%",
   },
   container: {
      justifyContent: "center",
   },
});
