import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Landing from '../pages/Landing';
import CovidInfo from '../pages/Covid_Info';
import VaccineInfo from '../pages/Vaccine_Info';
import ProtectInfo from '../pages/Protect_Info';
import Contacts from '../pages/Contacts';

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="CovidInfo" component={CovidInfo} />
        <Screen name="VaccineInfo" component={VaccineInfo} />
        <Screen name="ProtectInfo" component={ProtectInfo} />
        <Screen name="Contacts" component={Contacts} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;