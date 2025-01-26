import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
  getCurrentPrice,
  getAddressAmount,
  getCurrentBlockHeight,
  getSTHRealizedPrice,
  getLTHRealizedPrice,
} from 'react-native-bitcoin-tools';
import { version } from '../../package.json';
import { version as appVersion } from './../package.json';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(-1);
  const [amount, setAmount] = useState(-1);
  const [block, setBlock] = useState(-1);
  const [sthPrice, setSthPrice] = useState(-1);
  const [lthPrice, setLthPrice] = useState(-1);

  useEffect(() => {
    getExampleData();
  }, []);

  async function getExampleData() {
    setLoading(true);

    const priceResult = await getCurrentPrice();
    const amountResult = await getAddressAmount(
      'bc1qwzrryqr3ja8w7hnja2spmkgfdcgvqwp5swz4af4ngsjecfz0w0pqud7k38'
    );
    const heightResult = await getCurrentBlockHeight();
    const sthPriceResult = await getSTHRealizedPrice();
    const lthPriceResult = await getLTHRealizedPrice();

    setPrice(priceResult);
    setAmount(amountResult);
    setBlock(heightResult);
    setSthPrice(sthPriceResult);
    setLthPrice(lthPriceResult);

    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerLabel}>
        React Native Bitcoin Tools v{version}
      </Text>
      <Text style={styles.subHeaderLabel}>Example app v{appVersion}</Text>
      <View style={styles.divider} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <View style={styles.row}>
            <Text>Current block:</Text>
            <Text>{block}</Text>
          </View>
          <View style={styles.row}>
            <Text>Current Bitcoin price:</Text>
            <Text>${price}</Text>
          </View>
          <View style={styles.row}>
            <Text>Current Bitcoin STH price:</Text>
            <Text>${sthPrice}</Text>
          </View>
          <View style={styles.row}>
            <Text>Current Bitcoin LTH price:</Text>
            <Text>${lthPrice}</Text>
          </View>
          <View style={styles.row}>
            <Text>Amount in test wallet:</Text>
            <Text>{amount} BTC</Text>
          </View>
        </>
      )}
      <View style={styles.divider} />
      <Button title="Refresh" onPress={getExampleData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
  subHeaderLabel: {
    fontSize: 18,
    color: 'gray',
  },
  refreshButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
