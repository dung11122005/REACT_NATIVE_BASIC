import { Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";


interface IReview {
    id: number;
    title: string;
    star: number;
}
interface IProps {
    modalVisible?: boolean;
    setModalVisible: (value: boolean) => void;
    addNew: (v: IReview) => void;
}

const CreateModal = (props: IProps) => {

    const { modalVisible, setModalVisible, addNew } = props;
    const [title, setTitle] = useState<string>("")
    const [star, setStar] = useState<number>(0)

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSubmit = () => {
        if (!title) {
            Alert.alert("Thông tin không hợp lệ", "không được để trống")
            return
        }
        if (!star) {
            Alert.alert("Thông tin không hợp lệ", "Rating được để trống")
            return
        }
        addNew({
            id: randomInteger(1, 1000),
            title: title,
            star: star
        })
        setStar(0)
        setTitle("")
        setModalVisible(false)

    }

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
                            onPress={() => {
                                setModalVisible(false);
                                setStar(0);
                                setTitle("");
                            }
                            }
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Nội dung</Text>
                        <TextInput style={styles.input}
                            value={title}
                            onChangeText={(v) => setTitle(v)}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Rating</Text>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.input}
                            value={star.toString()}
                            onChangeText={(v) => setStar(Number(v))}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Add"
                            onPress={() => handleSubmit()}
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