import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },

  mainBox: {
    width: '100%',
    height: '12%',
    maxHeight: 100,
    backgroundColor: '#ffbc34',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    marginBottom: 20
  },

  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700'
  },

  number: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700'
  },

  contacts: {
    color: '#343a40',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15
  },

  whatsapps: {
    color: '#343a40',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10
  }
})

export default styles;