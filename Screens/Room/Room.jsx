import React from "react";
import { Text, View } from "react-native";
import Back from "../../Components/Back/Back.Component";
import PieChart from "../../Components/PieChartComponent/PieChart.Component";

import Constants from "expo-constants";
function Room(props) {
  return (
    <View style={{ padding: 20,paddingTop:Constants.statusBarHeight, backgroundColor: "#fff", height: "100%" }}>
      <Back {...props} />
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 40 }}>
        Living Room
      </Text>
      <View style={{ marginTop: 30 }}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <PieChart color="green" value={Math.random() * 100} title="O2" />
            <PieChart color="red" value={Math.random() * 100} title="CO2" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <PieChart color="blue" value={Math.random() * 100} title="Dust" />
            <PieChart color="#fcba03" value={Math.random() * 100} title="Gas Presence (MQ2)" />
          </View>
          <PieChart color="purple" value={Math.random() * 100} title="Air Condition" />
        </View>
      </View>
    </View>
  );
}

export default Room;
