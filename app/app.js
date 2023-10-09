import { getData } from "../model/model.js";

function route() {
    let hashtag = window.location.hash;
    let hash = hashtag.replace("#", "")

    console.log(hash);

    getData(hash);
}

function initListeners() {
    $(window).on("hashchange", route);

}

$(document).ready(function () {
    // window.on("hashchange", route)

    route();
    initListeners();
});