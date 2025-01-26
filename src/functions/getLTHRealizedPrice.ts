const endpoint = 'https://kibo.money/api/lth-realized-price';

async function getLTHRealizedPrice() {
  try {
    const priceResponse = await fetch(endpoint);
    const priceData = await priceResponse.text();
    const price = Number(priceData.split('.')[0] ?? -1);
    return Promise.resolve(Number(price));
  } catch (error) {
    console.log('[BitcoinTools ERROR] ', error);
    return Promise.reject(error);
  }
}

export { getLTHRealizedPrice };
