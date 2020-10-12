import React from "react";
import { StyleSheet, Text, Platform, View, FlatList } from "react-native";
import JournalComponent from "./JournalComponent";

const data = require('./data.json');

const renderList = ({ item }) => 
  <JournalComponent
    number={item.number}
    state={item.state}
    type={item.type}
    longNumber={item.longNumber}
    date={item.date}
    hour={item.hour}
    ids={item.ids}
  />;
;

const Journal = () => {
  return (
    <>
      <View
        style={
          Platform.OS !== "web"
            ? Mobilestyles.journalHeader
            : styles.journalHeader
        }
      >
        <Text
          style={
            Platform.OS !== "web" ? Mobilestyles.mainTitle : styles.mainTitle
          }
        >
          Journal Electronique
        </Text>
      </View>
      <View style={styles.journalComponents}>
        <Text>Marjane S.Othmane</Text>
        <Text style={styles.journalTitle}>Tickets</Text>
        <FlatList 
            data={data}
            renderItem={renderList}
            keyExtractor={item => item.number}
        />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  journalTitle: {
    fontSize: 24,
    marginBottom: 15,
  },
  mainTitle: {
    fontSize: 28,
    marginLeft: 15,
    textAlign: "center",
    color: "#FFF",
  },
  journalHeader: {
    padding: 16,
    backgroundColor: "#815FEB",
  },
  journalComponents: {
    marginTop: 15,
    padding: 10,
  },
});

const Mobilestyles = StyleSheet.create({
  mainTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFF",
  },
  journalHeader: {
    padding: 16,
    backgroundColor: "#815FEB",
    marginTop: 27,
  },
});

export default Journal;
