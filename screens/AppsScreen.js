import { FlatList, StyleSheet, ImageBackground } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from 'expo-linear-gradient';


import { CATEGORIES } from "../models/dummy-data";
import Box from "../components/Box";
import InstagramScreen from "../eachAppScreens/InstagramScreen";
import FacebookScreen from "../eachAppScreens/FacebookScreen";
import TwitterScreen from "../eachAppScreens/TwitterScreen";
import YouTubeScreen from "../eachAppScreens/YouTubeScreen";
import SnapchatScreen from "../eachAppScreens/SnapchatScreen";
import LinkedInScreen from "../eachAppScreens/LinkedInScreen";
import RedditScreen from "../eachAppScreens/RedditScreen";
import PinterestScreen from "../eachAppScreens/PinterestScreen";
import TumblrScreen from "../eachAppScreens/TumblrScreen";
import DiscordScreen from "../eachAppScreens/DiscordScreen";

const Stack = createNativeStackNavigator();

function AppListScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate(itemData.item.title);
        }

        return (
            <Box
                title={itemData.item.title}
                color={itemData.item.color}
                source={itemData.item.image}
                onPress={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}


function AppsScreen() {
    return (
        <LinearGradient colors={['#D36C6C', '#ffffff', '#B6E3EE']} style={styles.rootScreen}>
            <ImageBackground
                style={styles.rootScreen}
                imageStyle={styles.image}
                source={require('../assets/image1.png')}
            >
                <Stack.Navigator>
                    <Stack.Screen name="Choose a social media app:-" component={AppListScreen} />
                    <Stack.Screen name="Instagram" component={InstagramScreen} />
                    <Stack.Screen name="Facebook" component={FacebookScreen} />
                    <Stack.Screen name="Twitter" component={TwitterScreen} />
                    <Stack.Screen name="YouTube" component={YouTubeScreen} />
                    <Stack.Screen name="Snapchat" component={SnapchatScreen} />
                    <Stack.Screen name="LinkedIn" component={LinkedInScreen} />
                    <Stack.Screen name="Reddit" component={RedditScreen} />
                    <Stack.Screen name="Pinterest" component={PinterestScreen} />
                    <Stack.Screen name="Tumblr" component={TumblrScreen} />
                    <Stack.Screen name="Discord" component={DiscordScreen} />
                </Stack.Navigator>
            </ImageBackground>
        </LinearGradient>
    );
}

export default AppsScreen;

const styles = StyleSheet.create({

    rootScreen: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    image: {
        opacity: 0.1,
    },
});