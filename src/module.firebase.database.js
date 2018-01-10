let admin = require("firebase-admin");
let db = admin.database();

let firebase = {
    "read": function() {
        console.log("READ");

        let ref = db.ref("restricted_access/secret_document");
        ref.once("value", function(snapshot) {
            console.log(snapshot.val());
        });
    },

    "readAll": function() {
        console.log("READ_ALL");
    },

    "create": function() {
        console.log("CREATE");
    },

    "update": function() {
        console.log("UPDATE");
    },

    "delete": function() {
        console.log("DELETE");
    }
};

module.exports = firebase;