import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { USDC_TOKEN, WETH_TOKEN, WMATIC_TOKEN, MTKu_TOKEN } from './libs/constants'

// Inputs that configure this example to run
export interface ExampleConfig {
  rpc: {
    local: string
    mainnet: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  rpc: {
    local: 'http://localhost:8545',
    mainnet: 'https://mainnet.infura.io/v3/',
  },
  tokens: {
    in: MTKu_TOKEN,
    amountIn: 10,
    out: WMATIC_TOKEN,
    poolFee: FeeAmount.HIGH,
  },
}
