import React, { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../../assets/styles/global-styles';
import { TaskSection } from '../../components/task-section/task-section';
import { Context } from '../../stores/context/context';

const Home = () => {
  const { tasks } = useContext(Context);

  const handleShowDetails = (task) => {
    console.log(task)
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        {/* Use Object.keys() to convert it to array to map the data from context */}
        {Object.keys(tasks).map((item, index ) => (
          <TaskSection
            key={index}
            type={Object.keys(tasks)[index]}
            item={tasks[item]}
            onShowDetails={handleShowDetails}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default Home;