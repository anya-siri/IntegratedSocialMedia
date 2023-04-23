import {View,Text,StyleSheet} from 'react-native';

function RedditScreen(){
    return(
        <View style={styles.container}>
            <Text>Reddit Screen</Text>
        </View>
    );
}

export default RedditScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});