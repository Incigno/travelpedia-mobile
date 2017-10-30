import React from 'react';
import { View, Modal, Text, TouchableHighlight } from 'react-native';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import { connect } from 'react-redux'
import NewLocation from './Location/NewLocation/NewLocation';

class Wrapper extends React.Component {
  constructor(){
    super()
    this.state={
      modalVisible: false
    }
  }

  setModalVisible(){
    this.setState({
      modalVisible: !this.state.modalVisible,
    })
  }

  render(){
    return(
      <View style={styles.container}>
        { this.props.scene === 'HOME' && <Home /> }
        { this.props.scene === 'PROFILE' && <Profile /> }
        <Nav setModalVisible={()=> this.setModalVisible()}></Nav>
        <NewLocation state={this.state.modalVisible} setModalVisible={()=> this.setModalVisible()}></NewLocation>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
}

const mapStateToProps = (state) => {
  return {
    scene: state.scene
  }
}

export default connect(mapStateToProps, null) (Wrapper)
