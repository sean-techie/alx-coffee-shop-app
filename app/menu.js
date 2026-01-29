import { View, Text, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";

const COFFEES = [
  { id: 1, name: "Cappuccino", price: "$4.50" },
  { id: 2, name: "Latte", price: "$4.00" },
  { id: 3, name: "Espresso", price: "$3.00" },
  { id: 4, name: "Mocha", price: "$4.80" },
];

export default function MenuScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-12">
      <Text className="text-2xl font-bold mb-6">Coffee Menu ☕</Text>

      {COFFEES.map((coffee) => (
        <Pressable
          key={coffee.id}
          onPress={() => router.push("/details")}
          className="bg-gray-100 p-4 rounded-xl mb-4 flex-row justify-between"
        >
          <Text className="text-lg">{coffee.name}</Text>
          <Text className="font-bold">{coffee.price}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
