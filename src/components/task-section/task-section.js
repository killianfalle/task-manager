import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Animated, Dimensions } from 'react-native';

import { styles } from './styles';
import { Context } from '../../stores/context/context';
import Checkbox from '../checkbox/checkbox';

import ArrowDown from '../../assets/icons/svg/arrow-down';
import ArrowUp from '../../assets/icons/svg/arrow-up';
import ChevronLow from '../../assets/icons/svg/chevron-low';
import ChevronMedium from '../../assets/icons/svg/chevron-medium';
import ChevronHigh from '../../assets/icons/svg/chevron-high';

const {height} = Dimensions.get('window');
export const TaskSection = (props) => {
    const {
      item,
      type,
      onShowDetails
    } = props;

    const {colors} = useTheme();
    const {tasks, setTasks, setToast, sortBy} = useContext(Context);
    const [isVisible, setIsVisible] = useState(true);
    const animation = useRef(new Animated.Value(1)).current;
    const taskIcons = [
      <ChevronHigh color={colors.alert}/>,
      <ChevronMedium color={colors.caution}/>,
      <ChevronLow color={colors.primary}/>
    ]

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

    /* Sorts the tasks data */
    if(item)
      item.data.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
    
    return (
      <View style={{overflow: 'hidden'}}>
        <View>
          <TouchableOpacity onPress={toggleVisibility} style={styles.headerContainer}>
            {item?.data.length > 0 && (
              isVisible ? <ArrowUp color={colors.secondary}/> : <ArrowDown color={colors.secondary}/>
            )}
            
            <View style={styles.titleContainer}>
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.counter}>({item?.data.length})</Text>
            </View>
          </TouchableOpacity>
        </View>
    
        <Animated.View style={{ maxHeight: layoutHeight }}>
          {item?.data.map((task, index) => (
            <View key={index} style={styles.item}>
              <Checkbox
                item={task}
                isChecked={type === "completed"}    // Checks if item is on "todo" or "completed" object
                fillColor={colors.primary}
                unfillColor={colors.primary}
                icon={taskIcons[task.priority - 1]}
                onPressCheck={(value) => handlePressCheck(value, task)}
                onPressLabel={() => onShowDetails(task)}
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