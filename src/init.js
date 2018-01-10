let serviceAccount = require("../awesome-c4686-firebase-adminsdk-pebil-26f50db823.json");
let admin = require("firebase-admin");

let init = {
    "initFirebase": function() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://awesome-c4686.firebaseio.com"
        });
    },
}

let mainInit = function() {
    try {
        init.initFirebase();
    } catch (err) {
        throw err;
    }
}

module.exports = mainInit;