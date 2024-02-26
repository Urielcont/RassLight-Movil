
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PrototipoScreen from './info_proto';
import ContactoScreen from './contactanos';
import PrincipalScreen from './principal';

const Stack = createStackNavigator();

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
      <View style={styles.header}>
        {/* Imagen a la izquierda */}
        <Image
          source={require('../../assets/izq.png')}
          resizeMode="cover"
          style={[styles.headerImage, styles.leftImage]}
        />
        
        {/* Imagen en el centro */}
        <Image
          source={require('../../assets/logo.png')}
          resizeMode="cover"
          style={[styles.headerImage, styles.centerImage]}
        />
        
        {/* Imagen a la derecha */}
        <Image
          source={require('../../assets/der.png')}
          resizeMode="cover"
          style={[styles.headerImage, styles.rightImage]}
        />
        
        {/* Menú */}
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => handleOptionPress('Inicio')}>
            <Text style={[styles.menuOption, selectedOption === 'Inicio' && styles.selectedOption]}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionPress('Prototipo')}>
            <Text style={[styles.menuOption, selectedOption === 'Prototipo' && styles.selectedOption]}>Prototipo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionPress('SobreNosotros')}>
            <Text style={[styles.menuOption, selectedOption === 'SobreNosotros' && styles.selectedOption]}>Sobre Nosotros</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionPress('Contactanos')}>
            <Text style={[styles.menuOption, selectedOption === 'Contactanos' && styles.selectedOption]}>Contáctanos</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Contenido */}
      <ScrollView style={styles.content}>
        {selectedOption === 'Inicio' && <PrincipalScreen/>}
        {selectedOption === 'Prototipo' && <PrototipoScreen />}
        {selectedOption === 'SobreNosotros' && <View style={[styles.page, { backgroundColor: 'gray' }]}><Text>Contenido de Inicio</Text></View>}
        {selectedOption === 'Contactanos' && <ContactoScreen/>}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Botón 1 */}
        <TouchableOpacity style={styles.button} onPress={() => handleOptionPress('facebook')}>
           <Image source={require('../../assets/face_fon.png')} style={styles.backgroundImage} />
          <Image source={require('../../assets/fa_or.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText1}>Facebook</Text>
        </TouchableOpacity>

        {/* Botón 2 */}
        <TouchableOpacity style={styles.button} onPress={() => handleOptionPress('Instagram')}>
           <Image source={require('../../assets/insta_fon.png')} style={styles.backgroundImage} />
          <Image source={require('../../assets/insta_or.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText1}>Instagram</Text>
        </TouchableOpacity>

        {/* Botón 3 */}
        <TouchableOpacity style={styles.button} onPress={() => handleOptionPress('Youtube')}>
           <Image source={require('../../assets/you_fon.png')} style={styles.backgroundImage} />
          <Image source={require('../../assets/you_or.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText1}>Youtube</Text>
        </TouchableOpacity>

        {/* Botón 4 */}
        <TouchableOpacity style={styles.button} onPress={() => handleOptionPress('WhatsApp')}>
           <Image source={require('../../assets/wh_fon.png')} style={styles.backgroundImage} />
          <Image source={require('../../assets/wh_or.png')} style={styles.buttonIcon} />
        
          <Text style={styles.buttonText1}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer2}>
        <Image source={require('../../assets/logo_chi.png')} style={styles.logoIcon} />
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>pagina principal</Text>
          <Text style={styles.footerText}>contacto</Text>
          <Text style={styles.footerText}>cotizacion</Text>
        </View>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>Datos de la empresa</Text>
          <Text style={styles.footerText}>hsdbvbvhfbvibdfib</Text>
          <Text style={styles.footerText}>hsdbvbvhfbvibdfib</Text>
          <Text style={styles.footerText}>hsdbvbvhfbvibdfib</Text>
        
        </View>
        
          <Image source={require('../../assets/map.png')} style={styles.mapIcon} />
      </View>
        <View style={styles.footer3}>
         <Text style={styles.footerText}>© 2024 RassLight</Text>
        </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white', 
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
