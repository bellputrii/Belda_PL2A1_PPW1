function toggleShareIcons() {
    var shareIcons = document.getElementById("shareIcons");
    if (shareIcons.style.display === "flex") {
        shareIcons.style.display = "none";
    } else {
        shareIcons.style.display = "flex";
    }
}