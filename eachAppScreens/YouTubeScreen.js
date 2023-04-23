import {View,Text,StyleSheet} from 'react-native';

function YouTubeScreen(){
    return(
        <View style={styles.container}>
            <Text>YouTube Screen</Text>
        </View>
    );
}

export default YouTubeScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});