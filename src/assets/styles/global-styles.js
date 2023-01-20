import { Dimensions, Platform, StyleSheet } from "react-native";

const {width, fontScale} = Dimensions.get('window');
const scaleFontSize = (fontSize) => {
    const ratio = fontSize / fontScale; // get ratio based on your standard scale 
    const newSize = ratio;
    return newSize; 
}

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 16,
    },
    container: {
        flex: 1,
    },
});