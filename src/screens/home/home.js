import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../../assets/styles/global-styles';
import { TaskSection } from '../../components/task-section/task-section';

const data = [
  {
    title: 'To do',
    tasks: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Completed',
    tasks: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  }
];

const Home = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        {data.map((item, index ) => (
          <TaskSection key={index} item={item}/>
        ))}
      </ScrollView>
    </View>
  );
}

export default Home;