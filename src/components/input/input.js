import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TextInput,
    Text
} from 'react-native';
import { styles } from '../../assets/styles/form-styles';

const Input = (props) => {
    const {
        inputRef,
        label,
        defaultValue,
        multiline,
        numberOfLines
    } = props;

    const onChangeText = (value) => {
        inputRef.current.value = value;
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                ref={inputRef}
                defaultValue={defaultValue}
                style={multiline ? styles.inputMulti : styles.input}
                multiline={multiline}
                numberOfLines={numberOfLines}
                onChangeText={(value) => onChangeText(value)}
            />
        </View>
    );
};

Input.propTypes = {
    inputRef: PropTypes.any,
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number
};
  
Input.defaultProps = {
    inputRef: null,
    defaultValue: "",
    label: "",
    multiline: false,
    numberOfLines: 1
};

export default Input;