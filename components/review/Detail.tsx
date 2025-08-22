import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation, NavigationProp, RouteProp } from '@react-navigation/native';
import { FONTS } from "../../constants/fonts";
import { useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: FONTS.OpenSansRegular
    },
    reviewText: {
        fontSize: 25,
        fontFamily: FONTS.OpenSansRegular,
        padding: 15
    }
})

const DetailScreen = () => {

    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'DetailScreen'> = useRoute();

    return (
        <View>
            <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>
            <Text style={styles.reviewText}>Rating: {route.params?.star}</Text>
            <Button title="Go home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default DetailScreen;