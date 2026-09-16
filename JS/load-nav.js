document.addEventListener("DOMContentLoaded", () => {

  const inPages = /\/PAGES\//.test(location.pathname);

  fetch(inPages ? "./navbar.html" : "./PAGES/navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      document.querySelectorAll("#navbar a").forEach(a => {
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