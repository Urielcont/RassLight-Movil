import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

// Importar archivo con las rutas
import Router from './client/controller/rutas';

const App = () => {
  return (
    // importar el componente con las rutas para la pagina principal
      <Router/>
  );
};

export default App;