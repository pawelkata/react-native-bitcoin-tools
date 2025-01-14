type GetBlockTimestampResponse = {
  height: number;
  hash: string;
  timestamp: number;
};

const endpoint =
  'https://mempool.space/api/v1/mining/blocks/timestamp/:timestamp';

/**
 * timestamp: Date.now() divided by 1000 as integer (optional)
 */
async function getCurrentBlockHeight(timestamp?: number) {
  try {
    const currentEndpoint = endpoint.replace(
      ':timestamp',
      timestamp ? String(timestamp) : String(Math.floor(Date.now() / 1000))
    );
    const response = await fetch(currentEndpoint);
    const blockData = (await response.json()) as GetBlockTimestampResponse;
    const blockHeight = blockData.height;
    return Promise.resolve(blockHeight);
  } catch (error) {
    console.log('[BitcoinTools ERROR] ', error);
    console.log(
      '[BitcoinTools ERROR] Please use Math.floor(Date.now() / 1000)'
    );
    return Promise.reject(error);
  }
}

export { getCurrentBlockHeight };
