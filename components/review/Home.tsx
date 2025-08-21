import { Button, Text, View } from "react-native";



const HomeScreen = (props: any) => {

    const { navigation } = props

    return (
        <View>
            <Text style={{ fontSize: 30 }}>
                Home screen Hoang tan Dung
            </Text>
            <Button title="viewDetail"
                onPress={() => navigation.navigate('ReviewDetail')}
            />
        </View>
    )
}

export default HomeScreen;