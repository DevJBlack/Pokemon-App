import React, { useEffect } from 'react'
import './Pokemon.scss'
import Chart from 'chart.js'

const Pokemon = () => {

 let chartRef = React.createRef()

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d')

    new Chart(myChartRef, {
      type: 'doughnut',

      data: {
        datasets: [
          {
          data: [75,125,155,100],
          backgroundColor: ['red','black','blue','orange']
          }
        ],
        labels: ['June', 'July','August','October']
      },
      options: {
        maintainAspectRatio: false
      }
    })
  }, [chartRef])


  return (
    <div>
      <canvas id="myChart" ref={chartRef} style={{'display': 'inline','justifyContent': 'flexEnd', 'width': '45vw', 'maxHeight': '30vh'}} />
    </div>
  )
}

export default Pokemon
