import {StyleSheet, Dimensions} from 'react-native';

const { fontScale, width, height } = Dimensions.get('window');
const scaleFontSize = (fontSize) => {
    const ratio = fontSize / fontScale; // get ratio based on your standard scale 
    const newSize = ratio;
    return newSize; 
}

const boxShadow = {
    // IOS
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  
    //Android
    elevation: 10,
};

const boxShadowMiddle = {
  // IOS
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.4,
  shadowRadius: 6,

  //Android
  elevation: 10,
};

const styles = StyleSheet.create({
  tabsWrapper: (theme) => ({
    shadowColor: "#000",
    flexDirection: 'row',
    elevation: 10,
    justifyContent: 'center',
    backgroundColor: theme.primary,
  }),
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tabBlur: (theme) => ({
    ...boxShadow,
    shadowColor: theme,
    width: width * 0.065,
    height: 25,
    borderRadius: 999,
    position: 'absolute',
    top: 0
  }),
  tabItem: (bottomTabWidth, tabs, isActive, routeName) => ({
    ...(routeName === "Create Task" ? {
      marginTop: height * -0.05,
    } : {
      paddingBottom: height * 0.015,
      paddingTop: height * 0.015,
    }),
    position: 'relative',
    width: bottomTabWidth / tabs.length - (width * 0.05),
    alignItems: 'center',
    justifyContent: isActive ? 'space-around' : 'center',
    flexDirection: 'column',
  }),
  tabName: (theme) => ({
    fontSize: scaleFontSize(10),
    color: theme.white,
  }),
  tabIconContainer: (routeName, theme) => ({
    ...(routeName === "Create Task" && {
      ...boxShadowMiddle,
      backgroundColor: theme,
      borderRadius: 100,
      marginTop: -20,
      width: scaleFontSize(55),
      height: scaleFontSize(55),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    })
  }),
  selectedTabContainer: (bottomTabWidth, tabs, activeTabIndicator) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: bottomTabWidth / tabs.length - (width * 0.05),
    alignItems: 'center',
    transform: [{translateX: activeTabIndicator}],
  }),
  selectedTabMover: (theme) => ({
    backgroundColor: theme.white,
    width: width * 0.06,
    height: '5%',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  }),
});

export default styles;