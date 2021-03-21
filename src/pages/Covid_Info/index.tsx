import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import Loading from '../../components/Loading';
import api from '../../services/api';
import styles from './style';

import Bg from '../../assets/images/bg-1.png'

function CovidInfo() {

  const [isLoaded, setIsLoaded] = useState(false)

  interface Atualizacao {
    hora: string,
    data: string
  }

  interface ResponseData {
    recuperados: string,
    confirmados: string,
    ativos: string,
    obitos: string,
    descartados: string,
    suspeitos: string,
    atualizacao: Atualizacao
  }

  const [hora, setHora] = useState('')
  const [data, setData] = useState('')

  const [dataCovid, setDataCovid] = useState({} as ResponseData)

  useEffect(() => {
    setIsLoaded(false)
    api.get('/').then(response => {
      setHora(response.data.covid.atualizacao.hora)
      setData(response.data.covid.atualizacao.data)

      setDataCovid(response.data.covid)

      setIsLoaded(true)
    })
  }, [])

  const {
    recuperados,
    confirmados,
    ativos,
    obitos,
    descartados,
    suspeitos
  } = dataCovid
  
  return (
    <>
    {isLoaded ? (

      <ImageBackground
        resizeMode="cover"
        source={Bg}
        style={styles.container}
      >
        <View style={styles.boxSuspeitos}>
          <Text style={styles.title}>Suspeitos</Text>
          <Text style={styles.valor}>{suspeitos}</Text>
        </View>

        <View style={styles.boxConfirmados}>
          <Text style={styles.title}>Confirmados</Text>
          <Text style={styles.valor}>{confirmados}</Text>
        </View>

        <View style={styles.boxAtivos}>
          <Text style={styles.title}>Ativos</Text>
          <Text style={styles.valor}>{ativos}</Text>
        </View>

        <View style={styles.boxRecuperados}>
          <Text style={styles.title}>Recuperados</Text>
          <Text style={styles.valor}>{recuperados}</Text>
        </View>

        <View style={styles.boxDescartados}>
          <Text style={styles.title}>Descartados</Text>
          <Text style={styles.valor}>{descartados}</Text>
        </View>

        <View style={styles.boxObitos}>
          <Text style={styles.title}>Óbitos</Text>
          <Text style={styles.valor}>{obitos}</Text>
        </View>

        <View style={styles.footer}>

        <Text style={styles.atualizacao}>Útima atualização: {data} às {hora} horas </Text>

        <Text style={styles.fonte}>Fonte: https://portal.cururupu.ma.gov.br/</Text>

        </View>
        
      </ImageBackground>
    ) : (
      <Loading />
    )}

    </>
  )
}

export default CovidInfo;