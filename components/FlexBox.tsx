import { StyleSheet, Text, View } from "react-native"


const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    item1: {
        backgroundColor: "yellow"
    },
    item2: {
        backgroundColor: "pink"
    },
    item3: {
        backgroundColor: "orange"
    },
    item4: {
        backgroundColor: "cyan"
    }
})


const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>Flex box 1</Text>
            </View>
            <View style={styles.item2}>
                <Text>Flex box 2</Text>
            </View>
            <View style={styles.item3}>
                <Text>Flex box 3</Text>
            </View>
            <View style={styles.item4}>
                <Text>Flex box 4</Text>
            </View>
        </View>
    )
}

export default FlexBox