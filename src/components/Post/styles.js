import { StyleSheet, } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,

    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    raiting: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    raitingText: {
        fontSize: 14,
    },
    name: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
    },
    price: {
        fontWeight: 'bold'

    },
});

export default styles;