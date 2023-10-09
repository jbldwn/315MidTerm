import { getData } from "../model/model.js";

function route() {
    let hashtag = window.location.hash;
    let hash = hashtag.replace("#", "")

    if (hash == "") {
        hash = 'home';
    }

    getData(hash);
}

function initListeners() {
    $(window).on("hashchange", route);
}

$(document).ready(function () {
    route();
    initListeners();
});