import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function App() {
  const [screen, setScreen] = useState('home');

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return (
          <View style={styles.container}>
            <Text style={styles.title}>🏠 ホーム画面</Text>
            <Text style={styles.subtitle}>学習メニュー</Text>
            <View style={styles.buttonContainer}>
              <Button title="📋 ToDo画面" onPress={() => setScreen('todo')} />
              <Button
                title="🔢 カウンター画面"
                onPress={() => setScreen('counter')}
              />
              <Button
                title="📸 カメラ画面"
                onPress={() => setScreen('camera')}
              />
            </View>
          </View>
        );
      case 'todo':
        return (
          <View style={styles.container}>
            <Text style={styles.title}>📋 ToDo画面</Text>
            <Button title="🏠 ホームに戻る" onPress={() => setScreen('home')} />
          </View>
        );
      case 'counter':
        return (
          <View style={styles.container}>
            <Text style={styles.title}>🔢 カウンター画面</Text>
            <Button title="🏠 ホームに戻る" onPress={() => setScreen('home')} />
          </View>
        );
      case 'camera':
        return (
          <View style={styles.container}>
            <Text style={styles.title}>📸 カメラ画面</Text>
            <Text style={styles.subtitle}>カメラ機能をテストします</Text>
            <Button title="🏠 ホームに戻る" onPress={() => setScreen('home')} />
          </View>
        );
      default:
        return null;
    }
  };

  return renderScreen();
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
  buttonContainer: {
    gap: 20,
    width: '80%',
  },
});

export default App;
