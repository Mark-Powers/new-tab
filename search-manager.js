document.getElementById("searchInput").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchBtn").click();
    }
});
document.getElementById("searchBtn").addEventListener("click", function (event) {
    console.log("t");
    let text = document.getElementById("searchInput").value;
    window.location.href = "https://duckduckgo.com/?q=" + text;
});