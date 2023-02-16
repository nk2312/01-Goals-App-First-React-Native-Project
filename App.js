
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisible,setisVisible]=useState(false);

  const showModalHandler=()=>{
    setisVisible((prevState)=>{ return !prevState});
  }
 

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setisVisible(false);
  }

  function deleteGoalHandler(id){
    const newArr=courseGoals.filter(item=>item.id!==id);
    setCourseGoals(newArr);
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
    <Button title="Add" color="#fff" onPress={showModalHandler}/>
    <GoalInput addInput={addGoalHandler} isVisible={isVisible} onCancel={showModalHandler}/>
    <View style={styles.listContainer}>
    <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalList
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
    </View>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#131318'
  },
  listContainer:{
    flex:5,
    marginVertical:20
  }
 
});
