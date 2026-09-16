document.addEventListener("DOMContentLoaded", () => {

  // Footer load
  fetch("./PAGES/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    });

});
