import { Tabs } from "expo-router/tabs";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ThemeSelector } from "@/components/ThemeSelector";

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "index") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "herramientas") {
            iconName = focused ? "construct" : "construct-outline";
          }

          return <Ionicons size={size} color={color} />;
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <Ionicons name="menu" size={24} style={{ marginRight: 15 }} />
          </TouchableOpacity>
        ),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Home",
        }}
      />
      <Tabs.Screen
        name="herramientas"
        options={{
          title: "Herramientas",
          headerTitle: "Herramientas",
        }}
      />
    </Tabs>
  );
}
