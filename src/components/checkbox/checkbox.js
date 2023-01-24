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
        item,
        isChecked,
        icon,
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
                    {item.title}
                </Text>
            </TouchableOpacity>

            {/* Icon */}
            {icon && (
                <View>
                    <TouchableOpacity style={styles.icon} onPress={onPressLabel}>
                        <Text style={styles.priorityText}>{item.priority}</Text>
                        {icon}
                    </TouchableOpacity>
                </View>
            )}
            
        </View>
    );
};

Checkbox.propTypes = {
    item: PropTypes.object,
    icon: PropTypes.any,
    isChecked: PropTypes.bool,
    fillColor: PropTypes.string,
    unfillColor: PropTypes.string,
    onPressCheck: PropTypes.func,
    onPressLabel: PropTypes.func
};
  
Checkbox.defaultProps = {
    item: {},
    isChecked: false,
    icon: null,
    fillColor: "#000",
    unfillColor: "#000",
    onPressCheck: () => {},
    onPressLabel: () => {}
};

export default Checkbox;