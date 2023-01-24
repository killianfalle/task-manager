import React, { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../../assets/styles/global-styles';
import { TaskSection } from '../../components/task-section/task-section';
import { Context } from '../../stores/context/context';
import Filter from '../../components/filter/filter';

const Home = () => {
  const { tasks, setShowForm } = useContext(Context);

  const handleShowDetails = (task) => {
    setShowForm(prev => ({...prev, show: true, data: task}));
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Filter />

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