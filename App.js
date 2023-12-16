// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import { View } from "react-native";
// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "plum" }}>
//       <View
//         style={{ width: 100, height: 100, backgroundColor: "lightblue" }}
//       ></View>
//       <View
//         style={{ width: 100, height: 100, backgroundColor: "lightgreen" }}
//       ></View>
//     </View>
//   );
// }

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import LoginScreen from "./screens/LoginScreen";

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Onboarding" component={OnBoardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
