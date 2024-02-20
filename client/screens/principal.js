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
    </ScrollView>
  );
}

export default PrincipalScreen;
