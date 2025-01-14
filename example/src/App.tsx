import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getCurrentPrice } from 'react-bitcoin-tools';

export default function App() {
  const [price, setPrice] = useState(-1);

  useEffect(() => {
    async function updatePrice() {
      const result = await getCurrentPrice();
      setPrice(result);
    }
    updatePrice();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Current Bitcoin price: ${price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
