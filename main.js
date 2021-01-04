import { getEntropy } from "./contribox.lib.js";
import * as domLib from "./contriboxDOM.js";
import { proof1, proof2, fnName, state } from "./contriBox.sdk-v0.configure.js";


/* Forms */

let myPasswordFormBtn = document.getElementById('myPasswordFormBtn');
myPasswordFormBtn.addEventListener('click', () => {
  domLib.openForm(domLib.passwordFormDivId);
});
let mySignatureFormBtn = document.getElementById('mySignatureFormBtn');
mySignatureFormBtn.addEventListener('click', () => {
  // domLib.openForm(domLib.signatureFormId);
  domLib.signForm(proof1);
});

let mySignatureInfosBtn = document.getElementById('mySignatureInfosBtn');
mySignatureInfosBtn.addEventListener('click', () => {
  domLib.openForm(domLib.signatureInfosId);
  domLib.signed(proof2, state);
});

let myClosePasswordFormBtn = document.getElementById('closePwdForm');
myClosePasswordFormBtn.addEventListener('click', () => {
  domLib.closeForm(domLib.passwordFormDivId);
});
let myCloseSignatureFormBtn = document.getElementById('closeSignatureForm');
myCloseSignatureFormBtn.addEventListener('click', () => {
  domLib.closeForm(domLib.signatureFormId);
});
let myCloseSignatureInfosBtn = document.getElementById('closeInfosForm');
myCloseSignatureInfosBtn.addEventListener('click', () => {
  domLib.closeForm(domLib.signatureInfosId);
});

// Getting the password from the DOM and send it to SDK
document.getElementById("myPasswordForm").addEventListener('submit', (e) => {
  e.preventDefault();
  let password = e.target.elements[0].value;
  console.log(e.target.elements[0].value);
  domLib.closeForm(domLib.passwordFormDivId);
  // Set the password with SDK
  // contribox.sdk.passwordSet(password)
  console.log(_wally_init());
  
})

// Signing or rejecting the signature
document.getElementById("mySignatureForm").addEventListener('submit', (e) => {
  e.preventDefault();

  // returns the signature acceptance to the SDK 
  //which will sign avec contribox.sdk.sign(Proofhash) 
  // contribox.sdk.integration.sign
  alert("Signature accepted");
  domLib.closeForm(domLib.signatureFormId);

})

Module.onRuntimeInitialized = () => {
  console.log('Loaded! ');
  console.log(_wally_init());
};


























// window.addEventListener("load", function (event) {
//     console.log("Toutes les ressources sont chargées!");
//     console.log("Test des méthodes dans contribox.js");
//     _init();
// });

// Module['onRuntimeInitialized'] = onRuntimeInitialized;

// function onRuntimeInitialized() {
//     console.log("hereeee init");
//     console.log(_init());
// }

// Module.onRuntimeInitialized = _ => {
//     const initialiser = Module.cwrap('_init', null, null );
//     console.log(initialiser());
//   };
