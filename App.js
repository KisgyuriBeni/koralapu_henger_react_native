import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  const [sugar, setSugar] = useState('');
  const [magassag, setMagassag] = useState('');
  const [result, setResult] = useState(0);
  
  function calcValue() {
    var res = 2 * Math.pow(sugar,2) * Math.PI + 2 * sugar * Math.PI * magassag
    console.log("Felszín: " + res);
    setResult(res);
    return res;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Henger alapú kör</Text>
      </View>
      <View  style={styles.body}>
        <Text style={styles.inputText}>Sugár</Text>
        <TextInput
        style={styles.input}
        onChangeText={sugar => setSugar(sugar)}
        />
        <Text style={styles.inputText}>Magasság</Text>
        <TextInput
        style={styles.input}
        onChangeText={magassag => setMagassag(magassag)}
        />
        <Button
        style={styles.calcButton}
        title="Számítás"
        onPress={calcValue}
        />
        <Text style={styles.valueText}>A henger felszíne: {result}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    // backgroundColor:'red',
    alignItems: 'center',
    width:'100%',
    height:'60px',
    justifyContent:'center',
  },
  headerText: {
    fontSize:'20px',
    fontWeight:'bold',
  },
  input: {
    width:'75%',
    height:'30px',
    marginBottom:'9.5px',
    border:'1px solid black',
    borderRadius:'10px',
  },
  inputText:{
    width:'75%',
    // backgroundColor:'red',
    fontWeight:'bold',
    fontSize:'12px',
    marginBottom:'3px',
  },
  calcButton:{
    backgroundColor:'white',
    border:'1px solid black',
    borderRadius:'12px',
    color:'black',
  },
  body:{
    alignItems:'center',
    flex:1,
    // backgroundColor:'purple',
    width:'100%',
  },
  valueText:{
    width:'100%',
    height:'30px',
    alignItem:'center',
  },
});
