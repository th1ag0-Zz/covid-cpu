import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native'
import styles from './styles';
import ContactBox from '../../components/ContactBox';

function Contacts() {

  const numbers = {
    'disk covid': '(98) 98411-1648',
    'fórum': '(98) 98519-2696',
    'policia militar': '(98) 98537-7653',
    'vigilancia sanitária': '(98) 984146514',
    'ministerio publico': '(98) 985295548'
  }

  return (
    <View style={styles.container}>

      <Text style={styles.contacts}>Contatos:</Text>

      <View style={styles.mainBox}>
        <Text style={styles.title}>Disk Covid-19</Text>
        <Text style={styles.number}>(98) 98411-1648</Text>
      </View>

      <View style={styles.mainBox}>
        <Text style={styles.title}>Ministério Público</Text>
        <Text style={styles.number}>(98) 98529-5548</Text>
      </View>

      <Text style={styles.whatsapps}>WhatsApps:</Text>
      
      <ContactBox title="Polícia Militar" number="(98) 98537-7653" numberFormat="+5598985377653"/>
      <ContactBox title="Vigilância Sanitária" number="(98) 98414-6514" numberFormat="+5598984146514"/>
      <ContactBox title="Fórum" number="(98) 98519-2696" numberFormat="+5598985192696"/>
    </View>
  )
}

export default Contacts;