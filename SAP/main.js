document.getElementById("category").addEventListener("click", function (e) {
    location.href = location.origin + location.pathname + "#" + e.target.id;
    console.log(e);
});
