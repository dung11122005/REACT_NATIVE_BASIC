import { useState } from 'react';
import { Button, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>("")
  const [age, setAge] = useState<number>(0)


  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>name: {name}</Text>
        <TextInput
          multiline
          autoCapitalize="words"
          onChangeText={(value) => setName(value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            padding: 10,
            width: 200
          }}
        />
      </View>

      <View>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>age: {age}</Text>
        <TextInput
          multiline
          onChangeText={(value) => setAge(+value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            padding: 10,
            width: 200
          }}
          keyboardType='numeric'
          maxLength={2}
        />
      </View>
      <Text style={{ fontSize: 40, fontWeight: "600" }}>
        count={count}
      </Text>
      <View>
        <Button title='Increase'
          onPress={() => setCount(count + 1)}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  }
});
