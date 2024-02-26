import React from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ContactForm = () => {
  return (
    <View style={styles.container}>
      {/* Imagen en la parte superior derecha */}
      <Image
        source={require('../../assets/superior_de.png')}
        style={styles.imageTopRight}
      />
      {/* Imagen en la parte inferior izquierda */}
      <Image
        source={require('../../assets/inferior_izq.png')}
        style={styles.imageBottomLeft}
      />
      <View style={styles.formBox}>
        <View style={styles.contentContainer}>
          {/* Logo */}
          <Image
            source={require('../../assets/logo_original.png')}
            style={styles.logo}
          />
          {/* Texto "Contáctanos" */}
          <Text style={styles.contactText}>Contáctanos</Text>
          {/* Formulario */}
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Nombre completo"
              style={[styles.input_1, styles.singleLineInput]}
            />
            <TextInput
              placeholder="Correo electrónico"
              style={[styles.input_1, styles.singleLineInput]}
            />
            <TextInput
              placeholder="Mensaje"
              multiline={true}
              numberOfLines={5}
              style={[styles.input, styles.messageInput]}
            />
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Logos adicionales y mapa */}
        <View style={styles.logoMapContainer}>
          {/* Logos adicionales */}
          <View style={styles.logoContainer}>
            <View style={styles.logoItem}>
              <Image
                source={require('../../assets/correo.png')}
                style={styles.additionalLogo}
              />
              <View style={styles.textContainer}>
                <Text style={styles.additionalText}>Texto 1.1</Text>
                <Text style={styles.additionalText_1}>Texto 1.2</Text>
              </View>
            </View>
            <View style={styles.logoItem}>
              <Image
                source={require('../../assets/telefono.jpg')}
                style={styles.additionalLogo}
              />
              <View style={styles.textContainer}>
                <Text style={styles.additionalText}>Texto 2.1</Text>
                <Text style={styles.additionalText_1}>Texto 2.2</Text>
              </View>
            </View>
            <View style={styles.logoItem}>
              <Image
                source={require('../../assets/ubi.jpg')}
                style={styles.additionalLogo}
              />
              <View style={styles.textContainer}>
                <Text style={styles.additionalText}>Texto 3.1</Text>
                <Text style={styles.additionalText_1}>Texto 3.2</Text>
              </View>
            </View>
          </View>
          {/* Mapa */}
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 23.99029471495788,
                longitude: -104.61758080438229,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}>
              <Marker
                coordinate={{ latitude: 23.99029471495788, longitude: -104.61758080438229 }}
                title="Mi Ubicación"
                description="Estoy aquí"
              />
            </MapView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 30,
    paddingTop:70
  },
  imageTopRight: {
    position: 'absolute',
    top: 30,
    right: 25,
    width: 100,
    height: 100,
  },
  imageBottomLeft: {
    position: 'absolute',
    bottom: -20,
    left: 10,
    width: 100,
    height: 100,
  },
  formBox: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  contentContainer: {},
  logo: {
    width: 140,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  contactText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00BCC5',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  input_1: {
    borderBottomWidth: 1,
    borderBottomColor: '#00BCC5',
    padding: 10,
    marginBottom: 10,
  },
  singleLineInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#00BCC5',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#00BCC5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  additionalLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  additionalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  additionalText_1: {
    fontSize: 12,
    color: '#333',
  },
  logoMapContainer: {
    flexDirection: 'row', 
  },
  mapContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    paddingLeft: 15,
  },
  map: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default ContactForm;

