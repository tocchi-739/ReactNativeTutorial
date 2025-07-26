import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);
  const [todoText, setTodoText] = useState(''); // ← ToDo入力用
  const [todos, setTodos] = useState<Todo[]>([]); // ← ToDoリスト

  // ToDoを追加する関数
  const addTodo = () => {
    if (todoText.trim()) {
      const newTodo = {
        id: Date.now().toString(),
        text: todoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoText('');
    }
  };

  // ToDoを削除する関数
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // ToDoの完了状態を切り替える関数
  const toggleTodo = (id: String) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.title}>React Native チュートリアル</Text>

      {/* ToDoリストセクション */}
      <Text style={styles.sectionTitle}>📋 ToDoリスト</Text>
      <View style={styles.todoInput}>
        <TextInput
          style={styles.textInput}
          placeholder="やることを入力"
          value={todoText}
          onChangeText={setTodoText}
        />
        <Button title="追加" onPress={addTodo} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        style={styles.todoList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.todoItem, item.completed && styles.todoCompleted]}
            onPress={() => toggleTodo(item.id)}
          >
            <Text
              style={[
                styles.todoText,
                item.completed && styles.todoTextCompleted,
              ]}
            >
              {item.completed ? '✅' : '⭕'} {item.text}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTodo(item.id)}
            >
              <Text style={styles.deleteButtonText}>🗑️</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      {/* カウンターセクション */}
      <Text style={styles.sectionTitle}>🔢 カウンター: {count}</Text>
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
    backgroundColor: 'lightblue',
    padding: 20,
    paddingTop: 60, // ← 上部余白を追加
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkblue',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    marginVertical: 10,
  },
  todoInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  todoList: {
    maxHeight: 200, // ← リストの最大高さ
    marginBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 3,
  },
  todoCompleted: {
    backgroundColor: 'lightgreen',
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  todoTextCompleted: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    padding: 5,
  },
  deleteButtonText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
});

export default App;
