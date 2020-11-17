import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import ClosePanel from "../Components/ClosePanel/ClosePanel.component";
import MenuItem from "./MenuItem.component";
import MenuSubItem from "./MenuSubItem.component";

const { height } = Dimensions.get("window");

function Menu(props) {
  return (
    <View style={{ height: height }}>
      <View>
        <View>
          <ClosePanel {...props}/>
        </View>
        <View
          style={{
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          <Image
            source={require("../assets/profile.png")}
            style={{ width: 120, height: 120 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>SoftoSol</Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <MenuItem title="Rooms"></MenuItem>
        <MenuSubItem title="Living Room" {...props} />
      </View>
      <View></View>
      <View style={{ marginTop: "auto", marginBottom: 50 }}>
        <MenuItem title="History" />
      </View>
    </View>
  );
}

export default Menu;
