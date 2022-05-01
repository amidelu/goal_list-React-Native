import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.fullScreen}>
      <Button onPress={() => setIsAddMode(true)} title='Add Goal Item'/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler}/>
      <FlatList data={courseGoals} renderItem={(itemData) => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    padding: 50
  }
});
