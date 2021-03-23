import React from 'react';
import { View, Image } from 'react-native'
import styles from './styles';

import imgLoading from '../../assets/images/loading-2.gif'

function Loading() {
  return (
    <View style={styles.container}>
      <Image source={imgLoading} />
    </View>
  )
}

export default Loading;