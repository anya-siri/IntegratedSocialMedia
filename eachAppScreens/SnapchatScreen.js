import {View,Text,StyleSheet} from 'react-native';

function SnapchatScreen(){
    return(
        <View style={styles.container}>
            <Text>Snapchat Screen</Text>
        </View>
    );
}

export default SnapchatScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});