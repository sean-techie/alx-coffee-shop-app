import { View, Text } from "react-native";

type ProductCardProps = {
  name: string;
  price: string;
};

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <View className="bg-gray-100 rounded-xl p-4 mr-4 w-40">
      <View className="h-24 bg-gray-300 rounded-lg mb-3 items-center justify-center">
        <Text className="text-xs text-gray-500">Image</Text>
      </View>

      <Text className="font-semibold text-base">{name}</Text>
      <Text className="text-gray-500 mt-1">{price}</Text>
    </View>
  );
}
