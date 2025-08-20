import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Hoang tan dung</Text>
        <Text style={styles.parent}>
          1
          <Text style={styles.child}>2</Text>
        </Text>
      </View>
      <Text style={styles.hello1}>
        Hoang Tan Dung 1</Text>
      <Text>Hoang Tan Dung 2</Text>
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
  hello1: {
    color: "red", fontSize: 40,
    borderColor: "green",
    borderWidth: 1,
    padding: 10
  },
  header: {
    fontSize: 30,
    fontWeight: "600"
  },
  parent: {
    fontSize: 30,
    color: "green"
  },
  child: {
    fontSize: 30,
    color: "pink"
  }
});
