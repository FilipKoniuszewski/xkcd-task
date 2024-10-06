import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { RootStackNavigatorParamsList, Screen } from "../types/types";
import { HomeScreen } from "../screens/HomeScreen";
import { DetailsScreen } from "../screens/DetailsScreen";
import { AboutScreen } from "../screens/AboutScreen";

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

export const PageNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screen.Home}
        screenOptions={({ navigation, route }) => ({
          headerRight: () =>
            route.name !== Screen.About ? (
              <TouchableOpacity
                onPress={() => navigation.navigate(Screen.About)}
              >
                <Text style={styles.aboutButton}>About</Text>
              </TouchableOpacity>
            ) : null,
        })}
      >
        <Stack.Screen name={Screen.Home} component={HomeScreen} />
        <Stack.Screen name={Screen.About} component={AboutScreen} />
        <Stack.Screen name={Screen.Details} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  aboutButton: {
    fontSize: 17,
    color: "#007AFF",
    padding: 10,
  },
});
