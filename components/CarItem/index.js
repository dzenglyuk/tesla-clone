import React from "react";
import { View, Text, ImageBackground } from "react-native";
import CustomButton from "../CustomButton";
import styles from "./styles";

const CarItem = ({ image, title, subtitle }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <CustomButton
        type="primary"
        text="Custom Order"
        onPress={() => {
          console.log("Custom Order");
        }}
      />
      <CustomButton
        type="secondary"
        text="Existing Inventory"
        onPress={() => {
          console.log("Existing Inventory");
        }}
      />
    </View>
  );
};

export default CarItem;
