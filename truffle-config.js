require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remain hospital grid gloom symptom squeeze'; 
let testAccounts = [
"0xa590f159c0e85308c860fdbed9fe33261e402d550c1f929f26cf16a89a17b169",
"0x6634487a8699fb8b147d459e29e4126e67affd2ac19a0af3ba63eead49274b81",
"0x8056fb5cc52635e356d85179d7f5686634c2ce8debec792f24afbe7aa8e288fe",
"0x715f1a031073bc5fde15d96be3c7fff0bb35e3fa1e0f1b3892bcffd31ecfaa69",
"0xd14596676d322621f0ac1fb4a39628ed884d80e345ebd958962a9d663de05bda",
"0xe472ca0d4f24424a6404e330b5f9d7d2fdbca5b15e693e4ee659c4c3dad3a948",
"0x58a0929e365150ceebcb1b6eaed48f19de85e733b6fffed9c2ca05ea0667e7f9",
"0xd73c28b1e76dca4a014568bf5f6e37bbd55a5c04115cbf6aad889c522a5c2c51",
"0xc07df377c0860b064807db33705feb969535b72c614bdbd0c543ab03bb0c4ecc",
"0x1d2745eac81c0edb940f396ed7f1f677a871af0eb841b0a9798c5520e180b8f3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
