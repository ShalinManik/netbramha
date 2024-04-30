let inValid;
 function ValidateConfirmForm() {
	isValid = null;
	document.getElementById("form10Submit").disabled = true;;

	const emailRegex = /^\w+([\+.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneNumberRegex = /^((\+91)?|91)?[5,6,7,8,9][0-9]{9}$/;


const disputeRegex = /^([cds,CDS]{3})(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])(([1-9][0-9])[0-9]{2})[0-9]{6}$/;
const outerErrDiv = document.getElementById("errorDispute");
const errcontainer = document.getElementById("error-container");
	document.getElementById("form10Submit").disabled = false;;
let errMsg = null;
	errMsg = null;
	// event.preventDefault();
	var disputeIDField = document.getElementById("disputeID");
	var emailField = document.getElementById("email");

	// Check if the Dispute ID field is empty
	if (!disputeRegex.test(disputeIDField.value)) {
		errMsg =
			"Dispute ID/SR number is incorrect. Please check the email received from noreply@transunion.com and re-enter details to proceed.";
		disputeIDField.style.borderColor = "red";
	} else {
		disputeIDField.style.borderColor = ""; // Reset the border color
	}

	if (emailRegex.test(emailField.value) || phoneNumberRegex.test(emailField.value)) {
		emailField.style.borderColor = ""; // Reset the border color
	} else {
		if (!errMsg) {
			errMsg = "Please enter a valid mobile number or email ID";
		}
		emailField.style.borderColor = "red";
	}

	/*  if (
		disputeIDField.value !== "CDS19122023000003" ||
		emailField.value !== "user@gmail.com"
	  ) {
		if (!errMsg) {
		  errMsg = "Verification failed. Information provided is incorrect.";
		  emailField.style.borderColor = "red";
		  disputeIDField.style.borderColor = "red";
		}
	  }*/
	if (errMsg) {
		document.getElementById("form10Submit").disabled = false;

		outerErrDiv.style.display = "block";
		errcontainer.textContent = errMsg;
		isValid = false;
		return false;
	} else {
		outerErrDiv.style.display = "none";
		isValid = true;
		return true;
	}

	// Add additional checks for other fields if needed

	// Return true only if all required fields are filled
	
}




