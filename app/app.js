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

    // console.log(links);
    // links.css("display",) = 'flex';
    console.log("clicked");
}

function initListeners() {
    $(window).on("hashchange", route);
    $(".mobileNav").on("click", displayNav);
}

// function makeInvisible() {
//     let mobileNav = document.getElementsByClassName("mobileNav");
//     let links = document.getElementsByClassName("links");
//     let currentInvisible = document.getElementById("invisible");

//     console.log(currentInvisible);

//     currentInvisible

//     /* if mobile nav is visible, links is not */
//     /* if links is visible mobile nav is not */
//     // mobileNav.idName = mobileNav.idName === "invisible" ? "" : "invisible";

//     // console.log(mobileNav);
//     // console.log(mobileNav.className);
// }

$(document).ready(function () {
    route();
    // makeInvisible();
    initListeners();
});