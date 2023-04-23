import {View,Text,StyleSheet} from 'react-native';

function DiscordScreen(){
    return(
        <View style={styles.container}>
            <Text>Discord Screen</Text>
        </View>
    );
}

export default DiscordScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});