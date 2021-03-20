import React, { useEffect, useState } from 'react';
import { View, Text, Image, Linking
 } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import WhatsappIcon from '../../assets/icons/whatsapp.png'

interface Props {
  title: string;
  number: string;
  numberFormat?: string
}

const ContactBox:React.FC<Props> = ({ title, number, numberFormat }) => {

  function handleClick() {
    Linking.openURL(`whatsapp://send?phone=${numberFormat}`)
  }

  return (
    <View style={styles.boxContact}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>{number}</Text>
      </View>
      
      <RectButton onPress={handleClick} style={styles.button}>
          <Image source={WhatsappIcon}/>
      </RectButton>

      {/* {numberFormat ? (
        <RectButton onPress={handleClick} style={styles.button}>
          <Image source={WhatsappIcon}/>
        </RectButton>
      ) : (
        <View></View>
      )} */}
  
    </View>
  )
}

export default ContactBox;