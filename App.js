import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IansPage } from "./pages/IansPage";

// Add your import below!
import { RiyasPage } from "./pages/RiyasPage";

function Home({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", fontSize: 40 }}>These people can use Git!</Text>

      <Button
        title="Ian"
        onPress={() => navigation.navigate("IansPage")}
      />

      {/* Add yourself below! */}
      <Button
        title="Riya"
        onPress={() => navigation.navigate("RiyasPage")}
      />
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="IansPage" component={IansPage} />

        {/* Add yourself below! */}
        <Stack.Screen name="RiyasPage" component={RiyasPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
