import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function ClosePanel({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.closeDrawer();
      }}
      style={{ margin: 10 }}
    >
      <FontAwesomeIcon icon={faTimes} />
    </TouchableOpacity>
  );
}

export default ClosePanel;
