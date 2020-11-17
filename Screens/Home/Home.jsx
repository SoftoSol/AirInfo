import React from "react";
import { Text, View } from "react-native";
import Divider from "../../Components/Divider/Divider.component";
import Header from "../../Components/Header/Header.component";
import PieChart from "../../Components/PieChartComponent/PieChart.Component";
import StackedBarChart from "../../Components/StackedBar/StackBar.component";
import Styles from './Home.style';
function Home(props) {
  return (
    <View>
      <Header {...props} />
      <View style={{margin:20}}>
        <View style={Styles.section}>
          <Text style={Styles.title}>Header</Text>
          <Divider />
          <View style={Styles.row}>
            <PieChart color="green" value={Math.random() * 100} title="O2" />
            <PieChart color="red" value={Math.random() * 100} title="CO2" />
          </View>
        </View>
        <View  style={Styles.section}>
          <Text  style={Styles.title}>Header</Text>
          <Divider />
          <View style={Styles.row}>
            <StackedBarChart/>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;
