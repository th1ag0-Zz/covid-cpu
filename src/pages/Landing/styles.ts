import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  contentItems: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  button: {
    width: '70%',
    height: '28%',
    maxHeight: 180,
    backgroundColor: 'rgba(0,0,0,.7)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 14
  }
})

export default styles;