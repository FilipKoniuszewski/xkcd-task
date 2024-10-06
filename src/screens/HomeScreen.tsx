import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Spinner from "react-native-loading-spinner-overlay";
import React, { FunctionComponent } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { Comic, RootStackNavigatorParamsList, Screen } from "../types/types";
import { useFetchComics } from "../hooks/useFetchComics";

export const HomeScreen: FunctionComponent = () => {
  const { comics, isLoading, fetchMoreComics } = useFetchComics();
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

  const onItemPress = (item: Comic) => {
    navigation.navigate(Screen.Details, { item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comics}
        keyExtractor={(item) => item.num.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onItemPress(item)}
            style={styles.itemContainer}
          >
            <Image
              source={{ uri: item.img }}
              style={styles.image}
              alt={item.alt}
            />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        onEndReached={fetchMoreComics}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isLoading ? (
            <Spinner
              visible={isLoading}
              textContent={"Loading..."}
              textStyle={styles.spinnerTextStyle}
            />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
  itemContainer: {
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
