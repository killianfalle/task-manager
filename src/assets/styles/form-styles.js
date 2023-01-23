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
        paddingHorizontal: 10,
        marginBottom: 15
    },
    inputMulti: {
        borderWidth: 1,
        textAlignVertical: 'top',
        borderColor: "#DDDDDD",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15
    },
    button: (color) => ({
        backgroundColor: color,
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 5
    }),
    buttonContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttonText: {
        color: '#fff',
        padding: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: scaleFontSize(16)
    }
});