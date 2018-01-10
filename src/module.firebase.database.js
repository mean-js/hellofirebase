let admin = require("firebase-admin");

let firebase = {
    "read": function() {
        console.log("READ");
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