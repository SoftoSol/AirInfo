import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
import { ForeignObject } from "react-native-svg";

const width = Dimensions.get("screen").width - 100;

function CustomPieChart(props) {
  const styles = StyleSheet.create({
    container: { width: width / 2 },
    title: {
      marginTop: 20,
      justifyContent: "center",
      display: "flex",
      color: "#a8a8a8",
      fontWeight: "bold",
      maxWidth: 100,
      textAlign: "center",
      alignSelf: "center",
    },
    progressCircle: {
      height: 100,
      marginTop: 10,
    },
    progressCircleContentContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: 90,
      height: 90,
      transform: [],
    },
    progressCircleContentView: {
      width: 90,
      marginBottom: 5,
    },
    text: {
      fontSize: 20,
      fontWeight: 600,
      color: props.color,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <ProgressCircle
        style={styles.progressCircle}
        progress={props.value / 100}
        progressColor={props.color}
      >
        <ForeignObject x={-45} y={-45}>
          <View style={styles.progressCircleContentContainer}>
            <Text style={styles.text}>{props.value}%</Text>
          </View>
        </ForeignObject>
      </ProgressCircle>
    </View>
  );
}

export default CustomPieChart;
