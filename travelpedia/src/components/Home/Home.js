import React from 'react';
import { View, Image  } from 'react-native';
import { Tabs, Tab, TabHeading } from 'native-base';
import Styles from './Home.styles.js';
import Icon from 'react-native-vector-icons/Ionicons';
// import Search from './Search.js'
// import Notif from '../Notif/Notif'
import Timeline from '../Timeline/Timeline'

const Header = () => (
  <View style={{height:'93%'}}>
    <Tabs initialPage={1}>
        <Tab heading={ <TabHeading style={Styles.tab}><Icon size={20} name='ios-search' /></TabHeading>}>

        </Tab>
        <Tab heading={ <TabHeading style={Styles.tab} ><Image style={Styles.image} source={require('../../image/Cookie&Foodie.png')} /></TabHeading>}>
            <Timeline />
        </Tab>
        <Tab heading={ <TabHeading style={Styles.tab} ><Icon size={20} name="ios-heart-outline" /></TabHeading>}>

        </Tab>
    </Tabs>
  </View>
)

export default Header;
