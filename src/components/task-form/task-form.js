import React, { useEffect, useRef } from 'react';
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
import { generateId } from '../../utils/generate-id';

const TaskForm = (props) => {
    const {
        theme,
        show,
        data,
        setShow,
        onSubmit,
        onDelete
    } = props;

    /**  
     * used useRef instead of useState
     * useRef is powerful because it's persisted between renders. 
     * Unlike useState, useRef doesn't cause a component to re-render when the value or state changes. 
    */
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const onHide = () => {
        setShow(prev => ({...prev, show: false, data: null}));
    }

    const handleSubmit = () => {
        /* values here already updates from input component */
        const params = {
            id: generateId(),
            title: titleRef.current.value || '',
            description: descriptionRef.current.value || '',
            created_at: new Date(),
            updated_at: new Date()
        }

        /* sends back the params to the callback function */
        onSubmit(params);
    }

    const setDefaultValues = () => {
        titleRef.current.value = data.title;
        descriptionRef.current.value = data.description;
    }

    useEffect(() => {
        if(data) setDefaultValues();
    }, [data])

    return (
        <View style={{position: 'relative'}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                style={{margin: 0}}
                onRequestClose={onHide}>
                <SafeAreaView style={styles.wrapper}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.closeIcon(theme.secondary)}
                            onPress={onHide}>
                            <CloseIcon color={theme.white}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <Input
                            label="Title"
                            defaultValue={data?.title || ""}
                            inputRef={titleRef}
                        />

                        <Input
                            label="Description"
                            defaultValue={data?.description || ""}
                            inputRef={descriptionRef}
                            multiline
                            numberOfLines={5}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => onDelete(data)} style={styles.button(theme.grey)}>
                            <Text style={styles.buttonText}>Delete</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity onPress={handleSubmit} style={styles.button(theme.primary)}>
                            <Text style={styles.buttonText}>{data ? "Save" : "Create"}</Text>
                        </TouchableOpacity> 
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
};

TaskForm.propTypes = {
    theme: PropTypes.any,
    show: PropTypes.bool,
    data: PropTypes.object,
    setShow: PropTypes.func,
    onSubmit: PropTypes.func
};
  
TaskForm.defaultProps = {
    theme: null,
    show: false,
    data: null,
    setShow: () => {},
    onSubmit: () => {},
    onDelete: () => {}
};

export default TaskForm;