// Importa las dependencias necesarias
import React from 'react';
// Importar librerias de navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar las pantallas de las interfaces
import PrincipalScreen from '../screens/principal';

// Crea el stack para la navegacion
const Stack = createStackNavigator();

// Función para crear las rutas 
function Router() {
  return (
    <NavigationContainer>
        {/* definir la ruta inicial como 'PrincipalScreen'*/}
      <Stack.Navigator initialRouteName='PrincipalScreen'> 

        <Stack.Screen name="PrincipalScreen" component={PrincipalScreen} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Exportar el componente con las rutas
export default Router;
