import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import { Switch, Text, View } from 'react-native';
import styles from './styles';

const Toggle = (props) => {
    const {
        label,
        description,
        value,
        onToggleSwitch
    } = props;
    const {colors} = useTheme();

    return (
        <View style={styles.wrapper}>
            <View style={{ maxWidth: '80%'}}>
                <Text style={styles.label}>{label}</Text>
                {description ? <Text style={styles.description} numberOfLines={1}>{description}</Text> : null}
            </View>
            <Switch
                value={value}
                trackColor={{true: colors.primary}}
                thumbColor={value ? colors.white : '#f4f3f4'}
                onValueChange={onToggleSwitch}
            />
        </View>
    );
}


Toggle.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.bool,
    onToggleSwitch: PropTypes.func
};
  
Toggle.defaultProps = {
    label: "",
    description: "",
    value: false,
    onToggleSwitch: () => {}
};
export default Toggle;