import { useState, useEffect } from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

import { getPlacesData } from './src/api';


export default function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  const post1 = places[0];

  useEffect(() => {
    getPlacesData()
      .then((data) => {
        /*console.log(data);*/
        setPlaces(data);
       })
  }, [])

  return (
    <>
    <StatusBar style="auto"/>
    <SafeAreaView>
      
      {/*<HomeScreen />*/}
      <Post post={post1} />
      
     
    </SafeAreaView>
    </>
  );
}
