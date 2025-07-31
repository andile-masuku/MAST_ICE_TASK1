import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style ={styles.text}>Hi MY NAME IS ANDILE..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#157a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:24,
    fontStyle: 'italic',
    textAlign:'center',
    color:'#000000',
    margin:30,
  },
});
