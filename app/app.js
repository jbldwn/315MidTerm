import { getData } from "../model/model.js";

function route() {
    let hashtag = window.location.hash;
    let hash = hashtag.replace("#", "")

    if (hash == "") {
        hash = 'home';
    }

    getData(hash);
}

function displayNav() {
    let links = document.getElementsByClassName("links");

    console.log("clicked");
}

function initListeners() {
    $(window).on("hashchange", route);
    $(".mobileNav").on("click", displayNav);
}



$(document).ready(function () {
    route();
    initListeners();
});