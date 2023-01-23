import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Animated,
    Dimensions,
    TouchableOpacity,
    View,
    Platform,
} from 'react-native';
import styles from './styles';

const {height} = Dimensions.get('screen');
const Toast = ({
    theme,
    title,
    visible,
    setVisible,
    position,
    type,
    icon,
    visibilityTime
}) => {
    const [hide, setHide] = useState(false);
    const [slideAnimation] = useState(new Animated.Value(height * (position === 'top' ? -0.1 : 1.05)));

    const setAnimations = () => {
        const topValue = Platform.OS === "android" ? 0.02 : 0.065;

        Animated.spring(slideAnimation, {
            toValue: height * (position === 'top' ? topValue : 0.8),
            useNativeDriver: true,
            duration: 350
        }).start();

        if(visible) hideToast();
    }

    const hideToast = (forceHide = false) => {
        setTimeout(() => {
            Animated.spring(slideAnimation, {
                toValue: height * (position === 'top' ? -0.1 : 1.05),
                useNativeDriver: true,
                duration: 750
            }).start();

            setHide(true);
        }, forceHide ? 0 : visibilityTime);
    }

    useEffect(() => {
        if(!hide) return;

        setVisible(false);
        setHide(false);
    }, [hide])

    useEffect(() => {
        if(!visible) return;

        setAnimations();
    }, [visible]);

    return (
        <Animated.View style={styles.wrapper(slideAnimation)}>
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.container(type, theme)}
                onPress={() => hideToast(true)}>
                <View style={{marginRight: 10}}>{icon}</View>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

Toast.propTypes = {
    theme: PropTypes.any,
    title: PropTypes.string,
    visible: PropTypes.bool,
    visibilityTime: PropTypes.number,
    setVisible: PropTypes.func,
    position: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.any,
};
  
Toast.defaultProps = {
    theme: null,
    title: null,
    visible: false,
    position: "top",
    type: "info",
    visibilityTime: 2500,
    icon: null,
    setVisible: () => {}
};

export default Toast;