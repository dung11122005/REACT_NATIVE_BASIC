import { Text, View } from "react-native"
import HomeScreen from "./components/review/Home"
import DetailScreen from "./components/review/Detail"
import AboutScreen from "./components/review/About"

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { FONTS } from "./constants/fonts";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';


SplashScreen.preventAutoHideAsync();

const App = () => {

    const [loaded, error] = useFonts({
        [FONTS.OpenSansRegular]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    if (!loaded && !error) {
        return null;
    }

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home" component={HomeScreen}
                    options={{ title: 'Trang chủ' }}
                />
                <Stack.Screen
                    name="DetailScreen" component={DetailScreen}
                    options={{ title: 'Chi tiết review' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App