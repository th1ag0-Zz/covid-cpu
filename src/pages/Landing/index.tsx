import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Bg from '../../assets/images/bg.jpg'
import Homem from '../../assets/icons/homem-white.png';
import Virus from '../../assets/icons/virus-white.png';
import Vacina from '../../assets/icons/vacina-white.png';
import Contact from '../../assets/icons/contact.png';

import styles from './styles';
import Header from '../../components/Header';

function Landing() {
  const {navigate} = useNavigation()

  function handleNavigationToCovidPage() {
    navigate('CovidInfo')
  }

  function handleNavigationToVaccinePage() {
    navigate('VaccineInfo')
  }

  function handleNavigationToProtectPage() {
    navigate('ProtectInfo')
  }

  function handleNavigationToContactsPage() {
    navigate('Contacts')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={Bg}
        style={styles.content}
      >

        <Header />

        <View style={styles.contentItems}>

          <RectButton onPress={handleNavigationToCovidPage} style={styles.button}>
            <Image source={Virus} />
            <Text style={styles.text}>Covid</Text>
          </RectButton>

          <RectButton onPress={handleNavigationToVaccinePage} style={styles.button}>
            <Image source={Vacina} />
            <Text style={styles.text}>Vacina</Text>
          </RectButton>

          <RectButton onPress={handleNavigationToProtectPage} style={styles.buttonFull}>
            <Image source={Homem} />
            <Text style={styles.text}>Proteja-se</Text>
          </RectButton>

          <RectButton onPress={handleNavigationToContactsPage} style={styles.buttonFull}>
            <Image source={Contact} />
            <Text style={styles.text}>Contatos de apoio</Text>
          </RectButton>
        </View>
        
      </ImageBackground>
    </View>
  )
}

export default Landing;