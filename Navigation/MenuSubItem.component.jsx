import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function MenuSubItem(props) {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("Room")}>
      <View
        style={{
          padding: 10,
          paddingLeft: 45,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>{props.title}</Text>
        <FontAwesomeIcon icon={faAngleRight} />
      </View>
    </TouchableOpacity>
  );
}

export default MenuSubItem;
