import { View } from "react-native";
import styles from "./styles";

import { API_KEY_2 } from "@env";

import { useNavigation } from "@react-navigation/native";

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
               navigation.navigate("City Results", { cityData: details });
            }}
            fetchDetails
            styles={{
               textInput: styles.textInput,
            }}
            query={{
               key: API_KEY_2,
               language: "en",
               types: "(cities)",
            }}
            suppressDefaultStyles
            renderRow={(item) => <SuggestionRow item={item} />}
         />
      </View>
   );
}
