function sendNameTransaction(value, depositTo, name, unlockAccountPass) {
    var formattedValue = web3.toWei(value);
    var OxName = web3.toHex(name);
    web3.personal.unlockAccount(eth.accounts[0], unlockAccountPass)
    var transactionObject = {from: eth.accounts[0], to: depositTo, value: formattedValue, data: OxName };
    web3.eth.sendTransaction(transactionObject, function(error, result) {

        if(error != ""){
            console.log(error);
        }
        console.log('transaction: ', result);
    });

    console.log("name sent: ", name);

    // https://ropsten.etherscan.io/tx/0x1fdc29fbacac99f0a520b0cd9d6adc5a9b384e838826f95e0d77099184391705 find transactionTest
}