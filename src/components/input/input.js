import React from 'react';
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
        numberOfLines,
        validationMessage,
        setValidation
    } = props;

    const onChangeText = (value) => {
        inputRef.current.value = value;
        setValidation(prev => ({...prev, title: ""}))
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
            <Text style={styles.validation}>{validationMessage}</Text>
        </View>
    );
};

Input.propTypes = {
    inputRef: PropTypes.any,
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    validationMessage: PropTypes.string,
    setValidation: PropTypes.func,
};
  
Input.defaultProps = {
    inputRef: null,
    defaultValue: "",
    label: "",
    multiline: false,
    numberOfLines: 1,
    validationMessage: "",
    setValidation: () => {}
};

export default Input;