import {Animated} from 'react-native';

/**
 * Navigation helper with or without parameters
 * @param {ref} indicator       : The reference for animation for animation (REQUIRED)
 * @param {number} toValue      : Value to animate (REQUIRED)
 * @param {number} stiffness    : The spring stiffness coefficient. Default 100 (OPTIONAL)
 * @param {number} damping      : Defines how the spring’s motion should be damped due to the forces of friction. Default 10 (OPTIONAL)
 * @param {number} mass         : The mass of the object attached to the end of the spring. Default 1 (OPTIONAL)
 */
const spring = (
  indicator,
  toValue,
  stiffness = 100,
  damping = 10,
  mass = 1,
) => {
  Animated.spring(indicator, {
    toValue: toValue,
    stiffness,
    damping,
    mass,
    useNativeDriver: true,
  }).start();
};

const animation = {
  spring,
};

export default animation;
