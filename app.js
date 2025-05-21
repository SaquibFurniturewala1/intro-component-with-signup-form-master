const form = document.querySelector("#form");
const inputs = document.querySelectorAll(".inputs");
const errorMsg = document.querySelectorAll(".error-Msg");
const errorImg = document.querySelectorAll(".error-Img");
const submitBtn = document.querySelector(".submit-btn");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formValidation() {
  form.addEventListener("submit", (e) => {
    let haserror = false;

    inputs.forEach((input, index) => {
      if (input.value.trim() === "") {
        errorMsg[index].style.display = "block";
        errorImg[index].style.display = "block";
        haserror = true;
      } else if (input.name === "Email" && !isValidEmail(input.value.trim())) {
        errorMsg[index].style.display = "block";
        errorImg[index].style.display = "block";
        errorMsg[index].textContent = "Please enter a valid email address";
        haserror = true;
      } else if (input.name === "Password" && input.value.length < 6) {
        errorMsg[index].style.display = "block";
        errorImg[index].style.display = "block";
        errorMsg[index].textContent = "Password must be at least 6 characters";
        haserror = true;
      } else {
        errorMsg[index].style.display = "none";
        errorImg[index].style.display = "none";
      }
    });

    if (haserror) {
      e.preventDefault();
    }
  });
}

formValidation();
