
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PrototipoScreen from './info_proto';
import ContactoScreen from './contactanos';
import PrincipalScreen from './principal';
import SobreNosotrosScreen from './sobre_nosotros';

const Stack = createStackNavigator();

const logo = require('../../assets/logo.png');

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const HomeScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}

      <Image source={logo} style={styles.logo} />
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleOptionPress('Inicio')}>
          <Text style={[styles.text_header, selectedOption === 'Inicio' && styles.selectedOption]}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionPress('Prototipo')}>
          <Text style={[styles.text_header, selectedOption === 'Prototipo' && styles.selectedOption]}>Prototipo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionPress('SobreNosotros')}>
          <Text style={[styles.text_header, selectedOption === 'SobreNosotros' && styles.selectedOption]}>Sobre nosotros</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionPress('Contactanos')}>
          <Text style={[styles.text_header, selectedOption === 'Contactanos' && styles.selectedOption]}>Contactanos</Text>
        </TouchableOpacity>
      </View>

      
      {/* Contenido */}
      <ScrollView style={styles.content}>
        {selectedOption === 'Inicio' && <PrincipalScreen/>}
        {selectedOption === 'Prototipo' && <PrototipoScreen />}
        {selectedOption === 'SobreNosotros' && <SobreNosotrosScreen/>}
        {selectedOption === 'Contactanos' && <ContactoScreen/>}
      </ScrollView>

    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text_header: {
    color: 'black',
  },
  logo:{
    height:50,
    width:40,
    alignSelf:'center',
    marginTop:30
  },
  headerImage: {
    height: 100, 
  },
  leftImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 100, 
    height: 50, 
  },
  centerImage: {
    alignSelf: 'center',
    width: 50, 
    height: 25, 
  },
  rightImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 100, 
    height: 50, 
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 25, 
  },
  menuOption: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
  },
  selectedOption: {
    color: 'blue',
  },
  content: {
    flex: 1,
  },
  page: {
    height: 1000, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer2: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height:70
  },
  footer3: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding:1,
    height:15,
    
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    height:50,
    width:90

  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginRight: 1,
  },
  buttonText1: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },

  logoIcon: {
    width: 50,
    height: 50,
  },
  mapIcon:{
    width:50,
    height:50
  },
  footerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 10,
    justifyContent:'center',
    textAlign: 'center', 
  },

    backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Esto asegura que la imagen se ajuste al tamaño del botón
  },
});

export default App;
