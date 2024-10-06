import React, { FunctionComponent } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export const AboutScreen: FunctionComponent = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>About XKCD</Text>
      <Text style={styles.content}>
        XKCD is a webcomic created by Randall Munroe. The comic's tagline
        describes it as "A webcomic of romance, sarcasm, math, and language."
        XKCD's subject matter varies from statements on life and love to
        mathematical, programming, and scientific in-jokes. The comic is known
        for its stick figure drawings and its clever, often humorous, take on
        various topics.
      </Text>
      <Text style={styles.content}>
        XKCD is fun to read because it combines humor with insightful
        observations about the world. Whether you're a math enthusiast, a
        science geek, or just someone who enjoys a good laugh, XKCD has
        something for everyone. The comics often include hidden jokes and
        references that make them enjoyable to revisit multiple times.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});
