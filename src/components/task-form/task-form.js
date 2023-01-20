import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Modal,
    TouchableOpacity,
    SafeAreaView,
    Text
} from 'react-native';

import { styles } from '../../assets/styles/form-styles';
import CloseIcon from '../../assets/icons/svg/close-icon';
import Input from '../input/input';

const TaskForm = (props) => {
    const {
        theme,
        show,
        setShow,
        onSubmit
    } = props;

    /**  
     * used useRef instead of useState
     * useRef is powerful because it's persisted between renders. 
     * Unlike useState, useRef doesn't cause a component to re-render when the value or state changes. 
    */
    const titleRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = () => {
        /* values here already updates from input component */
        const params = {
            title: titleRef.current.value || '',
            description: descriptionRef.current.value || ''
        }

        /* sends back the params to the callback function */
        onSubmit(params);
    }

    return (
        <View style={{position: 'relative'}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                style={{margin: 0}}
                onRequestClose={() => setShow(!show)}>
                <SafeAreaView style={styles.wrapper}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.closeIcon(theme.secondary)}
                            onPress={() => setShow(false)}>
                            <CloseIcon color={theme.white}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <Input
                            label="Title"
                            inputRef={titleRef}
                        />

                        <Input
                            label="Description"
                            inputRef={descriptionRef}
                            multiline
                            numberOfLines={5}
                        />
                    </View>

                    <TouchableOpacity onPress={handleSubmit} style={styles.button(theme.primary)}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Modal>
        </View>
    );
};

TaskForm.propTypes = {
    theme: PropTypes.any,
    show: PropTypes.bool,
    setShow: PropTypes.func,
    onSubmit: PropTypes.func
};
  
TaskForm.defaultProps = {
    theme: null,
    show: false,
    setShow: () => {},
    onSubmit: () => {}
};

export default TaskForm;