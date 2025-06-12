import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';

const JokeScreen = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,racist,sexist,explicit');
      const data = await response.json();

      if (data.type === 'single') {
        setJoke(data.joke);
      } else if (data.type === 'twopart') {
        setJoke(`${data.setup}\n${data.delivery}`);
      }
    } catch (error) {
      console.error('Erro ao buscar piada:', error);
      setJoke('Erro ao buscar uma piada que seja boa para você 😢');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <View style={styles.outerContainer}>
    <Text style={styles.title}>Essa é uma API de piadas para alegrar seu dia!</Text>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#FF5733" />
        ) : (
          <>
            <Text style={styles.jokeText}>{joke}</Text>
          </>
        )}
      </View>
            <View style={styles.buttonContainer}>
              <Button title="Nova piada" onPress={fetchJoke} color="#FF5733" />
            </View>
    </View>
  );
};

export default JokeScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  container: {
    width: '100%',
    maxWidth: 600,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#FF5733',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  jokeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    width: '60%',
    maxWidth: 600,
  },
});
