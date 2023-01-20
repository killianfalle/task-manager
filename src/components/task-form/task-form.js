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

    const titleRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = () => {
        const params = {
            title: titleRef.current.value || '',
            description: descriptionRef.current.value || ''
        }

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

                    <TouchableOpacity onPress={handleSubmit} style={styles.button(theme.secondary)}>
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