import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import axios from 'axios'

const ChartCountCalories: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const [userData, setUserData] = useState<any[]>([])
  const [chartInstance, setChartInstance] = useState<Chart | null>(null)

  useEffect(() => {
    axios.get('/user-food').then((response) => {
      setUserData(response.data)
    })
  }, [])

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy()
      }

      const ctx = chartRef.current.getContext('2d')

      if (ctx) {
        const calorieTotals: { [key: string]: number } = {}

        userData.forEach((userF) => {
          const name = userF.user.name
          const calories = userF.calories

          if (calorieTotals[name]) {
            calorieTotals[name] += calories
          } else {
            calorieTotals[name] = calories
          }
        })

        const chartData = {
          labels: Object.keys(calorieTotals),
          datasets: [
            {
              label: 'Calorias',
              data: Object.values(calorieTotals),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        }

        const chartOptions = {
          scales: {
            y: { beginAtZero: true },
          },
        }

        const newChartInstance = new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: chartOptions,
        })

        setChartInstance(newChartInstance)
      }
    }
  }, [userData])

  return <canvas ref={chartRef} style={{}} />
}

export default ChartCountCalories
