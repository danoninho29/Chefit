import React, { useState } from 'react';

export default function TestPage() {
  const [message, setMessage] = useState('Olá, bem-vindo!');
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{message}</h1>

      <button style={styles.button} onClick={() => setMessage('Texto alterado!')}>
        Alterar Texto
      </button>

      <p>Contador: {count}</p>
      <button style={styles.button} onClick={() => setCount(count + 1)}>+</button>
      <button style={styles.button} onClick={() => setCount(count - 1)}>-</button>

      <input 
        type="text" 
        placeholder="Digite algo..." 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={styles.input}
      />

      <p>Você digitou: {inputValue}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    color: '#007bff',
  },
  button: {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  input: {
    padding: '10px',
    margin: '10px',
  },
};
