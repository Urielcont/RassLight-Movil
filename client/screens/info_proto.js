import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const { width } = Dimensions.get('window');
const box_count = 3;
const box_height = Dimensions.get('window').height / box_count;

export default class VerticalStackLayout extends Component {
  state = {
    activeIndex: 0,
    carouselItems: [
      {
        image: require('../../assets/caja_1.png'),
        text: 'Texto 1'
      },
      {
        image: require('../../assets/der.png'),
        text: 'Texto 2'
      },
      {
        image: require('../../assets/face_fon.png'),
        text: 'Texto 3'
      }
      // Agrega más elementos según sea necesario
    ]
  };
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} />
      </View>
    );
  };
  get pagination() {
    const { carouselItems, activeIndex } = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={{ backgroundColor: 'transparent', marginTop: -20 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.text}>NOMBRE DEL PROTOTIPO</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/caja_1.png')} style={styles.image} />
          </View>
        </View>
        <View style={[styles.box, styles.box2]}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Título</Text>
            <Text style={styles.text_8}>Tu texto aquí...</Text>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.contentContainer}>
              <View style={styles.carouselContainer}>
                <Carousel
                  layout={'default'}
                  ref={ref => (this.carousel = ref)}
                  data={this.state.carouselItems}
                  sliderWidth={width* 0.4}
                  itemWidth={width*0.4}
                  renderItem={this._renderItem}
                  onSnapToItem={index => this.setState({ activeIndex: index })}
                />
                {this.pagination}
              </View>
              <Text style={styles.text_1}>ewnwfirabflnjbniurjbfaj</Text>
            </View>
          </View>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.title}>¿Por qué debes usar nuestro prototipo?</Text>
          <View style={styles.innerBoxContainer}>
            <View style={[styles.innerBox, styles.blueBorder]}>
            <Text style={styles.text_2}>kjblfvnadefvbjerv eñjkrbñ</Text>
            </View>
            <View style={[styles.innerBox, styles.blueBorder]}>
            <Text style={styles.text_2}>jfbvnlfclskifrjdncs. ?</Text>
            </View>
            <View style={[styles.innerBox, styles.blueBorder]}>
            <Text style={styles.text_2}>j fdvr avlhlebrvdf vauerhfansdf</Text>
            </View>
            <View style={[styles.innerBox, styles.blueBorder]}>
            <Text style={styles.text_2}>hdhbfv,dfnjvzhrhvfb ,dxjvnz</Text>
            </View>
          </View>
        </View>
            <View style={[styles.box, styles.box4]}>
        <Text style={styles.title_2}>COMPONENTES</Text>
        <View style={styles.contentContainer}>
          <View style={styles.leftContent}>
            <Image source={require('../../assets/caja_1.png')} style={[styles.image, { width: 100, height: 100 }]} />
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.text}>PH</Text>
            <Text style={styles.subtitle}>Texto debajo del subtítulo</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>

          <View style={styles.rightContent}>
            <Text style={styles.text}>PH</Text>
            <Text style={styles.subtitle}>Texto debajo del subtítulo</Text>
          </View>
            <View style={styles.leftContent}>
            <Image source={require('../../assets/caja_1.png')} style={[styles.image, { width: 100, height: 100 }]} />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.leftContent}>
            <Image source={require('../../assets/caja_1.png')} style={[styles.image, { width: 100, height: 100 }]} />
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.text}>PH</Text>
            <Text style={styles.subtitle}>Texto debajo del subtítulo</Text>
          </View>
        </View>
      </View>
      <View style={[styles.box, styles.box5]}>
        <View style={styles.contentContainer}>
          <View style={styles.leftContent_4}>
            <Text style={styles.title_0}>Especificaciones</Text>
          </View>
          <View style={styles.rightContent}>
            <View style={styles.bullet}></View>
            <View style={styles.bullet}></View>
            <View style={styles.bullet}></View>
            <View style={styles.bullet}></View>
            <View style={styles.bullet}></View>
            <View style={styles.bullet}></View>
            <View style={styles.bullet}></View>
            <View style={styles.bullet}></View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.leftContent_4}>
            <Text style={styles.title_0}>Documentación</Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.link}>Descargar PDF</Text>
          </View>
        </View>
      </View>
            </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  innerBoxContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
  },
  innerBox: {
    width: '20%', 
    height: 200,
    marginBottom: 5,
    marginRight: 5,
    borderColor: '#626262',
    borderWidth: 1,
    borderRadius: 10, 
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: '#FFF'
  },
  box2: {
    backgroundColor: '#000000'
  },
  box3: {
    backgroundColor: '#000000'
  },
  box4: {
    backgroundColor: '#FFFFFF',
    height:400
  },
  box5: {
    backgroundColor: '#5E5E5E',
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    padding:5
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text_1: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'right'
  },
    text_2: {
    color: 'white',
    fontSize: 8,
    marginBottom: 1,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  leftContainer: {
    flex: 1,
    marginRight: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign:'center'
  },
   title_2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign:'left'
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start' 
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 10
  },
  carouselItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselImage: {
    width: 300,
    height: 300,
    marginRight: 200
  },
  rightContainer: {
    flex: 1
  },
  blueBorder: {
    borderColor: '#00FFE8',
    borderWidth: 1,
  },
   rightContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 50, 
  },
  leftContent: {
    width: 50, 
    height: 50, 
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 50, 
  },
  subtitle: {
    fontSize: 14, 
    fontWeight: 'bold', 
    marginBottom: 5, 
    color: 'black', 
  },
  text_8: {
    fontSize: 12, 
    color: 'gray', 
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  leftContent_4: {
    flex: 1,
  },
  title_0: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left', 
  },
  bullet: {
    width: 10,
    height: 10,
    backgroundColor: 'yellow',
    marginVertical: 5,
    borderRadius:5
  },
});



