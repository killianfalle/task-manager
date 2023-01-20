import { Dimensions, Platform, StyleSheet } from "react-native";

const {width, fontScale} = Dimensions.get('window');
const scaleFontSize = (fontSize) => {
    const ratio = fontSize / fontScale; // get ratio based on your standard scale 
    const newSize = ratio;
    return newSize; 
}

export const styles = StyleSheet.create({
    wrapper: ({withVerticalPadding = false, withHorizontalPadding = false, backgroundColor = null}) => ({
        ...withVerticalPadding && {paddingVertical: width * 0.016},
        ...withHorizontalPadding && {paddingHorizontal: width * 0.032},
        ...backgroundColor && {backgroundColor: backgroundColor},
        flex: 1,
    }),
    container: ({withVerticalPadding = false, withHorizontalPadding = false, backgroundColor = null}) => ({
        ...withVerticalPadding && {paddingVertical: width * 0.07},
        ...withHorizontalPadding && {paddingHorizontal: width * 0.032},
        ...backgroundColor && {backgroundColor: backgroundColor},
        flex: 1,
    }),
    image: ({size = null}) => ({
        width: '100%',
        ...size && {height: size}
    }),
    pageTitle: (heraldry) => ({
        fontSize: scaleFontSize(38),
        fontFamily: "LondrinaSolid-Regular",
        color: heraldry,
        textTransform: 'capitalize'
    }),
    pageLabel: ({color = "#000"}) => ({
        fontFamily: "LondrinaSolid-Regular",
        fontSize: scaleFontSize(28),
        color: color
    }),
    pageDescription: (heraldry) => ({
        fontSize: scaleFontSize(16),
        fontFamily: "Rubik-Regular",
        color: heraldry
    }),
    pageContentText: (heraldry) => ({
        color: heraldry,
        fontFamily: "Rubik-Regular",
        fontSize: scaleFontSize(15.5)
    }),
    bulletItem: {
        fontSize: scaleFontSize(8),
        marginHorizontal: 10
    },
    contentListContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkboxContainer: {
        ...Platform.OS === 'android' && {
            marginLeft: -8,
        },
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 24,
        paddingRight: 10
    },
    checkboxView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 22,
        width: 22,
        marginRight: 9
    },
    emptyContainer: {
        paddingHorizontal: 16
    },
    flexCenter: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    pageBackgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    bannerLabel: ({color = "#000"}) => ({
        fontSize: scaleFontSize(Platform.OS === "android" ? 44 : 35),
        fontFamily: "LondrinaSolid-Regular",
        color: color,
    }),
    bannerSubLabel: ({color = "#000"}) => ({
        fontSize: scaleFontSize(Platform.OS === "android" ? 26 : 22),
        fontFamily: "LondrinaSolid-Regular",
        color: color,
    }),
    centerView: {
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    headingWithBG: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 39,
        flexDirection: 'row'
    },
    closeIconStyle: (type, color) => ({
        borderRadius: 3,
        backgroundColor: type === 'login' ? color.accenta : color.secondary
    }),
    headerWrapper: ({withHorizontalPadding = false}) => ({
        ...withHorizontalPadding && {paddingHorizontal: width * 0.032},
        marginBottom: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }),
    backIconContainer: (bgColor) => ({
        backgroundColor: bgColor,
        padding: width * 0.032,
        borderRadius: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }),
    buttonTextStyle: {
        fontWeight: 'normal',
        fontFamily: "LondrinaSolid-Regular",
        fontSize: scaleFontSize(16),
    }
});