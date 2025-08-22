import { Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

interface IProps {
    modalVisible?: boolean;
    setModalVisible: (value: boolean) => void;
}

const CreateModal = (props: IProps) => {

    const { modalVisible, setModalVisible } = props;
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 25 }}>Create a review</Text>
                        <AntDesign name="close" size={24} color="black"
                            onPress={() => setModalVisible(false)}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Nội dung</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <Text style={styles.text}>Rating</Text>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.input} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Add"
                        />
                    </View>
                </View>

            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    groupInput: {
        marginBottom: 15
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    text: {
        fontSize: 20,
        fontWeight: '400'
    }
})

export default CreateModal