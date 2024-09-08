# Candy Machine Minter

## Overview
This project implements a minting interface for a Solana Candy Machine v3. It allows users to mint NFTs from a specified Candy Machine using SPL tokens as payment.

## Features
- Connects to Solana wallets
- Mints NFTs from a Candy Machine v3
- Uses SPL tokens for payment
- Implements error handling and transaction retries

## Prerequisites
- Node.js and yarn installed
- Solana wallet (e.g., Phantom, Solflare)
- Access to a Solana RPC endpoint

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/candy-machine-minter.git
   cd candy-machine-minter
   ```

2. Install dependencies:
   ```
   yarn
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_RPC=your_rpc_endpoint
   NEXT_PUBLIC_CANDY_MACHINE_ID=your_candy_machine_id
   NEXT_PUBLIC_TREASURY=your_treasury_address
   NEXT_PUBLIC_SPL_TOKEN_MINT=your_spl_token_mint_address
   ```

## Usage

1. Start the development server:
   ```
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Connect your wallet and mint NFTs from the Candy Machine

