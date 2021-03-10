import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import cars from "./cars";
import styles from "./styles";
import CarItem from "../CarItem";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem {...item} />}
        keyExtractor={(item) => item.title}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
