import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Animated, Dimensions } from 'react-native';

import { styles } from './styles';
import ChevronUp from '../../assets/icons/svg/chevron-up-icon';
import ChevronDown from '../../assets/icons/svg/chevron-down-icon';

const {height} = Dimensions.get('window');
export const TaskSection = (props) => {
    const {
      item,
      onShowDetails
    } = props;

    const {colors} = useTheme();
    const [isVisible, setIsVisible] = useState(true);
    const animation = useRef(new Animated.Value(1)).current;
  
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
      <View style={{flex: 1}}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{item.title}</Text>
            <TouchableOpacity onPress={toggleVisibility}>
                {isVisible ? <ChevronUp color={colors.secondary}/> : <ChevronDown color={colors.secondary}/>}
            </TouchableOpacity>
        </View>
    
        <Animated.View style={{ maxHeight: layoutHeight }}>
          {item?.data.map((task, index) => (
            <View key={index} style={styles.item}>
              <TouchableOpacity onPress={() => onShowDetails(task)}>
                <Text style={styles.title}>{task.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </Animated.View>
      </View>
    )
}


TaskSection.propTypes = {
  item: PropTypes.any,
  onShowDetails: PropTypes.func
};

TaskSection.defaultProps = {
  item: {},
  onShowDetails: () => {}
};

export default TaskSection;