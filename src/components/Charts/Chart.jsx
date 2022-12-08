import React from 'react'
import { useEffect, useState } from 'react'
import { FetchDailyData } from "../../Api/index"
import { Line, Bar } from "react-chartjs-2"
import "./Chart.css"
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  LineElement
} from 'chart.js'
ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  LineElement

)


const Chart = ({data, country}) => {

  console.log(data);
  console.log(country);

  let [dailyData, setdailyData] = useState([]);

  useEffect(() => {
    const fethchDats = async () => {
      const data = await FetchDailyData();
      console.log(data);
      setdailyData(data);
    }
    fethchDats();
  }, []);
  console.log(dailyData);

  const LineChart = (
    dailyData.length !=0 ?
      <Line data={{
        labels: dailyData.map(({ date}) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: "infected",
          borderColor: "#3333ff",
          fill: true
        }, 
        {
          data: dailyData.map(({ recovered }) => recovered),
          label: "Recovered",
          borderColor: "green",
          backgroundColor: 'rgba(255,0,0,0.5)',
          fill: true
        },
        
        {
          data: dailyData.map(({ deaths }) => deaths),
          label: "Deaths",
          borderColor: "red",
          backgroundColor: 'rgba(255,0,0,0.5)',
          fill: true
        }


        ],
      }} /> : null
  );

  const BarChart = (
    data.confirmed ? (
      <Bar
      sx={12} md={3}
        data={
          {
            labels: ["infected", "recovered", "Deaths"],
            datasets: [{
              label: 'people',
              backgroundColor: [
                "rgba(0, 0, 255,0.5)",
                "rgba(0,255, 0,0.5",
                "rgba( 255,0, 0,.5)"
              ],
  
                 data:[data.confirmed.value,
              


               (data.confirmed.value)-(data.deaths.value),
              data.deaths.value
              ]
            }]

          }
        }
        options={{
          legend: { dispaly: false },
          title: { dispaly: true, text: `Current State in ${country}` }
        }}


      />

    ) : null
  )
  return <>
    <div className="container">
      <div className="bar-chart">
        <h1>Country Picker</h1>
        {/* {console.log(lineChart)} */}
        {/* {lineChart } */}
        {  
           country !=="global" ? BarChart :LineChart
        }

      </div>
    </div>


  </>
}

export default Chart
