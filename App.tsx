import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  MediaType,
} from 'react-native-image-picker';

function App() {
  const [screen, setScreen] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // カメラで撮影する関数

  const takePhoto = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      console.log('Camera Response:', response); // デバッグ用

      if (response.didCancel) {
        Alert.alert('キャンセル', '撮影がキャンセルされました');
      } else if (response.errorMessage) {
        Alert.alert('エラー', `エラーが発生しました: ${response.errorMessage}`);
      } else if (response.assets && response.assets[0]) {
        setSelectedImage(response.assets[0].uri || null);
        Alert.alert('成功', '写真を撮影しました！');
      } else {
        Alert.alert('不明', '不明なレスポンスです');
      }
    });
  };

  // フォトライブラリから選択する関数
  const selectFromLibrary = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel || response.errorMessage) {
        console.log('選択がキャンセルされました');
      } else if (response.assets && response.assets[0]) {
        setSelectedImage(response.assets[0].uri || null);
        Alert.alert('成功', '写真を選択しました！');
      }
    });
  };

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

            {selectedImage && (
              <Image
                source={{ uri: selectedImage }}
                style={styles.imagePreview}
              />
            )}

            <View style={styles.buttonContainer}>
              <Button title="📷 写真を撮影" onPress={takePhoto} />
              <Button
                title="📁 ライブラリから選択"
                onPress={selectFromLibrary}
              />
              {selectedImage && (
                <Button
                  title="🗑️ 画像をクリア"
                  onPress={() => setSelectedImage(null)}
                />
              )}
              <Button
                title="🏠 ホームに戻る"
                onPress={() => setScreen('home')}
              />
            </View>
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
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'darkblue',
  },
});

export default App;
