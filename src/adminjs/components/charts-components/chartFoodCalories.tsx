import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import axios from 'axios'

const MyChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const [foodData, setFoodData] = useState<any[]>([])
  const [chartInstance, setChartInstance] = useState<Chart | null>(null)

  useEffect(() => {
    // Obtener los datos de comida desde el backend
    axios.get('/food').then((response) => {
      setFoodData(response.data)
    })
  }, [])


  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance) {
        // Destruir el gráfico existente antes de crear uno nuevo
        chartInstance.destroy()
      }

      const ctx = chartRef.current.getContext('2d')

      if (ctx) {
        const chartData = {
          labels: foodData.map((food) => food.name),
          datasets: [
            {
              label: 'Calorias',
              data: foodData.map((food) => food.calories),
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

        // Crear el gráfico de barras
        const newChartInstance = new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: chartOptions,
        })

        setChartInstance(newChartInstance)
      }
    }
  }, [foodData])

  return (
    <canvas ref={chartRef} style={{}} />
  )
}


export default MyChartComponent
