function depositar(value, depositTo) {
    var formattedValue = web3.toWei(value);
    var transactionObject = {from: eth.accounts[0], to: depositTo, value: formattedValue };
    web3.eth.sendTransaction(transactionObject, function(error, result) {
        console.log('transaction: ', result);
    });
    console.log("Value: " + value + "sent to  : "+depositTo+".");  
};

function depositarComSenha(value, from, to) {
    var pass = readline("digite a sua senha");
    personal.unlockAccount(pass);
    var formattedValue = web3.toWei(value);
    var transactionObject = {from: from, to: to, value: formattedValue };
    web3.eth.sendTransaction(transactionObject, function(error, result) {
        console.log('transaction: ', result);
    });
    console.log("Value: " + value + "sent to  : "+to+".");  
};