import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  getCurrentPrice,
  getAddressAmount,
  getCurrentBlockHeight,
} from 'react-bitcoin-tools';
import { version } from '../../package.json';

export default function App() {
  const [price, setPrice] = useState(-1);
  const [amount, setAmount] = useState(-1);
  const [block, setBlock] = useState(-1);

  useEffect(() => {
    async function updatePrice() {
      const result = await getCurrentPrice();
      setPrice(result);
    }
    async function checkAddress() {
      const result = await getAddressAmount(
        'bc1qwzrryqr3ja8w7hnja2spmkgfdcgvqwp5swz4af4ngsjecfz0w0pqud7k38'
      );
      setAmount(result);
    }
    async function blockHeight() {
      const result = await getCurrentBlockHeight();
      setBlock(result);
    }

    updatePrice();
    checkAddress();
    blockHeight();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerLabel}>React Bitcoin Tools v{version}</Text>
      <Text>Example app</Text>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text>Current block:</Text>
        <Text>{block}</Text>
      </View>
      <View style={styles.row}>
        <Text>Current Bitcoin price:</Text>
        <Text>${price}</Text>
      </View>
      <View style={styles.row}>
        <Text>Amount in test wallet:</Text>
        <Text>{amount} BTC</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 0.5,
    backgroundColor: 'gray',
    width: '100%',
    marginVertical: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
  },
  headerLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: 'orange',
  },
});
