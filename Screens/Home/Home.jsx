import React from "react";
import { Text, View } from "react-native";
import Header from "../../Components/Header/Header.component";
import PieChart from "../../Components/PieChartComponent/PieChart.Component";

function Home(props) {
  return (
    <View>
      <Header {...props} />
      <PieChart color="green" value={40} />
    </View>
  );
}

export default Home;
