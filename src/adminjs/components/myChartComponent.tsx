import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import axios from 'axios'
import ChartCountCalories from './chartCountCalories'

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

  //console.log(foodData.map((u) => u.usasa));


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
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80%',
          height: '80%',
          margin: 'auto',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
        }}
      >
        <h1 style={{ textAlign: 'center', paddingTop: '20px', fontWeight: 'bold' }}>
          Alimentos con mas Calorias
        </h1>
        <div style={{ width: '80%', height: '70%', marginTop: '20px' }}>
          <canvas ref={chartRef} style={{}} />
        </div>
      </div>
      <div>
        <ChartCountCalories/>
      </div>
    </div>
  )
}


export default MyChartComponent