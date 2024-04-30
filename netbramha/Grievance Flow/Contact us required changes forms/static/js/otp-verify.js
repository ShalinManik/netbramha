let count = 3;
const errDiv = document.getElementById("settimeout");
const attempt = document.getElementById("attempt");
const countDiv = document.getElementById("count");
const otpErr = document.getElementById("errorMsg");
const otpTimeout = document.getElementById("timeOut");
var otpField = document.getElementById("otp");
let resent = document.getElementById("resendOTP");
let try_agin = document.getElementById("try-again");
var modalToggle = document.getElementById("form10Submit");

let timeRemaining = 30; // Initial time in seconds
let timeInterval;
let errMsg = null;
startTimer();

function startTimer() {
  updateTimerDisplay();

  timeInterval = setInterval(() => {
    timeRemaining--;

    if (timeRemaining >= 0) {
      updateTimerDisplay();
    } else {
      clearInterval(timeInterval);
      try_agin.style.display = "none";
      resent.style.visibility = "visible";
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  // Use padStart to ensure two digits with leading zeros
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  otpTimeout.textContent = formattedTime;
}

// function ValidateOTPForm() {
// console.log("called");
//   errMsg = null;
//   event.preventDefault();
//   count--;
//   try {
//     // Check if the OTP field is empty
//     if (!otpField.value.trim()) {
//       // Trigger validation and show tooltip manually
//       errMsg = "OTP field is mandatory";
//       otpField.style.borderColor = "red";
//     } else {
//       otpField.style.borderColor = "";
//       if (count === 1) {
//         if (modalToggle) {
//           modalToggle.setAttribute("data-bs-target", "#exampleModalToggle");
//           modalToggle.setAttribute("data-bs-toggle", "modal");
//         }
//       } else {
//         otpField.style.borderColor = "red";
//       }
//     }
//     if (errMsg) {
//       errDiv.style.display = "block";
//       otpErr.textContent = errMsg;
//       return false;
//     } else {
//       errDiv.style.display = "none";
//       return true;
//     }
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }
function ValidateOTPForm() {
  console.log("called");
  errMsg = null;
  event.preventDefault();
  count--;
  try {
      // Check if the OTP field is empty
      if (!otpField.value.trim()) {
          // Trigger validation and show tooltip manually
          errMsg = "OTP field is mandatory";
          otpField.style.borderColor = "red";
      } else {
          otpField.style.borderColor = "";
          if (count === 1) {
              // Show the modal using Bootstrap 3 syntax
              $('#exampleModalToggle').modal('show');
          } else {
              otpField.style.borderColor = "red";
          }
      }
      if (errMsg) {
          errDiv.style.display = "block";
          otpErr.textContent = errMsg;
          return false;
      } else {
          errDiv.style.display = "none";
          return true;
      }
  } catch (error) {
      console.error(error);
      return false;
  }
}


function resetCount() {
  errDiv.style.display = "none";
  otpField.value = "";
  otpField.style.borderColor = "";
  attempt.style.visibility = "hidden";
  modalToggle.setAttribute("data-bs-target", "");
  modalToggle.setAttribute("data-bs-toggle", "");
  timeRemaining = 30; //restart the timer
  clearInterval(timeInterval); //clear interval
  startTimer(); //start timer
  count = 3; //reset attempt count
  window.location.href = "../templates/otpSending.html";
}
