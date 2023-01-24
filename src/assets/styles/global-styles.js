import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 16,
    },
    container: {
        flex: 1,
    },
    filterContainer: {
        alignItems: "flex-end",
        marginRight: 8,
        marginBottom: 5,
        zIndex: 2,
        elevation: 2
    },
    sortWrapper: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        opacity: 0
    },
    sortContainer: {
        maxWidth: '55%',
        position: 'absolute',
        right: 0,
        top: -10
    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: "#DDDDDD",
        borderRadius: 5,
    }
});