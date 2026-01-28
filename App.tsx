import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4">

        {/* Header */}
        <View className="mt-6 mb-4">
          <Text className="text-2xl font-bold text-gray-900">
            Good Morning ☕
          </Text>
          <Text className="text-gray-500 mt-1">
            Find your favorite coffee
          </Text>
        </View>

        {/* Promo Card */}
        <View className="bg-brown-500 rounded-2xl p-5 mb-6">
          <Text className="text-white text-lg font-semibold">
            Get 20% off
          </Text>
          <Text className="text-white mt-1">
            On your first order
          </Text>
        </View>

        {/* Popular Coffee */}
        <View>
          <Text className="text-lg font-semibold mb-3">
            Popular Coffee
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProductCard name="Latte" price="$4.50" />
            <ProductCard name="Cappuccino" price="$5.00" />
            <ProductCard name="Espresso" price="$3.50" />
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
