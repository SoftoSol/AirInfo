import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function Back({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginBottom: 10 }}
    >
      <FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon>
    </TouchableOpacity>
  );
}

export default Back;
