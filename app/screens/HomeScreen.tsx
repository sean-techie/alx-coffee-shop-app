import { View, Text, TextInput, ScrollView, Image } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white px-4 pt-12">
      {/* Header */}
      <View className="mb-6">
        <Text className="text-sm text-gray-500">Good morning ☀️</Text>
        <Text className="text-2xl font-bold text-gray-900">
          Find your favorite coffee
        </Text>
      </View>

      {/* Search Bar */}
      <View className="mb-6">
        <TextInput
          placeholder="Search coffee..."
          className="bg-gray-100 rounded-xl px-4 py-3 text-gray-800"
        />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
        {["Cappuccino", "Latte", "Espresso", "Mocha"].map((item) => (
          <View
            key={item}
            className="mr-3 bg-brown-600 px-4 py-2 rounded-full"
          >
            <Text className="text-white font-medium">{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Coffee Card */}
      <View className="bg-gray-100 rounded-2xl p-4 mb-6">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
          }}
          className="h-40 w-full rounded-xl mb-3"
        />

        <Text className="text-lg font-bold text-gray-900">
          Cappuccino
        </Text>
        <Text className="text-sm text-gray-500 mb-2">
          With steamed milk
        </Text>

        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold">$4.50</Text>
          <View className="bg-brown-600 px-4 py-2 rounded-full">
            <Text className="text-white font-bold">+</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
