import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { globalStyles } from "../../constants/fonts";
import { NavigationProp, useNavigation } from "@react-navigation/native";


const AppHeader = () => {

    const navigation: any = useNavigation();

    return (
        <View style={styles.container}>
            <MaterialIcons name="menu" size={30} color="black"
                onPress={() => navigation.openDrawer()}
            />
            <Text style={[styles.headerText, globalStyles.globalFont]}>Hoang Tan Dung</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 25,
    }
})


export default AppHeader;