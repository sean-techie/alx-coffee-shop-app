import { View, Text } from "react-native";

export default function DetailsScreen() {
  return (
    <View className="flex-1 bg-white px-4 pt-12">
      <View className="h-48 bg-gray-300 rounded-xl items-center justify-center mb-6">
        <Text className="text-gray-600">Coffee Image</Text>
      </View>

      <Text className="text-2xl font-bold mb-2">Cappuccino</Text>
      <Text className="text-gray-500 mb-4">
        Rich espresso with steamed milk and foam.
      </Text>

      <Text className="text-xl font-bold">$4.50</Text>
    </View>
  );
}
