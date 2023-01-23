import React, { useContext, useEffect, useState } from 'react';
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
import { Context } from '../../stores/context/context';

const {height} = Dimensions.get('screen');
const Toast = ({theme}) => {
    const {toast, setToast} = useContext(Context);
    const [hide, setHide] = useState(false);
    const [slideAnimation] = useState(new Animated.Value(height * (toast.position === 'top' ? -0.1 : 1.05)));

    const setAnimations = () => {
        const topValue = Platform.OS === "android" ? 0.02 : 0.065;

        Animated.spring(slideAnimation, {
            toValue: height * (toast.position === 'top' ? topValue : 0.8),
            useNativeDriver: true,
            duration: 350
        }).start();

        if(toast.visible) hideToast();
    }

    const hideToast = (forceHide = false) => {
        setTimeout(() => {
            Animated.spring(slideAnimation, {
                toValue: height * (toast.position === 'top' ? -0.1 : 1.05),
                useNativeDriver: true,
                duration: 750
            }).start();

            setHide(true);
        }, forceHide ? 0 : toast.visibilityTime);
    }

    useEffect(() => {
        if(!hide) return;

        setToast({...toast, visible: false})
        setHide(false);
    }, [hide])

    useEffect(() => {
        if(!toast.visible) return;

        setAnimations();
    }, [toast.visible]);

    return (
        <Animated.View style={styles.wrapper(slideAnimation)}>
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.container(toast.type, theme)}
                onPress={() => hideToast(true)}>
                <View style={{marginRight: 10}}>{toast.icon}</View>
                <Text style={styles.title}>{toast.title}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

Toast.propTypes = {
    theme: PropTypes.any,
};
  
Toast.defaultProps = {
    theme: null,
};

export default Toast;