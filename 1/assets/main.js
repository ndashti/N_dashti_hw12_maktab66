let modal = document.getElementById("myModal"); // Get the modal
let btn = document.getElementById("myBtn"); // Get the button that opens the modal
let span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

let form = document.querySelector("#formSubmit");
let nameinput = document.querySelector("#fname");
let lastnameinput = document.querySelector("#lname");

function validateAllFields(e) {
  e.preventDefault();
  let all_are_valid =
    validate(nameinput, "nameValidationMsg", "First Name") &&
    validate(lastnameinput, "lnameValidationMsg", "Last Name");

  if (all_are_valid) {
    openModal().then(() => {
      resetForm(form)
      // window.location.reload();
      // form.reset();
      return true;
    });
  }
  return false;
}


function validate(textInput, labelId, fieldTitle) {
  let errorLabel = document.getElementById(labelId);
  let textValue = textInput.value;

  if (textValue) {
    if (/^([A-Za-z]{3,})/.test(textValue)) {
      errorLabel.textContent = "";
      errorLabel.classList.remove("text-danger");
      textInput.classList.add("success");
      textInput.classList.remove("danger");
      return true;
    } else {
      errorLabel.textContent = `Validation:${fieldTitle} must be grather than 3 char`;
      errorLabel.classList.add("text-danger");
      textInput.classList.add("danger");
      textInput.classList.remove("success");
      return false;
    }
  }
}

//reset form
function resetForm(f){
  f.reset();
  nameinput.classList.remove("success")
  lastnameinput.classList.remove("success")
}

// When the user clicks on the button, open the modal
function openModal() {
  return new Promise(function (resolve, reject) {
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.display = "none";
      resolve();
    }, 8000);
  });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
