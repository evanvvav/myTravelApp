import React from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";

import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
   const navigation = useNavigation();

   return (
      <View>
         <ImageBackground
            source={require("../../../assets/images/72212087d18f76984c49af1b5e80b1a5--hand-sketch-sketch-drawing.jpg")}
            style={styles.image}
         >
            <Pressable
               style={styles.searchButton}
               onPress={() => navigation.navigate("Destination Search")}
            >
               <Fontisto name="search" size={18} color={"#C996CC"} />
               <Text style={styles.searchButtonText}>
                  {" "}
                  What city you looking for?
               </Text>
            </Pressable>

            <Text style={styles.title}>Find Place To Stay</Text>

            <Pressable
               style={styles.button}
               onPress={() => navigation.navigate("Close to you")}
            >
               <Text style={styles.buttonText}>Expolore hotels nearby</Text>
            </Pressable>
         </ImageBackground>
      </View>
   );
}
