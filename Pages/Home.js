import React, { memo } from "react";
import { SliderBox } from "react-native-image-slider-box";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import {
  faMagnifyingGlass,
  faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const giftbox = require("../Streetmall/Home/gift.gif");
const laptop = require("../Streetmall/Home/Laptop.png");
const mobileapp = require("../Streetmall/Home/Mobiles.png");
const shirt = require("../Streetmall/Home/Shoe.png");
const shoe = require("../assets/shoes.png");
const shoehorizontal = require("../assets/shoe799.jpg");
const dress = require("../assets/dress.jpg");
const offer = require("../assets/offer.png");
const AC = require("../assets/AC.png");
const washingmachine = require("../assets/washingmachine.jpg");
const Bata = require("../assets/Bata.png");
const Nike = require("../assets/nike.png");
const Puma = require("../assets/Puma-Logo.png");

library.add(faMagnifyingGlass, faUsersViewfinder);

const MemoizedCarouselItem = memo(({ item }) => (
  <View style={styles.viewcarousel}>
    <View style={styles.secondview}>
      <Image style={styles.tinyLogo} source={item.image} />
      <Text style={styles.gift}>{item.text}</Text>
    </View>
  </View>
));

const Home = () => {
  const items = [
    { image: giftbox, text: "Gifts" },
    { image: laptop, text: "Laptops" },
    { image: mobileapp, text: "Mobile Apps" },
    { image: shirt, text: "Shirts" },
    { image: shoe, text: "Shoes" },
  ];

  const additionalItems = [
    { image: shoehorizontal },
    { image: dress },
    { image: offer },
  ];

  const renderCarouselItem = ({ item, index }) => (
    <MemoizedCarouselItem key={index} item={item} />
  );

  return (
    <ScrollView vertical>
      <View>
        <View style={styles.container}>
          <View style={styles.topbarinput}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="black" />
            <TextInput
              placeholder="Search Sunlight.in"
              style={styles.inputBox}
            />
            <FontAwesomeIcon
              icon={faUsersViewfinder}
              size={20}
              color="black"
            />
          </View>
          <StatusBar style="auto" />
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatlist}
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderCarouselItem}
          /></View>
        <View style={styles.slidebox}>
          <SliderBox
            images={additionalItems.map((item) => item.image)}
            sliderBoxHeight={250}
            circleLoop
            dotColor="#FFAC2F"
            inactiveDotColor="#172532"
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 15,
            }}
            autoplay={true}
            imageLoadingColor="transparent"
            autoplayInterval={5000}
          />
        </View>

        <Text style={styles.appliancestext}>
          Appliances for Home | up to 50 % off
        </Text>

        <View style={styles.appliances}>
          <View style={styles.appliancesRow}>
            <View style={styles.applianceBox}>
              <Image source={washingmachine} style={styles.applianceImage} />
              <Text>Washing Machine</Text>
            </View>
            <View style={styles.applianceBox}>
              <Image source={AC} style={styles.applianceImage} />
              <Text>Air Conditioner</Text>
            </View>
          </View>
          <View>
            <Text style={styles.topBrandsHeading}>Top Brands</Text>
            <View style={styles.topBrandsContainer}>
              <Image source={Bata} style={styles.brandImage} />
              <Image source={Nike} style={styles.brandImage} />
              <Image source={Puma} style={styles.brandImage} />
            </View>
          </View>
        </View>
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
  appliancestext: {
    fontWeight: 'bold',
    backgroundColor: '#E2E4E5',
    alignItems: 'baseline',
  },
  appliances: {
    width: '100%',
    flexDirection: 'row',
    height: '70%',
  },
  appliancesRow: {
    alignItems: 'baseline',
    backgroundColor: '#E2E4E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  applianceBox: {
    width: '42%',
    height: 'auto',
    borderRadius: 8,
  },
  applianceImage: {
    width: '80%',
    height: 100,
    marginBottom: 7,
  },
  topBrandsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  topBrandsContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  brandImage: {
    width: '30%',
    height: 30,
    marginBottom: 10,
  },
  flatlist: {
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
    backgroundColor: '#72C4FF',
  },
  slidebox: {
    marginBottom: 5,
  },
  secondview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewcarousel: {
    paddingTop: 10,
    width: 75,
    height: 70,
  },
  tinyLogo: {
    marginHorizontal: 3,
    width: 40,
    height: 40,
  },
  gift: {
    color: "#FF3535",
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
});

export default Home;  