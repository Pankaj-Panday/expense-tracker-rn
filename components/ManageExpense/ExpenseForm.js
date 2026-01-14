import { StyleSheet, View } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {
  function amountChangeHandler() {}
  function dateChangeHandler() {}
  
  return (
    <View>
      <Input
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label={"Date"}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: dateChangeHandler,
        }}
      />
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentences", // default is 'sentences'
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
