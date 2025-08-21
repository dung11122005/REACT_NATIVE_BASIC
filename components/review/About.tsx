import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/fonts";

const styles = StyleSheet.create({
    about: {
        fontSize: 30
    }
})

const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}>
                About screen
            </Text>
        </View>
    )
}

export default AboutScreen;