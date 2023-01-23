import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    item: {
      borderRadius: 8,
      backgroundColor: "#fff",
      margin: 5,
      marginVertical: 5,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.4,
      shadowRadius: 6,
    
      //Android
      elevation: 3,
    },
    header: {
      fontSize: 21,
      fontWeight: 'bold',
    },
    headerContainer: {
        paddingVertical: 10,
        paddingHorizontal: 2,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    counter:{
      fontSize: 14,
      marginLeft: 5
    }
});