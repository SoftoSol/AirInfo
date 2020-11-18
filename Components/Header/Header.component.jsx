import React from "react";
import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function Header(props) {
  return (
    <View style={{flexDirection:"row",alignItems:"center",padding:20,backgroundColor:"#fff"}}>
      <TouchableOpacity onPress={()=>props.navigation.openDrawer()}><FontAwesomeIcon icon={faBars} style={{marginRight:10}}/></TouchableOpacity>
      <Text>Home</Text>
    </View>
  );
}

export default Header;
