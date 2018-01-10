let serviceAccount = require("../awesome-c4686-firebase-adminsdk-pebil-26f50db823.json");
let admin = require("firebase-admin");

let main = function() {
    try {
        console.log("Main - Hello World!");
        console.log(serviceAccount);


    } catch (err) {
        console.log(err);
    }
};

main();