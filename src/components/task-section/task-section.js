import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Animated, Dimensions } from 'react-native';

import { styles } from './styles';
import ChevronUp from '../../assets/icons/svg/chevron-up-icon';
import ChevronDown from '../../assets/icons/svg/chevron-down-icon';
import Checkbox from '../checkbox/checkbox';
import { Context } from '../../stores/context/context';

const {height} = Dimensions.get('window');
export const TaskSection = (props) => {
    const {
      item,
      type,
      onShowDetails
    } = props;

    const {colors} = useTheme();
    const {tasks, setTasks, setToast} = useContext(Context);
    const [isVisible, setIsVisible] = useState(true);
    const animation = useRef(new Animated.Value(1)).current;

    const handlePressCheck = (value, task) => {
      const otherType = Object.keys(tasks).find(item => item != type);
      
      /* Removes the task from the current object type */
      setTasks(prev => ({
        ...prev,
        [type]: ({
          ...prev[type], data: tasks[type].data.filter(item => item.id !== task.id)
        })
      }));

      /* Adds the task from the other object type */
      setTasks(prev => ({
        ...prev,
        [otherType]: ({
          ...prev[otherType], data: [...prev[otherType].data, task]
        })
      }));

      setToast(prev => ({
        ...prev,
        visible: true,
        title: `Successfully moved to ${otherType} tasks`,
        type: "primary"
      }));
    }
  
    const toggleVisibility = () => {
      /* Animation plays here */
      Animated.timing(animation, {
        toValue: isVisible ? 0 : 1,
        duration: 300,
        useNativeDriver: false
      }).start();
  
      /* Update isVisibile state */
      setIsVisible(!isVisible);
    };
    
    /* Set height depending in the input Range */
    const layoutHeight = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, height]    // use device's screen height
    });
  
    return (
      <View style={{flex: 1, overflow: 'hidden'}}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{item.title}</Text>
            <TouchableOpacity onPress={toggleVisibility}>
                {isVisible ? <ChevronUp color={colors.secondary}/> : <ChevronDown color={colors.secondary}/>}
            </TouchableOpacity>
        </View>
    
        <Animated.View style={{ maxHeight: layoutHeight }}>
          {item?.data.map((task, index) => (
            <View key={index} style={styles.item}>
              <Checkbox
                label={task.title}
                isChecked={type === "completed"}    // Checks if item is on "todo" or "completed" object
                fillColor={colors.primary}
                unfillColor={colors.primary}
                onPressCheck={(value) => handlePressCheck(value, task)}
                onPressLabel={() => {}}
              />
            </View>
          ))}
        </Animated.View>
      </View>
    )
}


TaskSection.propTypes = {
  item: PropTypes.any,
  type: PropTypes.any,
  onShowDetails: PropTypes.func
};

TaskSection.defaultProps = {
  item: {},
  type: null,
  onShowDetails: () => {}
};

export default TaskSection;