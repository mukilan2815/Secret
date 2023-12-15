import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { faMagnifyingGlass, faUsersViewfinder, faShirt, faChildDress, faChild, faBlenderPhone, faShoePrints, faCar, faBiking, faPepperHot } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const giftbox = require('../Streetmall/1Home/gift.gif');
const laptop = require('../Streetmall/1Home/Laptop.png');
const mobile = require('../Streetmall/1Home/Mobiles.png');
const car = require('../Streetmall/1Home/car.png');
const watch = require('../Streetmall/1Home/Watch.png');

library.add(faMagnifyingGlass, faUsersViewfinder);

const data = [
    { icon: faShirt, label: "Men's Wear" },
    { icon: faChildDress, label: "Women's Wear" },
    { icon: faChild, label: "Kids Wear" },
    { icon: faBlenderPhone, label: "Home Appliances" },
    { icon: faShoePrints, label: "Shoes" },
    { icon: faCar, label: "Cars" },
    { icon: faBiking, label: "Bike" },
    { icon: faPepperHot, label: "Groceries" },

];

const Category = () => {
    const carouselItems = [
        { image: giftbox, text: 'Gifts' },
        { image: mobile, text: 'Mobiles' },
        { image: watch, text: 'Watches' },
        { image: laptop, text: 'Laptops' },
        { image: car, text: 'Car' },
    ];

    return (
        <ScrollView style={styles.all} vertical showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.topbarinput}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="black" />
                    <TextInput placeholder="Search Sunlight.in" style={styles.inputBox} />
                    <FontAwesomeIcon icon={faUsersViewfinder} size={20} color="black" />
                </View>
                <StatusBar barStyle="dark-content" />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.productsbar}>
                    {carouselItems.map((item, index) => (
                        <View key={index} style={styles.product}>
                            <Image style={styles.productImage} source={item.image} />
                            <Text>{item.text}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Text style={styles.category}>Shop by Category</Text>
            <View style={styles.categoryContainer}>
                {data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.categoryItem}
                        onPress={() => console.log(`Pressed ${item.label}`)}
                    >
                        <FontAwesomeIcon icon={item.icon} size={20} color="black" />
                        <Text style={styles.categoryLabel}>{item.label}</Text>
                        <FontAwesomeIcon icon={faChevronRight} size={20} color="black" />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 120,
        backgroundColor: '#1977F3',
        paddingBottom: 15,
    },
    all: {
        backgroundColor: '#D3E6FD',
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
    },
    categoryContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    categoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        width: '98%',
    },
    categoryLabel: {
        marginLeft: 10,
        flex: 1,
    },
});

export default Category;
