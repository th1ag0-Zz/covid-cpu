import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  atualizacao: {
    fontSize: 15,
    marginTop: 12
  },

  boxSuspeitos: {
    width: '80%',
    height: '8%',
    maxHeight: 70,
    borderRadius: 10,
    backgroundColor: '#ffbc34',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40
  },

  boxAtivos: {
    width: '80%',
    height: '8%',
    maxHeight: 70,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#2962FF'
  },

  boxRecuperados: {
    width: '80%',
    height: '8%',
    maxHeight: 70,
    borderRadius: 10,
    backgroundColor: '#7460ee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40
  },
  

  boxConfirmados: {
    width: '80%',
    height: '8%',
    maxHeight: 70,
    borderRadius: 10,
    backgroundColor: '#f62d51',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40
  },

  boxDescartados: {
    width: '80%',
    height: '8%',
    maxHeight: 70,
    borderRadius: 10,
    backgroundColor: '#36bea6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40
  },

  boxObitos: {
    width: '80%',
    height: '8%',
    maxHeight: 70,
    borderRadius: 10,
    backgroundColor: '#343a40',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    
  },

  valor: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700'
  }
})

export default styles;