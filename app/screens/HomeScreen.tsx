import { View, Text, TextInput } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white px-5 pt-12">

      {/* Title */}
      <Text className="text-3xl font-bold text-amber-800">
        ☕ Coffee Shop
      </Text>
      <Text className="text-gray-500 mt-1">
        Welcome back
      </Text>

      {/* Search bar */}
      <View className="mt-6 bg-gray-100 rounded-xl px-4 py-3">
        <TextInput
          placeholder="Search coffee..."
          className="text-base"
        />
      </View>

      {/* Categories */}
      <View className="flex-row mt-6 space-x-3">
        <View className="bg-amber-200 px-4 py-2 rounded-full">
          <Text className="font-medium text-amber-900">Coffee</Text>
        </View>
        <View className="bg-gray-200 px-4 py-2 rounded-full">
          <Text className="font-medium text-gray-700">Tea</Text>
        </View>
        <View className="bg-gray-200 px-4 py-2 rounded-full">
          <Text className="font-medium text-gray-700">Dessert</Text>
        </View>
      </View>

      {/* Featured coffee */}
      <View className="mt-8 bg-amber-50 p-5 rounded-2xl">
        <Text className="text-xl font-semibold text-amber-800">
          Cappuccino
        </Text>
        <Text className="text-gray-600 mt-1">
          With fresh milk
        </Text>
        <Text className="mt-3 text-lg font-bold text-amber-700">
          R45.00
        </Text>
      </View>

    </View>
  );
}

