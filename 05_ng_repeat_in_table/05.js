var app = angular.module("app", []);

app.controller("AppCtrl", function () {
    var app = this;
    app.people = [
        {
            name: "Sherlock",
            feature: "Crime solver"
        },
        {
            name: "Watson",
            feature: "Life Saver"
        },
        {
            name: "Mrs Hudson",
            feature: "Building owner"
        }

    ]
});