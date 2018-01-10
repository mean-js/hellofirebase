let init = require("./init");
let moduleFireDb = require("./module.firebase.database");

let main = function() {
    try {
        console.log("Main - Hello World!");

        // initialize the singletons;
        init();

        console.log("Initialzition Done!");

        moduleFireDb.create();
    } catch (err) {
        console.log(err);
    }
};

main();