import React, { CSSProperties } from 'react';
import ChartCountCalories from './charts-components/chartCountCalories';
import ChartFoodCalories from './charts-components/chartFoodCalories';
import ChartUserGender from './charts-components/chartUserGender';

const MyChartComponent: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>
          Usuarios con más Calorías Consumidas
        </h1>
        <ChartCountCalories />
      </div>
      <div style={cardStyle}>
        <h1 style={titleStyle}>
          Alimentos con más Calorías
        </h1>
        <ChartFoodCalories />
      </div>
      <div style={cardStyle}>
        <h1 style={titleStyle}>
          Consumo de calorias por genero
        </h1>
        <ChartUserGender />
      </div>
    </div>
  );
};

const cardStyle: CSSProperties = {
  width: '550px',
  margin: '10px',
  padding: '10px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const titleStyle: CSSProperties = {
  textAlign: 'center',
  paddingTop: '20px',
  fontWeight: 'bold',
};

export default MyChartComponent;
