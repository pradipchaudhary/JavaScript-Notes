const news =
    "Sri Lanka and the Netherlands will face each other in a high-octane clash of the Super Six stage of the World Cup Qualifier on June 30. Both sides secured their place in the Super Six and are still in contention for booking a slot in the World Cup.";

const newsLength = news.length;
console.log(news);
console.log(newsLength);

// Without inbuilt methods
function getStringLength(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

let myString = "Hello, world!";
let stringLength = getStringLength(myString);
console.log(stringLength); // Output: 13
