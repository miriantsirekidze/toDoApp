import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {

  const [value, setValue] = useState('');
  const [goals, setGoals] = useState([])
  const [modal, setModal] = useState(false)

  
  function openModal() {
    setModal(true);
  }
  
  function closeModal() {
    setModal(false);
  }
  
  function addGoalHandler () {
    setGoals(currentGoals => [...currentGoals, {text: value, id: Math.random().toString() }])
    closeModal()
  }
  
  function addDeleteHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }


  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <View style={{marginBottom: 50}}>
        <Button title='Add a goal' onPress={openModal} color={"#f31282"}/>
      </View>
      <GoalInput addGoalHandler={addGoalHandler} setValue={setValue} visibility={modal} cancel={closeModal}/>
      <View style={styles.goals}>
        <FlatList data={goals} showsVerticalScrollIndicator={false} renderItem={(item) => {
          return (
            <GoalItem text={item.item.text} delete={addDeleteHandler} id={item.item.id}/>
          )
        }} 
        keyExtractor={(item) => {
          return item.id
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#311b6c"
  },
  goals: {
    flex: 5
  },
});
