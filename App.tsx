import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.title}>はじめての React Native！</Text>
      <Text style={styles.subtitle}>ホットリロードが便利です 🚀</Text>
      <Text style={styles.description}>
        ファイルを保存すると自動的に画面が更新されます
      </Text>

      <Button
        title="ボタンを押してみてください"
        onPress={() => {
          Alert.alert('ボタンが押されました！');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue', // ← 背景色を追加
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkblue',
    marginBottom: 20, // ← 下マージン
  },
  subtitle: {
    fontSize: 18,
    color: 'purple',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30, // ← ボタンとの間に余白
  },
});

export default App;
