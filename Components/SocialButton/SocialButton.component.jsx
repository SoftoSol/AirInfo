import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const Facebook={logo:"../../assets/facebook.png",
name:"Facebook",
backgroundColor:"#3b5998"}

const Twitter={logo:"../../assets/twitter.png",
name:"Twitter",
backgroundColor:"#08a0e9"}

function SocialButton(props) {
    let bg=props.platform=="twitter"?Twitter.backgroundColor:Facebook.backgroundColor;
  return (
    <TouchableOpacity style={[Styles.socialButton,{backgroundColor:bg}]}>
        
      <Image
        source={props.platform=="twitter"? require("../../assets/twitter.png"): require("../../assets/facebook.png")}
        style={Styles.socialLogo}/>
      <Text style={Styles.text}>{props.platform=="twitter"?Twitter.name:Facebook.name}</Text>
    </TouchableOpacity>
  );
}

export default SocialButton;

const Styles = StyleSheet.create({
  socialButton: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(171,180,189,0.65)",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(171,180,189,0.35)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,

  },
  socialLogo: {
    width: 20,
    height: 20,
    resizeMode:"contain"
  },
  text: {
    fontFamily: "Open Sans",
    color:"#fff",
    fontWeight:"bold",
    marginLeft:10
  },
});
