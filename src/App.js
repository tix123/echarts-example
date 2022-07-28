import * as echarts from 'echarts';
import { useEffect } from 'react';


function App() {

  useEffect(() => {

    //Copy from the official line chart example 
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', myChart.resize); //For the Resize function

  }, [])



  return (
    <div id="main" style={{minHeight:600}}></div>
  );
}

export default App;
