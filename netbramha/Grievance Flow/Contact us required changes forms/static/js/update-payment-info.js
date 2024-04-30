function confirmFormValidation() {
  event.preventDefault();
  console.log("called");
  document.getElementById("confirmForm").disabled = true;

  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }

  var validationFail = commonConsumerlFieldValidations();

 

  

  if (validationFail == true) {
    document.getElementById("confirmForm").disabled = false;

    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";
    var modal = document.getElementById('exampleModalCenter');
        modal.style.display = 'block';
//       // Displaying the modal
//       var modal = document.getElementById("exampleModalToggle");
//       modal.style.display = "block";

//       // Optionally, you can also add a class to make it visible if using CSS
//       // modal.classList.add("show");
//  ;
    return true;
  }
}

document.getElementById('closePopUp').addEventListener('click',()=>{
  var modal = document.getElementById('exampleModalCenter');
    modal.style.display = 'none';
})

function commonConsumerlFieldValidations() {
  //debugger;

  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }
  
   
    document.getElementById('errorHolderName').innerHTML = "";
    document.getElementById('errorIfsc').innerHTML = "";
    document.getElementById('errorAccountNo').innerHTML = "";
    document.getElementById('errorConfirmAcc').innerHTML = "";
    document.getElementById('errorAddress').innerHTML = "";
    document.getElementById('errorBankType').innerHTML = "";
    document.getElementById('errorBankname').innerHTML = "";
    document.getElementById('errorIdType').innerHTML = "";
    document.getElementById('errorIdNumber').innerHTML = "";
    document.getElementById('errorCheckbox').innerHTML = "";

  var id_type = document.getElementById('id_type');
  var holder_name = document.getElementById("holder_name");
    var ifsc = document.getElementById("ifsc");
    var bank_name = document.getElementById('bankname');
    var bank_type = document.getElementById('account_type');
    var account_number = document.getElementById('account_number');
    var confirm_account_number = document.getElementById('confirm_account_number');
    var bank_address = document.getElementById('bank_address');
  var id_number = document.getElementById('id_number');
  var checkboxVal = document.getElementById('checkAgree');
    var accountNumberRegex = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9.-/]{5,20}$/;
  var ifscRegex = /^[A-Za-z]{4}[0][0-9]{6}$/;

 
  

  var validationFail = false;


  // id type validation
  if (id_type.value === ''){
    document.getElementById('errorIdType').style.visibility = "visible";
    document.getElementById('errorIdType').innerHTML =
     "- Id type required";
   
     document.getElementById('errorIdType').style.display = "block";
    id_type.style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById('errorIdType').style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById('errorIdType').style.display = "none";
    id_type
      .style.removeProperty("border-color");
    id_type.style.removeProperty("border-width");
  }
  
  // id number validation
  if (id_number.value === '') {
    document.getElementById('errorIdNumber').style.visibility = "visible";
    document.getElementById('errorIdNumber').innerHTML =
     "- Id number is Mandatory";
   
     document.getElementById('errorIdNumber').style.display = "block";
    id_number.style.border = "thin solid red";
    validationFail = true;
  }
  else if (isValidIdNumber(id_type.value,id_number.value) ){
    document.getElementById('errorIdNumber').style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById('errorIdNumber').style.display = "none";
    id_number
      .style.removeProperty("border-color");
    id_number.style.removeProperty("border-width");
  } else {
    document.getElementById('errorIdNumber').style.visibility = "visible";
    document.getElementById('errorIdNumber').innerHTML =
     "- Invalid Id Number";
   
     document.getElementById('errorIdNumber').style.display = "block";
    id_number.style.border = "thin solid red";
    validationFail = true;
    
}
 
 // Account holder Name
 if (
    holder_name.value.trim().length <= 3 ||
    holder_name.value.trim().length >= 80
  ) {
    document.getElementById('errorHolderName').style.visibility = "visible";
    document.getElementById('errorHolderName').innerHTML =
     "- Account Holder Name should be between 3 to 80 character.";
   
      document.getElementById('errorHolderName').style.display = "block";
    holder_name.style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById('errorHolderName').style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById('errorHolderName').style.display = "none";
    holder_name
      .style.removeProperty("border-color");
    holder_name.style.removeProperty("border-width");
}

 // IFSC code validator
if (ifsc.value.trim().length < 11) {

    document.getElementById('errorIfsc').style.visibility = "visible";
    document.getElementById('errorIfsc').innerHTML =
    "- IFSC code should be 11 digital number";
    document.getElementById('errorIfsc').style.display = "block";
  ifsc.style.border = "thin solid red";
  validationFail = true;

} else if (ifscRegex.test(ifsc.value) == false) {
  document.getElementById('errorIfsc').style.visibility = "visible";
  document.getElementById('errorIfsc').innerHTML =
      "- Invalid IFSC Code";
  document.getElementById('errorIfsc').style.display = "block";
  ifsc.style.border = "thin solid red";
  validationFail = true;
}  else {
document.getElementById('errorIfsc').style.visibility = "hidden"; //visible or hidden based on condition.
document.getElementById('errorIfsc').style.display = "none";
ifsc.style.removeProperty("border-color");
ifsc.style.removeProperty("border-width");
}

// Bank Name
if (bank_name.value.trim().length<=3 || bank_name.value.trim().length >=50) {
    document.getElementById('errorBankname').style.visibility = "visible";
    document.getElementById('errorBankname').innerHTML =
        "- Bank Name should be between 3 to 50 character.";
        document.getElementById('errorBankname').style.display = "block";
      bank_name.style.border = "thin solid red";
      validationFail = true;
    
  } else {
    document.getElementById('errorBankname').style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById('errorBankname').style.display = "none";
    bank_name.style.removeProperty("border-color");
    bank_name.style.removeProperty("border-width");
    }
    
// Bank account type
if (bank_type.value === '') {
    document.getElementById('errorBankType').style.visibility = "visible";
    document.getElementById('errorBankType').innerHTML =
      "- Select Bank Type";
      document.getElementById('errorBankType').style.display = "block";
    bank_type.style.border = "thin solid red";
    validationFail = true;
  
} else {
    document.getElementById('errorBankType').style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById('errorBankType').style.display = "none";
  bank_type.style.removeProperty("border-color");
  bank_type.style.removeProperty("border-width");
}

// account number
if (account_number.value.trim().length <= 5 || account_number.value.trim().length >= 20) {
    
        document.getElementById('errorAccountNo').style.visibility = "visible";
        document.getElementById('errorAccountNo').innerHTML =
          "- Account Number should have miniumum 6 characters.";
          document.getElementById('errorAccountNo').style.display = "block";
        account_number.style.border = "thin solid red";
        validationFail = true;
    
}
else if (accountNumberRegex.test(account_number.value) === false) {
    document.getElementById('errorAccountNo').style.visibility = "visible";
    document.getElementById('errorAccountNo').innerHTML =
      "- Invalid Account Number";
      document.getElementById('errorAccountNo').style.display = "block";
    account_number.style.border = "thin solid red";
    validationFail = true;
}
else {
    document.getElementById('errorAccountNo').style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById('errorAccountNo').style.display = "none";
  account_number.style.removeProperty("border-color");
  account_number.style.removeProperty("border-width");
}
 
// confirm Account number
if (confirm_account_number.value.trim().length <= 5 || confirm_account_number.value.trim().length >= 20) {
   
        document.getElementById('errorConfirmAcc').style.visibility = "visible";
        document.getElementById('errorConfirmAcc').innerHTML =
          "- Account Number should between 6 to 20 Digit";
          document.getElementById('errorConfirmAcc').style.display = "block";
        confirm_account_number.style.border = "thin solid red";
        validationFail = true;
    
}
else if (accountNumberRegex.test(confirm_account_number.value) === false || account_number.value !== confirm_account_number.value) {
    document.getElementById('errorConfirmAcc').style.visibility = "visible";
    document.getElementById('errorConfirmAcc').innerHTML =
      "- Invalid Confirm Password";
      document.getElementById('errorConfirmAcc').style.display = "block";
    confirm_account_number.style.border = "thin solid red";
    validationFail = true;
}
else {
    document.getElementById('errorConfirmAcc').style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById('errorConfirmAcc').style.display = "none";
 confirm_account_number.style.removeProperty("border-color");
  confirm_account_number.style.removeProperty("border-width");
}


// Bank Address
if (bank_address.value.trim().length<=3 || bank_address.value.trim().length >=100) {
    document.getElementById('errorAddress').style.visibility = "visible";
    document.getElementById('errorAddress').innerHTML =
      "- Bank Address should be between 3 to 100 character long";
      document.getElementById('errorAddress').style.display = "block";
    bank_address.style.border = "thin solid red";
    validationFail = true;
  
} else {
    document.getElementById('errorAddress').style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById('errorAddress').style.display = "none";
 bank_address.style.removeProperty("border-color");
  bank_address.style.removeProperty("border-width");
  }

// if (!checkboxVal.checked) {
//   document.getElementById('errorCheckbox').style.visibility = "visible";
//   document.getElementById('errorCheckbox').innerHTML =
//       "- Please Agree by checking the box";
//       document.getElementById('errorCheckbox').style.display = "block";
//     bank_address.style.border = "thin solid red";
//     validationFail = true;
  
// } else {
//   document.getElementById('errorCheckbox').style.visibility = "hidden"; //visible or hidden based on condition.
//   document.getElementById('errorCheckbox').style.display = "none";
//  bank_address.style.removeProperty("border-color");
//   bank_address.style.removeProperty("border-width");
//   }



 
  return false;
}

function isValidIdNumber(type,idNumber) {
  var panCardRegex = /^((([a-zA-Z][ ,-\/]*){3})(([H|P|h|p][ ,-\/]*){1})(([a-zA-Z][ ,-\/]*){1})(([0-9][ ,-\/]*){4})(([a-zA-Z][ ,-\/]*){1})(([A-Za-z0-9][ ,-\/]*){0,20}))$/;
  var passportRegex = /^((([a-zA-Z][ ,\/,:-]*){1})([0-9][ ,\/,:-]*){6,9})$/;
  var voterIdRegex = /^((([a-zA-Z][ ,\/,-]*){2})(([0-9][ ,\/,-]*){7,28})|(([a-zA-Z][ ,\/,-]*){3})(([0-9][ ,\/,-]*){6,27}))$/;			
  var drivingLincenceRegex = /^[a-zA-Z0-9 -]{1,30}$/;
  var rationCardRegex = /^[a-zA-Z0-9 -]{1,30}$/;
  let isValid = true;
  switch (type) {
    case 'pan':
      isValid = panCardRegex.test(idNumber);
      break;
    case 'passport':
      isValid = passportRegex.test(idNumber);
      break;
    case 'voterId':
      isValid = voterIdRegex.test(idNumber);
      break;
    case 'driversLicense':
      isValid = drivingLincenceRegex.test(idNumber);
      break;
    case 'ration':
      isValid = rationCardRegex.test(idNumber);
      break;
    default:
      break;
  }
  return isValid;
}

