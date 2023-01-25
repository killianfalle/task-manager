import React, { useContext } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from '../../assets/styles/global-styles';
import { TaskSection } from '../../components/task-section/task-section';
import { Context } from '../../stores/context/context';
import Filter from '../../components/filter/filter';

const Home = () => {
  const { tasks, setShowForm, settings } = useContext(Context);

  const handleShowDetails = (task) => {
    setShowForm(prev => ({...prev, show: true, data: task}));
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={styles.pageTitle}>Your Tasks</Text>
          <Filter />
        </View>

       <View style={{minHeight: 250}}>
         {/* Use Object.keys() to convert it to array to map the data from context */}
         {Object.keys(tasks).map((item, index ) => {

         {/* Hides completed tasks based on settings */}
          if(!settings.showCompletedTasks && item === 'completed')
            return;

          return (
            <TaskSection
              key={index}
              type={Object.keys(tasks)[index]}
              item={tasks[item]}
              onShowDetails={handleShowDetails}
            />
          )
         })}
       </View>
      </ScrollView>
    </View>
  );
}

export default Home;