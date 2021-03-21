import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import Loading from '../../components/Loading';
import api from '../../services/api';
import styles from './style';

import Bg from '../../assets/images/bg-2.png'

function CovidInfo() {

  const [isLoaded, setIsLoaded] = useState(false)

  interface Atualizacao {
    hora: string,
    data: string
  }

  interface Distribution {
    profissionais_de_saude: string,
    idosos: string,
    comorbidades: string,
    dialiticos: string
  }

  interface ResponseData {
    recebidas: string,
    aplicadas: string,
    disponiveis: string,
    cobertura: string,
    distribuicao: Distribution,
    atualizacao: Atualizacao
  }

  const [hora, setHora] = useState('')
  const [data, setData] = useState('')
  const [profSaude, setProfSaude] = useState('')
  const [idosos, setIdosos] = useState('')
  const [comorbidades, setComorbidades] = useState('')
  const [dialiticos, setDialiticos] = useState('')

  const [dataVaccine, setDataVaccine] = useState({} as ResponseData)

  useEffect(() => {
    setIsLoaded(false)
    api.get('/').then(response => {
      setHora(response.data.vacina.atualizacao.hora)
      setData(response.data.vacina.atualizacao.data)
      setProfSaude(response.data.vacina.distribuicao.profissionais_de_saude)
      setIdosos(response.data.vacina.distribuicao.idosos)
      setComorbidades(response.data.vacina.distribuicao.comorbidades)
      setDialiticos(response.data.vacina.distribuicao.dialiticos)

      setDataVaccine(response.data.vacina)

      setIsLoaded(true)
    })
  }, [])

  const {
    aplicadas,
    cobertura,
    disponiveis,
    recebidas
  } = dataVaccine

  return (
    <>
      {isLoaded ? (

        <ImageBackground
          resizeMode="cover"
          source={Bg}
          style={styles.container}
        >

          <View style={styles.boxSimple}>
            <Text style={styles.title}>Recebidas</Text>
            <Text style={styles.valor}>{recebidas}</Text>
          </View>

          <View style={styles.boxSimple}>
            <Text style={styles.title}>Aplicadas</Text>
            <Text style={styles.valor}>{aplicadas}</Text>
          </View>

          <View style={styles.boxSimple}>
            <Text style={styles.title}>Disponíveis</Text>
            <Text style={styles.valor}>{disponiveis}</Text>
          </View>

          <View style={styles.boxSimple}>
            <Text style={styles.title}>Cobertura</Text>
            <Text style={styles.valor}>{cobertura}</Text>
          </View>

          <View style={styles.separator}>
            <Text style={styles.separatorText}>Distribuição das doses:</Text>
          </View>

          <View style={styles.boxFull}>
            <Text style={styles.title}>Profissionais {'\n'}de saúde</Text>
            <Text style={styles.valor}>{profSaude}</Text>
          </View>

          <View style={styles.boxFull}>
            <Text style={styles.title}>Idosos</Text>
            <Text style={styles.valor}>{idosos}</Text>
          </View>

          <View style={styles.boxFull}>
            <Text style={styles.title}>Comorbidades</Text>
            <Text style={styles.valor}>{comorbidades}</Text>
          </View>

          <View style={styles.boxFull}>
            <Text style={styles.title}>Pacientes dialíticos</Text>
            <Text style={styles.valor}>{dialiticos}</Text>
          </View>

          <Text style={styles.atualizacao}>Útima atualização: {data} às {hora} horas </Text>

          <Text style={styles.fonte}>Fonte: https://portal.cururupu.ma.gov.br/</Text>

        </ImageBackground>

      ): (
        <Loading />
      )}
    </>
  )
}

export default CovidInfo;