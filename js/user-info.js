const userNameInput = document.getElementById("user-name");
const userSurnameInput = document.getElementById("user-surname");
const userSubmitButton = document.querySelector(".user-submit");
const userInfoDiv = document.querySelector(".user-info");

userSubmitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const userName = userNameInput.value.trim();
    const userSurname = userSurnameInput.value.trim();

    if (!userName || !userSurname) {
        userNameInput.classList.add("error");
        userSurnameInput.classList.add("error");
        userInfoDiv.textContent = "Please fill in all fields.";
        return;
    }

    localStorage.setItem("userName", userName);
    localStorage.setItem("userSurname", userSurname);
    userInfoDiv.textContent = `Hello ${userName} ${userSurname}`;

    userNameInput.value = "";
    userSurnameInput.value = "";

    userNameInput.classList.remove('error');
    userSurnameInput.classList.remove('error');
});


