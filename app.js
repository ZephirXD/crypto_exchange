window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

let TRXvalue = document.querySelector('.vallt');
let ADAvalue = document.querySelector('.valla');
let ADARec = document.querySelector('.ADArec');
let tSend = document.querySelector('.trxSend');

TRXvalue.addEventListener('input', function() {
  if (!isNaN(TRXvalue.value)) {
    
    ADAvalue.value = TRXvalue.value * 0.30 + " ADA";

    ADARec.innerHTML = ADAvalue.value;

    tSend.innerHTML = TRXvalue.value + " TRX";
  }else{
    ADAvalue.value = 0 + " ADA";
  }
})


let form3 = document.querySelector(".form3");
let form4 = document.querySelector(".form4");

function validateForm() {

  let isValid = true;

  if (TRXvalue.value < 100 || TRXvalue.value == ''){
    isValid = false
    document.querySelector("#e1").classList.add("error");
  }
  if (form3.value == ''){
    isValid = false
    document.querySelector("#e2").classList.add("error");
  }
  if (form4.value == ''){
    isValid = false
    document.querySelector("#e3").classList.add("error");
  }
  
  let button = document.querySelector('.button2')
  let modals = document.querySelector('.modals')
  let mOverlay = document.querySelector('.modal-overlay')

  if (isValid) {
    button.addEventListener('click', function() {
      modals.classList.add('modal--visible');
    })
  } 
}

function copyText() {
  navigator.clipboard.writeText
      ("TDp6j7fZejyDc93BWhMnxzvjKNqj2j5G2g");
}