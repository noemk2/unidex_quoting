
# uniswap sdk V3: Quoting in Mumbai testnet

## Overview

The project aims to utilize the Uniswap V3 SDK to fetch the value of a custom token named MTKu, which has been added to the Uniswap pool with WMATIC. This integration allows for seamless tracking and monitoring of MTKu's value within the Uniswap ecosystem, enabling efficient analysis and decision-making for token holders and traders.

The core functionality of this example can be found in [`quote.ts`](./src/libs/quote.ts).


## Preview
![Web capture_16-5-2023_22855_main--bespoke-babka-10d9ac netlify app](https://github.com/noemk2/unidex_quoting/assets/37389982/e132d5be-a5b9-4696-99a2-60e0966d6003)


## Configuration

This application is a read only quoting application that communicates with the Ethereum mainnet. To configure the input token/amount and output token, install metamask

### Start the web interface

Run `yarn start` and navigate to [http://localhost:3000/](http://localhost:3000/)
