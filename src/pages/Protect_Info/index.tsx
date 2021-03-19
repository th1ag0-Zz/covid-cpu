import React from 'react';
import { View, Text } from 'react-native'
import styles from './style';

function CovidInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proteja a si mesmo e as pessoas ao seu redor conhecendo os fatos e tomando as precauções apropriadas. Siga os conselhos da autoridade local de saúde.</Text>

      <Text style={styles.description}>Para evitar a propagação da COVID-19, faça o seguinte:</Text>

      <Text style={styles.list}>* Lave suas mãos com frequência. Use sabão e água ou álcool em gel.</Text>
      <Text style={styles.list}>* Mantenha uma distância segura de pessoas que estiverem tossindo ou espirrando.</Text>
      <Text style={styles.list}>* Use máscara quando não for possível manter o distanciamento físico.</Text>
      <Text style={styles.list}>* Não toque nos olhos, no nariz ou na boca.</Text>
      <Text style={styles.list}>* Cubra seu nariz e boca com o braço dobrado ou um lenço ao tossir ou expirar.</Text>
      <Text style={styles.list}>* Fique em casa se você se sentir indisposto.</Text>
      <Text style={styles.list}>* Procure atendimento médico se tiver febre, tosse e dificuldade para respirar.</Text>
    </View>
  )
}

export default CovidInfo;