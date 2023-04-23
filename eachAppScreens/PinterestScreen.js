import {View,Text,StyleSheet} from 'react-native';

function PinterestScreen(){
    return(
        <View style={styles.container}>
            <Text>Pinterest Screen</Text>
        </View>
    );
}

export default PinterestScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});