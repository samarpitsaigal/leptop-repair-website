document.addEventListener("DOMContentLoaded", () => {

  const inPages = /\/PAGES\//.test(location.pathname);

  fetch(inPages ? "./footer.html" : "./PAGES/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;

      document.querySelectorAll("#footer a").forEach(a => {
        let href = a.getAttribute("href") || "";
        if (inPages) {
          href = href.replace(/^\.\/PAGES\//, "./");
        } else {
          href = href.replace(/^\.\.\/index\.html$/, "./index.html");
        }
        a.setAttribute("href", href);
      });
    })
    .catch(() => {});

});