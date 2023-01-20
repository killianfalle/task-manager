import React from 'react';
import {Dimensions,  Text,  TouchableOpacity, View} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from '../../assets/styles/tab-styles';

const { fontScale, width } = Dimensions.get('window');
const scaleFontSize = (fontSize) => {
    const ratio = fontSize / fontScale; // get ratio based on your standard scale 
    const newSize = ratio;
    return newSize; 
}

const bottomTabWidth = width;
const TabItem = ({
  onTabPress,
  route,
  index,
  state,
  descriptors,
  onTabLongPress,
}) => {
  const { colors } = useTheme();
  const isActive = index === state.index;
  const tabs = state.routes;
  const {options} = descriptors[route.key];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onTabPress(route)}
      onLongPress={() => onTabLongPress(route)}
      style={styles.tabItem(bottomTabWidth, tabs, isActive, route.name)}>
      <View style={styles.tabIconContainer(route.name, colors.accenta)}>
        {options.icon({color: colors.white, size: scaleFontSize(21)})}
      </View>

      {route.name != 'Create Task' && (
        <Text style={styles.tabName(colors)}>
          {route.name}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TabItem;
