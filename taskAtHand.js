"use strict";

function TaskAtHandApp() {
    var version = "v1.0";

    function setStatus(message) {
        $("#app > footer").text(message);
    }

    this.start = function() {
        $("#app > header").append(version);
        setStatus("ready");
    };
}

$(function() {
    window.app = new TaskAtHandApp();
    window.app.start();
});
