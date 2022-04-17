import { useState, useEffect } from "react";

import React from 'react';
import { View, FlatList } from 'react-native';
import Post from '../../components/Post';


import { getPlacesData } from '../../api';


export default function SearchResultsScreen() {
    
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});

    useEffect(() => {
    getPlacesData()
      .then((data) => {
        /*console.log(data);*/
        setPlaces(data);
       })
    }, [])

    return (
        <View>
            <FlatList
                data={places}
                renderItem={({item}) => <Post post={item} />}
            
            />
        </View>
    );
}