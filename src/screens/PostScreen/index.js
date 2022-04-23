import { useState, useEffect } from "react";
import React from 'react';
import { View, FlatList, ActivityIndicator  } from 'react-native';
import DetailedPost from "../../components/DetailedPost";
import { useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { getPlacesData } from '../../api';

export default function PostScreen() {
    
    const route = useRoute();
    const [places, setPlaces] = useState([false]);
    const [loading, setLoading] = useState(false);

    const post = places.find(post.location_id === route.post.location_id);

    useEffect(() => {
    getPlacesData()
      .then((data) => {
        //console.log(data);
        setPlaces(data);
        setLoading(true);
        console.log(post.location_id);
       })
    }, [])

    return (
        <View>
            {loading ? 

            /* <FlatList
                data={places}
                renderItem={({item, index}) => <Post post={item} />}
                keyExtractor={(item, index) => index.toString()}
            
            /> */

            <DetailedPost post={post}
            /> : <ActivityIndicator size="large" color="#C996CC" />

            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        },
    });