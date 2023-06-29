const form = document.getElementById("form")
const email = document.getElementById("email")
const country = document.getElementById("country")
const zipCode = document.getElementById("zip-code")
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById("password-confirmation")

const emailError = document.querySelector(".error-email")
const countryError = document.querySelector(".error-country");
const zipError = document.querySelector(".error-zip");
const passwordError = document.querySelector(".error-password");
const passwordConfirmError = document.querySelector(".error-password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (email.validity.valueMissing) {
        emailError.textContent = "value empty";
        emailError.className = "error active"
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "You need to enter an email address";
        emailError.className = "error active";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minlength} characters; you entered ${email.value.length}`;
        emailError.className = "error active";
    }

    if (country.value === "" || null) {
        countryError.textContent = "value empty"
        countryError.className = "error active"
    } else if (country.value.length < 4) {
        countryError.textContent = "enter a valid country"
        countryError.className = "error active"
    } 

    if (zipCode.value === "" || null) {
        zipError.textContent = "value empty"
        zipError.className = "error active"
	} else if (zipCode.value.length > 6 || zipCode.value.length < 4) {
		zipError.textContent = "enter a valid zip code";
		zipError.className = "error active";
	}

})




// country.addEventListener("input", (e) => {
//     if (country.validity.valid) {
//         countryError.textContent = ""
//         countryError.className = "error"
//     } else {
//         showCountryError()
//     }
// })

// country.addEventListener("input", (e) => {
// 	if (country.validity.valid) {
// 		countryError.textContent = "";
// 		email.Error.className = "error";
// 	} else {
// 		showCountryError();
// 	}
// });

// country.addEventListener("input", (e) => {
// 	if (country.validity.valid) {
// 		countryError.textContent = "";
// 		email.Error.className = "error";
// 	} else {
// 		showCountryError();
// 	}
// });

// form.addEventListener("submit", (e) => {
//     if (!email.validity.valid) {
//         showEmailError()
//         // add all the show errors
//     }
//     e.preventDefault()
// })


// function showCountryError() {
//     if (country.validity.valueMissing) {
//         countryError.textContent = "value empty"
//     } else if (countryError.tooShort) {
//          countryError.textContent = "Enter a valid country"
//     }
//     countryError.className = "error active"
// }

// function showZipError() {

// }

// function showPasswordError() {

// }

// function showPasswordConfirmError() {

// }

// box should border red if invalid
// error message if the button is pressed with errors
// if form is submitted give the user a high five

