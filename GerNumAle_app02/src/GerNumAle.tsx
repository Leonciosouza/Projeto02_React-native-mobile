import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Definindo as props dom componente criado.
type GerNumAleProps = {
  min: number;
  max: number;
}

// Funçãp para gerar número aletório (inclusive min e max, como já definido na props.)
const GerarNumeroAleatorio =  (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;

};

const GerNumAle: React.FC<GerNumAleProps> = ({ min, max }) => {
  // Gerando o número aleatório.
  const numeroAleatorio = GerarNumeroAleatorio(min, max);

  return (
    <View style={styles1.container}>
      <Text style={styles1.numero}>
        Número Aleatório: {numeroAleatorio}</Text>
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
    },
    numero: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    }
});

export default GerNumAle;
// O componente GerNumAle é um componente funcional que recebe duas propriedades: min e max.