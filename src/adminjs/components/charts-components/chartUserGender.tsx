import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import axios from 'axios'

const ChartUserGender: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const [userData, setUserData] = useState<any[]>([])
  const [chartInstance, setChartInstance] = useState<Chart | null>(null)

  useEffect(() => {
    // Obtener los datos de los usuarios desde el backend
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
        const barTotals: { [key: string]: number } = {}

        userData.forEach((userF) => {
          const gender = userF.user.gender
          const calories = userF.calories

          if (barTotals[gender]) {
            barTotals[gender] += calories
          } else {
            barTotals[gender] = calories
          }
        })

        const chartData = {
          labels: Object.keys(barTotals),
          datasets: [
            {
              label: 'Calorias',
              data: Object.values(barTotals),
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

export default ChartUserGender
