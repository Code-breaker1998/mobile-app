import {TextInput, View } from "react-native";
import {primaryButton} from '../components/primaryButton';

function StartGameScreen() {
  return (
    <View>
      <TextInput />
      <primaryButton>Reset</primaryButton>
      <primaryButton>Confirm</primaryButton>
    </View>
  );
}

export default StartGameScreen;
