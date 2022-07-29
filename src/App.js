import './App.css';
import Plot from 'react-plotly.js';

import plotData from "./data";

const App = () => {

  const data = [{
    z: plotData,
    type: 'surface',
    contours: {
      z: {
        show:true,
        usecolormap: true,
        highlightcolor:"#42f462",
        project:{z: true}
      }
    }
  }];

  const layout = {
    title: 'Mt Bruno Elevation With Projected Contours',
    scene: {camera: {eye: {x: 1.87, y: 0.88, z: -0.64}}},
    autosize: false,
    width: 500,
    height: 500,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };
  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
};

export default App;
