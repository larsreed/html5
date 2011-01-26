function lreSupportBox(boo, idref) {
    var el= document.getElementById(idref);
    el.disabled= "yes";
    if ( boo ) {
        el.checked= "yes";
    }
}
