
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PrototipoScreen from './info_proto';
import ContactoScreen from './contactanos';
import PrincipalScreen from './principal';
import SobreNosotrosScreen from './sobre_nosotros';

const Stack = createStackNavigator();

const logo = require('../../assets/logo.png');

const Footer = () => {
  return (
    <View style={styles.container}>
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

export default Footer;
