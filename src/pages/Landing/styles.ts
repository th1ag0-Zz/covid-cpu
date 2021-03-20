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
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6%'
  },

  button: {
    width: '46%',
    height: '28%',
    maxHeight: 200,
    backgroundColor: 'rgba(0,0,0,.7)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },

  buttonFull: {
    width: '100%',
    height: '28%',
    maxHeight: 200,
    backgroundColor: 'rgba(0,0,0,.7)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },

  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 14
  }
})

export default styles;