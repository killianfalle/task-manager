import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Modal,
    TouchableOpacity,
    SafeAreaView,
    Text
} from 'react-native';

import useTaskActions from '../../actions/task-actions';
import { styles } from '../../assets/styles/form-styles';
import { generateId } from '../../utils/generate-id';
import { Context } from '../../stores/context/context';

import Input from '../input/input';
import PriorityPicker from '../priority-picker/priority-picker';
import CloseIcon from '../../assets/icons/svg/close-icon';

const TaskForm = (props) => {
     /**  
     * used useRef instead of useState
     * useRef is powerful because it's persisted between renders. 
     * Unlike useState, useRef doesn't cause a component to re-render when the value or state changes. 
    */
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const [priority, setPriority] = useState(3);
    const { theme } = props;
    const [validation, setValidation] = useState({
        title: ""
    });

    const {
        handleSubmit,
        handleDelete
    } = useTaskActions();

    const {
        showForm,
        setShowForm,
    } = useContext(Context);
   
    const show = showForm.show;
    const data = showForm.data;

    const onHide = () => {
        setPriority(3);
        setShowForm(prev => ({...prev, show: false, data: null}));
        setValidation(prev => ({...prev, title: ""}))
    }

    const onSubmit = () => {
        const type = data ? "update" : "create";  // depending if save or update task

        /* Checks for validation */
        if(!titleRef.current.value)
            return setValidation(prev => ({...prev, title: "Title is required"}))

        /* values here already updates from input component */
        const params = {
            id: data?.id || generateId(),
            title: titleRef.current.value || '',
            description: descriptionRef.current.value || '',
            priority: priority,
            created_at: data?.created_at || new Date(),
            updated_at: new Date()
        }

        /* sends back the params to the callback function */
        handleSubmit(params, type);
        setPriority(3);
    }

    const setDefaultValues = () => {
        setPriority(data.priority)
        titleRef.current.value = data.title;
        descriptionRef.current.value = data.description;
    }

    useEffect(() => {
        if(data) setDefaultValues();
    }, [data]);

    return (
        <View style={{position: 'relative'}}>     
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                style={{margin: 0}}
                onRequestClose={onHide}>
                <SafeAreaView style={styles.wrapper}>
                    <View style={styles.header(data)}>
                        <View style={styles.closeContainer}>
                            <TouchableOpacity
                                style={styles.closeIcon(theme.secondary)}
                                onPress={onHide}>
                                <CloseIcon color={theme.white}/>
                            </TouchableOpacity>
                        </View>

                        {!data && <Text style={styles.formTitle}>Add a task</Text>}
                    </View>
                    
                    <View style={styles.container}>
                        <Input
                            label="Title*"
                            defaultValue={data?.title || ""}
                            inputRef={titleRef}
                            validationMessage={validation.title}
                            setValidation={setValidation}
                        />

                        <Input
                            label="Description"
                            defaultValue={data?.description || ""}
                            inputRef={descriptionRef}
                            multiline
                            numberOfLines={5}
                        />

                        <PriorityPicker
                            theme={theme}
                            value={priority}
                            onChangeValue={setPriority}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        {data && (
                            <TouchableOpacity onPress={() => handleDelete(data)} style={styles.button(theme.grey)}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity> 
                        )}
                        <TouchableOpacity onPress={onSubmit} style={styles.button(theme.primary)}>
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
};
  
TaskForm.defaultProps = {
    theme: null,
};

export default TaskForm;