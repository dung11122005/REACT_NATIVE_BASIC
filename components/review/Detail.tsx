import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FONTS } from "../../constants/fonts";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: FONTS.OpenSansRegular
    }
})

const DetailScreen = () => {

    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>
            <Text style={styles.review}>
                Detail screen
            </Text>
            <Button title="Go home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default DetailScreen;