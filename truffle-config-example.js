const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send

const provider = new Web3.providers.HttpProvider("https://proxy.devnet.neonlabs.org/solana");

const privateKey = ""; // Specify your private key here

module.exports = {
    networks: {
        neonlabs: {
            provider: () => {
                return new HDWalletProvider(
                    privateKey,
                    provider,
                );
            },
            from: "", // Specify public key corresponding to private key defined above
            network_id: "*"
        }
    }
};