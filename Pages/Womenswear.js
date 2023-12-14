import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, StatusBar, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const giftbox = require('../Streetmall/1Home/gift.gif');
const laptop = require('../Streetmall/1Home/Laptop.png');
const mobile = require('../Streetmall/1Home/Mobiles.png');
const car = require('../Streetmall/1Home/car.png');
const watch = require('../Streetmall/1Home/Watch.png');
const banner = require("../Streetmall/11womenswear/Banner.png");

const dress1 = require('../Streetmall/11womenswear/womenwear1.png');
const dress2 = require('../Streetmall/11womenswear/womenwear2.png');
const dress3 = require('../Streetmall/11womenswear/womenwear3.png');
const dress4 = require('../Streetmall/11womenswear/womenwear4.png');
const dress5 = require('../Streetmall/11womenswear/womenwear5.png');
const dress6 = require('../Streetmall/11womenswear/womenwear6.png');

library.add(faMagnifyingGlass, faUsersViewfinder);

const Womenswear = () => {
    const carouselItems = [
        { image: giftbox, text: 'Gifts' },
        { image: mobile, text: 'Mobiles' },
        { image: watch, text: 'Watches' },
        { image: laptop, text: 'Laptops' },
        { image: car, text: 'Car' },
    ];

    const mensWearItems = [
        { image: dress1, text: 'Kurtas & Kurtis' },
        { image: dress2, text: 'Saree' },
        { image: dress3, text: 'Tops & Tees' },
        { image: dress4, text: 'Jeans' },
        { image: dress5, text: 'Shirts' },
        { image: dress6, text: 'Leggings' },
    ];


    return (
        <ScrollView style={styles.all} vertical showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.topbarinput}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="black" />
                    <TextInput placeholder="Search Sunlight.in" style={styles.inputBox} />
                    <FontAwesomeIcon icon={faUsersViewfinder} size={20} color="black" />
                </View>
                <StatusBar barStyle="auto" />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.productsbar}>
                    {carouselItems.map((item, index) => {
                        console.log('Carousel Item:', item);
                        return (
                            <View key={index} style={styles.product}>
                                <Image style={styles.productImage} source={item.image} />
                                <Text>{item.text}</Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
            <Text style={styles.categoryLabel1}>Women's Wear</Text>
            <View>
                <View style={styles.categoryContainer}>
                    {mensWearItems.map((item, index) => (
                        <View key={index} style={styles.categoryItem}>
                            <Image source={item.image} style={styles.productImage2} />
                            <Text style={styles.categoryLabel}>{item.text}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <Image source={banner} style={styles.bannerImage} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 120,
        backgroundColor: '#1977F3',
        paddingBottom: 15,
    },
    bannerImage: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'stretch',
        alignSelf: 'center', // Center the image horizontally
        marginVertical: 15, // Add vertical margin as needed
    },
    all: {
        backgroundColor: 'white',
    },
    category: {
        backgroundColor: '#FFAC2F',
        padding: 5,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        maxWidth: 150,
    },
    topbarinput: {
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    inputBox: {
        flex: 1,
        color: '#1977F3',
        marginLeft: 10,
    },
    productsbar: {
        flexDirection: 'row',
        marginTop: 10,
        paddingVertical: 10,
        backgroundColor: 'rgba(25, 119, 243, 0.4)',
    },
    product: {
        marginRight: 25,
        alignItems: 'center',
    },
    productImage: {
        width: 65,
        height: 70,
        borderRadius: 10,
    }, productImage2: {
        borderRadius: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    categoryItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    categoryLabel1: {
        marginLeft: 10,
        fontSize: 20,
    },
});
export default Womenswear