import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const JournalComponent = ({
  number,
  state,
  type,
  longNumber,
  date,
  hour,
  ids,
}) => {
  return (
    <>
      <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={(styles.cardHeaderText, styles.bgInfo)}>N°{number}</Text>
          <Text style={(styles.cardHeaderText, styles.bgSuccess)}>{state}</Text>
          <Text style={(styles.cardHeaderText, styles.bgWarning)}>{type}</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.number}>{longNumber}</Text>
          <Text>
            {date} - {hour} {ids}
          </Text>
        </View>
      </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: "#FFF",
    marginBottom: 15,
  },
  cardHeader: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },

  cardHeaderText: {
    marginLeft: 15,
    marginRight: 10,
  },

  bgInfo: {
    backgroundColor: "#815FEB",
    padding: 5,
    borderRadius: 50,
    color: "#FFF",
    marginLeft: 5,
  },
  bgSuccess: {
    backgroundColor: "#44D076",
    padding: 5,
    borderRadius: 50,
    marginLeft: 5,
    color: "#FFF",
  },
  bgWarning: {
    backgroundColor: "#E9A22A",
    padding: 5,
    borderRadius: 50,
    marginLeft: 5,
    color: "#FFF",
  },
  bgDanger: {
    backgroundColor: "#D43A02",
    padding: 5,
    borderRadius: 50,
    marginLeft: 5,
    color: "#FFF",
  },
  cardBody: {
    padding: 5,
  },
  number: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default JournalComponent;
