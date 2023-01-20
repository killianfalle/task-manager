import React, {useContext, useEffect, useRef} from 'react';
import {View, Dimensions, Animated} from 'react-native';
import { useTheme } from '@react-navigation/native';

import animation from '../../utils/animation';
import styles from '../../assets/styles/tab-styles';
import TabItem from './tab-item';
import { Context } from '../../stores/context/context';

const {width} = Dimensions.get('window');

const TabBar = ({state, navigation, descriptors, activeColor}) => {
  const { colors } = useTheme();
  const {setShowForm} = useContext(Context);
  const activeTabIndicator = useRef(new Animated.Value(0)).current;
  const tabs = state.routes;

  const onTabPress = (route) => {
    if(route.name === "Create Task")
      return setShowForm(true)

    navigation.navigate(route.name);
  };

  const onTabLongPress = route => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  useEffect(() => {
    let indicatorMoveTo = 0,
      stiffness = 100,
      damping = 10,
      mass = 0.3;

    indicatorMoveTo = width * (state.index / (tabs.length + 0.535));
    animation.spring(
      activeTabIndicator,
      indicatorMoveTo,
      stiffness,
      damping,
      mass,
    );
  }, [state.index]);

  return (
    <View style={styles.tabsWrapper(colors)}>
      <View style={styles.tabsContainer}>
        <Animated.View
          style={styles.selectedTabContainer(width, tabs, activeTabIndicator)}>
          <View style={styles.selectedTabMover(colors)} />
        </Animated.View>

        {tabs.map((route, index) => {
          return (
            <TabItem
              activeColor={activeColor}
              key={route.key}
              route={route}
              index={index}
              state={state}
              descriptors={descriptors}
              onTabPress={onTabPress}
              onTabLongPress={onTabLongPress}
              theme={colors}
            />
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;