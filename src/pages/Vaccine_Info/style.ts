import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6%',
  },

  att: {
    fontSize: 15,
    marginTop: 42
  },

  atualizacao: {
    fontSize: 15,
    marginTop: 40,
    color: '#fff'
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
  },

  boxSimple: {
    width: '46%',
    height: '12%',
    maxHeight: 70,
    borderRadius: 10,
    backgroundColor: 'rgba(1,1,1,0.7)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20
  },

  boxFull: {
    width: '100%',
    height: '10%',
    maxHeight: 70,
    borderRadius: 10,
    backgroundColor: 'rgba(1,1,1,0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10%',
    paddingRight: '10%',
    marginBottom: 20
  },

  separator: {
    width: '100%',
    paddingTop: 35,
    paddingBottom: 8
  },

  separatorText: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold'
  },

  fonte: {
    color: '#fff'
  }
  
})

export default styles;