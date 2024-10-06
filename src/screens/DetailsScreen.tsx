import { RouteProp } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import { Image, Text, StyleSheet, ScrollView } from "react-native";

import { RootStackNavigatorParamsList } from "../types/types";

type DetailsScreenProps = {
  route: RouteProp<RootStackNavigatorParamsList, "Details">;
};

export const DetailsScreen: FunctionComponent<DetailsScreenProps> = ({
  route,
}) => {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>
        {item.day}/{item.month}/{item.year}
      </Text>
      <Text style={styles.transcript}>{item.transcript}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 16,
  },
  alt: {
    fontSize: 16,
    marginBottom: 16,
  },
  transcript: {
    fontSize: 14,
    color: "#555",
  },
});
