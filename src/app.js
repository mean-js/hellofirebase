let admin = require("firebase-admin");
let init = require("./init");

let main = function() {
    try {
        console.log("Main - Hello World!");

        // initialize the singletons;
        init();

        console.log("Initialzition Done!");
        console.log(admin);
    } catch (err) {
        console.log(err);
    }
};

main();