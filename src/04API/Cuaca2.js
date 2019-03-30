import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator, TextInput, TouchableHighlight, Image } from 'react-native';

export default class Cuaca2 extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: '',
        sunrise: '',
        sunset: '',
        pressure: '',
        humidity: '',
        sea_level: '',
        grnd_level: '',
        speed: '',
        loading: false,

      }
    };
  }
  async getWeather() {

    try {
        this.setState({loading: true });
        let response = await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=5d3042c69020f373aeb9469a0c5989f7&units=metric'
        );

        let responseJson = await response.json();
        return this.setState({
            loading: false,
            forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp,
                sunrise: responseJson.sys.sunrise,
                sunset: responseJson.sys.sunset,
                pressure: responseJson.main.pressure,
                humidity: responseJson.main.humidity,
                sea_level: responseJson.main.sea_level,
                grnd_level: responseJson.main.grnd_level,
                speed: responseJson.wind.speed
            }
        });
    } catch (error) {
        console.error(error);
        this.setState({loading: true });
    }
}
  render() {
    return (
    <View style={styles.containerMain}>
    <View style={styles.headerBar}>
            <Text style={styles.headerText}> Prakiraan Cuaca </Text>
        </View>
      <View style={styles.box1}>
          <Text style={styles.headerText}> Masukan Nama Kota </Text>
          <View style={styles.input}>
          <TextInput placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}/>
         </View>
            <TouchableHighlight activeOpacity={0.5} style={styles.button} onPress={() => this.getWeather()}>
            {
                 this.state.loading ? <ActivityIndicator color="white" size="large" style={styles.load} />
                    : <Text style={styles.footerText}>Lihat</Text>
            }
            </TouchableHighlight>
      </View>
      <View style={styles.box2}>
      <View style={styles.output2}>
        <View style={styles.iconContainer}>
          <Image source={description} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}>Deskripsi : { this.state.forecast.description} </Text>
          </View>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={temp} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Suhu : { this.state.forecast.temp}°C </Text>
          </View>
          </View>
          <View style={styles.box2}>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={main} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Cuaca : { this.state.forecast.main} </Text>
          </View>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={wind} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Angin : { this.state.forecast.speed} </Text>
      </View>
    </View>
    <View style={styles.box2}>
      <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={sunrise} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Sunrise : { this.state.forecast.sunrise}
          </Text>
          </View>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={sunset} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Sunset : { this.state.forecast.sunset} </Text>
          </View>
          </View>
          <View style={styles.box2}>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={pressure} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Pressure : { this.state.forecast.pressure} </Text>
          </View>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={humidity} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Humidity : { this.state.forecast.humidity} </Text>
      </View>
    </View>
    <View style={styles.box2}>
      <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={sea_level} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Sea Level : { this.state.forecast.sea_level}
          </Text>
          </View>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={ground} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Ground Level : { this.state.forecast.grnd_level} </Text>
          </View>
          </View>


      <View style={styles.Footerbar}>
            <Text style={styles.footerText}> Shodiq_Damanhury @2019 </Text>
        </View>
</View>
    );
  }
}
const temp = require('./img/temp.png');
const main = require('./img/main.png');
const wind = require('./img/speed.png');
const sunrise = require('./img/sunrise.png');
const sunset = require('./img/sunset.png');
const pressure = require('./img/presure.png');
const humidity = require('./img/humidity.png');
const sea_level = require('./img/sea.png');
const ground = require('./img/ground.png');
const description = require('./img/des.png');

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#e8eaff',
    flex: 1,
    flexDirection: 'column',
   },
   iconContainer: {
    alignItems: 'center',
    backgroundColor: 'dark grey',



    justifyContent: 'center',
    height: 38,
    width: 38,
  },

  icon: {
    tintColor: 'grey',
    height: 20,
    width: 20,
  },
  box1: {
    flex: 0.4,
    backgroundColor: '#778899',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  box2: {
    flex: 0.1,
    backgroundColor: '#e8eaff',
    marginLeft: 10,
    marginRight: 10,

    marginBottom:-1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',


},

  button: {
    width: 80,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',
    flexDirection: 'row',



  },
  input: {
    width: 180,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',

  },
  output: {
    width: "50%",
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingRight: 20,

  },
  output2: {
    width: "50%",
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingRight: 20,

    marginBottom:5,
  },
  headerBar: {
    backgroundColor: "#778899",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 9,
    paddingTop: 11,
    height: 60,

    width: "100%",
    position: "relative",
},
Footerbar: {
  flex:0.05,
  backgroundColor: "#778899",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 100,
  paddingRight: 100,
  paddingBottom: 9,
  paddingTop: 11,
  marginTop: 80,
  height: 60,

  width: "100%",
  position: "relative",
},

headerText: {

    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: 'bold'
},
footerText: {
  fontSize: 12,
  color: "white",
  textAlign: "center",
  fontWeight: 'bold'
},
Textbawah: {
  fontSize: 12,
  color: "black",

},
load: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
});
