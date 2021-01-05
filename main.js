// import * as domLib from "./contriboxDOM.js";

const contriboxJson = {
    master: '',
    backup: '',
    lock: '',
    witness: ''

}

let userPassword = '';

function main() {
    if (init() !== 0) {
        alert("initialization failed");
        return;
    };
    console.log("Libwally successfully initialized\n");
    var password = "this is user password";
    var wallet = newWallet(password);
    if (wallet === "") {
        alert("Wallet creation failed");
        return;
    }
    console.log("encryptedWallet is " + wallet);

    clearWallet = decryptWallet(wallet, password);
    console.log("clearWallet is " + clearWallet);
    // walletObj = JSON.parse(clearWallet);
    // console.log("xprv is " + walletObj.integration.share.master.xprv);
    // console.log("xpub is " + walletObj.integration.share.master.xpub);
    // console.log("master blinding key is " + walletObj.integration.share.master.masterBlindingKey);
    // console.log("seed words are \n" + walletObj.integration.share.master.seedWords);
}

function createNewWallet(password) {
    console.log(password);
    let master = newWallet(password);
    let backup = newWallet(password);
    let lock = newWallet(password);
    let witness = newWallet(password);
    contriboxJson.master = master;
    contriboxJson.backup = backup;
    contriboxJson.lock = lock;
    contriboxJson.witness = witness;
    localStorage.setItem('contriboxJson', JSON.stringify(contriboxJson));
    console.log('json: ', JSON.stringify(contriboxJson));
    
    console.log(localStorage.getItem('contriboxJson'));

}

function getContriboxJson() {
    return localStorage.getItem('contriboxJson');
}

function passwordGet() {
    openForm(passwordFormDivId);
}

var Module = {
    onRuntimeInitialized: function () {
        // main();
        console.log('pass:', userPassword);
        console.log(localStorage.getItem('contriboxJson'));

        if (userPassword.length === 0) {
            passwordGet();
        }

    }
};
