import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";
import { Rubik_300Light } from "@expo-google-fonts/rubik";
import { Amplify } from "aws-amplify";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import awsconfig from "../src/aws-exports";

// Configure Amplify once at the root
Amplify.configure(awsconfig);

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Rubik_300Light,
    Montserrat_400Regular,
  });

  if (!loaded && !error) {
    return null;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading fonts</Text>
      </View>
    );
  }

  return <Stack />;
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});