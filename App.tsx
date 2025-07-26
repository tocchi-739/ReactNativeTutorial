import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
} from 'react-native';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0); // ← 状態を追加

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.title}>はじめての React Native！</Text>
      <Text style={styles.subtitle}>ホットリロードが便利です 🚀</Text>

      <Text style={styles.counter}>カウント: {count}</Text>

      <View style={styles.buttonContainer}>
        <Button title="➕ 増やす" onPress={() => setCount(count + 1)} />
        <Button title="➖ 減らす" onPress={() => setCount(count - 1)} />
        <Button title="🔄 リセット" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkblue',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'purple',
    marginBottom: 30,
  },
  counter: {
    fontSize: 36, // ← 大きな文字
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 10, // ← ボタン間の隙間
  },
});

export default App;
