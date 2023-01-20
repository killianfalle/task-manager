import { useTheme } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import ChevronUp from '../../assets/icons/svg/chevron-up-icon';
import ChevronDown from '../../assets/icons/svg/chevron-down-icon';
import { styles } from './styles';

export const TaskSection = ({item}) => {
    const {colors} = useTheme();
    const [isVisible, setIsVisible] = useState(true);
    const animation = useRef(new Animated.Value(1)).current;
  
    const toggleVisibility = () => {
      Animated.timing(animation, {
        toValue: isVisible ? 0 : 1,
        duration: 300,
        useNativeDriver: false
      }).start();
  
      setIsVisible(!isVisible);
    };
  
    const height = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });
  
    return (
      <View style={{flex: 1}}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{item.title}</Text>
            <TouchableOpacity onPress={toggleVisibility}>
                {isVisible ? <ChevronUp color={colors.secondary}/> : <ChevronDown color={colors.secondary}/>}
            </TouchableOpacity>
        </View>
    
        <Animated.View style={{ maxHeight: height }}>
          {item.tasks.map((task, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.title}>{task}</Text>
            </View>
          ))}
        </Animated.View>
      </View>
    )
}