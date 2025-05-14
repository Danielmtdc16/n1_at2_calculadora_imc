import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum || alturaNum === 0) {
      setResultado('Os campos são obrigatórios e precisam ser números!');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    const imcFormatado = imc.toFixed(2);

    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else if (imc < 35) classificacao = 'Obesidade grau I';
    else if (imc < 40) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';

    setResultado(`IMC: ${imcFormatado} - ${classificacao}`);
  };

  const limpar = () => {
    setAltura('');
    setPeso('');
    setResultado('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora de IMC</Text>

      <Image
        source={require('../../assets/images/calculadora.png')}
        style={styles.image}
      />
      

      <TextInput
        placeholder='Insira seu peso em Kg'
        style={styles.input}
        keyboardType='numeric'
        onChangeText={setPeso}
        value={peso}
      />

      <TextInput
        placeholder='Insira sua altura em m'
        style={styles.input}
        keyboardType='numeric'
        onChangeText={setAltura}
        value={altura}
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={calcular}
      >
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonLimpar}
        onPress={limpar}
      >
        <Text style={styles.buttonText}>Limpar campos</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#fff'
  },
  text: {
    fontFamily: 'Georgia',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginBottom: 40
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonLimpar: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
  },
  resultado: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 50,
  }
});
