type GetPriceResponse = {
  time: number;
  USD: number;
  EUR: number;
  GBP: number;
  CAD: number;
  CHF: number;
  AUD: number;
  JPY: number;
};

type PriceCurrency = Exclude<keyof GetPriceResponse, 'time'>;

const endpoint = 'https://mempool.space/api/v1/prices';

async function getCurrentPrice(currency: PriceCurrency = 'USD') {
  try {
    const priceData = await fetch(endpoint);
    const price = (await priceData.json()) as GetPriceResponse;
    return Promise.resolve(price[currency]);
  } catch (error) {
    console.log('[BitcoinTools ERROR] ', error);
    return Promise.reject(error);
  }
}

export { getCurrentPrice };
