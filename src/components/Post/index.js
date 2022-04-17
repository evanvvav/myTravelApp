import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function Post( props ) {

    const post = props.post; 
    
    return (
        <View style={styles.container}>
            {/* Images */}
            <Image 
                style={styles.image} 
                source={{uri: post.photo.images.large.url}}
            />
            {/* Star & Rating */}
            <Text style={styles.raiting}>
                <Fontisto name='star' size={13} color={'#f15454'}/>
                <Text style={styles.raitingText}> {post.rating}</Text>
            </Text>
            {/* Name */}
            <Text style={styles.name}>
                {post.name} │ {post.location_string}
            </Text>
            {/* Prices / night */}
            <Text style={styles.prices}>
                <Text style={styles.price}>{post.price} </Text>
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