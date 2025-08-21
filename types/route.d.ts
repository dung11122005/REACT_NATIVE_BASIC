type RootStackParamList = {
    Home: undefined;
    DetailScreen: undefined;
    // Feed: { sort: 'latest' | 'top' } | undefined;
};


declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}