import { useState, useEffect } from "react";
import React from 'react';
import { View, ActivityIndicator  } from 'react-native';
import DetailedPost from "../../components/DetailedPost";
import { useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { getPlacesData } from '../../api';

export default function PostScreen() {
    
    const route = useRoute();
    const [places, setPlaces] = useState([false]);
    const [loading, setLoading] = useState(false);

   const post = places[1];
   //.find(place => place === route.params.id);

    useEffect(() => {
    getPlacesData()
      .then((data) => {
        //console.log(data);
        setPlaces(data);
        setLoading(true);
        console.log(route.params.location_id);
       })
    }, [])

    return (
        <View>
            {loading ? 

            <DetailedPost post={post}
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