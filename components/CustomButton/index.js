import React from "react";
import PropTypes from "prop-types";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const CustomButton = ({ type, text, onPress }) => {
  let textColor;
  const backgroundColor =
    type === "primary"
      ? ((textColor = "#FFFFFF"), "#171A20CC")
      : ((textColor = "#171A20"), "#FFFFFFA6");

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: backgroundColor,
          },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.text,
            {
              color: textColor,
            },
          ]}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

CustomButton.defaultProps = {
  type: "primary",
  text: "Custom Order",
  onPress: () => {},
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CustomButton;
