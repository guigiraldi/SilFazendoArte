import React from "react";
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import { StyleSheet, View, Image, Dimensions } from "react-native";

//Ofertas______________________________________
import Oferta1 from "../../../../assets/ofertas/Oferta1.jpeg"
import Oferta2 from "../../../../assets/ofertas/Oferta2.jpeg"
import Oferta3 from "../../../../assets/ofertas/Oferta3.jpeg"

const { width } = Dimensions.get('window');

const DATA = [
    {
        coverImageUri: Oferta1,
    },
    {
        coverImageUri: Oferta2,
    },
    {
        coverImageUri: Oferta3,
    }
]

const Carrossel = () => {
    const renderItem = data => (
        <View key={data.coverImageUri} style={styles.cardContainer}>
            <View style={styles.cardWrapper}>
                <Image source={data.coverImageUri} style={styles.card} />
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <Carousel
                pagination={PaginationLight}
                renderItem={renderItem}
                data={DATA}
                loop
                autoplay
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
    },

    cardWrapper: {
        overflow: 'hidden',
    },

    card: {
        width: width * 1.0,
        height: width * 0.35,
    },
});

export default Carrossel;