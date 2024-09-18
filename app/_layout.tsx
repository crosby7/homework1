import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    "sourceBold": require('./../assets/fonts/SourceCodePro-Bold.ttf'),
    "sourceMed": require('./../assets/fonts/SourceCodePro-Medium.ttf'),
    "sourceReg": require('./../assets/fonts/SourceCodePro-Regular.ttf')
  })

  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
