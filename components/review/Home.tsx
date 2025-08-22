import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface IReview {
    id: number;
    title: string;
    star: number;
}

const HomeScreen = (props: any) => {

    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    const [reviews, setReviews] = useState<IReview[]>([
        { id: 1, title: "React Native", star: 5 },
        { id: 2, title: "Tan Dung", star: 5 }
    ])

    return (
        <View>
            <Text style={{ fontSize: 30 }}>
                Review List
            </Text>
            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("DetailScreen", item)}
                            >

                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>

                        )
                    }}
                />
            </View>
            <Button title="viewDetail"
                onPress={() => navigation.navigate("DetailScreen")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: '#ccc',
        margin: 15
    }
})

export default HomeScreen;