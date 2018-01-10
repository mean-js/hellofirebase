let init = require("./init")();
let moduleFireDb = require("./module.firebase.database");

let main = function() {
    try {
        console.log("Main - Hello World!");

        console.log("Initialzition Done!");

        moduleFireDb.read();
    } catch (err) {
        console.log(err);
    }
};

main();