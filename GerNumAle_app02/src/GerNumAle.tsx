import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';


// Funçãp para gerar número aletório (inclusive min e max, como já definido na props.)
const GerarNumeroAleatorio =  (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;

};

const GerNumAle: React.FC = () => {
  // Gerando o número aleatório.
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [numero, setNumeroAleatorio] = useState<number | null>(null);

  const GerarNumeroAleatorio = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);

    if(isNaN(minVal) || isNaN(maxVal)) {
      Alert.alert("Erro", "Digite Os valores válidos para mínimo e máximo!");
      return;
    }

    if (minVal > maxVal) {
      Alert.alert("Erro", "O valor mínimo deve ser menor ou igual ao máximo!");
      return;
    }

    const result = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setNumeroAleatorio(result);
  };

  return (
    <View style={styles1.container}>
      <TextInput
      style={styles1.input}
      placeholder='Digite o valor mínimo'
      keyboardType='numeric'
      value={min}
      onChangeText={setMin}
      />
      <TextInput
      style={styles1.input}
      placeholder='Digite o valor máximo'
      keyboardType='numeric'
      value={max}
      onChangeText={setMax}
      />
      <Button title="Gerar Número Aleatório" onPress={GerarNumeroAleatorio} />
      {numero !== null && (
        <Text style={styles1.result}>Número Aleatório: {numero}</Text>

      )}

    </View>
  );
};

const styles1 = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eef',
        borderRadius: 8,
        marginVertical: 8,
        borderWidth: 1,
        width: '100%',
    },
    numero: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: '#aaa',
      borderRadius: 6,
      padding: 10,
      marginVertical: 6,
      width: '100%',
    },
    result: {
      marginTop: 16,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
});

export default GerNumAle;
// O componente GerNumAle é um componente funcional que recebe duas propriedades: min e max.