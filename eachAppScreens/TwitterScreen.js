import {View,Text,StyleSheet} from 'react-native';

function TwitterScreen(){
    return(
        <View style={styles.container}>
            <Text>Twitter Screen</Text>
        </View>
    );
}

export default TwitterScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});