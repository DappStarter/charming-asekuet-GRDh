require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain common grace forum flock trouble'; 
let testAccounts = [
"0x3723e9e44e1af875a87a342e4eea0d7c250c308d1eacbba552cfe33d2fe9bc22",
"0xef4a0f22612e4e70c9db69b374da18fbc75e692c89624dbc361ccdab30b06afe",
"0xb03423c8124c34a6572da3150a6c681a30f7a89a3ec9a3dfaa247adb36f3b61f",
"0xc1a2b8f5cce405c8025592a315a9ae8a683614ec5ace494258ff18d45fde4998",
"0x91fa8f362d5e878717695a3f5bf781212e89c241bc021cc8daa6b2860fb260e9",
"0x865f74ef44f6281a7dc0eed2b6a0c22abf0192c398410f6555da347955e39a7c",
"0x4dc9372982277ab8e44c8c062186d9a2dddc8ec0bc3d4f7bbdbbc541c550b44b",
"0x18d3e1d8b30eb36184ba9357152b765602c063a3389dcd85c30d7157791c5d67",
"0xdb742f2edcea738c67ea88b6371c954c4169c8e73ff97196785bd407cc17aef0",
"0x512576c73fe623b7406c4eebe915a22f373e5114be364c32574c78e8e07d07a3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

