import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Center } from "native-base";
import { THEME } from './src/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>

      <Center flex={1} bgColor="gray.900">
        <Text color="white" fontSize={24}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </Center >
      
    </NativeBaseProvider>

  );
}
