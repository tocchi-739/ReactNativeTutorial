import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
  TextInput,
  Alert,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);
  const [text, setText] = useState(''); // ← 入力テキスト用
  const [name, setName] = useState(''); // ← 名前保存用

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.title}>はじめての React Native！</Text>

      {/* 名前入力セクション */}
      <Text style={styles.sectionTitle}>あなたの名前は？</Text>
      <TextInput
        style={styles.textInput}
        placeholder="名前を入力してください"
        value={text}
        onChangeText={setText}
      />
      <Button
        title="名前を設定"
        onPress={() => {
          setName(text);
          setText('');
          Alert.alert('設定完了！', `こんにちは、${text}さん！`);
        }}
      />

      {name ? (
        <Text style={styles.greeting}>こんにちは、{name}さん！</Text>
      ) : null}

      {/* カウンターセクション */}
      <Text style={styles.sectionTitle}>カウンター</Text>
      <Text style={styles.counter}>カウント: {count}</Text>

      <View style={styles.buttonContainer}>
        <Button title="➕" onPress={() => setCount(count + 1)} />
        <Button title="➖" onPress={() => setCount(count - 1)} />
        <Button title="🔄" onPress={() => setCount(0)} />
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
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 20,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: 250,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 10,
  },
  counter: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // ← 横並び
    gap: 10,
  },
});

export default App;
