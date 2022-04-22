import { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

import { useNavigation } from "@react-navigation/native";

import searchFakeData from "../../../assets/data/searchFakeData";

export default function DestinationSearch() {

    const [inputText, setInputText] = useState('');

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Input component */}
            <TextInput 
             style={styles.textInput}
             placeholder="Where are you going?"
             value={inputText}
             onChangeText={setInputText}
            />

            {/* List of destination */}
            <FlatList 
                data={searchFakeData}
                renderItem={({item}) => (
                <Pressable onPress={() => 
                    navigation.navigate('Home', {
                        screen: 'Explore',
                        params: {
                            screen: 'SearchResults',
                        },
                    })}
                
                style={styles.row}> 
                    <View style={styles.iconContainer}>
                        <Entypo name={'location-pin'} size={30} />
                    </View>
                    <Text style={styles.text}>{item.description}</Text>
                </Pressable>
                )}
            />
        </View>
    );
}

