// Image Slide Function
let slideIndex = 1;
let intervalHandle;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }

    slides[slideIndex - 1].style.opacity = "1";
}

function startAutoSlide() {
    intervalHandle = setInterval(() => {
        plusDivs(1);
    }, 4000);
}

function stopAutoSlide() {
    clearInterval(intervalHandle);
}

window.onload = startAutoSlide;

// Replace Name Function
function replaceName() {
    let name = prompt("Siapakah nama anda?", "");
    if (name !== null && name !== "") {
        let nameElements = document.querySelectorAll("#name");
        nameElements.forEach(function (element) {
            element.textContent = name;
        });
    }
}

let replaceButton = document.getElementById('tombol');
if (replaceButton) {
    replaceButton.addEventListener("click", function () {
        replaceName();
    });
}

// Form Validation Function
function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name === "" || birthDate === "" || gender === "" || messages === "") {
        alert("Tidak boleh kosong!");
        return false;
    }
    setSenderUI(name, birthDate, gender, messages);
    return false;
}


//function for get user name
        // Function to prompt user for their name
        function askUserName() {
            var userName = prompt("Please enter your name:");
            if (userName != null && userName != "") {
                // Update the welcome message with the user's name
                document.getElementById("welcome-title").innerText = userName;
            } else {
                // Handle case where user cancels or provides empty input
                document.getElementById("welcome-title").innerText = "Guest";
            }
        }

        window.onload = askUserName;