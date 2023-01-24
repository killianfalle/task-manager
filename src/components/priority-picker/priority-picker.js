import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';
import { styles } from '../../assets/styles/form-styles';

import DropDownPicker from 'react-native-dropdown-picker';
import ChevronLow from '../../assets/icons/svg/chevron-low';
import ChevronMedium from '../../assets/icons/svg/chevron-medium';
import ChevronHigh from '../../assets/icons/svg/chevron-high';

const PriorityPicker = (props) => {
    const {
        theme,
        value,
        onChangeValue
    } = props;

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {label: 'High', value: 'high', icon: () => <ChevronHigh color={theme.alert}/>},
        {label: 'Medium', value: 'medium', icon: () => <ChevronMedium color={theme.caution}/>},
        {label: 'Low', value: 'low', icon: () => <ChevronLow color={theme.primary}/>},
    ]);

    const handleChangeValue = (value) => {
        onChangeValue(value);
    }

    return (
        <View>
            <Text style={styles.label}>Set priority</Text>
            <DropDownPicker
                placeholder=""
                open={open}
                value={value}
                items={items}
                showTickIcon={false}
                setOpen={setOpen}
                setValue={handleChangeValue}
                setItems={setItems}
                style={styles.picker}
                dropDownContainerStyle={styles.picker}
            />
        </View>
    );
};

PriorityPicker.propTypes = {
    theme: PropTypes.any,
    value: PropTypes.string,
    onChangeValue: PropTypes.func
};
  
PriorityPicker.defaultProps = {
    theme: null,
    value: "",
    onChangeValue: () => {}
};

export default PriorityPicker;