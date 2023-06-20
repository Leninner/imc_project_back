import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import axios from 'axios'

const chartCountCalories: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const [userData, setUserData] = useState<any[]>([])
  const [chartInstance, setChartInstance] = useState<Chart | null>(null)

  useEffect(() => {
    // Obtener los datos de los usuarios desde el backend
    axios.get('/user-food').then((response) => {
      setUserData(response.data)
    })
  }, [])

  console.log(userData.map((u) => u.calories) + 'datos aqui users');
  console.log(userData.map((u) => u.userId) + 'datos aqui users2');



  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance) {
        // Destruir el gráfico existente antes de crear uno nuevo
        chartInstance.destroy()
      }

      const ctx = chartRef.current.getContext('2d')

      if (ctx) {
        const chartData = {
          labels: userData.map((userF) => userF.userId),
          datasets: [
            {
              label: 'Calorias',
              data: userData.map((userF) => userF.calories),
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
  }, [userData])

  return (
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
      <h1 style={{ textAlign: 'center', paddingTop: '20px' ,fontWeight: 'bold' }}>
        Usuarios que mas calorias consumen
      </h1>
      <div style={{ width: '80%', height: '70%', marginTop: '20px' }}>
        <canvas ref={chartRef} style={{}} />
      </div>
    </div>
  )
}

export default chartCountCalories
