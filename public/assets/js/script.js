//viewport fixing
window.addEventListener('resize',function(){
    viewportHeight.style.height = window.innerHeight + 'px';
    });

// display menu
menuFill.addEventListener('click', displayMenu);


function displayMenu() {
    document.querySelector(".menuList").classList.remove("menuList");
    document.querySelector("#menuList").classList.add("menuTransitionLeft");
    document.querySelector("#mainContainer").classList.add("mainContainer");
}

// menu close
let closeButtons = document.querySelectorAll(".closeButton");
closeButtons.forEach(element => {
    element.addEventListener('click', wannaCloseMenu)
});

function wannaCloseMenu() {
    let menuTransitionLefts = document.querySelectorAll(".menuTransitionLeft");
    menuTransitionLefts.forEach(element => {
        element.classList.remove("menuTransitionLeft");
    });
    
    document.querySelector("#menuList").classList.add("menuList");
    document.querySelector("#menuCollection").classList.add("menuCollection");
    document.querySelector("#mainContainer").classList.remove("mainContainer");
}

// menu back
let backButtons = document.querySelectorAll(".backButton");
    backButtons.forEach(element => element.addEventListener('click', displayBack));

function displayBack() {
    console.log("lol")
    document.querySelector("#menuCollection").classList.add("menuCollection");
    document.querySelector("#menuCollection").classList.add("menuTransitionRight");
    document.querySelector("#menuCollection").classList.remove("menuTransitionLeft");
    setTimeout(() => {
        document.querySelector("#menuCollection").classList.remove("menuTransitionRight");
    }, 700);
}

// display collection menu
collection.addEventListener('click', displayCollection);

function displayCollection(){
    menuCollection.classList.remove("menuCollection");
    document.querySelector("#menuCollection").classList.add("menuTransitionLeft");
    document.querySelector("#mainContainer").classList.add("mainContainer");
}


