const endpoint = 'https://kibo.money/api/sth-realized-price';

async function getSTHRealizedPrice() {
  try {
    const priceData = await fetch(endpoint);
    const price = await priceData.json();
    console.log(price);
    return Promise.resolve(Number(price));
  } catch (error) {
    console.log('[BitcoinTools ERROR] ', error);
    return Promise.reject(error);
  }
}

export { getSTHRealizedPrice };
