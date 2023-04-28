import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#fff0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        Hello world!
      </ScrollView>
      This is a new Screen!
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  }
});
export default Untitled1;