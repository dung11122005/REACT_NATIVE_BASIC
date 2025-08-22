import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../review/Home";
import DetailScreen from "../review/Detail";
import AboutScreen from "../review/About";
import AppHeader from "./AppHeader";




const HomeLayout = () => {

    const Stack = createNativeStackNavigator();


    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home" component={HomeScreen}
                options={{ header: () => <AppHeader /> }}
            />
            <Stack.Screen
                name="DetailScreen" component={DetailScreen}
                options={{ title: 'Chi tiết review' }}
            />
        </Stack.Navigator>
    )
}

const AppNavigation = () => {

    const Drawer = createDrawerNavigator();

    return (

        <Drawer.Navigator>
            <Drawer.Screen
                name="Home1" component={HomeLayout}
                options={{ title: 'Trang chủ', headerShown: false }}
            />
            <Drawer.Screen
                name="About" component={AboutScreen}
                options={{ title: "Thông tin", header: () => <AppHeader /> }}
            />
        </Drawer.Navigator>
    )
}

export default AppNavigation;