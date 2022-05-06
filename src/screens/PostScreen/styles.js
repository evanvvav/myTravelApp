import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
   container: {
      margin: 20,
   },
   image: {
      width: "100%",
      aspectRatio: 3 / 2,
      resizeMode: "cover",
      borderRadius: 10,
   },
   raiting: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
   },
   raitingText: {
      fontSize: 14,
   },
   num_reviews: {
      fontSize: 14,
      color: "#5b5b5b",
   },
   ranking: {
      fontSize: 14,
      color: "#5b5b5b",
   },
   name: {
      fontSize: 18,
      lineHeight: 26,
   },
   prices: {
      fontSize: 18,
   },
   price: {
      fontWeight: "bold",
   },
   booking: {
      backgroundColor: "#fff",
      width: Dimensions.get("screen").width - 40,
      height: 40,

      borderRadius: 15,
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
   },
   bookingText: {
      fontSize: 16,
      fontWeight: "bold",
   },
});

export default styles;
