import {View,Text,StyleSheet} from 'react-native';

function LinkedInScreen(){
    return(
        <View style={styles.container}>
            <Text>LinkedIn Screen</Text>
        </View>
    );
}

export default LinkedInScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});