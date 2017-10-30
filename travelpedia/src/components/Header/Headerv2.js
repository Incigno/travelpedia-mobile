import React from 'react';
import { View, Image, TouchableOpacity  } from 'react-native'
import Styles from './Headerv2.styles.js'

const Header = () => (
  <View style={Styles.box} >
    <TouchableOpacity>
    </TouchableOpacity>
    <Image style={Styles.image} source={require('../../image/Cookie&Foodie.png')} />
  </View>
)

export default Header;
