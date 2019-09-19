import React from 'react'
import { /* StyleSheet, Text,  */ View } from 'react-native'
//import App from './src/App'
import TreeMap from './src/TreeMap'
import data from './src/json/tradeAgri.json'

export default function AppExpo() {
  return (
    <View>
      <TreeMap data={data} subdiv={false} setYear={() => {}} country="India" />
    </View>
  )
  //return <App />
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
