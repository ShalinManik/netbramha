
var isAccInfoRequired= true;
// document.getElementById('accountInfoRadio').checked = true;
// document.getElementById('accountInfoRadio').setAttribute('checked', 'checked');
document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  document.getElementById('accountInfoRadio').checked = true;
  console.log("get called");
  console.log(document.getElementById('accountInfoRadio').value);
});

console.log("called");
function getAge(DOB) {
  var today = new Date();
  var age = today.getFullYear() - DOB.substring(6, 10);
  return age;
}


function toggleAccInfo(from,value) {
  console.log(typeof true, value);
 
  const accInfoField = document.getElementById("showAccInfo");
  const noteInfoField = document.getElementById("noteInfo");
  console.log(accInfoField);
  console.log(noteInfoField);
   
  if (from === 'acc') {
    accInfoField.style.display = 'block';
    noteInfoField.style.display = 'none';
    isAccInfoRequired = true;
  } else {
    noteInfoField.style.display = 'block'
    accInfoField.style.display = 'none';
    isAccInfoRequired = false;
  }
}


//common method for form 3 , form 5 and form6
function commonConsumerlFieldValidations() {
  //debugger;

  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }
  document.getElementById("errorname").innerHTML = "";
  document.getElementById("errorSR").innerHTML = "";
  document.getElementById("errordesc").innerHTML = "";
  document.getElementById("errorEmail").innerHTML = "";
  document.getElementById("errorBirthday").innerHTML = "";
  document.getElementById("errorHolderName").innerHTML = "";
  document.getElementById("errorIfsc").innerHTML = "";
  document.getElementById("errorAccountNo").innerHTML = "";
  document.getElementById("errorConfirmAcc").innerHTML = "";
  document.getElementById("errorAddress").innerHTML = "";
  document.getElementById("errorBankType").innerHTML = "";
  document.getElementById("errorBankname").innerHTML = "";
  document.getElementById("errorgender").innerHTML = "";
  document.getElementById("errorIdNumber").innerHTML = "";
  document.getElementById("errorIdType").innerHTML = "";
  // document.getElementById('errorIdProofType').innerHTML = "";
  // document.getElementById('errorIdProofNumber').innerHTML = "";

  var nameRegex = /^[A-Za-z\s]+$/;
  var customerName = document.getElementById("customername");
  var gender = document.getElementById("gender");
  var mobile = document.getElementById("mobile");
  var email = document.getElementById("email");
  var idProof = document.getElementById("proofSelect");
  // var idProofNumber = document.getElementById("idProofNumber");
  var Acc_id_type = document.getElementById("id_type");
  var Acc_id_number = document.getElementById("id_number");

  var holder_name = document.getElementById("holder_name");
  var ifsc = document.getElementById("ifsc");
  var bank_name = document.getElementById("bankname");
  var bank_type = document.getElementById("account_type");
  var account_number = document.getElementById("account_number");
  var confirm_account_number = document.getElementById(
    "confirm_account_number"
  );
  var bank_address = document.getElementById("bank_address");
  var toggleBtn = document.getElementById("toggleBtn");
  var accountNumberRegex = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9.-/]{5,20}$/;
  var ifscRegex = /^[A-Za-z]{4}[0][0-9]{6}$/;
  var emailRegex = /^\w+([\+.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var dateRegex =
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  var mobileRegex = /^((\+91)?|91)?[5,6,7,8,9][0-9]{9}$/;
  var alphaNumericSpecialRegex =
    /^[A-Za-z0-9@~}{\t \n`!@#$%\[^&\]*()_=+\\\\';:\"\\\/?|>.–<,-\\]*$/;

  var srNo = document.getElementById("servicerequest");
  var describeQuery = document.getElementById("textareadesc");
  var birthday = document.getElementById("birthday");

  var validationFail = false;

  if (document.getElementById("proofNumber").disabled == true) {
    document.getElementById("settimeout").style.display = "none";
    validationFail = true;
    document.getElementById("proofNumber").disabled = false;
    document.getElementById("proofNumber").focus();
    return false;
  }

  if (gender.value === "") {
    document.getElementById("errorgender").style.visibility = "visible";
    document.getElementById("errorgender").innerHTML = "- Select Gender Type";
    document.getElementById("errorgender").style.display = "block";
    gender.style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorgender").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorgender").style.display = "none";
    gender.style.removeProperty("border-color");
    gender.style.removeProperty("border-width");
  }

  if (mobile.value.length != 10) {
    validationFail = true;
    document.getElementById("errormobile").style.visibility = "visible";
    document.getElementById("errormobile").innerHTML =
      "- Please mention valid Mobile number.";
    document.getElementById("errormobile").style.display = "block";
    document.getElementById("mobile").style.border = "thin solid red";
  } else {
    document.getElementById("errormobile").style.visibility = "hidden";
    document.getElementById("errormobile").style.display = "none";
    document.getElementById("mobile").style.removeProperty("border-color");
    document.getElementById("mobile").style.removeProperty("border-width");
  }

  // id type validation
  if (idProof.value === "") {
    document.getElementById("errorIdProofType").style.visibility = "visible";
    document.getElementById("errorIdProofType").innerHTML =
      "- Id Proof type required";

    document.getElementById("errorIdProofType").style.display = "block";
    idProof.style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorIdProofType").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorIdProofType").style.display = "none";
    idProof.style.removeProperty("border-color");
    idProof.style.removeProperty("border-width");
  }

  // // id type validation
  // if (idProofNumber.value === ''){
  //   document.getElementById('errorIdProofNumber').style.visibility = "visible";
  //   document.getElementById('errorIdProofNumber').innerHTML =
  //    "- Id Number required";

  //    document.getElementById('errorIdProofNumber').style.display = "block";
  //    idProofNumber.style.border = "thin solid red";
  //   validationFail = true;
  // } else {
  //   document.getElementById('errorIdProofNumber').style.visibility = "hidden"; //visible or hidden based on condition.
  //   document.getElementById('errorIdProofNumber').style.display = "none";
  //   idProofNumber
  //     .style.removeProperty("border-color");
  //     idProofNumber.style.removeProperty("border-width");
  // }

  //Consumer ID proof number pattern validation
  document.getElementById("errorIdProofNumber").innerHTML = "";
  var idType = document.getElementById("proofSelect");
  var idNumber = document.getElementById("proofNumber");

  if (validateIdNumberPattern(idNumber.value, idType.value) == true) {
    document.getElementById("errorIdProofNumber").style.visibility = "visible";
    document.getElementById("errorIdProofNumber").innerHTML =
      "- Please mention valid Identity Proof No.";
    document.getElementById("errorIdProofNumber").style.display = "block";
    document.getElementById("proofNumber").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorIdProofNumber").style.visibility = "hidden";
    document.getElementById("errorIdProofNumber").style.display = "none";
    document.getElementById("proofNumber").style.removeProperty("border-color");
    document.getElementById("proofNumber").style.removeProperty("border-width");
  }

  //Consumer Mobile pattern validation
  document.getElementById("errormobile").innerHTML = "";
  if (mobileRegex.test(mobile.value) == false) {
    document.getElementById("errormobile").style.visibility = "visible";
    document.getElementById("errormobile").innerHTML =
      "- Please mention valid Mobile number.";
    document.getElementById("errormobile").style.display = "block";
    document.getElementById("mobile").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errormobile").style.visibility = "hidden";
    document.getElementById("errormobile").style.display = "none";
    document.getElementById("mobile").style.removeProperty("border-color");
    document.getElementById("mobile").style.removeProperty("border-width");
  }

  if (birthday.value.length < 1) {
    validationFail = true;
    document.getElementById("errorBirthday").style.visibility = "visible";
    document.getElementById("errorBirthday").innerHTML =
      "- Please mention Date of Birth.";

    document.getElementById("errorBirthday").style.display = "block";
    document.getElementById("birthday").style.border = "thin solid red";
  } else {
    document.getElementById("errorBirthday").style.visibility = "hidden";
    document.getElementById("errorBirthday").style.display = "none";
    document.getElementById("birthday").style.removeProperty("border-color");
    document.getElementById("birthday").style.removeProperty("border-width");
  }
  if (dateRegex.test(birthday.value) == false) {
    validationFail = true;
    document.getElementById("errorBirthday").style.visibility = "visible";
    document.getElementById("errorBirthday").innerHTML =
      "- Please mention valid Date of Birth in DD/MM/YYYY format .";

    document.getElementById("errorBirthday").style.display = "block";
    document.getElementById("birthday").style.border = "thin solid red";
  } else {
    document.getElementById("errorBirthday").style.visibility = "hidden";
    document.getElementById("errorBirthday").style.display = "none";
    document.getElementById("birthday").style.removeProperty("border-color");
    document.getElementById("birthday").style.removeProperty("border-width");
  }

  var enteredAge = getAge(birthday.value);

  if (isNaN(enteredAge) || enteredAge > 100) {
    validationFail = true;
    document.getElementById("errorBirthday").style.visibility = "visible";
    document.getElementById("errorBirthday").innerHTML =
      "- Please mention valid Date of Birth";
    document.getElementById("errorBirthday").style.display = "block";
    document.getElementById("birthday").style.border = "thin solid red";
  } else {
    document.getElementById("errorBirthday").style.visibility = "hidden";
    document.getElementById("errorBirthday").style.display = "none";
    document.getElementById("birthday").style.removeProperty("border-color");
    document.getElementById("birthday").style.removeProperty("border-width");
  }

  if (customerName.value.trim().length <= 5) {
    document.getElementById("errorname").style.visibility = "visible";
    document.getElementById("errorname").innerHTML =
      "- Customer Name should have miniumum 6 characters.";
    document.getElementById("errorname").style.display = "block";
    document.getElementById("customername").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorname").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorname").style.display = "none";
    document
      .getElementById("customername")
      .style.removeProperty("border-color");
    document
      .getElementById("customername")
      .style.removeProperty("border-width");
  }

  if (validationFail == false) {
    if (nameRegex.test(customerName.value) == false) {
      document.getElementById("errorname").style.visibility = "visible";
      document.getElementById("errorname").innerHTML =
        "- Please mention valid Customer Name.";
      document.getElementById("errorname").style.display = "block";
      document.getElementById("customername").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorname").style.visibility = "hidden"; //visible or hidden based on condition.
      document.getElementById("errorname").style.display = "none";
      document
        .getElementById("customername")
        .style.removeProperty("border-color");
      document
        .getElementById("customername")
        .style.removeProperty("border-width");
    }
  }
  if (isAccInfoRequired) {
    
    // // id type validation
    // if (Acc_id_type.value === "") {
    //   document.getElementById("errorIdType").style.visibility = "visible";
    //   document.getElementById("errorIdType").innerHTML = "- Id type required";

    //   document.getElementById("errorIdType").style.display = "block";
    //   Acc_id_type.style.border = "thin solid red";
    //   validationFail = true;
    // } else {
    //   document.getElementById("errorIdType").style.visibility = "hidden"; //visible or hidden based on condition.
    //   document.getElementById("errorIdType").style.display = "none";
    //   Acc_id_type.style.removeProperty("border-color");
    //   Acc_id_type.style.removeProperty("border-width");
    // }

    // // id number validation
    // if (Acc_id_number.value === "") {
    //   document.getElementById("errorIdNumber").style.visibility = "visible";
    //   document.getElementById("errorIdNumber").innerHTML =
    //     "- Id number is Mandatory";

    //   document.getElementById("errorIdNumber").style.display = "block";
    //   Acc_id_number.style.border = "thin solid red";
    //   validationFail = true;
    // } else if (isValidIdNumber(Acc_id_type.value, Acc_id_number.value)) {
    //   document.getElementById("errorIdNumber").style.visibility = "hidden"; //visible or hidden based on condition.
    //   document.getElementById("errorIdNumber").style.display = "none";
    //   Acc_id_number.style.removeProperty("border-color");
    //   Acc_id_number.style.removeProperty("border-width");
    // } else {
    //   document.getElementById("errorIdNumber").style.visibility = "visible";
    //   document.getElementById("errorIdNumber").innerHTML =
    //     "- Invalid Id Number";

    //   document.getElementById("errorIdNumber").style.display = "block";
    //   Acc_id_number.style.border = "thin solid red";
    //   validationFail = true;
    // }

    // Account holder Name
    if (
      holder_name.value.trim().length <= 3 ||
      holder_name.value.trim().length >= 80
    ) {
      document.getElementById("errorHolderName").style.visibility = "visible";
      document.getElementById("errorHolderName").innerHTML =
        "- Account Holder Name should be between 3 to 80 character.";

      document.getElementById("errorHolderName").style.display = "block";
      holder_name.style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorHolderName").style.visibility = "hidden"; //visible or hidden based on condition.
      document.getElementById("errorHolderName").style.display = "none";
      holder_name.style.removeProperty("border-color");
      holder_name.style.removeProperty("border-width");
    }

    // IFSC code validator
    if (ifsc.value.trim().length !== 11) {
      document.getElementById("errorIfsc").style.visibility = "visible";
      document.getElementById("errorIfsc").innerHTML =
        "- IFSC code should be 11 digital number";
      document.getElementById("errorIfsc").style.display = "block";
      ifsc.style.border = "thin solid red";
      validationFail = true;
    } else if (ifscRegex.test(ifsc.value) == false) {
      document.getElementById("errorIfsc").style.visibility = "visible";
      document.getElementById("errorIfsc").innerHTML = "- Invalid IFSC Code";
      document.getElementById("errorIfsc").style.display = "block";
      ifsc.style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorIfsc").style.visibility = "hidden"; //visible or hidden based on condition.
      document.getElementById("errorIfsc").style.display = "none";
      ifsc.style.removeProperty("border-color");
      ifsc.style.removeProperty("border-width");
    }

    // Bank Name
    if (
      bank_name.value.trim().length <= 3 ||
      bank_name.value.trim().length >= 50
    ) {
      document.getElementById("errorBankname").style.visibility = "visible";
      document.getElementById("errorBankname").innerHTML =
        "- Bank Name should be between 3 to 50 character.";
      document.getElementById("errorBankname").style.display = "block";
      bank_name.style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorBankname").style.visibility = "hidden"; //visible or hidden based on condition.
      document.getElementById("errorBankname").style.display = "none";
      bank_name.style.removeProperty("border-color");
      bank_name.style.removeProperty("border-width");
    }

    // Bank account type
    if (bank_type.value === "") {
      document.getElementById("errorBankType").style.visibility = "visible";
      document.getElementById("errorBankType").innerHTML = "- Select Bank Type";
      document.getElementById("errorBankType").style.display = "block";
      bank_type.style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorBankType").style.visibility = "hidden"; //visible or hidden based on condition.
      document.getElementById("errorBankType").style.display = "none";
      bank_type.style.removeProperty("border-color");
      bank_type.style.removeProperty("border-width");
    }

    // account number
    if (
      account_number.value.trim().length <= 5 ||
      account_number.value.trim().length >= 20
    ) {
      document.getElementById("errorAccountNo").style.visibility = "visible";
      document.getElementById("errorAccountNo").innerHTML =
        "- Account Number should have miniumum 6 characters.";
      document.getElementById("errorAccountNo").style.display = "block";
      account_number.style.border = "thin solid red";
      validationFail = true;
    } else if (accountNumberRegex.test(account_number.value) === false) {
      document.getElementById("errorAccountNo").style.visibility = "visible";
      document.getElementById("errorAccountNo").innerHTML =
        "- Invalid Account Number";
      document.getElementById("errorAccountNo").style.display = "block";
      account_number.style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorAccountNo").style.visibility = "hidden"; //visible or hidden based on condition.
      document.getElementById("errorAccountNo").style.display = "none";
      account_number.style.removeProperty("border-color");
      account_number.style.removeProperty("border-width");
    }

    // confirm Account number
    if (
      confirm_account_number.value.trim().length <= 5 ||
      confirm_account_number.value.trim().length >= 20
    ) {
      document.getElementById("errorConfirmAcc").style.visibility = "visible";
      document.getElementById("errorConfirmAcc").innerHTML =
        "- Account Number should between 6 to 20 Digit";
      document.getElementById("errorConfirmAcc").style.display = "block";
      confirm_account_number.style.border = "thin solid red";
      validationFail = true;
    } else if (
      accountNumberRegex.test(confirm_account_number.value) === false ||
      account_number.value !== confirm_account_number.value
    ) {
      document.getElementById("errorConfirmAcc").style.visibility = "visible";
      document.getElementById("errorConfirmAcc").innerHTML =
        "- Invalid Confirm Password";
      document.getElementById("errorConfirmAcc").style.display = "block";
      confirm_account_number.style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorConfirmAcc").style.visibility = "hidden"; //visible or hidden based on condition.
      document.getElementById("errorConfirmAcc").style.display = "none";
      confirm_account_number.style.removeProperty("border-color");
      confirm_account_number.style.removeProperty("border-width");
    }

    // Bank Address
    if (
      bank_address.value.trim().length <= 3 ||
      bank_address.value.trim().length >= 100
    ) {
      document.getElementById("errorAddress").style.visibility = "visible";
      document.getElementById("errorAddress").innerHTML =
        "- Bank Address should be between 3 to 100 character long";
      document.getElementById("errorAddress").style.display = "block";
      bank_address.style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorAddress").style.visibility = "hidden"; //visible or hidden based on condition.
      document.getElementById("errorAddress").style.display = "none";
      bank_address.style.removeProperty("border-color");
      bank_address.style.removeProperty("border-width");
    }
  }

  if (srNo.value.length > 0) {
    if (srNo.value.length > 8 || srNo.value.length < 4) {
      validationFail = true;
      document.getElementById("errorSR").style.visibility = "visible";
      document.getElementById("errorSR").innerHTML =
        "-  Please enter valid SR number";
      document.getElementById("errorSR").style.display = "block";
      document.getElementById("servicerequest").style.border = "thin solid red";
    } else {
      document.getElementById("errorSR").style.visibility = "hidden";
      document.getElementById("errorSR").style.display = "none";
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-color");
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-width");
    }
  }
  if (emailRegex.test(email.value) == false) {
    document.getElementById("errorEmail").style.visibility = "visible";
    document.getElementById("errorEmail").innerHTML =
      "- Please mention valid Email ID.";
    document.getElementById("errorEmail").style.display = "block";
    document.getElementById("email").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorEmail").style.visibility = "hidden";
    document.getElementById("errorEmail").style.display = "none";
    document.getElementById("email").style.removeProperty("border-color");
    document.getElementById("email").style.removeProperty("border-width");
  }

  if (describeQuery.value.length > 3000 || describeQuery.value.length <= 0) {
    validationFail = true;
    document.getElementById("errordesc").style.visibility = "visible";
    document.getElementById("errordesc").innerHTML =
      "- Please describe your query within 3000 characters only.";
    document.getElementById("errordesc").style.display = "block";
    document.getElementById("textareadesc").style.border = "thin solid red";
  } else {
    if (alphaNumericSpecialRegex.test(describeQuery.value) == false) {
      validationFail = true;
      document.getElementById("errordesc").style.visibility = "visible";
      document.getElementById("errordesc").innerHTML =
        "- Describe your query should have Alpha Numeric special characters.";
      document.getElementById("errordesc").style.display = "block";
      document.getElementById("textareadesc").style.border = "thin solid red";
    } else {
      document.getElementById("errordesc").style.visibility = "hidden";
      document.getElementById("errordesc").style.display = "none";
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-color");
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-width");
    }
  }
  return validationFail;
}
function isValidIdNumber(type, idNumber) {
  var panCardRegex =
    /^((([a-zA-Z][ ,-\/]*){3})(([H|P|h|p][ ,-\/]*){1})(([a-zA-Z][ ,-\/]*){1})(([0-9][ ,-\/]*){4})(([a-zA-Z][ ,-\/]*){1})(([A-Za-z0-9][ ,-\/]*){0,20}))$/;
  var passportRegex = /^((([a-zA-Z][ ,\/,:-]*){1})([0-9][ ,\/,:-]*){6,9})$/;
  var voterIdRegex =
    /^((([a-zA-Z][ ,\/,-]*){2})(([0-9][ ,\/,-]*){7,28})|(([a-zA-Z][ ,\/,-]*){3})(([0-9][ ,\/,-]*){6,27}))$/;
  var drivingLincenceRegex = /^[a-zA-Z0-9 -]{1,30}$/;
  var rationCardRegex = /^[a-zA-Z0-9 -]{1,30}$/;
  let isValid = true;
  switch (type) {
    case "pan":
      isValid = panCardRegex.test(idNumber);
      break;
    case "passport":
      isValid = passportRegex.test(idNumber);
      break;
    case "voterId":
      isValid = voterIdRegex.test(idNumber);
      break;
    case "driversLicense":
      isValid = drivingLincenceRegex.test(idNumber);
      break;
    case "ration":
      isValid = rationCardRegex.test(idNumber);
      break;
    default:
      break;
  }
  return isValid;
}

function validateIdNumberPattern(idNumber, idType) {
  if (idNumber === "") {
    return true;
  }
  var patternMatched = false;
  var regexPanCard =
    /^((([a-zA-Z][ ,-\/]*){3})(([H|P|h|p][ ,-\/]*){1})(([a-zA-Z][ ,-\/]*){1})(([0-9][ ,-\/]*){4})(([a-zA-Z][ ,-\/]*){1})(([A-Za-z0-9][ ,-\/]*){0,20}))$/;
  var regexPassport = /^((([a-zA-Z][ ,\/,:-]*){1})([0-9][ ,\/,:-]*){6,9})$/;
  var regexVoterId =
    /^((([a-zA-Z][ ,\/,-]*){2})(([0-9][ ,\/,-]*){7,28})|(([a-zA-Z][ ,\/,-]*){3})(([0-9][ ,\/,-]*){6,27}))$/;
  var regexDriverLicence = /^[a-zA-Z0-9 -]{1,30}$/;
  var regexRationCard = /^[a-zA-Z0-9 -]{1,30}$/;

  if (idType == 1 && !regexPanCard.test(idNumber)) {
    patternMatched = true;
  }
  if (idType == 2 && !regexPassport.test(idNumber)) {
    patternMatched = true;
  }
  if (idType == 3 && !regexVoterId.test(idNumber)) {
    patternMatched = true;
  }
  if (idType == 4 && !regexDriverLicence.test(idNumber)) {
    patternMatched = true;
  }
  if (idType == 5 && !regexRationCard.test(idNumber)) {
    patternMatched = true;
  }
  return patternMatched;
}

function validatePincode(stateId, pincode) {
  var isInvalidPincode = false;
  if (stateId == 1 && (180000 > pincode || 199999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 2 && (170000 > pincode || 179999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 3 && (140000 > pincode || 169999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 4 && (140000 > pincode || 169999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 5 && (240000 > pincode || 269999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 6 && (120000 > pincode || 139999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 7 && (110000 > pincode || 119999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 8 && (300000 > pincode || 349999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 9 && (200000 > pincode || 289999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 10 && (800000 > pincode || 859999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 11 && (730000 > pincode || 739999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 12 && (780000 > pincode || 799999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 13 && (790000 > pincode || 799999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 14 && (790000 > pincode || 799999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 15 && (790000 > pincode || 799999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 16 && (720000 > pincode || 729999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 17 && (790000 > pincode || 799999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 18 && (780000 > pincode || 799999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 19 && (700000 > pincode || 749999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 20 && (810000 > pincode || 839999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 21 && (750000 > pincode || 779999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 22 && (460000 > pincode || 499999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 23 && (450000 > pincode || 489999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 24 && (360000 > pincode || 399999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 25 && (360000 > pincode || 399999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 26 && (390000 > pincode || 399999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 27 && (400000 > pincode || 449999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 28 && (500000 > pincode || 569999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 29 && (530000 > pincode || 599999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 30 && (400000 > pincode || 409999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 31 && (670000 > pincode || 689999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 32 && (670000 > pincode || 699999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 33 && (530000 > pincode || 669999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 34 && (600000 > pincode || 609999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 35 && (740000 > pincode || 749999 < pincode)) {
    isInvalidPincode = true;
  }
  if (stateId == 36 && (500000 > pincode || 569999 < pincode)) {
    isInvalidPincode = true;
  }
  return isInvalidPincode;
}

function validateForm1() {
  event.preventDefault();
  debugger;
  document.getElementById("spinner").style.display = "block";

  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }

  var validationFail = false;
  document.getElementById("errorSR").innerHTML = "";
  document.getElementById("errorEmail").innerHTML = "";

  var srNo = document.getElementById("servicerequest");
  var email = document.getElementById("email");
  var emailRegex = /^\w+([\+.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (srNo.value.length > 8 || srNo.value.length < 4) {
    validationFail = true;
    document.getElementById("errorSR").style.visibility = "visible";
    document.getElementById("errorSR").innerHTML =
      "  Please enter valid SR number.SR Number can be between 4 to 8 digits";
    document.getElementById("errorSR").style.display = "block";
    document.getElementById("servicerequest").style.border = "thin solid red";
  } else {
    document.getElementById("errorSR").style.visibility = "hidden";
    document.getElementById("errorSR").style.display = "none";

    document
      .getElementById("servicerequest")
      .style.removeProperty("border-color");
    document
      .getElementById("servicerequest")
      .style.removeProperty("border-width");
  }

  if (emailRegex.test(email.value) == false) {
    document.getElementById("errorEmail").style.visibility = "visible";
    document.getElementById("errorEmail").innerHTML =
      "- Please mention valid Email ID.";
    document.getElementById("errorEmail").style.display = "block";
    document.getElementById("email").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorEmail").style.visibility = "hidden";
    document.getElementById("errorEmail").style.display = "none";

    document.getElementById("email").style.removeProperty("border-color");
    document.getElementById("email").style.removeProperty("border-width");
  }

  if (validationFail == true) {
    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    document.getElementById("spinner").style.display = "none";

    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";
    var formData = $("#form1").serialize();

    var details = {
      emailId: email.value,
      srNo: srNo.value,
    };

    $.ajax({
      type: "post",
      url: "/contact-us/cp/srSearch",
      data: JSON.stringify(details),
      contentType: "application/json; charset=utf-8",

      success: function (d) {
        document.getElementById("spinner").style.display = "none";

        if (d.srMatched == true) {
          $("#form1").submit();
        } else {
          $("#myModal").find(".modal-body p").text(d.message);
          $("#myModal").modal("toggle");
        }
      },
    });

    return false;
  }
}

function validateForm3() {
  event.preventDefault();
  document.getElementById("errordispute").innerHTML = "";
  document.getElementById("form3Submit").disabled = false;

  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }

  var validationFail = commonConsumerlFieldValidations();

  var disputeId = document.getElementById("dispute_id");
  document.getElementById("errordispute").innerHTML = "";
  var disputeIdRegex =
    /^([cds,CDS]{3})(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])(([1-9][0-9])[0-9]{2})[0-9]{6}$/;

  if (disputeId.value.length > 0) {
    if (disputeId.value.length < 14 || disputeId.value.length > 17) {
      validationFail = true;
      document.getElementById("errordispute").style.visibility = "visible";
      document.getElementById("errordispute").innerHTML =
        "- Dispute ID starts with CDS followed by 14 numeric digit e.g. CDS00000000000000.";
      document.getElementById("errordispute").style.display = "block";
      document.getElementById("dispute_id").style.border = "thin solid red";
    } else {
      document.getElementById("errordispute").style.visibility = "hidden";
      document.getElementById("errordispute").style.display = "none";
      document
        .getElementById("dispute_id")
        .style.removeProperty("border-color");
      document
        .getElementById("dispute_id")
        .style.removeProperty("border-width");
    }

    if (!disputeIdRegex.test(disputeId.value)) {
      validationFail = true;
      document.getElementById("errordispute").style.visibility = "visible";
      document.getElementById("errordispute").innerHTML =
        "- Dispute ID starts with CDS followed by 14 numeric digit e.g. CDS00000000000000.";
      document.getElementById("errordispute").style.display = "block";
      document.getElementById("dispute_id").style.border = "thin solid red";
    } else {
      document.getElementById("errordispute").style.visibility = "hidden";
      document.getElementById("errordispute").style.display = "none";
      document
        .getElementById("dispute_id")
        .style.removeProperty("border-color");
      document
        .getElementById("dispute_id")
        .style.removeProperty("border-width");
    }
  }

  if (validationFail == true) {
    document.getElementById("form3Submit").disabled = false;

    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";
    window.location.href = 'otpSending.html';
    return true;  
  }
}

function validateForm4() {
  document.getElementById("form4Submit").disabled = true;
  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }

  document.getElementById("errorname").innerHTML = "";
  document.getElementById("errorSR").innerHTML = "";
  document.getElementById("errormobile").innerHTML = "";

  document.getElementById("errorpincode").innerHTML = "";

  document.getElementById("errorUserName").innerHTML = "";
  document.getElementById("errorPaymentAmount").innerHTML = "";
  document.getElementById("errorTranId").innerHTML = "";
  document.getElementById("errordesc").innerHTML = "";
  document.getElementById("errorBirthday").innerHTML = "";
  document.getElementById("errorcity").innerHTML = "";
  document.getElementById("errorAddress").innerHTML = "";

  var customerName = document.getElementById("customername");
  var mobile = document.getElementById("mobile");
  var srNo = document.getElementById("servicerequest");
  var disputeId = document.getElementById("dispute_id");
  var describeQuery = document.getElementById("textareadesc");
  var userName = document.getElementById("username");
  var pincode = document.getElementById("pincode");
  var transactionId = document.getElementById("transaction_id");
  var dateOfPayment = document.getElementById("paymentdate");
  var paymentAmount = document.getElementById("paymentamount");
  var state = document.getElementById("state");
  var city = document.getElementById("city_district");
  var registeredAddress = document.getElementById("address");
  var validationFail = false;
  var email = document.getElementById("email");
  var emailRegex = /^\w+([\+.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var nameRegex = /^[A-Za-z\s]+$/;
  var birthday = document.getElementById("birthday");
  var dateRegex =
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  if (document.getElementById("proofNumber").disabled == true) {
    document.getElementById("settimeout").style.display = "none";

    validationFail = true;

    document.getElementById("proofNumber").disabled = false;
    document.getElementById("proofNumber").focus();
  }

  if (customerName.value.trim().length <= 5) {
    document.getElementById("errorname").style.visibility = "visible";
    document.getElementById("errorname").innerHTML =
      "- Customer Name should have miniumum 6 characters.";
    document.getElementById("errorname").style.display = "block";
    document.getElementById("customername").style.border = "thin solid red";

    validationFail = true;
  } else {
    document.getElementById("errorname").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorname").style.display = "none";
    document
      .getElementById("customername")
      .style.removeProperty("border-color");
    document
      .getElementById("customername")
      .style.removeProperty("border-width");
  }
  if (validationFail == false) {
    if (nameRegex.test(customerName.value) == false) {
      document.getElementById("errorname").style.visibility = "visible";
      document.getElementById("errorname").innerHTML =
        "- Please mention valid Customer Name.";
      document.getElementById("errorname").style.display = "block";
      document.getElementById("customername").style.border = "thin solid red";

      validationFail = true;
    } else {
      document.getElementById("errorname").style.visibility = "hidden"; //visible or hidden based on condition.
      document.getElementById("errorname").style.display = "none";
      document
        .getElementById("customername")
        .style.removeProperty("border-color");
      document
        .getElementById("customername")
        .style.removeProperty("border-width");
    }
  }
  if (birthday.value.length < 1) {
    validationFail = true;
    document.getElementById("errorBirthday").style.visibility = "visible";
    document.getElementById("errorBirthday").innerHTML =
      "- Please mention Date of Birth.";

    document.getElementById("errorBirthday").style.display = "block";
    document.getElementById("birthday").style.border = "thin solid red";
  } else {
    document.getElementById("errorBirthday").style.visibility = "hidden";
    document.getElementById("errorBirthday").style.display = "none";
    document.getElementById("birthday").style.removeProperty("border-color");
    document.getElementById("birthday").style.removeProperty("border-width");
  }
  if (dateRegex.test(birthday.value) == false) {
    validationFail = true;
    document.getElementById("errorBirthday").style.visibility = "visible";
    document.getElementById("errorBirthday").innerHTML =
      "- Please mention valid Date of Birth in DD/MM/YYYY format.";

    document.getElementById("errorBirthday").style.display = "block";
    document.getElementById("birthday").style.border = "thin solid red";
  } else {
    document.getElementById("errorBirthday").style.visibility = "hidden";
    document.getElementById("errorBirthday").style.display = "none";
    document.getElementById("birthday").style.removeProperty("border-color");
    document.getElementById("birthday").style.removeProperty("border-width");
  }
  if (
    dateOfPayment.value != "" &&
    dateRegex.test(dateOfPayment.value) == false
  ) {
    validationFail = true;
    document.getElementById("errorPaymentDate").style.visibility = "visible";
    document.getElementById("errorPaymentDate").innerHTML =
      "- Please mention valid Date of Payment in DD/MM/YYYY format.";

    document.getElementById("errorPaymentDate").style.display = "block";
    document.getElementById("paymentdate").style.border = "thin solid red";
  } else {
    document.getElementById("errorPaymentDate").style.visibility = "hidden";
    document.getElementById("errorPaymentDate").style.display = "none";
    document.getElementById("paymentdate").style.removeProperty("border-color");
    document.getElementById("paymentdate").style.removeProperty("border-width");
  }
  if (city.value.trim().length < 2) {
    document.getElementById("errorcity").style.visibility = "visible";
    document.getElementById("errorcity").innerHTML =
      "- City should have more than 2 characters.";
    document.getElementById("errorcity").style.display = "block";
    document.getElementById("city_district").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorcity").style.visibility = "hidden";
    document
      .getElementById("city_district")
      .style.removeProperty("border-color");
    document
      .getElementById("city_district")
      .style.removeProperty("border-width");
  }
  if (registeredAddress.value.length < 6) {
    document.getElementById("errorAddress").style.visibility = "visible";
    document.getElementById("errorAddress").innerHTML =
      "- Address should have miniumum 6 characters.";
    document.getElementById("errorAddress").style.display = "block";
    document.getElementById("address").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorAddress").style.visibility = "hidden";
    document.getElementById("address").style.removeProperty("border-color");
    document.getElementById("address").style.removeProperty("border-width");
  }

  if (mobile.value.length != 10 && !validateMobile(mobile)) {
    validationFail = true;
    document.getElementById("errormobile").style.visibility = "visible";
    document.getElementById("errormobile").innerHTML =
      "- Please mention valid Mobile number";

    document.getElementById("errormobile").style.display = "block";
    document.getElementById("mobile").style.border = "thin solid red";
  } else {
    document.getElementById("errormobile").style.visibility = "hidden";
    document.getElementById("errormobile").style.display = "none";
    document.getElementById("mobile").style.removeProperty("border-color");
    document.getElementById("mobile").style.removeProperty("border-width");
  }
  if (pincode.value.length < 4 || pincode.value.length > 6) {
    document.getElementById("errorpincode").innerHTML =
      "- Please enter valid Pincode";
    document.getElementById("errorpincode").style.visibility = "visible";
    document.getElementById("pincode").style.border = "thin solid red";
  } else {
    document.getElementById("errorpincode").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorpincode").style.display = "none";
    document.getElementById("pincode").style.removeProperty("border-color");
    document.getElementById("pincode").style.removeProperty("border-width");
  }
  if (emailRegex.test(email.value) == false) {
    document.getElementById("errorEmail").style.visibility = "visible";
    document.getElementById("errorEmail").innerHTML =
      "- Please mention valid Email ID.";
    document.getElementById("errorEmail").style.display = "block";
    document.getElementById("email").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorEmail").style.visibility = "hidden";
    document.getElementById("errorEmail").style.display = "none";
    document.getElementById("email").style.removeProperty("border-color");
    document.getElementById("email").style.removeProperty("border-width");
  }

  if (srNo.value.length > 0) {
    if (srNo.value.length > 8 || srNo.value.length < 4) {
      validationFail = true;
      document.getElementById("errorSR").style.visibility = "visible";
      document.getElementById("errorSR").innerHTML =
        "-  Please enter valid SR number";
      document.getElementById("errorSR").style.display = "block";
      document.getElementById("servicerequest").style.border = "thin solid red";
    } else {
      document.getElementById("errorSR").style.visibility = "hidden";
      document.getElementById("errorSR").style.display = "none";
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-color");
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-width");
    }
  }

  if (describeQuery.value.length > 3000 || describeQuery.value.length < 0) {
    validationFail = true;
    document.getElementById("errordesc").style.visibility = "visible";
    document.getElementById("errordesc").innerHTML =
      "- Please describe your query within 3000 characters only.";
    document.getElementById("errordesc").style.display = "block";
    document.getElementById("textareadesc").style.border = "thin solid red";
  } else {
    var alphaNumericSpecialRegex =
      /^[A-Za-z0-9@~}{\t \n`!@#$%\[^&\]*()_=+\\\\';:\"\\\/?|>.–<,-\\]*$/;
    if (alphaNumericSpecialRegex.test(describeQuery.value) == false) {
      validationFail = true;
      document.getElementById("errordesc").style.visibility = "visible";
      document.getElementById("errordesc").innerHTML =
        "- Describe your query should have Alpha Numeric special characters.";
      document.getElementById("errordesc").style.display = "block";
      document.getElementById("textareadesc").style.border = "thin solid red";
    } else {
      document.getElementById("errordesc").style.visibility = "hidden";
      document.getElementById("errordesc").style.display = "none";
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-color");
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-width");
    }
  }

  if (userName.value != "") {
    if (userName.value.length <= 5 || userName.value.length > 50) {
      validationFail = true;
      document.getElementById("errorUserName").style.visibility = "visible";
      document.getElementById("errorUserName").innerHTML =
        "- Username should between 5 to 50 characters";
      document.getElementById("errorUserName").style.display = "block";
      document.getElementById("username").style.border = "thin solid red";
    }
  } else {
    document.getElementById("errorUserName").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorUserName").style.display = "none";
    document.getElementById("username").style.removeProperty("border-color");
    document.getElementById("username").style.removeProperty("border-width");
  }

  if (transactionId.value != "") {
    if (transactionId.value.length < 9 || transactionId.value.length > 12) {
      validationFail = true;
      document.getElementById("errorTranId").style.visibility = "visible";

      document.getElementById("errorTranId").innerHTML =
        "- Transacion ID should be between 9 to 12 digits";

      document.getElementById("errorTranId").style.display = "block";
      document.getElementById("transaction_id").style.border = "thin solid red";
    }
  } else {
    document.getElementById("errorTranId").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorTranId").style.display = "none";
    document
      .getElementById("transaction_id")
      .style.removeProperty("border-color");
    document
      .getElementById("transaction_id")
      .style.removeProperty("border-width");
  }
  if (paymentAmount.value != "") {
    if (paymentAmount.value < 100 || paymentAmount.value > 9999) {
      validationFail = true;
      document.getElementById("errorPaymentAmount").style.visibility =
        "visible";
      document.getElementById("errorPaymentAmount").innerHTML =
        "-  Please enter valid Payment Amount.";

      document.getElementById("errorPaymentAmount").style.display = "block";
      document.getElementById("paymentamount").style.border = "thin solid red";
    }
  } else {
    document.getElementById("errorPaymentAmount").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorPaymentAmount").style.display = "none";
    document
      .getElementById("paymentamount")
      .style.removeProperty("border-color");
    document
      .getElementById("paymentamount")
      .style.removeProperty("border-width");
  }

  debugger;

  //Consumer ID proof number pattern validation added
  document.getElementById("errorIdNumber").innerHTML = "";
  var idType = document.getElementById("proofSelect");
  var idNumber = document.getElementById("proofNumber");

  if (validateIdNumberPattern(idNumber.value, idType.value) == true) {
    document.getElementById("errorIdNumber").style.visibility = "visible";
    document.getElementById("errorIdNumber").innerHTML =
      "- Please mention valid Identity Proof No.";
    document.getElementById("errorIdNumber").style.display = "block";
    document.getElementById("proofNumber").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorIdNumber").style.visibility = "hidden";
    document.getElementById("errorIdNumber").style.display = "none";
    document.getElementById("proofNumber").style.removeProperty("border-color");
    document.getElementById("proofNumber").style.removeProperty("border-width");
  }

  //Consumer Mobile pattern validation
  var mobileRegex = /^((\+91)?|91)?[5,6,7,8,9][0-9]{9}$/;
  if (mobileRegex.test(mobile.value) == false) {
    document.getElementById("errormobile").style.visibility = "visible";
    document.getElementById("errormobile").innerHTML =
      "- Please mention valid Mobile number.";
    document.getElementById("errormobile").style.display = "block";
    document.getElementById("mobile").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errormobile").style.visibility = "hidden";
    document.getElementById("errormobile").style.display = "none";
    document.getElementById("mobile").style.removeProperty("border-color");
    document.getElementById("mobile").style.removeProperty("border-width");
  }

  //Consumer Pincode range validation
  if (validatePincode(state.value, pincode.value) == true) {
    document.getElementById("errorpincode").style.visibility = "visible";
    document.getElementById("errorpincode").innerHTML =
      "- Please mention valid Pincode.";
    document.getElementById("errorpincode").style.display = "block";
    document.getElementById("pincode").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorpincode").style.visibility = "hidden";
    document.getElementById("errorpincode").style.display = "none";
    document.getElementById("pincode").style.removeProperty("border-color");
    document.getElementById("pincode").style.removeProperty("border-width");
  }

  //Validating city pattern
  var regexCity = /^[a-zA-Z0-9]{1,30}$/;
  if (regexCity.test(city.value) == false) {
    document.getElementById("errorcity").style.visibility = "visible";
    document.getElementById("errorcity").innerHTML =
      "- Please mention valid City/District name.";
    document.getElementById("errorcity").style.display = "block";
    document.getElementById("city_district").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorcity").style.visibility = "hidden";
    document
      .getElementById("city_district")
      .style.removeProperty("border-color");
    document
      .getElementById("city_district")
      .style.removeProperty("border-width");
  }

  if (validationFail == true) {
    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    document.getElementById("form4Submit").disabled = false;
    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";

    return true;
  }
}

function validateMobile(mobileNumber) {
  var patternMatched = false;
  var regexMobileNumber = /^((\+91)?|91)?[5,6,7,8,9][0-9]{9}$/;

  if (regexMobileNumber.test(mobileNumber)) {
    patternMatched = true;
  }
  return patternMatched;
}

function validateForm5() {
  //debugger;
  document.getElementById("form5Submit").disabled = true;
  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }
  var validationFail = commonConsumerlFieldValidations();

  if (validationFail == true) {
    document.getElementById("settimeout").style.display = "block";
    document.getElementById("form5Submit").disabled = false;

    document.getElementById("settimeout").scrollIntoView();
    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";
    return true;
  }
}

function validateForm6() {
  //debugger;
  document.getElementById("form6Submit").disabled = true;
  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }
  var validationFail = commonConsumerlFieldValidations();
  document.getElementById("errorECN").innerHTML = "";
  document.getElementById("errorScore").innerHTML = "";

  var enquiryControlNumber = document.getElementById("enqnum");
  var score = document.getElementById("score");

  if (enquiryControlNumber.value != "") {
    if (
      enquiryControlNumber.value.length < 9 ||
      enquiryControlNumber.value.length > 12
    ) {
      validationFail = true;
      document.getElementById("errorECN").style.visibility = "visible";
      document.getElementById("errorECN").innerHTML =
        "- Please enter valid Enquiry Control Number";
      document.getElementById("errorECN").style.display = "block";
      document.getElementById("enqnum").style.border = "thin solid red";
    }
  } else {
    document.getElementById("errorECN").style.visibility = "hidden";
    document.getElementById("errorECN").style.display = "none";
    document.getElementById("enqnum").style.removeProperty("border-color");
    document.getElementById("enqnum").style.removeProperty("border-width");
  }
  if (score.value != "") {
    if (score.value < 300 || score.value > 900) {
      validationFail = true;
      document.getElementById("errorScore").style.visibility = "visible";
      document.getElementById("errorScore").innerHTML =
        "- Please mention valid score ranging between 300 to 900";
      document.getElementById("errorScore").style.display = "block";
      document.getElementById("score").style.border = "thin solid red";
    }
  } else {
    document.getElementById("errorScore").style.visibility = "hidden";
    document.getElementById("errorScore").style.display = "none";
    document.getElementById("score").style.removeProperty("border-color");
    document.getElementById("score").style.removeProperty("border-width");
  }
  if (validationFail == true) {
    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    document.getElementById("form6Submit").disabled = false;

    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";

    return true;
  }
}

function validateForm2() {
  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }

  var validationFail = false;
  document.getElementById("form2Submit").disabled = true;

  var alphaNumericSpecialRegex =
    /^[A-Za-z0-9@~}{\t \n`!@#$%\[^&\]*()_=+\\\\';:\"\\\/?|>.–<,-\\]*$/;
  var describeQuery = document.getElementById("textareadesc");

  if (describeQuery.value.length > 3000 || describeQuery.value.length < 0) {
    validationFail = true;
    document.getElementById("errordesc").style.visibility = "visible";
    document.getElementById("errordesc").innerHTML =
      "- Please describe your query within 3000 characters only.";
    document.getElementById("errordesc").style.display = "block";
    document.getElementById("textareadesc").style.border = "thin solid red";
  } else {
    if (alphaNumericSpecialRegex.test(describeQuery.value) == false) {
      validationFail = true;
      document.getElementById("errordesc").style.visibility = "visible";
      document.getElementById("errordesc").innerHTML =
        "- Describe your query should have Alpha Numeric special characters.";
      document.getElementById("errordesc").style.display = "block";
      document.getElementById("textareadesc").style.border = "thin solid red";
    } else {
      document.getElementById("errordesc").style.visibility = "hidden";
      document.getElementById("errordesc").style.display = "none";
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-color");
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-width");
    }
  }

  if (validationFail == true) {
    document.getElementById("form2Submit").disabled = false;
    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";
    return true;
  }
}
