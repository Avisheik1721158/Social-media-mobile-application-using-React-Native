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

// import React, { useEffect } from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import OnBoardingScreen from "./screens/OnBoardingScreen";
// import LoginScreen from "./screens/LoginScreen";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Stack = createStackNavigator();
// const AuthStack = () => {
//   const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
//   let routeName;
//   useEffect(() => {
//     AsyncStorage.getItem("alreadyLaunched").then((value) => {
//       if (value == null) {
//         AsyncStorage.setItem("alreadyLaunched", "true");
//         setIsFirstLaunch(true);
//       } else {
//         setIsFirstLaunch(false);
//       }
//     });
//   }, []);

//   if (isFirstLaunch === null) {
//     return null;
//   } else if (isFirstLaunch == true) {
//     routeName = "Onboarding";
//   } else {
//     routeName = "Login";
//   }
//   return (
//     <Stack.Navigator initialRouteName={routeName}>
//       <Stack.Screen
//         name="Onboarding"
//         component={OnBoardingScreen}
//         options={{ header: () => null }}
//       />

//       <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{ header: () => null }}
//       />
//       <Stack.Screen
//         name="Signup"
//         component={SignupScreen}

//       />
//     </Stack.Navigator>
//   );
// };
// export default AuthStack;
import React from "react";
import Providers from "./navigation";

const App = () => {
  return <Providers />;
};

export default App;
