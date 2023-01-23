import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    TouchableOpacity, View
} from 'react-native';
import Checkmark from '../../assets/icons/svg/checkmark';
import { styles } from './styles';

const Checkbox = (props) => {
    const {
        label,
        isChecked,
        fillColor,
        unfillColor,
        onPressCheck,
        onPressLabel
    } = props;

    return (
        <View style={styles.wrapper}>
            {/* Checkmark */}
            <TouchableOpacity
                style={styles.checkmarkButton}
                onPress={() => onPressCheck(!isChecked)}>
                <View style={styles.checkmarkContainer(fillColor, unfillColor, isChecked)}>
                    <Checkmark color="#fff"/>
                </View>
            </TouchableOpacity>
            
            {/* Label */}
            <TouchableOpacity
                style={styles.titleContainer}
                onPress={onPressLabel}>
                <Text
                    style={styles.title(isChecked)}
                    numberOfLines={1}>
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    isChecked: PropTypes.bool,
    fillColor: PropTypes.string,
    unfillColor: PropTypes.string,
    onPressCheck: PropTypes.func,
    onPressLabel: PropTypes.func
};
  
Checkbox.defaultProps = {
    label: "",
    isChecked: false,
    fillColor: "#000",
    unfillColor: "#000",
    onPressCheck: () => {},
    onPressLabel: () => {}
};

export default Checkbox;