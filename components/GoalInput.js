import { StatusBar } from "expo-status-bar";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"


function GoalInput(props) {
  return (
    <Modal visible={props.visibility} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image source={require("../img/goal.png")} style={styles.image}/> 
        <TextInput style={styles.textInput} onChangeText={props.setValue} placeholder="Your course goal" placeholderTextColor={"#120438"}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='cancel' onPress={props.cancel} color={"#5e0acc"}/>
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={props.addGoalHandler} color={"#f31282"}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#311b6c"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "90%",
    padding: 10,
    color: "#120438",
    borderRadius: 6
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 80,
    height: 80, 
    margin: 20,
  },
})