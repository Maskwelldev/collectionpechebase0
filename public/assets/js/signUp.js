wannaClose.addEventListener('click', function () {
    window.history.back();
});


function checkPassword() {
    let x = document.querySelectorAll(".passwordMacth");
    console.log(typeof(x));
    x.forEach(element => {
        if (element.type === "password") {
            element.type = "text";
        } else {
            element.type = "password";
        }
    });
}

checkMatch.addEventListener('click', checkPassword);