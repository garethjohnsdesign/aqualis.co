/*
!function() {
    [].forEach.call(document.querySelectorAll("img[data-src]"), function(t) {
        t.setAttribute("src", t.getAttribute("data-src")), t.onload = function() {
            t.removeAttribute("data-src")
        }
    })
}();
*/