import { View, StyleSheet, SafeAreaView } from 'react-native';
import TrendingTweets from '../eachAppTrendings/TrendingTweets';

function TwitterScreen() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <TrendingTweets />
            </SafeAreaView>
        </View>
    );
}

export default TwitterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});