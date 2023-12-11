import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, StatusBar, ScrollView } from "react-native";
import { faMagnifyingGlass, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import Appnavbar from './AppNavigator';

const { width: screenWidth } = Dimensions.get('window');
const giftbox = require("../Streetmall/1Home/gift.gif");
const laptop = require("../Streetmall/1Home/Laptop.png");
const mobile = require("../Streetmall/1Home/Mobiles.png");
const car = require("../Streetmall/1Home/car.png");
const watch = require("../Streetmall/1Home/Watch.png");

const banner = require("../Streetmall/10_Category/Banner.png");
const Offer = require("../assets/offer.png");
const dress = require("../assets/dress.jpg");
const shoe = require("../assets/shoe799.jpg");

const Ac = require("../Streetmall/5Deals/app1.png")
const fridge = require("../Streetmall/5Deals/app2.png")
const MO = require("../Streetmall/5Deals/app3.png")
const Washingmachine = require("../Streetmall/5Deals/app4.png")
const Nike = require("../Streetmall/5Deals/nike.png")
const Puma = require("../Streetmall/5Deals/puma.png")
const Bata = require("../Streetmall/5Deals/bata.png")

library.add(faMagnifyingGlass, faUsersViewfinder);

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselItems = [
    { image: giftbox, text: "Gifts" },
    { image: mobile, text: "Mobiles" },
    { image: watch, text: "Watches" },
    { image: laptop, text: "Laptops" },
    { image: car, text: "Car" },
  ];

  const carouselItems1 = [
    { image: Offer },
    { image: dress },
    { image: shoe },
    { image: banner },
  ];

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image style={styles.carouselImage} source={item.image} />
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.container}>
          <View style={styles.topbarinput}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="black" />
            <TextInput placeholder="Search Sunlight.in" style={styles.inputBox} />
            <FontAwesomeIcon icon={faUsersViewfinder} size={20} color="black" />
          </View>
          <StatusBar style="dark-content" />
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
        <View style={{ marginTop: 20, }}>
          <Carousel
            data={carouselItems1}
            renderItem={renderCarouselItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            autoplay={true}
            loop
            autoplayInterval={2000} // Adjust the interval as needed
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={carouselItems1.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.paginationInactiveDot}
            inactiveDotOpacity={1}
            inactiveDotScale={0.6}
          />
        </View>
        <Text style={styles.applianceHeaderText}>Appliances for Home | up to 50 % off </Text>
        <View>
          <View style={styles.appliances}>
            <View style={styles.applianceContainer}>
              <View style={styles.individual}>
                <Image source={Ac} style={styles.applianceImage} />
                <Text style={styles.applianceText}>Air Conditioner</Text>
              </View>
              <View style={styles.individual}>
                <Image source={Washingmachine} style={styles.applianceImage} />
                <Text style={styles.applianceText}>Washing Machine</Text>
              </View>
            </View>
            <View style={styles.applianceContainer}>
              <View style={styles.individual}>
                <Image source={fridge} style={styles.applianceImage} />
                <Text style={styles.applianceText}>Refrigilator</Text>
              </View>
              <View style={styles.individual}>
                <Image source={MO} style={styles.applianceImage} />
                <Text style={styles.applianceText}>Microwave Oven</Text>
              </View>
            </View>
            <View style={[styles.applianceContainertop, { backgroundColor: '#E8F2FE' }]}>
              <Text style={styles.topbrand}>Top Brands</Text>
              <Image source={Nike} style={styles.nike} />
              <Image source={Puma} style={styles.puma} />
              <Image source={Bata} style={styles.bata} />
            </View>
          </View>
        </View>
        <Appnavbar />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    backgroundColor: "#1977F3",
    paddingBottom: 15,
  },
  applianceHeaderText: {
    fontWeight: 'bold',
    marginLeft: 6,
  },
  individual: {
    paddingHorizontal: 5,
  },
  applianceContainertop: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  topbrand: {
    backgroundColor: '#FFAC2F',
    width: 90,
    justifyContent: 'center',
    borderRadius: 10,
    padding: 5,
  },
  appliances: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    paddingHorizontal: 10,
    backgroundColor: '#E2E4E5',
  },
  applianceImage: {
    width: 90,
    height: 60,
    borderRadius: 5,
  },
  nike: {
    width: 50,
    height: 30,
    justifyContent: 'center',
    marginLeft: 5,
  },
  puma: {
    width: 50,
    height: 30,
    justifyContent: 'center',
    marginLeft: 5,
  },
  bata: {
    width: 70,
    height: 16,
    justifyContent: 'center',
    marginLeft: 5,
  },
  applianceContainer: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: 'center',
    padding: 10,
    MarginRight: 2,
  },

  topbarinput: {
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  inputBox: {
    flex: 1,
    color: "#1977F3",
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
  carouselItem: {
    alignItems: 'center',
  },
  carouselImage: {
    width: screenWidth,
    height: 200,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 172, 47, 1)',
  },
  paginationInactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(23, 37, 50, 1)',
  },
});

export default Home;
