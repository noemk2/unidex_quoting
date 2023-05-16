import { SupportedChainId, Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { USDC_TOKEN, WETH_TOKEN } from './libs/constants'

// Inputs that configure this example to run
const NEO = new Token(SupportedChainId.CELO_ALFAJORES, '0xb9095b079195690907A40399F7F9A7bb9F9F460C', 18, 'NEO', 'Neo tokens')

const CELO = new Token(SupportedChainId.CELO_ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, "CELO", "Celo Native asset")


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
    mainnet: 'https://alfajores-forno.celo-testnet.org',
  },
  tokens: {
    in: NEO,
    amountIn: 1,
    out: CELO,
    poolFee: FeeAmount.MEDIUM,
  },
}
