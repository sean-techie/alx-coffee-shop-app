import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-brown-800">
        ☕ Coffee Shop Home
      </Text>
      <Text className="mt-2 text-gray-500">
        NativeWind is working!
      </Text>
    </View>
  );
}
