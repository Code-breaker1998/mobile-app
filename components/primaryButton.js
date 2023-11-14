import { View, Text } from 'react-native';


function primaryButton({ children }) {
    return (
      <View>
        <Text>{children}</Text>
      </View>
    );
  }

export default primaryButton;