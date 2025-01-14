type GetAddressAmountResponse = {
  address: string;
  chain_stats: {
    funded_txo_count: number;
    funded_txo_sum: number;
    spent_txo_count: number;
    spent_txo_sum: number;
    tx_count: number;
  };
  mempool_stats: {
    funded_txo_count: number;
    funded_txo_sum: number;
    spent_txo_count: number;
    spent_txo_sum: number;
    tx_count: number;
  };
};

type AmountUnit = 'sats' | 'btc';

const endpoint = 'https://mempool.space/api/address/:address';

async function getAddressAmount(address: string, unit: AmountUnit = 'btc') {
  try {
    const currentEndpoint = endpoint.replace(':address', address);
    const response = await fetch(currentEndpoint);
    const addressData = (await response.json()) as GetAddressAmountResponse;
    console.log('add:', addressData);
    const amount =
      addressData.chain_stats.funded_txo_sum -
      addressData.chain_stats.spent_txo_sum;
    const formattedAmount = unit === 'btc' ? amount / 100_000_000 : amount;
    return Promise.resolve(formattedAmount);
  } catch (error) {
    console.log('[BitcoinTools ERROR] ', error);
    return Promise.reject(error);
  }
}

export { getAddressAmount };
