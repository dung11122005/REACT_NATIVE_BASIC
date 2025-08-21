import { useState } from 'react';
import {
  Button, FlatList, TextInput,
  TouchableOpacity, StyleSheet,
  Text, View, ScrollView,
  Pressable,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import AntDesign from '@expo/vector-icons/AntDesign';


interface ITodo {
  id: number;
  name: string;
}

export default function App() {

  const [todo, setTodo] = useState<string>("")

  const [listTodo, setListTodo] = useState<ITodo[]>([])

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("lỗi input todo", "todo không được để trống",
        [
          // {
          //   text: 'Cancel',
          //   onPress: () => console.log('Cancel Pressed'),
          //   style: 'cancel',
          // },
          { text: 'Xác nhận', onPress: () => console.log('OK Pressed') },
        ]
      )
      return
    }
    setListTodo([...listTodo, { id: randomInteger(1, 100), name: todo }])
    setTodo("")
  }

  const deleteTodo = (id: number) => {
    const newListTodo = listTodo.filter(Item => Item.id !== id)
    setListTodo(newListTodo)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <View style={styles.container}>
        {/* {header} */}
        <Text style={styles.header}>Todo App</Text>

        {/* {form} */}
        <View style={styles.form}>
          <TextInput style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button title='Add todo'
            onPress={handleAddTodo}
          />
        </View>

        {/* {List todo} */}
        <View style={styles.todo}>
          <FlatList
            data={listTodo}
            keyExtractor={item => item.id.toString()}
            renderItem={(data) => {
              return (
                <Pressable onPress={() => deleteTodo(data.item.id)}>
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{data.item.name}</Text>
                    <AntDesign name="close" size={24} color="black" />
                  </View>
                </Pressable>
              )
            }}
          />
        </View>

      </View>
    </TouchableWithoutFeedback>
    // <FlexBox></FlexBox>
  );
}

const styles = StyleSheet.create({

  container: {
    paddingTop: 50,
    // paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 30,
    textAlign: "center",
    fontSize: 30,
    flex: 1
  },
  form: {
    // flex: 2
    marginBottom: 20
  },
  todo: {
    flex: 8
  },
  todoInput: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "green",
    margin: 15
  },
  todoItem: {
    fontSize: 30,
    // marginBottom: 20,
    padding: 10
  },
  body: {
    marginBottom: 20
  },
  groupTodo: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    marginBottom: 15,
    justifyContent: 'space-between'
  }
});
