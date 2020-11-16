import React from "react";
import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHistory, faHome } from "@fortawesome/free-solid-svg-icons";

function MenuItem(props) {
  return (
    <View
      style={{
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon
        icon={props.title == "Rooms" ? faHome : faHistory}
        style={{ width: 20, height: 20, marginRight: 10, color: "grey" }}
      />
      <Text>{props.title}</Text>
    </View>
  );
}

export default MenuItem;
