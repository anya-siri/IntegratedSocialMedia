import { StyleSheet, Pressable, View, Text, Image } from "react-native";

function Box({ title, color, source, onPress }) {
    return (
        <View style={[styles.boxItem, { backgroundColor: color }]}>
            <Pressable
                android_ripple={{ color: '#CA9595' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Image source={source} style={styles.logo} />
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    boxItem: {
        flex: 1,
        marginHorizontal: 10,
        marginTop:15,
        height: 100,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: '#ffffff',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 30,
        height: 30,
        marginBottom: 8,
    },
});

export default Box;
