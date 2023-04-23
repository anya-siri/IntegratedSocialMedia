import {View,Text,StyleSheet} from 'react-native';

function InstagramScreen(){
    return(
        <View style={styles.container}>
            <Text>Instagram Screen</Text>
        </View>
    );
}

export default InstagramScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});