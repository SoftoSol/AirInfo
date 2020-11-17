import React from 'react'
import { StackedBarChart } from 'react-native-svg-charts'
 
class CustomStackedBarChart extends React.Component {
    render() {
        const data = [
          {
            month: new Date(2015, 0, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 1, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 2, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 0, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 1, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 2, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 0, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 1, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 2, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
          {
            month: new Date(2015, 3, 1),
            d1: Math.random() * 100,
            d2: Math.random() * 100,
          },
        ];
 
        const colors = ['#7b4173', '#a55194', ]
        const keys = ['d1', 'd2']
 
        return (
            <StackedBarChart
                style={{ height: 200, width:"100%" }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                contentInset={{ top: 30, bottom: 30 }}
            />
        )
    }
}
export default CustomStackedBarChart;