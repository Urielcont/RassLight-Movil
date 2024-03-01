import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function AboutUs() {
  const [section, setSection] = useState('Visión');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Sobre Nosotros</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          {section}
        </Text>
        <View style={{ marginBottom: 16 }}>
          <Image
            source={require('./assets/ventajas-nube.jpg')}
            style={{ width: 350, height: 200, borderRadius: 10 }}
          />
        </View>
        <View style={{ backgroundColor: '#26ADE4', borderRadius: 10, padding: 16, marginBottom: 16 }}>
          <Text style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Misión</Text>
        <View style={{ marginBottom: 16 }}>
          <Image
            source={require('./assets/ventajas-nube.jpg')}
            style={{ width: 350, height: 200, borderRadius: 10 }}
          />
        </View>
        <View style={{ backgroundColor: '#26ADE4', borderRadius: 10, padding: 16, marginBottom: 16 }}>
          <Text style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Nuestro Enfoque</Text>
        <View style={{ backgroundColor: '#4DBEC9', borderRadius: 15, padding: 10, marginBottom: 16 }}>
          <Text style={{ color: 'white', fontSize: 18, marginBottom: 8 }}>Infraestructura de la nube</Text>
        </View>
        <View style={{ backgroundColor: '#D1E751', borderRadius: 10, padding: 16, marginBottom: 16 }}>
          <Text style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>
        <View style={{ backgroundColor: '#4DBEC9', borderRadius: 15, padding: 10, marginBottom: 16 }}>
          <Text style={{ color: 'white', fontSize: 18, marginBottom: 8 }}>Internet de las cosas</Text>
        </View>
        <View style={{ backgroundColor: '#D1E751', borderRadius: 10, padding: 16, marginBottom: 16 }}>
          <Text style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>
        <View style={{ backgroundColor: '#4DBEC9', borderRadius: 15, padding: 10, marginBottom: 16 }}>
          <Text style={{ color: 'white', fontSize: 18, marginBottom: 8 }}>Desarrollo de Software</Text>
        </View>
        <View style={{ backgroundColor: '#D1E751', borderRadius: 10, padding: 16, marginBottom: 16 }}>
          <Text style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default AboutUs;