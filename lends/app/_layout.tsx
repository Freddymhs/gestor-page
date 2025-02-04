import "../global.css";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useColorScheme as useDeviceColorScheme } from "react-native";
import {
  themes,
  ColorScheme,
  ColorName,
  CustomTheme,
} from "@/components/ui/theme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const deviceColorScheme = useDeviceColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (deviceColorScheme as ColorScheme) || "light"
  );
  const [themeName, setThemeName] = useState<ColorName>("default");

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    setColorScheme((deviceColorScheme as ColorScheme) || "light");
  }, [deviceColorScheme]);

  if (!loaded) {
    return null;
  }

  const currentTheme: CustomTheme = themes[colorScheme][themeName];

  return (
    <ThemeProvider value={currentTheme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
