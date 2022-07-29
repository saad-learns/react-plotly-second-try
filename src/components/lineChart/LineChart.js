import { csv } from 'd3';
import {useEffect, useState} from "react";
import Plot from 'react-plotly.js';
import plotData from './data.csv'

const LineChart = () => {

  const [date, setDate] = useState([]);
  const [a, setA] = useState([]);
  const [b, setB] = useState([]);

  useEffect(() => {
    csv(plotData)
      .then(data => {
        let date = [];
        let a = [];
        let b = [];

        data.forEach(data => {
          date.push(data['Date']);
          a.push(data['A']);
          b.push(data['B']);
        })

        setDate(date);
        setA(a);
        setB(b);
      });
  }, []);

  let layout = {
    title: "Basic Line Chart",
    yaxis: {
      range: [0, 100]
    }
  };

  let data = [
    {
      x: date,
      y: a,
      name: "B",
      line: {
        color: "#387fba",
        width: 3
      }
    },
    {
      x: date,
      y: b,
      name: "B",
      line: {
        color: "#54ba38",
        width: 3
      }
    }
  ]
  let config = {
    responsive: true,
  };

  return (
    <Plot
      data={data} layout={layout} config={config}
    />
  );
};

export default LineChart;