function commonCommercialFieldValidations() {
  //debugger;
  document.getElementById("settimeout").style.display = "none";
  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }

  document.getElementById("errorCompanyName").innerHTML = "";
  document.getElementById("errorEntityType").innerHTML = "";
  document.getElementById("errorAddress").innerHTML = "";
  document.getElementById("errorState").innerHTML = "";
  document.getElementById("errorPincode").innerHTML = "";
  document.getElementById("errorCity").innerHTML = "";
  document.getElementById("errorAuthSign").innerHTML = "";
  document.getElementById("errorMobile").innerHTML = "";
  document.getElementById("errorTelephone").innerHTML = "";
  document.getElementById("errorEmail").innerHTML = "";
  document.getElementById("errorHolderName").innerHTML = "";
  document.getElementById("errorIfsc").innerHTML = "";
  document.getElementById("errorAccountNo").innerHTML = "";
  document.getElementById("errorConfirmAcc").innerHTML = "";
  document.getElementById("errorAddress").innerHTML = "";
  document.getElementById("errorBankType").innerHTML = "";
  document.getElementById("errorBankname").innerHTML = "";
  document.getElementById("errorIdType").innerHTML = "";
  document.getElementById("errorIdNumber").innerHTML = "";
  document.getElementById("errorCheckbox").innerHTML = "";

  var companyName = document.getElementById("companyname");
  var typeOfEntity = document.getElementById("typeOfEntity");
  var registeredAddress = document.getElementById("registeredaddress");
  var state = document.getElementById("state");
  var pincode = document.getElementById("pincode");
  var city = document.getElementById("citydistrict");
  var nameOfAuthorizedSignatory = document.getElementById(
    "nameOfAuthorisedSignatory"
  );
  var mobile = document.getElementById("mobile");
  var telephonenumber = document.getElementById("telephonenumber");
  var email = document.getElementById("email");
  var emailRegex = /^\w+([\+.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var companyidentifier = document.getElementById("companyidentifier");
  var companyIdentifierValue = document.getElementById(
    "companyIdentifierValue"
  );

  var id_type = document.getElementById("id_type");
  var holder_name = document.getElementById("holder_name");
  var ifsc = document.getElementById("ifsc");
  var bank_name = document.getElementById("bankname");
  var bank_type = document.getElementById("account_type");
  var account_number = document.getElementById("account_number");
  var confirm_account_number = document.getElementById(
    "confirm_account_number"
  );
  var bank_address = document.getElementById("bank_address");
  var id_number = document.getElementById("id_number");
  var checkboxVal = document.getElementById("checkAgree");
  var accountNumberRegex = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9.-/]{5,20}$/;
  var ifscRegex = /^[A-Za-z]{4}[0][0-9]{6}$/;
  var mobileRegex = /^((\+91)?|91)?[5,6,7,8,9][0-9]{9}$/;
  var alphaNumericSpecialRegex =
    /^[A-Za-z0-9@~}{\t \n`!@#$%^&*()_=+\\\\';:\"\\\/?|>.<,-]*$/;

  var validationFail = false;

  if (companyName.value.trim().length < 2) {
    document.getElementById("errorCompanyName").style.visibility = "visible";
    document.getElementById("errorCompanyName").innerHTML =
      "- Company Name should have miniumum 2 characters.";
    document.getElementById("errorCompanyName").style.display = "block";
    document.getElementById("companyname").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorCompanyName").style.visibility = "hidden";
    document.getElementById("companyname").style.removeProperty("border-color");
    document.getElementById("companyname").style.removeProperty("border-width");
  }
  if (typeOfEntity.value == "") {
    document.getElementById("errorEntityType").style.visibility = "visible";
    document.getElementById("errorEntityType").innerHTML =
      "- Please Select Entity";
    document.getElementById("errorEntityType").style.display = "block";
    document.getElementById("typeOfEntity").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorEntityType").style.visibility = "hidden";
    document
      .getElementById("typeOfEntity")
      .style.removeProperty("border-color");
    document
      .getElementById("typeOfEntity")
      .style.removeProperty("border-width");
  }

  if (registeredAddress.value.trim().length < 6) {
    document.getElementById("errorAddress").style.visibility = "visible";
    document.getElementById("errorAddress").innerHTML =
      "- Registered Address should have miniumum 6 characters.";
    document.getElementById("errorAddress").style.display = "block";
    document.getElementById("registeredaddress").style.border =
      "thin solid red";
    validationFail = true;
  } else {
    if (alphaNumericSpecialRegex.test(registeredAddress.value) == false) {
      document.getElementById("errorAddress").style.visibility = "visible";
      document.getElementById("errorAddress").innerHTML =
        "- Registered Address should have AphaNumeric special characters.";
      document.getElementById("errorAddress").style.display = "block";
      document.getElementById("registeredaddress").style.border =
        "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorAddress").style.visibility = "hidden";
      document
        .getElementById("registeredaddress")
        .style.removeProperty("border-color");
      document
        .getElementById("registeredaddress")
        .style.removeProperty("border-width");
    }
  }

  if (state.value == "") {
    document.getElementById("errorState").style.visibility = "visible";
    document.getElementById("errorState").innerHTML = "- Please Select State.";
    document.getElementById("errorState").style.display = "block";
    document.getElementById("state").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorState").style.visibility = "hidden";
    document.getElementById("state").style.removeProperty("border-color");
    document.getElementById("state").style.removeProperty("border-width");
  }

  if (pincode.value.length < 4 || pincode.value.length > 6) {
    document.getElementById("errorPincode").style.visibility = "visible";
    document.getElementById("errorPincode").innerHTML =
      "- Please enter valid Pincode.";
    document.getElementById("errorPincode").style.display = "block";
    document.getElementById("pincode").style.border = "thin solid red";
    validationFail = true;
  } else {
    //Commercial Pincode range validation
    if (validatePincode(state.value, pincode.value) == true) {
      document.getElementById("errorPincode").style.visibility = "visible";
      document.getElementById("errorPincode").innerHTML =
        "- Please mention valid Pincode.";
      document.getElementById("errorPincode").style.display = "block";
      document.getElementById("pincode").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorPincode").style.visibility = "hidden";
      document.getElementById("errorPincode").style.display = "none";
      document.getElementById("pincode").style.removeProperty("border-color");
      document.getElementById("pincode").style.removeProperty("border-width");
    }
    // document.getElementById("errorPincode").style.visibility = "hidden";
    // document.getElementById('pincode').style.removeProperty("border-color")
    // document.getElementById('pincode').style.removeProperty("border-width")
  }

  if (city.value.trim().length < 2) {
    document.getElementById("errorCity").style.visibility = "visible";
    document.getElementById("errorCity").innerHTML =
      "- City/District should have minimum 2 characters.";
    document.getElementById("errorCity").style.display = "block";
    document.getElementById("citydistrict").style.border = "thin solid red";
    validationFail = true;
  } else {
    //Validating city pattern
    var regexCity = /^[a-zA-Z0-9]{1,30}$/;
    if (regexCity.test(city.value) == false) {
      document.getElementById("errorCity").style.visibility = "visible";
      document.getElementById("errorCity").innerHTML =
        "- Please mention valid City/District name.";
      document.getElementById("errorCity").style.display = "block";
      document.getElementById("citydistrict").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorCity").style.visibility = "hidden";
      document
        .getElementById("citydistrict")
        .style.removeProperty("border-color");
      document
        .getElementById("citydistrict")
        .style.removeProperty("border-width");
    }
  }

  if (
    nameOfAuthorizedSignatory.value.trim().length < 5 ||
    nameOfAuthorizedSignatory.value.trim().length > 80
  ) {
    document.getElementById("errorAuthSign").style.visibility = "visible";
    document.getElementById("errorAuthSign").innerHTML =
      "- Name Of Authorized Signatory can have minimum 5 and maximum 80 characters.";
    document.getElementById("errorAuthSign").style.display = "block";
    document.getElementById("nameOfAuthorisedSignatory").style.border =
      "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorAuthSign").style.visibility = "hidden";
    document
      .getElementById("nameOfAuthorisedSignatory")
      .style.removeProperty("border-color");
    document
      .getElementById("nameOfAuthorisedSignatory")
      .style.removeProperty("border-width");
  }

  if (mobile.value.length != 10) {
    document.getElementById("errorMobile").style.visibility = "visible";
    document.getElementById("errorMobile").innerHTML =
      "- Please mention valid Mobile number.";
    document.getElementById("errorMobile").style.display = "block";
    document.getElementById("mobile").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorMobile").style.visibility = "hidden";
    document.getElementById("mobile").style.removeProperty("border-color");
    document.getElementById("mobile").style.removeProperty("border-width");
  }
  //debugger;
  if (telephonenumber.value.length > 0) {
    if (telephonenumber.value.length > 12) {
      document.getElementById("errorTelephone").style.visibility = "visible";
      document.getElementById("errorTelephone").innerHTML =
        "- Please enter valid Telephone Number.";
      document.getElementById("errorTelephone").style.display = "block";
      document.getElementById("telephonenumber").style.border =
        "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorTelephone").style.visibility = "hidden";
      document
        .getElementById("telephonenumber")
        .style.removeProperty("border-color");
      document
        .getElementById("telephonenumber")
        .style.removeProperty("border-width");
    }
  }
  //debugger;
  if (emailRegex.test(email.value) == false) {
    document.getElementById("errorEmail").style.visibility = "visible";
    document.getElementById("errorEmail").innerHTML =
      "- Please mention valid Email ID.";
    document.getElementById("errorEmail").style.display = "block";
    document.getElementById("email").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorEmail").style.visibility = "hidden";
    document.getElementById("email").style.removeProperty("border-color");
    document.getElementById("email").style.removeProperty("border-width");
  }

  if (companyidentifier.value == "") {
    document.getElementById("errorCmpIdentifier").style.visibility = "visible";
    document.getElementById("errorCmpIdentifier").innerHTML =
      "- Please Select Company Identifier.";
    document.getElementById("errorCmpIdentifier").style.display = "block";
    document.getElementById("companyidentifier").style.border =
      "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorCmpIdentifier").style.visibility = "hidden";
    document
      .getElementById("companyidentifier")
      .style.removeProperty("border-color");
    document
      .getElementById("companyidentifier")
      .style.removeProperty("border-width");
  }

  if (companyIdentifierValue.value == "") {
    document.getElementById("errorCmpIdentifierValue").style.visibility =
      "visible";
    document.getElementById("errorCmpIdentifierValue").innerHTML =
      "- Please mention Company Identifier.";
    document.getElementById("errorCmpIdentifierValue").style.display = "block";
    document.getElementById("companyIdentifierValue").style.border =
      "thin solid red";
    validationFail = true;
  } else {
    //Commercial ID proof number pattern validation
    document.getElementById("errorCmpIdentifierValue").innerHTML = "";
    var idType = document.getElementById("companyidentifier");
    var idNumber = document.getElementById("companyIdentifierValue");

    if (validateIdNumberPattern(idNumber.value, idType.value) == true) {
      document.getElementById("errorCmpIdentifierValue").style.visibility =
        "visible";
      document.getElementById("errorCmpIdentifierValue").innerHTML =
        "- Please mention valid Company Identifier.";
      document.getElementById("errorCmpIdentifierValue").style.display =
        "block";
      document.getElementById("companyIdentifierValue").style.border =
        "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorCmpIdentifierValue").style.visibility =
        "hidden";
      document.getElementById("errorCmpIdentifierValue").style.display = "none";
      document
        .getElementById("companyIdentifierValue")
        .style.removeProperty("border-color");
      document
        .getElementById("companyIdentifierValue")
        .style.removeProperty("border-width");
    }
    // document.getElementById("errorCmpIdentifierValue").style.visibility = "hidden";
    // document.getElementById('companyIdentifierValue').style.removeProperty("border-color")
    // document.getElementById('companyIdentifierValue').style.removeProperty("border-width")
  }

  // id type validation
  if (id_type.value === "") {
    document.getElementById("errorIdType").style.visibility = "visible";
    document.getElementById("errorIdType").innerHTML = "- Id type required";

    document.getElementById("errorIdType").style.display = "block";
    id_type.style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorIdType").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorIdType").style.display = "none";
    id_type.style.removeProperty("border-color");
    id_type.style.removeProperty("border-width");
  }

  // id number validation
  if (id_number.value === "") {
    document.getElementById("errorIdNumber").style.visibility = "visible";
    document.getElementById("errorIdNumber").innerHTML =
      "- Id number is Mandatory";

    document.getElementById("errorIdNumber").style.display = "block";
    id_number.style.border = "thin solid red";
    validationFail = true;
  } else if (isValidIdNumber(id_type.value, id_number.value)) {
    document.getElementById("errorIdNumber").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorIdNumber").style.display = "none";
    id_number.style.removeProperty("border-color");
    id_number.style.removeProperty("border-width");
  } else {
    document.getElementById("errorIdNumber").style.visibility = "visible";
    document.getElementById("errorIdNumber").innerHTML = "- Invalid Id Number";

    document.getElementById("errorIdNumber").style.display = "block";
    id_number.style.border = "thin solid red";
    validationFail = true;
  }

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
  if (ifsc.value.trim().length < 11) {
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

  if (!checkboxVal.checked) {
    document.getElementById("errorCheckbox").style.visibility = "visible";
    document.getElementById("errorCheckbox").innerHTML =
      "- Please Agree by checking the box";
    document.getElementById("errorCheckbox").style.display = "block";
    bank_address.style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorCheckbox").style.visibility = "hidden"; //visible or hidden based on condition.
    document.getElementById("errorCheckbox").style.display = "none";
    bank_address.style.removeProperty("border-color");
    bank_address.style.removeProperty("border-width");
  }

  //Commercial Mobile pattern validation
  if (mobileRegex.test(mobile.value) == false) {
    document.getElementById("errorMobile").style.visibility = "visible";
    document.getElementById("errorMobile").innerHTML =
      "- Please mention valid Mobile number.";
    document.getElementById("errorMobile").style.display = "block";
    document.getElementById("mobile").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorMobile").style.visibility = "hidden";
    document.getElementById("errorMobile").style.display = "none";
    document.getElementById("mobile").style.removeProperty("border-color");
    document.getElementById("mobile").style.removeProperty("border-width");
  }

  return validationFail;
}

function validateIdNumberPattern(idNumber, idType) {
  var patternMatched = false;

  var panRegex =
    /^[a-zA-Z]{3}[c,C,p,P,h,H,f,F,a,A,t,T,b,B,l,L,g,G,j,J]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$/;
  var cinRegex =
    /^[l,L,u,U]{1}[0-9]{5}[a-zA-Z]{2}[0-9]{4}[FLC,FTC,GAP,GAT,GOI,NPL,PLC,PTC,SGC,ULL,ULT]{3}[0-9]{6}$/;
  var crnRegex = /^([0-9]|[A-Za-z])+$/;
  var tinRegex1 = /^[0-9]{11}$/;
  var tinRegex2 = /^[0-9]{11}[A-Za-z]{1}$/;

  if (idType == 1 && !panRegex.test(idNumber)) {
    patternMatched = true;
  }
  if (idType == 2 && !cinRegex.test(idNumber)) {
    patternMatched = true;
  }
  if (idType == 3 && !crnRegex.test(idNumber)) {
    patternMatched = true;
  }
  if (idType == 4 && (!tinRegex1.test(idNumber) || !tinRegex2.test(idNumber))) {
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

function validateForm7() {
  document.getElementById("form7Submit").disabled = true;
  document.getElementById("settimeout").style.display = "none";
  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }
  document.getElementById("errorService").innerHTML = "";
  document.getElementById("errorTranID").innerHTML = "";
  document.getElementById("errorDateOfPayment").innerHTML = "";
  document.getElementById("errorDescQuery").innerHTML = "";

  document.getElementById("errorRegisterationID").innerHTML = "";
  var res = commonCommercialFieldValidations();
  validationFail = res;
  var servicerequest = document.getElementById("servicerequest");
  var transaction_id = document.getElementById("transaction_id");

  var rid = document.getElementById("rid");
  var paymentamount = document.getElementById("paymentamount");
  var paymentdate = document.getElementById("paymentdate");
  var queryDescription = document.getElementById("textareadesc");
  var alphaNumericSpecialRegex =
    /^[A-Za-z0-9@~}{\t \n`!@#$%^&*()_=+\\\\';:\"\\\/?|>.<,-]*$/;

  if (servicerequest.value.length > 0) {
    if (servicerequest.value.length < 4 || servicerequest.value.length > 8) {
      document.getElementById("errorService").style.visibility = "visible";
      document.getElementById("errorService").innerHTML =
        "- Invalid Service Request. Service Request should be between 4 to 8 digits";
      document.getElementById("errorService").style.display = "block";
      document.getElementById("servicerequest").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorService").style.visibility = "hidden";
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-color");
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-width");
    }
  }
  if (transaction_id.value != "") {
    if (transaction_id.value.length < 9 || servicerequest.value.length > 12) {
      document.getElementById("errorTranID").style.visibility = "visible";
      document.getElementById("errorTranID").innerHTML =
        "- Please mention valid Transaction ID. Transaction ID should be between 9 to 12 characters";
      document.getElementById("errorTranID").style.display = "block";
      document.getElementById("transaction_id").style.border = "thin solid red";
      validationFail = true;
    }
  } else {
    document.getElementById("errorTranID").style.visibility = "hidden";
    document
      .getElementById("transaction_id")
      .style.removeProperty("border-color");
    document
      .getElementById("transaction_id")
      .style.removeProperty("border-width");
  }
  if (rid.value != "") {
    if (rid.value.length < 13 || servicerequest.value.length > 15) {
      document.getElementById("errorRegisterationID").style.visibility =
        "visible";
      document.getElementById("errorRegisterationID").innerHTML =
        "- Please mention valid Registeration ID. Registeration ID should be between 13 to 15 characters";
      document.getElementById("errorRegisterationID").style.display = "block";
      document.getElementById("rid").style.border = "thin solid red";
      validationFail = true;
    }
  } else {
    document.getElementById("errorRegisterationID").style.visibility = "hidden";
    document.getElementById("rid").style.removeProperty("border-color");
    document.getElementById("rid").style.removeProperty("border-width");
  }
  if (paymentdate.value != "") {
    invalidDate = false;
    var dateRegex =
      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if (dateRegex.test(paymentdate.value) == false) {
      invalidDate = true;
      validationFail = true;
      document.getElementById("errorDateOfPayment").style.visibility =
        "visible";
      document.getElementById("errorDateOfPayment").innerHTML =
        "- Please mention valid Date of Payment in DD/MM/YYYY format.";

      document.getElementById("errorDateOfPayment").style.display = "block";
      document.getElementById("paymentdate").style.border = "thin solid red";
    } else {
      document.getElementById("errorDateOfPayment").style.visibility = "hidden";
      document.getElementById("errorDateOfPayment").style.display = "none";
      document
        .getElementById("paymentdate")
        .style.removeProperty("border-color");
      document
        .getElementById("paymentdate")
        .style.removeProperty("border-width");
    }

    if (invalidDate == false) {
      var parts = paymentdate.value.split("-");
      var payDate = new Date(parts[0], parts[1] - 1, parts[2]);

      var today = new Date();
      if (payDate > today) {
        document.getElementById("errorDateOfPayment").style.visibility =
          "visible";
        document.getElementById("errorDateOfPayment").innerHTML =
          "- Invalid Payment Date.Payment Date cannot be greater than Current Date.";
        document.getElementById("errorDateOfPayment").style.display = "block";
        document.getElementById("paymentdate").style.border = "thin solid red";
        validationFail = true;
      } else {
        document.getElementById("errorDateOfPayment").style.visibility =
          "hidden";
        document
          .getElementById("paymentdate")
          .style.removeProperty("border-color");
        document
          .getElementById("paymentdate")
          .style.removeProperty("border-width");
      }
    }
  }

  if (
    queryDescription.value.length > 3000 ||
    queryDescription.value.length < 1
  ) {
    document.getElementById("errorDescQuery").style.visibility = "visible";
    document.getElementById("errorDescQuery").innerHTML =
      "- Please describe your query within 3000 characters only.";
    document.getElementById("errorDescQuery").style.display = "block";
    document.getElementById("textareadesc").style.border = "thin solid red";
    validationFail = true;
  } else {
    if (alphaNumericSpecialRegex.test(queryDescription.value) == false) {
      document.getElementById("errorDescQuery").style.visibility = "visible";
      document.getElementById("errorDescQuery").innerHTML =
        "- Describe your query should have AphaNumeric special characters.";
      document.getElementById("errorDescQuery").style.display = "block";
      document.getElementById("textareadesc").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorDescQuery").style.visibility = "hidden";
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-color");
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-width");
    }
  }

  if (validationFail == true) {
    document.getElementById("form7Submit").disabled = false;
    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";
    return true;
  }
}

function validateForm8() {
  document.getElementById("form8Submit").disabled = true;
  document.getElementById("settimeout").style.display = "none";
  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }

  document.getElementById("errorService").innerHTML = "";

  document.getElementById("errorDescQuery").innerHTML = "";

  var res = commonCommercialFieldValidations();
  validationFail = res;
  var servicerequest = document.getElementById("servicerequest");
  var queryDescription = document.getElementById("textareadesc");
  var alphaNumericSpecialRegex =
    /^[A-Za-z0-9@~}{\t \n`!@#$%^&*()_=+\\\\';:\"\\\/?|>.<,-]*$/;

  if (servicerequest.value.length > 0) {
    if (servicerequest.value.length < 4 || servicerequest.value.length > 8) {
      document.getElementById("errorService").style.visibility = "visible";
      document.getElementById("errorService").innerHTML =
        "- Invalid Service Request. Service Request should be between 4 to 8 digits";
      document.getElementById("errorService").style.display = "block";
      document.getElementById("servicerequest").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorService").style.visibility = "hidden";
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-color");
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-width");
    }
  }

  if (
    queryDescription.value.length > 3000 ||
    queryDescription.value.length < 1
  ) {
    document.getElementById("errorDescQuery").style.visibility = "visible";
    document.getElementById("errorDescQuery").innerHTML =
      "- Please describe your query within 3000 characters only.";
    document.getElementById("errorDescQuery").style.display = "block";
    document.getElementById("textareadesc").style.border = "thin solid red";
    validationFail = true;
  } else {
    if (alphaNumericSpecialRegex.test(queryDescription.value) == false) {
      document.getElementById("errorDescQuery").style.visibility = "visible";
      document.getElementById("errorDescQuery").innerHTML =
        "- Describe your query should have AphaNumeric special characters.";
      document.getElementById("errorDescQuery").style.display = "block";
      document.getElementById("textareadesc").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorDescQuery").style.visibility = "hidden";
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-color");
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-width");
    }
  }

  if (validationFail == true) {
    document.getElementById("form8Submit").disabled = false;
    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";
    return true;
  }
}

function validateForm9() {
  document.getElementById("form9Submit").disabled = true;
  document.getElementById("settimeout").style.display = "none";
  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }

  document.getElementById("errorService").innerHTML = "";
  document.getElementById("errorReportOrder").innerHTML = "";

  document.getElementById("errorDescQuery").innerHTML = "";

  var res = commonCommercialFieldValidations();
  validationFail = res;
  var servicerequest = document.getElementById("servicerequest");
  var queryDescription = document.getElementById("textareadesc");
  var reportOrderNumber = document.getElementById("ron");
  var alphaNumericSpecialRegex =
    /^[A-Za-z0-9@~}{\t \n`!@#$%^&*()_=+\\\\';:\"\\\/?|>.<,-]*$/;

  if (servicerequest.value.length > 0) {
    if (servicerequest.value.length < 4 || servicerequest.value.length > 8) {
      document.getElementById("errorService").style.visibility = "visible";
      document.getElementById("errorService").innerHTML =
        "- Invalid Service Request. Service Request should be between 4 to 8 digits";
      document.getElementById("errorService").style.display = "block";
      document.getElementById("servicerequest").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorService").style.visibility = "hidden";
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-color");
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-width");
    }
  }

  if (
    queryDescription.value.length > 3000 ||
    queryDescription.value.length < 1
  ) {
    document.getElementById("errorDescQuery").style.visibility = "visible";
    document.getElementById("errorDescQuery").innerHTML =
      "- Please describe your query within 3000 characters only.";
    document.getElementById("errorDescQuery").style.display = "block";
    document.getElementById("textareadesc").style.border = "thin solid red";
    validationFail = true;
  } else {
    if (alphaNumericSpecialRegex.test(queryDescription.value) == false) {
      document.getElementById("errorDescQuery").style.visibility = "visible";
      document.getElementById("errorDescQuery").innerHTML =
        "- Describe your query should have AphaNumeric special characters.";
      document.getElementById("errorDescQuery").style.display = "block";
      document.getElementById("textareadesc").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorDescQuery").style.visibility = "hidden";
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-color");
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-width");
    }
  }

  if (reportOrderNumber.value.length < 1) {
    document.getElementById("errorReportOrder").style.visibility = "visible";
    document.getElementById("errorReportOrder").innerHTML =
      "- Please mention Report Order Number.";
    document.getElementById("errorReportOrder").style.display = "block";
    document.getElementById("ron").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorDescQuery").style.visibility = "hidden";
    document.getElementById("ron").style.removeProperty("border-color");
    document.getElementById("ron").style.removeProperty("border-width");
  }

  //Report order number pattern check
  var reportOrderRegex = /^[W,w]{1}[-]{1}[0-9]{1,50}$/;
  if (reportOrderRegex.test(reportOrderNumber.value) == false) {
    document.getElementById("errorReportOrder").style.visibility = "visible";
    document.getElementById("errorReportOrder").innerHTML =
      "- Please mention valid Report Order Number.";
    document.getElementById("errorReportOrder").style.display = "block";
    document.getElementById("ron").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorDescQuery").style.visibility = "hidden";
    document.getElementById("ron").style.removeProperty("border-color");
    document.getElementById("ron").style.removeProperty("border-width");
  }

  if (validationFail == true) {
    document.getElementById("form9Submit").disabled = false;
    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";
    return true;
  }
}

function validateForm10() {
    event.preventDefault();
  document.getElementById("form10Submit").disabled = true;
  document.getElementById("settimeout").style.display = "none";
  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }

  document.getElementById("errorService").innerHTML = "";
  document.getElementById("errorReportOrder").innerHTML = "";

  document.getElementById("errorDescQuery").innerHTML = "";
  document.getElementById("errorDispute").innerHTML = "";

  var res = commonCommercialFieldValidations();
  validationFail = res;
  var servicerequest = document.getElementById("servicerequest");
  var queryDescription = document.getElementById("textareadesc");
  var reportOrderNumber = document.getElementById("ron");

  var dispute_id = document.getElementById("dispute_id");
  var alphaNumericSpecialRegex =
    /^[A-Za-z0-9@~}{\t \n`!@#$%^&*()_=+\\\\';:\"\\\/?|>.<,-]*$/;

  if (servicerequest.value.length > 0) {
    if (servicerequest.value.length < 4 || servicerequest.value.length > 8) {
      document.getElementById("errorService").style.visibility = "visible";
      document.getElementById("errorService").innerHTML =
        "-  Invalid Service Request. Service Request should be between 4 to 8 digits";
      document.getElementById("errorService").style.display = "block";
      document.getElementById("servicerequest").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorService").style.visibility = "hidden";
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-color");
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-width");
    }
  }

  if (
    queryDescription.value.length > 3000 ||
    queryDescription.value.length < 1
  ) {
    document.getElementById("errorDescQuery").style.visibility = "visible";
    document.getElementById("errorDescQuery").innerHTML =
      "- Please describe your query within 3000 characters only.";
    document.getElementById("errorDescQuery").style.display = "block";
    document.getElementById("textareadesc").style.border = "thin solid red";
    validationFail = true;
  } else {
    if (alphaNumericSpecialRegex.test(queryDescription.value) == false) {
      document.getElementById("errorDescQuery").style.visibility = "visible";
      document.getElementById("errorDescQuery").innerHTML =
        "- Describe your query should have AphaNumeric special characters.";
      document.getElementById("errorDescQuery").style.display = "block";
      document.getElementById("textareadesc").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorDescQuery").style.visibility = "hidden";
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-color");
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-width");
    }
  }

  if (dispute_id.value.length > 0) {
    if (dispute_id.value.length < 5) {
      document.getElementById("errorDispute").style.visibility = "visible";
      document.getElementById("errorDispute").innerHTML =
        "- Dispute ID should have minimum 5 characters</span> .";
      document.getElementById("errorDispute").style.display = "block";
      document.getElementById("dispute_id").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorDispute").style.visibility = "hidden";
      document
        .getElementById("dispute_id")
        .style.removeProperty("border-color");
      document
        .getElementById("dispute_id")
        .style.removeProperty("border-width");
    }
  }

  //Report order number pattern check
  var reportOrderRegex = /^[W,w]{1}[-]{1}[0-9]{1,50}$/;
  if (reportOrderRegex.test(reportOrderNumber.value) == false) {
    document.getElementById("errorReportOrder").style.visibility = "visible";
    document.getElementById("errorReportOrder").innerHTML =
      "- Please mention valid Report Order Number.";
    document.getElementById("errorReportOrder").style.display = "block";
    document.getElementById("ron").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorDescQuery").style.visibility = "hidden";
    document.getElementById("ron").style.removeProperty("border-color");
    document.getElementById("ron").style.removeProperty("border-width");
  }

  if (validationFail == true) {
    document.getElementById("form10Submit").disabled = false;
    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";
    return true;
  }
}

function validateForm11() {
  document.getElementById("form11Submit").disabled = true;
  document.getElementById("settimeout").style.display = "none";
  if (document.getElementsByClassName("alert-danger").length == 1) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
  } else if (document.getElementsByClassName("alert-danger").length == 2) {
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[1].style.display = "none";
  }

  document.getElementById("errorService").innerHTML = "";
  document.getElementById("errorReportOrder").innerHTML = "";

  document.getElementById("errorDescQuery").innerHTML = "";
  document.getElementById("errorRank").innerHTML = "";

  var res = commonCommercialFieldValidations();
  validationFail = res;
  var servicerequest = document.getElementById("servicerequest");
  var queryDescription = document.getElementById("textareadesc");
  var reportOrderNumber = document.getElementById("ron");
  var rank = document.getElementById("rank");
  var alphaNumericSpecialRegex =
    /^[A-Za-z0-9@~}{\t \n`!@#$%^&*()_=+\\\\';:\"\\\/?|>.<,-]*$/;

  if (servicerequest.value.length > 0) {
    if (servicerequest.value.length < 4 || servicerequest.value.length > 8) {
      document.getElementById("errorService").style.visibility = "visible";
      document.getElementById("errorService").innerHTML =
        "- Invalid Service Request. Service Request should be between 4 to 8 digits";
      document.getElementById("errorService").style.display = "block";
      document.getElementById("servicerequest").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorService").style.visibility = "hidden";
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-color");
      document
        .getElementById("servicerequest")
        .style.removeProperty("border-width");
    }
  }

  if (
    queryDescription.value.length > 3000 ||
    queryDescription.value.length < 1
  ) {
    document.getElementById("errorDescQuery").style.visibility = "visible";
    document.getElementById("errorDescQuery").innerHTML =
      "- Please describe your query within 3000 characters only.";
    document.getElementById("errorDescQuery").style.display = "block";
    document.getElementById("textareadesc").style.border = "thin solid red";
    validationFail = true;
  } else {
    if (alphaNumericSpecialRegex.test(queryDescription.value) == false) {
      document.getElementById("errorDescQuery").style.visibility = "visible";
      document.getElementById("errorDescQuery").innerHTML =
        "- Describe your query should have AphaNumeric special characters.";
      document.getElementById("errorDescQuery").style.display = "block";
      document.getElementById("textareadesc").style.border = "thin solid red";
      validationFail = true;
    } else {
      document.getElementById("errorDescQuery").style.visibility = "hidden";
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-color");
      document
        .getElementById("textareadesc")
        .style.removeProperty("border-width");
    }
  }

  if (rank.value.length > 0) {
    if (rank.value > 10 || rank.value < 1) {
      document.getElementById("errorRank").style.visibility = "visible";
      document.getElementById("errorRank").innerHTML =
        "- Please mention valid Company Rank ranging between 1 to 10";
      document.getElementById("errorRank").style.display = "block";
      document.getElementById("rank").style.border = "thin solid red";
      validationFail = true;
    }
  } else {
    document.getElementById("errorRank").style.visibility = "hidden";
    document.getElementById("rank").style.removeProperty("border-color");
    document.getElementById("rank").style.removeProperty("border-width");
  }

  //Report order number pattern check
  var reportOrderRegex = /^[W,w]{1}[-]{1}[0-9]{1,50}$/;
  if (reportOrderRegex.test(reportOrderNumber.value) == false) {
    document.getElementById("errorReportOrder").style.visibility = "visible";
    document.getElementById("errorReportOrder").innerHTML =
      "- Please mention valid Report Order Number.";
    document.getElementById("errorReportOrder").style.display = "block";
    document.getElementById("ron").style.border = "thin solid red";
    validationFail = true;
  } else {
    document.getElementById("errorDescQuery").style.visibility = "hidden";
    document.getElementById("ron").style.removeProperty("border-color");
    document.getElementById("ron").style.removeProperty("border-width");
  }

  if (validationFail == true) {
    document.getElementById("form11Submit").disabled = false;
    document.getElementById("settimeout").style.display = "block";
    document.getElementById("settimeout").scrollIntoView();
    return false;
  } else {
    document.getElementById("settimeout").style.display = "none";
    return true;
  }
}
