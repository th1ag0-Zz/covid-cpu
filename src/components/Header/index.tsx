import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';


import styles from './styles'

interface Props {
  title: string
}

const Header: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Covid-19 (Cururupu)</Text>
    </View>
  )
}

export default Header;