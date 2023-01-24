import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper:{
        flexDirection: "row",
        alignItems: "center"
    },
    titleContainer:{ 
        flex: 1,
        paddingRight: 10,
        paddingVertical: 12
    },
    title: (isChecked) => ({
        ...isChecked && {textDecorationLine: "line-through"},
        opacity: isChecked ? 0.65 : 1, 
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 5
    }),
    checkmarkButton: {
        marginLeft: 10,
        marginRight: 3,
    },
    checkmarkContainer: (fillColor, unfillColor, isChecked) => ({
        backgroundColor: isChecked ? fillColor : "#fff",
        borderColor: isChecked ? "#fff" : unfillColor,
        borderWidth: isChecked ? 0 : 1.5,
        padding: isChecked ? 3 : 2,
        borderRadius: 99,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }),
    icon: {
        marginRight: 10,
        flexDirection: "row"
    },
    priorityText: {
        marginRight: 3,
        textTransform: "capitalize",
        opacity: 0.8,
        fontSize: 12,
        fontWeight: 'bold',
    }
});