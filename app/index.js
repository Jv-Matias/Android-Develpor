import { Link } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Tela Inicial</Text>
        <Text style={styles.subtitle}>tela inicial</Text>
      </View>
      <Link href='/homeum' asChild>
      <TouchableOpacity>
        <Text>Next</Text>
      </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    textAlign: "center",
  },
});
