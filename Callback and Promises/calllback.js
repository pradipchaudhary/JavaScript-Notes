// Start Program
console.warn("Start application...");

// Program Waiting function
function waitForThreeSeconds() {
    let ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
}

function register(cb) {
    // console.log("1. Register end.");

    setTimeout(function () {
        console.log("1. Register end.");
        cb();
    }, 4000);
}
function sendEmail() {
    console.log("2. Email end.");
}
function login() {
    console.log("3. Login end.");
}
function getUserData() {
    console.log("4. Get user data.");
}
function displayUserData() {
    console.log("5. user data displayed.");
}

// Functions call with callback
register(function () {
    sendEmail();
    login();
    getUserData();
    displayUserData();
});

// Other application
console.warn("Other applications working on...");
// End Program
