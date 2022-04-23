import React from 'react';
import { Text, View, Image, Pressable, Linking} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function DetailedPost( props ) {

    console.log(props);

    const post = props.post; 
    
    return (
        <View style={styles.container}>
            
            {/* Images */}
            
            <Image 
                style={styles.image} 
                source={{uri: post.photo ? post.photo.images.large.url : null}}
            />
            {/* Star & Rating & Reviews amount */}
            <Text style={styles.raiting}>
                <Fontisto name='star' size={13} color={'#C996CC'}/>
                <Text style={styles.raitingText}> {post.rating}</Text>
                <Text style={styles.num_reviews}> ({post.num_reviews} reviews)</Text>
            </Text>
            {/* Name */}
            <Text style={styles.name}>
                {post.name} │ {post.location_string}
            </Text>

            {/* #86 of 506 hotels in New York City */}
            <Text style={styles.ranking}>{post.ranking}</Text>
            {/* Prices / night Button huge*/}
            <Text style={styles.prices}>
                <Text style={styles.price}>{post.price} </Text>
                 / night
            </Text>
            {/* Visit webcite Button huge*/}
            <Pressable style={styles.booking} onPress={() => Linking.openURL(post.business_listings.mobile_contacts[0].value)}> 
            <Text style={styles.bookingText}>Book from webcite</Text>
            </Pressable>
        </View>
    );
}