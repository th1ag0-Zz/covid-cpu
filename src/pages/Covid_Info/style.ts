import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  atualizacao: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20
  },

  fonte: {
    color: '#fff'
  },

  box: {
    width: '80%',
    height: '8%',
    maxHeight: 70,
    borderRadius: 10,
    backgroundColor: 'rgba(1,1,1,0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 30
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    
  },

  valor: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  footer: {
    alignItems: 'center',
    marginTop: 10
  }
})

export default styles;