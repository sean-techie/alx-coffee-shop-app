import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-12">
      {/* Header */}
      <View className="mb-6">
        <Text className="text-sm text-gray-500">Good morning ☀️</Text>
        <Text className="text-2xl font-bold">
          Find your favorite coffee
        </Text>
      </View>

      {/* Search */}
      <TextInput
        placeholder="Search coffee..."
        className="bg-gray-100 rounded-xl px-4 py-3 mb-6"
      />

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
        {["Cappuccino", "Latte", "Espresso", "Mocha"].map((item) => (
          <View
            key={item}
            className="mr-3 bg-gray-900 px-4 py-2 rounded-full"
          >
            <Text className="text-white">{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Featured Coffee */}
      <Pressable
        onPress={() => router.push("/menu")}
        className="bg-gray-100 rounded-2xl p-4"
      >
        <View className="h-40 bg-gray-300 rounded-xl items-center justify-center mb-3">
          <Text className="text-gray-600">Coffee Image</Text>
        </View>

        <Text className="text-lg font-bold">Cappuccino</Text>
        <Text className="text-gray-500 mb-2">With steamed milk</Text>

        <View className="flex-row justify-between items-center">
          <Text className="font-bold">$4.50</Text>
          <View className="bg-gray-900 px-4 py-2 rounded-full">
            <Text className="text-white">+</Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
}
