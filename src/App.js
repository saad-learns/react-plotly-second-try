import './App.css';
import Plot from 'react-plotly.js';

const App = () => {
  return (
    <Plot
      data={[
          {
          x: [1, 2, 3],
          y: [2, 5, 3],
          type: 'bar',
        },
      ]}
      layout={{width: 600, height: 600, title: 'A Fancy Plot'}}
    />
  );
};

export default App;
