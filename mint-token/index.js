import { clusterApiUrl, Connection, PublicKey, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';

(async () => {
    // Step 1: Connect to cluster and generate a new Keypair
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");


    const key = new Uint8Array(
        [238, 74, 133, 156, 113, 248, 38, 12, 61, 96, 121, 102, 47, 
          65, 179, 114, 249, 58, 127, 214, 71, 71, 120, 25, 9, 160, 
          154, 86, 36, 241, 162, 249, 86, 39, 71, 16, 195, 98, 24, 
          201, 138, 12, 27, 130, 156, 114, 218, 228, 238, 203, 107, 
          41, 215, 20, 16, 192, 192, 137, 117, 48, 105, 208, 238, 48]
      )
    const fromWallet = Keypair.fromSecretKey(key);
    // const fromWallet = Keypair.generate();
    const toWallet = Keypair.generate();
    

    // Step 2: Airdrop SOL into your from wallet
    //const airdropSignature = await connection.requestAirdrop(fromWallet.publicKey, LAMPORTS_PER_SOL);

    //await connection.confirmTransaction(airdropSignature, {commitment: "confirmed"});


    // Step 3: Create new token mint and get the token account of the fromWallet address
    //If the token account does not exist, create it
    const mint = await createMint(connection, fromWallet, fromWallet.publicKey, null, 9);
    console.log(mint);
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, mint, fromWallet.publicKey);
    
    
    //Step 4: Mint a new token to the from account
    let signature = await mintTo(connection, fromWallet, mint, fromTokenAccount.address, fromWallet.publicKey, 100000_000000000, []);
    
    console.log("signature", signature);
    //Step 5: Get the token account of the to-wallet address and if it does not exist, create it
    // const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, mint, toWallet.publicKey);
    const phantomWallet = new PublicKey("4YYijywkTGoVXZRo1s8pWJcmFtT9qHvB6Uuj9DBWL99p");
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, mint, phantomWallet);
    console.log("To Token Account:",toTokenAccount.address);

    //Step 6: Transfer the new token to the to-wallet's token account that was just created
    // Transfer the new token to the "toTokenAccount" we just created
    signature = await transfer(connection, fromWallet, fromTokenAccount.address, toTokenAccount.address, fromWallet.publicKey, 100000_000000000, []);
    console.log("signature", signature);
})();