import React from "react";
import PropTypes from "prop-types";
import { View, Text, ImageBackground } from "react-native";
import CustomButton from "../CustomButton";
import styles from "./styles";

const CarItem = ({ title, subtitle, subtitleCTA, image }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.titles}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {subtitle} &nbsp;
            <Text style={styles.subtitleCTA}>{subtitleCTA}</Text>
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
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
      </ImageBackground>
    </View>
  );
};

CarItem.defaultProps = {
  title: "Model S",
  subtitle: "Starting at $69,420",
  subtitleCTA: null,
  image: require("../../assets/images/ModelS.jpeg"),
};

CarItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  subtitleCTA: PropTypes.string,
  image: PropTypes.node.isRequired,
};

export default CarItem;
