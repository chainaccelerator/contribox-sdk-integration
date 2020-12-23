let formId = 'myPasswordForm';

const onPasswordGet = () => {
    window[fnName]();
}

function passwordGet() {
    document.getElementById(formId).style.display = "block";
    check();
}

function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
}

let check = function () {

    let myPassword = document.getElementById("password");
    let myPasswordConfirm = document.getElementById("confirm_password");
    let letter = document.getElementById("letter");
    let capital = document.getElementById("capital");
    let number = document.getElementById("number");
    let length = document.getElementById("length");
    let matching = document.getElementById("matching");


// When the user starts to type something inside the password field
    myPassword.onkeyup = function() {
        console.log("hehre")
        // Validate lowercase letters
        let lowerCaseLetters = /[a-z]/g;
        if(myPassword.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        // Validate capital letters
        let upperCaseLetters = /[A-Z]/g;
        if(myPassword.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        let numbers = /[0-9]/g;
        if(myPassword.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Validate length
        if(myPassword.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    }
    
    myPasswordConfirm.onkeyup = function() {
        if (myPassword.value == myPasswordConfirm.value) {
            matching.classList.remove("invalid");
            matching.classList.add("valid");
        } else {
            matching.classList.remove("valid");
            matching.classList.add("invalid");
        } 
    }

    
}

const getFormValue = function() {
    let password = document.getElementById("password").value;
    console.log(`Password = ${password}`);
    closeForm();
    // Set the password
    // contribox.sdk.passwordSet(password)
}

// Sign function
const onSignForm = () => {
    signForm(proof1);
}

const signProof = () => {
    let signature = true;
    console.log(signature);
    // return the signature boolean to SDK
}

function signForm(proofParam) {
    document.getElementById("mySignatureForm").style.display = "block";
    document.getElementById('proofName').innerHTML = proofParam.projectName;
    document.getElementById('proofDesc').innerHTML = proofParam.description;
    //console.log(proofParam);
}

// Signed popup
const onSigned = () => {
    signed(proof2, state);
}

let signed = function(proofParam, state) {
    document.getElementById('mySignatureInfos').style.display = "block";
    document.getElementById('proofNameInfos').innerHTML = proofParam.projectName;
    document.getElementById('proofDescInfos').innerHTML = proofParam.description;
    if (state) {
        document.getElementById('signatureState').innerHTML = "The multisignature has been signed";
    } else {
        document.getElementById('signatureState').innerHTML = "The multisignature has failed";
    }
}

window.addEventListener("load", function(event) {
    console.log("Toutes les ressources sont chargées !");
    
});





