import { useState, useEffect } from "react";
import React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import Post from "../../components/Post";
import { StyleSheet } from "react-native";
import { getPlacesData } from "../../api";

import * as Location from "expo-location";

export default function SearchResultsScreen() {
   const [places, setPlaces] = useState([false]);
   const [loading, setLoading] = useState(false);
   const [coordinates, setCoordinates] = useState({});

   // const coordinates = { lat: 60.183832598, lng: 24.942829562 };

   useEffect(() => {
      (async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            return;
         }
         let location = await Location.getCurrentPositionAsync();
         setCoordinates({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
         });

         console.log(coordinates);
      })();
   }, []);

   useEffect(() => {
      console.log(coordinates);

      getPlacesData(coordinates.lat, coordinates.lng).then((data) => {
         setPlaces(data);
         setLoading(true);
      });
   }, [coordinates]);

   return (
      <View style={styles.container}>
         {loading ? (
            <FlatList
               // defaultCoordinates={coordinates}
               data={places}
               renderItem={({ item, index }) => <Post post={item} />}
               keyExtractor={(item, index) => index.toString()}
            />
         ) : (
            <View style={styles.loading}>
               <ActivityIndicator size="large" color="#C996CC" />
            </View>
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   loading: {
      marginTop: "50%",
   },
   container: {
      justifyContent: "center",
   },
});
