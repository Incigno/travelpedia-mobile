import React from 'react'
import { Provider } from 'react-redux'
import { Text, View } from 'react-native'
import Wrapper from './src/components/Wrapper'
import store from './src/store/index'

const App = () => (
  <Provider store={store}>
    <Wrapper />
  </Provider>
)

export default App;
