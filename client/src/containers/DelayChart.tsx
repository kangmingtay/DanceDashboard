import React from 'react'
import { ChartOptions } from 'chart.js'
import { useSelector } from 'react-redux'
import { Move } from '../store/session/types'
import LineChart from '../components/Charts/LineChart'

const options: ChartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          max: 1.5
        },
      },
    ],
  },
}

const selectMoves = (state: any) => { 
    return state.moveStore
}

const DelayChart = () => {
    const moveData = useSelector(selectMoves)

    return (
        <>
            <LineChart 
                options={options} 
                xAxis={moveData.moves.slice(0, 4).map((el: Move) => el.move)} 
                yAxis={moveData.moves.slice(0, 4).map((el: Move) => el.delay)}
                xLabel="Moves"
                yLabel="Delay (ms)"
                chartTitle="Avg Team Delay (ms)"
            />
        </>
    )
}

export default DelayChart