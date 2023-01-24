import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    item: {
      borderRadius: 8,
      backgroundColor: "#fff",
      margin: 5,
      marginVertical: 5,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    
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
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 5
    },
    counter:{
      fontSize: 14,
      marginLeft: 5
    }
});