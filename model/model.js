export function getData(pageID) {
    $.get(`../pages/${pageID}.html`, (pageData) => {
        // console.log(pageData);
        $("#app").html(pageData);
    }).fail(() => {
        console.log("no page data retrieved.");
    })

}