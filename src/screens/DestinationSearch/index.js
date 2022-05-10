import { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";

import { useNavigation } from "@react-navigation/native";

import searchFakeData from "../../../assets/data/searchFakeData";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import SuggestionRow from "./SuggestionRow";

export default function DestinationSearch() {
   const navigation = useNavigation();

   return (
      <View style={styles.container}>
         {/* Input component */}
         <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
               // 'details' is provided when fetchDetails = true
               //console.log(data, details);
               //console.log(details);
               navigation.navigate("City Results", { cityData: details });
            }}
            fetchDetails
            styles={{
               textInput: styles.textInput,
            }}
            query={{
               key: "AIzaSyAJA5ohJ47e8P4XccPpdz9zVMPiEjm-p6M",
               language: "en",
               types: "(cities)",
            }}
            suppressDefaultStyles
            renderRow={(item) => <SuggestionRow item={item} />}
         />
      </View>
   );
}
