import { StyleSheet, Dimensions } from 'react-native';

const {width, height, fontScale} = Dimensions.get('window');
const scaleFontSize = (fontSize) => {
    const ratio = fontSize / fontScale; // get ratio based on your standard scale 
    const newSize = ratio;
    return newSize; 
}

const styles = StyleSheet.create({
  wrapper: (animationValue) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    transform: [{translateY: animationValue}]
  }),
  container: (type, colors) => ({
    backgroundColor: colors[type],
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 16,
  }),
  title: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: scaleFontSize(16)
  }
});

export default styles;