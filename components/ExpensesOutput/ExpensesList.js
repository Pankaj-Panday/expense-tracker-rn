import { FlatList, StyleSheet, Text } from "react-native";

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.description}</Text>;
}

export default function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />;
}

const styles = StyleSheet.create({});
