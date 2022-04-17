import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Post() {
    return (
        <View style={styles.container}>
            {/* Images */}
            <Image 
                style={styles.image} 
                source={{uri: 'http://media-cdn.tripadvisor.com/media/photo-s/22/6c/e5/7f/exterior-hotel-kamp-building.jpg'}}
            />
            {/* Star & Rating */}
            <Text style={styles.raiting}>
                <Fontisto name='star' size={13} color={'#f15454'}/>
                <Text style={styles.raitingText}> 4.5</Text>
            </Text>
            {/* Name */}
            <Text style={styles.name}>
                Hotel Kamp * Helsinki, Uusimaa
            </Text>
            {/* Prices / night */}
            <Text style={styles.prices}>
                <Text style={styles.price}>€80 </Text>
                 / night
            </Text>
            

            {/* Images */}
            {/* Name */}
            {/* Star & Rating & Reviews amount */}
            {/* #86 of 506 hotels in New York City */}
            {/* Visit webcite Button huge*/}
            {/* Prices / night Button huge*/}

            
        </View>
    );
}