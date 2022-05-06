import { useState, useEffect } from "react";
import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import Post from '../../components/Post';
import { StyleSheet } from "react-native";
import { getPlacesData } from '../../api';

export default function SearchResultsScreen() {
    
    const [places, setPlaces] = useState([false]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    getPlacesData()
      .then((data) => {
        //console.log(data);
        setPlaces(data);
        setLoading(true);
       })
    }, [])

    return (
        <View style={styles.container} >
            {loading ? 
            
            <FlatList
                data={places}
                renderItem={({item, index}) => <Post post={item}/>}
                keyExtractor={(item, index) => index.toString()}
       /> : <View style={styles.loading}>
                <ActivityIndicator size="large" color='#C996CC'/>
            </View>

            }
        </View>
    );
}

const styles = StyleSheet.create({
    loading: {
        marginTop: '50%',
    },
    container: {
        justifyContent: 'center',
        },
    });