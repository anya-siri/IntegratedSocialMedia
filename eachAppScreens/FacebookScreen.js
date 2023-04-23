import {View,Text,StyleSheet} from 'react-native';

function FacebookScreen(){
    return(
        <View style={styles.container}>
            <Text>Facebook Screen</Text>
        </View>
    );
}

export default FacebookScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});