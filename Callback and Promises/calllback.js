// Start Program
console.warn("Start application...");

// Program Waiting function
function waitForThreeSeconds() {
    let ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
}

function register(cb) {
    setTimeout(function () {
        console.log("1. Register end.");
        cb();
    }, 2000);
}
function sendEmail(callback) {
    setTimeout(() => {
        console.log("2. Email end.");
        callback();
    }, 1000);
}
function login(callback) {
    setTimeout(function () {
        console.log("3. Login end.");
        callback();
    }, 3000);
}
function getUserData(callback) {
    setTimeout(() => {
        console.log("4. Get user data.");
        callback();
    }, 6000);
}
function displayUserData() {
    setTimeout(() => {
        console.log("5. user data displayed.");
    }, 1000);
}

function otherPrograms() {
    console.log("Other programs!");
}

// Functions call with callback
register(function () {
    sendEmail(function () {
        login(function () {
            getUserData(function () {
                displayUserData();
            });
        });
    });
});

// Other application
console.warn("Other applications working on...");
// End Program
