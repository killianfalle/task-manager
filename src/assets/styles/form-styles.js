import { Dimensions, StyleSheet } from "react-native";

const {width, fontScale} = Dimensions.get('window');
const scaleFontSize = (fontSize) => {
    const ratio = fontSize / fontScale; // get ratio based on your standard scale 
    const newSize = ratio;
    return newSize; 
}

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'flex-end',
        paddingBottom: 15
    },
    closeIcon: (color) => ({
        backgroundColor: color,
        width: width * 0.1,
        height: width * 0.1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
    }),
    label: {
      fontWeight: 'bold',
      fontSize: scaleFontSize(16),
      marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: "#DDDDDD",
        borderRadius: 5,
        paddingHorizontal: 10
    },
    inputMulti: {
        borderWidth: 1,
        textAlignVertical: 'top',
        borderColor: "#DDDDDD",
        borderRadius: 5,
        paddingHorizontal: 10
    },
    button: (color) => ({
        backgroundColor: color,
        borderRadius: 5
    }),
    buttonText: {
        color: '#fff',
        padding: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: scaleFontSize(16)
    }
});