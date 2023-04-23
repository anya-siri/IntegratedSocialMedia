import {View,Text,StyleSheet} from 'react-native';

function TumblrScreen(){
    return(
        <View style={styles.container}>
            <Text>Tumblr Screen</Text>
        </View>
    );
}

export default TumblrScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});