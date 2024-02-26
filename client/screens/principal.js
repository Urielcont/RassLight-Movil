import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const logo = require('../../assets/logo.png');
const fondo1 = require('../../assets/img1.jpg');
const fondo2 = require('../../assets/img2.jpg');
const fondo3 = require('../../assets/img3.jpg');
const fondo4 = require('../../assets/img4.jpg');
const fondo5 = require('../../assets/img5.jpg');

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
  bienvenido: {
    height: 300, // Fijo la altura para la sección de bienvenida
  },
  fondo1: {
    height: '100%',
    width: '100%',
  },
  titulo_container: {
    position: 'absolute',
    top: 10,
    height: 60,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitulo_container: {
    position: 'absolute',
    top: 240,
    height: 60,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  nosotros: {
    height: 300, // Fijo la altura para la sección de nosotros
  },
  fondo2: {
    height: '100%',
    width: '100%',
  },
  sw: {
    height: 300, // Fijo la altura para la sección de sw
  },
  fondo3: {
    height: '100%',
    width: '100%',
  },
  iot: {
    height: 300, // Fijo la altura para la sección de iot
  },
  fondo4: {
    height: '100%',
    width: '100%',
  },
  nube: {
    height: 300, // Fijo la altura para la sección de nube
  },
  fondo5: {
    height: '100%',
    width: '100%',
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

function PrincipalScreen() {
  return (
    <ScrollView style={styles.container}>

      <Image source={logo} style={styles.logo} />
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.text_header}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text_header}>Prototipo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text_header}>Sobre nosotros</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text_header}>Contactanos</Text>
        </TouchableOpacity>
      </View>
      {/* Primera seccion de bienvenida */}
      <View style={styles.bienvenido}>
        <Image source={fondo1} style={styles.fondo1} />
        <View style={styles.titulo_container}><Text style={styles.titulo}>BIENVENIDO</Text></View>
      </View>

      <View style={styles.nosotros}>
        <TouchableOpacity>
          <Image source={fondo2} style={styles.fondo2} />
          <View style={styles.subtitulo_container}><Text style={styles.subtitulo}>SOBRE NOSOTROS</Text></View>
        </TouchableOpacity>
      </View>

      <View style={styles.sw}>
        <TouchableOpacity>
          <Image source={fondo3} style={styles.fondo3} />
          <View style={styles.subtitulo_container}><Text style={styles.subtitulo}>DESARROLLO DE SOFTWARE</Text></View>
        </TouchableOpacity>
      </View>

      <View style={styles.iot}>
        <TouchableOpacity>
          <Image source={fondo4} style={styles.fondo4} />
          <View style={styles.subtitulo_container}><Text style={styles.subtitulo}>INTERNET DE LAS COSAS</Text></View>
        </TouchableOpacity>
      </View>

      <View style={styles.nube}>
        <TouchableOpacity>
          <Image source={fondo5} style={styles.fondo5} />
          <View style={styles.subtitulo_container}><Text style={styles.subtitulo}>INFRAESTRCTURA EN LA NUBE</Text></View>
        </TouchableOpacity>
      </View>

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
    </ScrollView>
  );
}

export default PrincipalScreen;
