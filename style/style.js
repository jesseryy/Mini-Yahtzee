import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f8ff'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#ffd700',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#ffd700',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#000000',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    width: 250,
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: 10,
    backgroundColor: '#f0f8ff'
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textDecorationLine: 'underline'
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 50,
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#ffd700",
    width: 200,
    borderRadius: 15,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  }
});