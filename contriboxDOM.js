// import { proof1, proof2, fnName, state } from "./contriBox.sdk-v0.configure.js";

const passwordFormBtnId = 'myPasswordFormBtnId';
const signatureFormBtnId = 'mySignatureFormBtnId';
const signatureInfosBtnId = 'mySignatureInfosBtnId';
const passwordFormDivId = 'myPasswordFormDiv';
const signatureFormDivId = 'mySignatureFormDiv';
const signatureInfosDivId = 'mySignatureInfosDiv';
const passwordForm = 'myPasswordForm';
const signatureForm = 'mySignatureForm';


const openForm = (formId) => {
    document.getElementById(formId).style.display = "block";
    if (formId === passwordFormDivId) {
        check();
    }
}

const closeForm = (formId) => {
    document.getElementById(formId).style.display = "none";
}

const check = function () {

    let myPassword = document.getElementById("password");
    let myPasswordConfirm = document.getElementById("confirm_password");
    let letter = document.getElementById("letter");
    let capital = document.getElementById("capital");
    let number = document.getElementById("number");
    let length = document.getElementById("length");
    let matching = document.getElementById("matching");


    // When the user starts to type something inside the password field
    myPassword.onkeyup = function () {

        // Validate lowercase letters
        let lowerCaseLetters = /[a-z]/g;
        if (myPassword.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        // Validate capital letters
        let upperCaseLetters = /[A-Z]/g;
        if (myPassword.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        let numbers = /[0-9]/g;
        if (myPassword.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Validate length
        if (myPassword.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    }

    myPasswordConfirm.onkeyup = function () {
        if (myPassword.value == myPasswordConfirm.value) {
            matching.classList.remove("invalid");
            matching.classList.add("valid");
        } else {
            matching.classList.remove("valid");
            matching.classList.add("invalid");
        }
    }


}

const fillSignForm = (proofParam) => {
    document.getElementById('proofName').innerHTML = proofParam.projectName;
    document.getElementById('proofDesc').innerHTML = proofParam.description;
}

const fillSignedForm = function (proofParam, state) {
    document.getElementById('proofNameInfos').innerHTML = proofParam.projectName;
    document.getElementById('proofDescInfos').innerHTML = proofParam.description;
    if (state) {
        document.getElementById('signatureState').innerHTML = "The multisignature has been signed";
    } else {
        document.getElementById('signatureState').innerHTML = "The multisignature has failed";
    }
}

// Setting up forms (openning, closing forms, and listenning to events)
let myPasswordFormBtn = document.getElementById(passwordFormBtnId);
myPasswordFormBtn.addEventListener('click', () => {
    openForm(passwordFormDivId);
});

let mySignatureFormBtn = document.getElementById(signatureFormBtnId);
mySignatureFormBtn.addEventListener('click', () => {
    openForm(signatureFormDivId);
    fillSignForm(proof1);
});

let mySignatureInfosBtn = document.getElementById(signatureInfosBtnId);
mySignatureInfosBtn.addEventListener('click', () => {
    openForm(signatureInfosDivId);
    fillSignedForm(proof2, state);
});

let myClosePasswordFormBtn = document.getElementById('closePwdForm');
myClosePasswordFormBtn.addEventListener('click', () => {
    closeForm(passwordFormDivId);
});
let myCloseSignatureFormBtn = document.getElementById('closeSignatureForm');
myCloseSignatureFormBtn.addEventListener('click', () => {
    closeForm(signatureFormDivId);
});
let myCloseSignatureInfosBtn = document.getElementById('closeInfosForm');
myCloseSignatureInfosBtn.addEventListener('click', () => {
    closeForm(signatureInfosDivId);
});


// Getting the password from the DOM and send it to SDK
document.getElementById(passwordForm).addEventListener('submit', (e) => {
    e.preventDefault();
    let password = e.target.elements[0].value;
    console.log('password: ', password);
    closeForm(passwordFormDivId);
    // Set the password with SDK
    // contribox.sdk.passwordSet(password)
    // create new wallet with 5 keys 
    createNewWallet(password);

})

// Signing or rejecting the signature
document.getElementById(signatureForm).addEventListener('submit', (e) => {
    e.preventDefault();

    // returns the signature acceptance to the SDK 
    //which will sign avec contribox.sdk.sign(Proofhash) 
    // contribox.sdk.integration.sign
    alert("Signature accepted");
    closeForm(signatureFormDivId);

})

// export { 
//     closeForm,
//     signatureFormDivId,
//     passwordFormDivId, 
//     passwordForm, 
//     signatureForm,
// }




