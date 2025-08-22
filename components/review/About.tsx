import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/fonts";

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
        padding: 15
    },
    about1: {
        fontSize: 20,
        padding: 15
    }
})

const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}>
                About screen
            </Text>
            <Text style={[styles.about1, globalStyles.globalFont]}>
                made by Tan Dung
            </Text>
        </View>
    )
}

export default AboutScreen;