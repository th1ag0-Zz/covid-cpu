import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  boxContact: {
    width: '100%',
    height: '12%',
    maxHeight: 100,
    backgroundColor: 'teal',
    borderRadius: 10,
    paddingLeft: 22,
    paddingRight: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },

  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 6
  },

  number: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22
  },

  button: {
    backgroundColor: '#4caf50',
    borderRadius: 10,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles;