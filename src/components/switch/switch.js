import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import styles from './styles';

const Toggle = (props) => {
    const {
        label,
        description
    } = props;
    const {colors} = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.wrapper}>
            <View style={{ maxWidth: '80%'}}>
                <Text style={styles.label}>{label}</Text>
                {description ? <Text style={styles.description} numberOfLines={1}>{description}</Text> : null}
            </View>
            <Switch
                trackColor={{true: colors.primary}}
                thumbColor={isEnabled ? colors.white : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}


Toggle.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
};
  
Toggle.defaultProps = {
    label: "",
    description: "",
};
export default Toggle;