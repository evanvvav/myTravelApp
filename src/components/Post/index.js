import React from 'react';
import { Text, View, Image, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

export default function Post( props ) {

    const post = props.post; 


    const navigation = useNavigation();
    
    const goToPostPage = () => { 
        navigation.navigate('Post', {postId: post.location_id});
    }

    return (
        <Pressable onPress={goToPostPage} style={styles.container}>
            {/* Images */}
            <Image 
                style={styles.image} 
                source={{uri: post.photo ? post.photo.images.large.url : null}}
            />
            {/* Star & Rating */}
            <Text style={styles.raiting}>
                <Fontisto name='star' size={13} color={'#C996CC'}/>
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
            
        </Pressable>
    );
}
